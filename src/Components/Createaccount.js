import React, { useState } from 'react';
import request from 'superagent';
import { Link, useNavigate } from 'react-router-dom';

function Createaccount() {
  const [formData, setFormData] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    agreeTerms: false,
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSignup = () => {
    const { password, confirm_password, agreeTerms, ...formDataWithoutTerms } = formData;

    // Check if passwords match and user has agreed to terms
    if (password !== confirm_password) {
      setMessage('Passwords do not match');
      return;
    }

    if (!agreeTerms) {
      setMessage('Please agree to the terms and services');
      return;
    }

    request
      .post('http://localhost:5000/register')
      .send(formData)
      .then((response) => {
        if (response.body.error === false) {
          setMessage('User registered successfully');
          navigate('/userdashbord');
        } else {
          setMessage('Error registering user');
        }
      })
      .catch((error) => {
        console.error(error);
        setMessage('An error occurred during registration');
      });
  };

  return (
    <div className="uk-grid-collapse" data-uk-grid>
      <div className="uk-width-2-4@m uk-padding-large uk-flex uk-flex-middle uk-flex-center" data-uk-height-viewport>
        <div className="uk-width-3-4@s">
          <div className="uk-text-center uk-margin-bottom">
            <h2>
              <img src="./nichangielogo.png" alt="" width="50cm" height="50cm" /> Nichangie
            </h2>
          </div>
          <div className="uk-text-center uk-margin-medium-bottom">
            <h3 className="uk-letter-spacing-small">Create an Account</h3>
          </div>
          <form>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="first_name">
                First Name
              </label>
              <input
                id="first_name"
                name="first_name"
                className="uk-input uk-form-large"
                type="text"
                placeholder="Lauryn"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="middle_name">
                Middle Name
              </label>
              <input
                id="middle_name"
                name="middle_name"
                className="uk-input uk-form-large"
                type="text"
                placeholder="Method"
                value={formData.middle_name}
                onChange={handleChange}
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="last_name">
                Last Name
              </label>
              <input
                id="last_name"
                name="last_name"
                className="uk-input uk-form-large"
                type="text"
                placeholder="Kimario"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                className="uk-input uk-form-large"
                type="email"
                placeholder="laurynmethod@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                className="uk-input uk-form-large"
                type="password"
                placeholder="Min 8 characters"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="confirm_password">
                Confirm Password
              </label>
              <input
                id="confirm_password"
                name="confirm_password"
                className="uk-input uk-form-large"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirm_password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="uk-width-1-1 uk-margin uk-text-center">
              <button className="uk-button uk-button-primary uk-button-large" type="button" onClick={handleSignup}>
                Sign Up
              </button>
              <p>{message}</p>
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label">
                I agree to the <a className="uk-link-border" href="#">terms</a> and policy of service
              </label>
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
              />
            </div>
            <div className="uk-width-1-1 uk-text-center">
              <p>
                Already have an account?   <Link to="/login">Sign in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Createaccount;
