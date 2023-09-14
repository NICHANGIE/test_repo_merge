import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import request from 'superagent';
import axios from 'axios';

const CreateFundraiser = () => {
  const [campaignName, setCampaignName] = useState('');
  const [duration, setDuration] = useState('');
  const [targetedAmount, setTargetedAmount] = useState('');
  const [documentProof, setDocumentProof] = useState(null); // Initialize with null
  const [description, setDescription] = useState('');
  const [hospitalAccountDetails, setHospitalAccountDetails] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateCampaign = async () => {
    try {
      const formData = new FormData();
      formData.append('file', documentProof);

      await axios.post('http://localhost:3001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Continue with your campaign creation logic here...

      // Send a POST request to your API to create a campaign
      const response = await request
        .post('http://localhost:8000/fundraising-campaign')
        .send({
          campaignName,
          duration,
          targetedAmount,
          description,
          hospitalAccountDetails,
        });

      if (response.body.success) {
        setMessage('Campaign created successfully');
        // You can redirect to another page or update the UI as needed.
      } else {
        setMessage('Error in creating fundraising campaign');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred while creating the campaign');
    }
  };

  const handleFileChange = (e) => {
    setDocumentProof(e.target.files[0]);
  };

  return (
    <div className="uk-grid-collapse" data-uk-grid>
      <div className="uk-width-2-4@m uk-padding-large uk-flex uk-flex-middle uk-flex-center" data-uk-height-viewport>
        <div className="uk-width-3-4@s">
          <div className="uk-text-center uk-margin-bottom">
            <h1 style={{ color: 'green' }}>
              {' '}
              <img src="./nichangielogo.png" alt="" width="50cm" height="50cm" /> Nichangie
            </h1>
          </div>
          <div className="uk-text-center uk-margin-medium-bottom">
            <h3 className="uk-letter-spacing-small">Enter your fundraising details below</h3>
          </div>
          <form>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="campaignName">
                Name of the Campaign
              </label>
              <input
                id="campaignName"
                className="uk-input uk-form-large"
                type="text"
                placeholder="My Medical Fundraiser"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="duration">
                Duration of the Campaign
              </label>
              <input
                id="duration"
                className="uk-input uk-form-large"
                type="text"
                placeholder="30 days"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="targetedAmount">
                Targeted Amount
              </label>
              <input
                id="targetedAmount"
                className="uk-input uk-form-large"
                type="text"
                placeholder="Tsh5000"
                value={targetedAmount}
                onChange={(e) => setTargetedAmount(e.target.value)}
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="documentProof">
                Documental Proof
              </label>
              <input
                id="documentProof"
                className="uk-input uk-form-large"
                type="file"
                onChange={handleFileChange}
              />
              <p className="uk-text-small uk-margin-remove">
                Upload a documental proof signed by the health specialist to prove your condition
              </p>
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                className="uk-textarea uk-form-large"
                placeholder="Describe your situation as explained in your medical document"
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <p className="uk-text-small uk-margin-remove">
                Write a description of your situation as explained in your medical document and upload a photo that
                will be displayed to the donors
              </p>
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="hospitalAccountDetails">
                Hospital's Deposit Account
              </label>
              <input
                id="hospitalAccountDetails"
                className="uk-input uk-form-large"
                type="text"
                placeholder="1234-5678-9012"
                value={hospitalAccountDetails}
                onChange={(e) => setHospitalAccountDetails(e.target.value)}
              />
            </div>
            <div className="uk-width-1-1 uk-text-center">
              <button
                className="uk-button uk-button-primary uk-button-large"
                type="button"
                onClick={handleCreateCampaign}
              >
                Create Campaign
              </button>
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label">
                I agree to the{' '}
                <a className="uk-link-border" href="#">
                  terms
                </a>{' '}
                and policy of service
              </label>
              <input type="checkbox" id="agreeTerms" name="agreeTerms" required />
            </div>
            <p>{message}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateFundraiser;
