import React from 'react';
import { Link } from 'react-router-dom';
import './UserDashbord.css';
import  { useState,useEffect } from 'react';

const UserDashboard = () => {

  const[userID, setUserID] = useState('')
  const[user, setUser] = useState(null)
  useEffect(() =>{
    setUserID(localStorage.getItem('userID'))
  })

  return (
    <div>
    <header className="header">
      <div className="logo-name">
        <img src="./nichangielogo.png" alt="Company Logo" className="logopic" />
        <span className="company-name"><h2>Nichangie</h2></span>
      </div>
      <div className="header-content">
      <div className="icons">
        <span className="notification-icon">🔔</span>
        <span className="profile-icon">👤</span>
      </div>
      </div>
    </header>
    
    <div className="user-dashboard">
     

      {/* Sidebar */}
      <nav className="sidebar">
        <a href="/dashboard" className="sidebar-option">
          <span className="sidebar-icon">📊</span> Dashboard
        </a>
        <a href="/donations" className="sidebar-option">
          <span className="sidebar-icon">💰</span> Donations
        </a>
        <a href="/support" className="sidebar-option">
          <span className="sidebar-icon">📞</span> Support
        </a>
        <a href="/settings" className="sidebar-option">
          <span className="sidebar-icon">⚙</span> Settings
        </a>
        <a href="/logout" className="sidebar-option logout-option">
          <span className="sidebar-icon">🔒</span> Log Out
        </a>
      </nav>

      {/* Content Container */}
      <main className="content">
        <div className="search">
          <input type="text" placeholder="Search..." className="search-input" />
          <span className="search-icon">🔍</span>
        </div>
        <div className="welcome-text">
          <p><h2>Welcome back {userID} </h2></p>
        </div>

        {/* Active Fundraisers */}
        <div>
          <h3 className="sub-title">Active Fundraisers</h3>
          <div className="sub-container1">
            <div className="sub-content">
              <div className="sub-sub-container">
                <span className="sub-sub-sub-container1">
                  <div>
                <a href="/seemore" className="seemorelink">
                <img
          className="donationlist-image2"
          src="./cancer.png" // Replace with your image path
          alt="Sick Patient"
        /></a></div>
        <div classname="words">
          <p><h4>Help Anne Beat
             Cancer</h4></p>
        </div>
        <div >
          <p>  <a href="/readme" className="readmelink">Description</a></p>
        </div>
        <div>
          <p><h5>
             29/9/2023</h5></p>
        </div>

                </span>
                <span className="sub-sub-sub-container2">
                  <div className="addition-icon">
                  <a href="/startcampaign" className="startcampaignlink">
                    ➕ 
                    </a>
                    </div>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
       
       
     <main className="content">


<h3 className="sub-title">Progress Bar</h3>

    <div className="sub-container">
            <div className="sub-content">
              <div className="progress-bar">
                <div className="progress-label">Goal</div>
                <div className="progress-value">41%</div>
                <div className="progress">
                  <div className="progress-inner1" style={{ width: '41%' }}></div>
                </div>
              </div>
              <div className="progress-bar">
                {/* ... similar structure for other progress bars ... */}
                <div className="progress-label">Duration Covered</div>
                <div className="progress-value">30dleft</div>
                <div className="progress">
                  <div className="progress-inner2" style={{ width: '57%' }}></div>
                </div>
              </div>
              <div className="progress-bar">
                {/* ... similar structure for other progress bars ... */}
                <div className="progress-label">Amount Raised</div>
                <div className="progress-value">10M</div>
                <div className="progress">
                  <div className="progress-inner3" style={{ width: '68%' }}></div>
                </div>
              </div>
            </div>
            <br/>
            <div> 


            {/* <h3>List of donors</h3> */}
           
            
            {/* <img
          className="donationlist-image"
          src="/Group.png" // Replace with your image path
          alt="Sick Patient"
        />

        <br/>
            <a href="/seemore" className="seemorelink">
          
         <h4>See More</h4>  */}
          {/* <span className=" forward-arrow"> */}
          {/* <img className="gohere" src="/goto.png" alt="goto-icon" /> */}

          {/* </span> */}
      
            </div>

          </div>
          </main>


        {/* List of Donations */}
        <div className="sub-container3">
          <h3 className="sub-title">List of Donations</h3>
         <Link to = "/readmore"></Link>
          <img
          className="donationlist-image1"
          src="./heartpatient.png" // Replace with your image path
          alt="Sick Patient"
        />

        <br/>
        <Link to = "/seeall"  className="seemorelink">See more</Link>

          {/* <div className="sub-content">
            <div className="donation-icon">👥</div>
          </div> */}


        </div>

        {/* Routes */}
        {/* <Route path="/dashboard" component={DashboardPage} />
        <Route path="/donations" component={DonationsPage} />
        <Route path="/support" component={SupportPage} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/logout" component={LogoutPage} /> */}
      </main>
    </div>
    </div>
  );
};

export default UserDashboard;