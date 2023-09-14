import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProgressBar } from 'react-bootstrap';
import './Readmore.css';
//import ProgressBar from './component/ProgressBar';



function Readmore() {
  const [patientData, setPatientData] = useState({
    uploadImage: '',
    campaignName: '',
    description: '',
     targetedAmount: '',
     duration: '',

  });
  const now = 40000 /(patientData["targetedAmount"]) * 100;
  const now1= 12/ (patientData["duration"]) * 100;
  const now2= 50000;

  useEffect(() => {
    // Fetch patient data from the API
    axios.get('http://localhost:8000/api/patient-data/'+4)
      .then((response) => {
        
        setPatientData(response.data[0]);
      })
      .catch((error) => {
        console.error('Error fetching patient data:', error);
      });
  }, []);
  
  // Render patient data in your component
  return (
    <div className="read-container">
    <div className="image-container">
     
      {/* <img
          className="uploadImage"
          src={patientData["uploadImage"]} // Display the patient's image
          alt="Sick Patient"
        /> */}
        <img src = "./heartpatient.png">
        
        </img>
       

      <div className="patient-info">
          
      <h2 className="campaignName">{patientData["campaignName"]}</h2>
      <p className="description">{patientData["description"]}</p>


      </div>
    </div>
    <br/>
    <div>
   {/* <ProgressBar />  */}
   <main className="content">


<h2 className="sub-title">Progress Bar</h2>

  <div className="sub-container">
  
  <div className='flex flex-column'> 
    <div className='progress-container' >
         <div className='mb-2'>
          <p>Goal</p>
         <ProgressBar now={now} label={`${now}%`} variant="success" />
         </div>

         <div className='mb-2'>
          <p>Amount raised out of {patientData["targetedAmount"]} Tshs </p>
         <ProgressBar now={now} label={`${now2}Tshs`} variant="success" />
         </div>

          <div className='mb-2'>
          <p>Total days(30days)</p>
         <ProgressBar now={now1} label={`${12}days`} variant="success" />
         </div>
         </div>
    </div>


          <br/>
          <div> 


          <h3>List of donors</h3>
         
          <a href="/seemore" className="seemorelink">
          <img
        className="donationlist-image"
        src="./Group.png" // Replace with your image path
        alt="Sick Patient"
      /> </a> 

      <br/>
          <a href="/seemore" className="seemorelink">
        
       <h4>See More</h4> 
        {/* <span className=" forward-arrow"> */}
        {/* <img className="gohere" src="/goto.png" alt="goto-icon" /> */}

        {/* </span> */}
     </a>
          </div>

        </div>
        </main>

   </div>
    <div className="donate-form">
      {/* Your donation form content */}

      <div className="donate-form-header">
      <b>Share this story</b>
      <a href="/share" className="sharelink">
      <img className="share-icon" src="./shareicon.png" alt="Share Icon" />
      </a>
    </div>
    <p>Get inspiring stories to be delivered to your inbox.</p>
    <div className="input-container">
      <input
        type="text"
        placeholder="Email Address"
        className="email-input"
      />
         <br /> 
      <b>Help Young Sheldon</b>
    </div> 
    <br /> 
    <div>
    <button className="donate-button">Donate Now</button>
    </div>
    </div>
  </div>

  );
}

export default Readmore;