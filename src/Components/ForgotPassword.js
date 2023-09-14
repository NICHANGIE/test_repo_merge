import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import request from 'superagent';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [step, setStep] = useState(1); // Track the current step of the process

  const navigate = useNavigate();

  const handleSendResetInstructions = () => {
    // Step 1: Send a POST request to your backend with the email
    request
      .post('http://localhost:5000/forgot-password')
      .send({ email })
      .then((response) => {
        if (response.body.error === false) {
          setMessage('Reset instructions sent to your email');
          setStep(2); // Move to step 2 (entering the token)
        } else {
          setMessage('Failed to send reset instructions');
        }
      })
      .catch((error) => {
        console.error(error);
        setMessage('An error occurred while sending reset instructions');
      });
  };

  const handleResetPassword = () => {
    // Step 2: Send a POST request with the email, token, and new password
    request
      .post('http://localhost:5000/reset-password')
      .send({ email, resetToken: token, newPassword })
      .then((response) => {
        if (response.body.error === false) {
          setMessage('Password reset successfully');
          navigate('/login');
        } else {
          setMessage('Failed to reset password');
        }
      })
      .catch((error) => {
        console.error(error);
        setMessage('An error occurred while resetting the password');
      });
  };

  return (
    <body>
      <div className="uk-grid-collapse" data-uk-grid>
        <div className="uk-width-2-4@m uk-padding-large uk-flex uk-flex-middle uk-flex-center" data-uk-height-viewport>
          <div className="uk-width-3-4@s">
            <div className="uk-text-center uk-margin-bottom">
              <h1 style={{ color: 'green' }}>
                <img src="./nichangielogo.png" alt="" width="50cm" height="50cm" /> Nichangie
              </h1>
            </div>
            {step === 1 && (
              <div>
                <div className="uk-text-center uk-margin-medium-bottom">
                  <h2 className="uk-letter-spacing-small">Forgot password?</h2>
                  <h5>No worries, we'll send you reset instructions</h5>
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
                  />
                </div>
                <div className="uk-width-1-1 uk-text-center">
                  <button className="uk-button uk-button-primary uk-button-large" onClick={handleSendResetInstructions}>
                    Send reset instructions
                  </button>
                  <p>{message}</p>
                  <p>
                    Back to <Link to="/login">log in</Link>
                  </p>
                </div>
              </div>
            )}
            {step === 2 && (
              <div>
                <div className="uk-text-center uk-margin-medium-bottom">
                  <h2 className="uk-letter-spacing-small">Enter reset token and new password</h2>
                </div>
                <div className="uk-width-1-1 uk-margin">
                  <label className="uk-form-label" htmlFor="token">
                    Reset Token
                  </label>
                  <input
                    id="token"
                    className="uk-input uk-form-large"
                    type="text"
                    placeholder="Enter the reset token from your email"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                  />
                </div>
                <div className="uk-width-1-1 uk-margin">
                  <label className="uk-form-label" htmlFor="newPassword">
                    New Password
                  </label>
                  <input
                    id="newPassword"
                    className="uk-input uk-form-large"
                    type="password"
                    placeholder="Enter your new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="uk-width-1-1 uk-text-center">
                  <button className="uk-button uk-button-primary uk-button-large" onClick={handleResetPassword}>
                    Reset Password
                  </button>
                  <p>{message}</p>
                  <p>
                    Back to <Link to="/login">log in</Link>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </body>
  );
};

export default ForgotPassword;
