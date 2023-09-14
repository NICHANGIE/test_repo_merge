const express = require('express');
const multer = require('multer');
const mysql = require('mysql');
const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Create an "uploads" directory
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Keep the original file name
  },
});

const upload = multer({ storage });

// Create a MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nichangie',
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.post('/upload', upload.single('file'), (req, res) => {
  const { originalname, path } = req.file;

  // Insert the file information into your MySQL database
  const sql = 'INSERT INTO files ( filepath) VALUES ( ?)';
  db.query(sql, [originalname, path], (err, result) => {
    if (err) {
      console.error('MySQL query error:', err);
      res.status(500).json({ error: 'Failed to upload file' });
    } else {
      res.status(200).json({ message: 'File uploaded successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
