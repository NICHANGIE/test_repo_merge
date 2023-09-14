import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import request from 'superagent';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    amount: '',
    paymentMethod: 'debit-credit',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await request
        .post('http://localhost:5000/donate') // Change the URL to your donation API endpoint
        .send(formData);

      if (response.body.error === false) {
        setMessage('Donation successful');
        navigate('/success'); // Redirect to the success route
      } else {
        setMessage('An error occurred while donating');
      }
    } catch (error) {
      console.error('Error donating:', error.message);
      setMessage('An error occurred while donating');
    }
  };


  return (
    <div className="uk-grid-collapse" data-uk-grid>
      <div className="uk-width-2-4@m uk-padding-large uk-flex uk-flex-middle uk-flex-center" data-uk-height-viewport>
        <div className="uk-width-3-4@s">
          <div className="uk-text-center uk-margin-bottom">
            <img src="./nichangielogo.png" alt="" width="50cm" height="50cm"/>
            <h1 style={{ color: 'green' }}> Nichangie</h1>
          </div>
          <div className="uk-text-center uk-margin-medium-bottom">
            <h3 className="uk-letter-spacing-small">Let's save our beloved ones</h3>
          </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="full_name">
                Full name
              </label>
              <input
                id="fullName"
                className="uk-input uk-form-large"
                type="text"
                placeholder="Lauryn"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                className="uk-input uk-form-large"
                type="email"
                placeholder="laurynmethod@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="phone">
                Phone number
              </label>
              <input
                id="phoneNumber"
                className="uk-input uk-form-large"
                type="text"
                placeholder="+255764502250"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="amount">
                Amount
              </label>
              <input
                id="amount"
                className="uk-input uk-form-large"
                type="text"
                placeholder="Enter donation amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <h4>Payment Method</h4>
              <div className="uk-width-1-1 uk-margin">
                <label className="uk-form-label">
                  <input
                    type="radio"
                    id="debit-credit"
                    name="payment_method"
                    value="debit-credit"
                    checked={formData.paymentMethod === 'debit-credit'}
                    onChange={handleChange}
                  />
                  Credit card
                </label>
                <div>
                  <label className="uk-form-label">
                    <input type="radio" id="mpesa" name="payment_method" value="mpesa" onChange={handleChange} />
                    Mpesa
                  </label>
                </div>
                <div>
                  <label className="uk-form-label">
                    <input type="radio" id="tigopesa" name="payment_method" value="tigopesa" onChange={handleChange} />
                    Tigopesa
                  </label>
                </div>
                <div>
                  <label className="uk-form-label">
                    <input type="radio" id="airtel-money" name="payment_method" value="airtel-money" onChange={handleChange} />
                    Airtel Money
                  </label>
                </div>
                <div>
                  <label className="uk-form-label">
                    <input type="radio" id="halopesa" name="payment_method" value="halopesa" onChange={handleChange} />
                    Halopesa
                  </label>
                </div>
              </div>
              <button className="green-button" type="submit" onClick={handleSubmit}>Donate</button>
            </div>
        </div>
      </div>
    </div>
  );
};
export default DonationForm;
