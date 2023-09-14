import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import request from 'superagent';

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate
  const [user, setUser] = useState(null); // Store user information

  const handleLogin = () => {
    // Send a POST request to your login API
    request
      .post('http://localhost:5000/login')
      .send({ email, password })
      .then((response) => {
        if (response.body.error === false) {
          // Login successful, store user information
          setMessage('Login successful');

          const userID = response.body.user.id;
          localStorage.setItem('userID', userID)
          console.log(userID);

          navigate('/userdashbord'); // Redirect to the dashboard route
        } else {
          setMessage('Invalid email or password');
        }
      })
      .catch((error) => {
        console.error(error);
        setMessage('An error occurred while logging in');
      });
  };
  return (
    <div className="uk-grid-collapse" data-uk-grid>
      <div className="uk-width-2-4@m uk-padding-large uk-flex uk-flex-middle uk-flex-center" data-uk-height-viewport>
        <div className="uk-width-3-4@s">
          <div className="uk-text-center uk-margin-bottom">
            <a className="uk-logo uk-text-primary uk-text-bold" href="index-2.html">
              <h1>
                <img src="./nichangielogo.png" alt="" width="50cm" height="50cm" />
                Nichangie
              </h1>
            </a>
          </div>
          <div className="uk-text-center uk-margin-medium-bottom">
            <h2 className="uk-letter-spacing-small">Sign in to Nichangie</h2>
          </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="uk-input uk-form-large"
                type="email"
                placeholder="laurynmethod@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="uk-input uk-form-large"
                type="password"
                placeholder="Min 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="uk-width-1-1 uk-margin uk-text-center">
            <Link to = "/forgot"> Forgot your password?</Link>
               
            </div>
            <div className="uk-width-1-1 uk-text-center">
            <button className="uk-button uk-button-primary uk-button-large" type="submit" onClick={handleLogin}>
                Sign In
              </button>

              <p>{message}</p>
              
              <p>
                Don't have an account? <Link to = "/register">Sign up</Link>
              </p>
            </div>
          
        </div>
      </div>
    </div>
  );
};
export default SigninForm;
