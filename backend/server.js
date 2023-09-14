const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 5000;
const session = require('express-session');
app.use(cors());
const crypto = require('crypto'); // Import the crypto library for secure token generation

// app.use(5 6
//   session({
//     secret: secretKey,
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nichangie',
});

db.connect(error => {
  if (!error) {
    console.log('Connected to MySQL database');
  } else {
    console.error('Error connecting to the database:', error);
  }
});

// Create an API endpoint to receive name and email

app.post('/register', (req, res) => {
  const { first_name, middle_name, last_name, email, password, confirm_password } = req.body;

  if (!first_name || !email || !password || !confirm_password) {
    return res.status(400).json({
      error: true,
      message: 'All fields are required',
    });
  }

  if (password !== confirm_password) {

    return res.status(300).json({
      error: true,
      message: 'Passwords do not match',
    });
  }

  // Check if the email already exists in the database
  const checkEmailQuery = 'SELECT COUNT(*) as count FROM users WHERE email = ?';

  db.query(checkEmailQuery, [email], (error, results) => {
    if (error) {
      console.error('Error checking email:', error);
      return res.status(500).json({
        error: true,
        message: 'Error checking email',
      });
    }

    const emailExists = results[0].count > 0;

    if (emailExists) {
      return res.status(409).json({
        error: true,
        message: 'Email already exists',
      });
    }

    // If the email doesn't exist and passwords match, proceed to insert the user
    const insertQuery = 'INSERT INTO users (first_name, middle_name, last_name, email, password) VALUES (?, ?, ?, ?, ?)';

    db.query(insertQuery, [first_name, middle_name, last_name, email, password], (error, results) => {
      if (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({
          error: true,
          message: 'Error registering user',
        });
      }

      console.log('User registered successfully');
      return res.status(201).json({
        error: false,
        message: 'User registered successfully',
      });
    });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: true,
      message: 'Both email and password are required fields',
    });
  }
 
  const checkUserQuery = 'SELECT * FROM users WHERE email = ? AND password = ?';

  db.query(checkUserQuery, [email, password], (error, results) => {
    if (error) {
      console.error('Error checking user:', error);
      return res.status(500).json({
        error: true,
        message: 'Error checking user',
      });
    }

    if (results.length === 0) {
      return res.status(401).json({
        error: true,
        message: 'Invalid email or password',
      });
    }

    // User is successfully authenticated
    const user = results[0]; // Get user data
    req.session =user.id;
    return res.status(200).json({
      error: false,
      message: 'Login successful',
      user: {
        id : user.id,
      } // Send user data in the response
    });
  });
});

function generateResetToken() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  const tokenLength = 6;
  let token = '';

  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters[randomIndex];
  }

  return token;
}

// ...

// Endpoint to initiate a password reset
app.post('/forgot-password', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      error: true,
      message: 'Email is required',
    });
  }

  // Check if the email exists in the MySQL database
  const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';

  db.query(checkEmailQuery, [email], (error, results) => {
    if (error) {
      console.error('Error checking email:', error);
      return res.status(500).json({
        error: true,
        message: 'Error checking email',
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        error: true,
        message: 'User not found',
      });
    }

    const userId = results[0].id;

    // Generate a secure reset token
    const resetToken = generateResetToken();

    // Store the reset token in the database for the user
    const insertTokenQuery = 'INSERT INTO password_reset_tokens (user_id, token) VALUES (?, ?)';

    db.query(insertTokenQuery, [userId, resetToken], (error) => {
      if (error) {
        console.error('Error inserting reset token:', error);
        return res.status(500).json({
          error: true,
          message: 'Error initiating password reset',
        });
      }
      return res.status(200).json({
        error: false,
        message: 'Password reset initiated. Check your email for instructions.',
        resetToken: resetToken,
      });
    });
  });
});

  // Endpoint to reset the password using the reset token
  app.post('/reset-password', (req, res) => {
    const { email, resetToken, newPassword } = req.body;
  
    if (!email || !resetToken || !newPassword) {
      return res.status(400).json({
        error: true,
        message: 'Email, resetToken, and newPassword are required',
      });
    }
  
    // Verify the reset token and retrieve the user ID
    const verifyTokenQuery = 'SELECT user_id FROM password_reset_tokens WHERE token = ?';
  
    db.query(verifyTokenQuery, [resetToken], (error, results) => {
      if (error) {
        console.error('Error verifying reset token:', error);
        return res.status(500).json({
          error: true,
          message: 'Error resetting password',
        });
      }
  
      if (results.length === 0) {
        return res.status(400).json({
          error: true,
          message: 'Invalid reset token',
        });
      }
  
      const userId = results[0].user_id;
  
      // Update the user's password in the MySQL database
      const updatePasswordQuery = 'UPDATE users SET password = ? WHERE id = ?';
  
      db.query(updatePasswordQuery, [newPassword, userId], (error) => {
        if (error) {
          console.error('Error updating password:', error);
          return res.status(500).json({
            error: true,
            message: 'Error resetting password',
          });
        }
  
        // Delete the reset token from the database
        const deleteTokenQuery = 'DELETE FROM password_reset_tokens WHERE token = ?';
  
        db.query(deleteTokenQuery, [resetToken], (error) => {
          if (error) {
            console.error('Error deleting reset token:', error);
          }
  
          return res.status(200).json({
            error: false,
            message: 'Password reset successfully',
          });
        });
      });
    });
  });

  //API FOR DONATION FORM
// Middleware to parse JSON requests
app.use(bodyParser.json());

// Import necessary libraries and set up your Express app and database connection here

// Define a route to handle form submission
app.post('/donate', (req, res) => {
  const { fullName, email, phoneNumber, amount, paymentMethod } = req.body;

  if (!phoneNumber || !amount || !paymentMethod) {
    return res.status(400).json({
      error: true,
      message: 'Missing required fields',
    });
  }

  // Insert donation data into the database
  const insertQuery = 'INSERT INTO donations (fullName, email, phoneNumber, amount, paymentMethod) VALUES (?, ?, ?, ?, ?)';

  db.query(insertQuery, [fullName, email, phoneNumber, amount, paymentMethod], (error, results) => {
    if (error) {
      console.error('Error inserting donation:', error);
      return res.status(500).json({
        error: true,
        message: 'Error inserting donation',
      });
    }

    console.log('Donation inserted successfully');
    return res.status(201).json({
      error: false,
      message: 'Donation successful!',
    });
  });
});

app.post('/logout', (req, res) => {
  // Destroy the session on logout
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    } else {
      res.status(200).send('Logged out');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});