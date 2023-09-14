import React from 'react';
import { Link } from 'react-router-dom'; // Import React Router Link if you're using it

const HomePage= () => {
  return (
    <body className="uk-background-body">
    <header id="header">
      <div data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent ; top: #header">
        <nav className="uk-navbar-container uk-letter-spacing-small uk-text-bold">
          <div className="uk-container">
            <div data-uk-navbar>
              <div className= "header-again">
                <div className="uk-navbar-left">
                <img src="./nichangielogo.png" alt="logo" width="50cm" height="60cm" />
                <h2>Nichangie</h2>
              </div>
              <div className="uk-navbar-right">
                <ul className="uk-navbar-nav uk-visible@m" data-uk-scrollspy-nav="closest: li; scroll: true; offset: 80">
                  <li className="uk-active"> <Link to = "/support">Support</Link></li>
                  <li><a href="">Language</a></li>
                  <li>
                  <Link to = "/login">Sign in</Link>
                  </li>
                </ul>
                <div>
              </div>
              
                  <a className="uk-navbar-toggle" data-uk-search-icon href="#"></a>
                  <div className="uk-drop uk-background-default" data-uk-drop="mode: click; pos: left-center; offset: 0">
                    <form className="uk-search uk-search-navbar uk-width-1-1">
                      <input className="uk-search-input uk-text-demi-bold" type="search" placeholder="Search..." autoFocus />
                    </form>
                  </div>
                </div>
                <div className="uk-navbar-item">
                  <div>
                    <Link to = "/register">Sign up</Link>
                </div>
                <a className="uk-navbar-toggle uk-hidden@m" href="#offcanvas" data-uk-toggle>
                  <span data-uk-navbar-toggle-icon></span>
                </a>
              </div>
            </div>
          </div>
          </div>
        </nav>
      </div>
      <div className="uk-container uk-container-large">
        <div className="uk-position-relative uk-visible-toggle uk-light uk-box-shadow-small uk-overflow-hidden uk-border-rounded" tabIndex="-1" data-uk-slider="autoplay: true">
          <ul className="uk-slider-items uk-child-width-1-1">
            <li>
              <img src="./homepage.png" alt="Slide" />
              <div className="uk-position-cover uk-overlay-light uk-flex uk-flex-middle uk-padding-slide">
                <div className="uk-width-3-4@m">
                  <div>
                    <h3>
                      Donate. Raise funds. Save lives
                        <Link to = "/register"><button className="green-button">Get started now</button></Link>
                    </h3>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <img src="./homepage.png" alt="Slide" />
              <div className="uk-position-cover uk-overlay-xlight uk-flex uk-flex-middle uk-padding-slide">
                <div >
                  <h3>
                    Donate. Raise funds. Save lives
                    
                  <Link to ="/register"><button className="green-button">get started now</button></Link>
                  </h3>
                </div>
              </div>
            </li>
          </ul>
          <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
          <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
        </div>
      </div>
      <div className="uk-container">
        <div className="uk-background-primary-dark uk-light uk-border-rounded-large uk-position-relative uk-position-z-index uk-header-banner uk-header-banner-courses uk-box-shadow-small">
          <div className="uk-grid-small" data-uk-grid>
            <div className="uk-width-1-3@m">
              <div className="uk-flex uk-flex-middle uk-box">
                <div className="uk-width-auto uk-flex uk-flex-middle">
                  <span data-uk-icon="icon: album; ratio: 2"></span>
                </div>
                <div className="uk-width-expand">
                  <h4 className="uk-margin-remove">Easy set up</h4>
                  <p className="uk-margin-remove uk-text-muted uk-text-small">Set up your fundraising account easily and start right away</p>
                </div>
              </div>
            </div>
            <div className="uk-width-1-3@m">
              <div className="uk-flex uk-flex-middle uk-box">
                <div className="uk-width-auto uk-flex uk-flex-middle">
                  <span data-uk-icon="icon: users; ratio: 2"></span>
                </div>
                <div className="uk-width-expand">
                  <h4 className="uk-margin-remove">Receive donations</h4>
                  <p className="uk-margin-remove uk-text-muted uk-text-small">Receive donations from our worldwide supporters</p>
                </div>
              </div>
            </div>
            <div className="uk-width-1-3@m">
              <div className="uk-flex uk-flex-middle uk-box">
                <div className="uk-width-auto uk-flex uk-flex-middle">
                  <span data-uk-icon="icon: future; ratio: 2"></span>
                </div>
                <div className="uk-width-expand">
                  <h4 className="uk-margin-remove">Track and manage funds</h4>
                  <p className="uk-margin-remove uk-text-muted uk-text-small">Manage your funds more easily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

      <div className="uk-section uk-margin-top">
      
        <div className="uk-container">
    <div className="uk-section uk-margin-top">
      <div className="uk-container">
        <div className="uk-grid-small uk-flex uk-flex-middle" data-uk-grid>
          <div className="uk-width-expand@m">
            <h2>Ongoing fundraisers</h2>
          </div>
        </div>
        <div className="the-pics" data-uk-grid>
          <div className="first">
            <div className="uk-card uk-card-small uk-card-default uk-card-hover uk-border-rounded-large uk-overflow-hidden">
              <div className="uk-card-media-top uk-inline uk-light">
                <img src="./heartpatient.png" alt="young sheldom's image" />
                <div className="uk-position-cover uk-overlay-xlight"></div>
                <div className="uk-position-small uk-position-top-left"></div>
              </div>
              <div className="uk-card-body">
                <div className="uk-text-muted uk-text-small">Help young sheldom perform his heart surgery <li><Link to ="/readmore">Read more</Link></li></div>
                <Link to ="/donate"><button className="green-button">Donate now</button></Link>
              </div>
            </div>
          </div>
          <div  className="second">
            <div className="uk-card uk-card-small uk-card-default uk-card-hover uk-border-rounded-large uk-overflow-hidden">
              <div className="uk-card-media-top uk-inline uk-light">
                <img src="./sicklecell.png" alt="sickle cell image" />
                <div className="uk-position-cover uk-overlay-xlight"></div>
                <div className="uk-position-small uk-position-top-left"></div>
              </div>
              <div className="uk-card-body">
                <div className="uk-text-muted uk-text-small">Help collect funds for sickle cell anaemia patients  <li><Link to ="/readmore">Read more</Link></li></div>
                <Link to ="/donate"><button className="green-button">Donate now</button></Link>
              </div>
            </div>
          </div>
          <div className="third">
            <div className="uk-card uk-card-small uk-card-default uk-card-hover uk-border-rounded-large uk-overflow-hidden">
              <div className="uk-card-media-top uk-inline uk-light">
                <img src="./cancer.png" alt="an image of a patient with cancer" />
                <div className="uk-position-cover uk-overlay-xlight"></div>
              </div>
              <div className="uk-card-body">
                <div className="uk-text-muted uk-text-small">Help Anne beat cancer <li><Link to ="/readmore">Read more</Link></li></div>
                <Link to ="/donate"><button className="green-button">Donate now</button></Link>
              </div>
            </div>
          </div>
        
        </div>
        <div><Link to ="/seeall">see all</Link></div>
        
      </div>
    </div>
        </div>
      </div>

      <center>
        <div className="container">
          <div className="content">
    <div className="container">
      <div className="content">
        <div className="invisible-box">
          <h2>Get set up in 3 easy steps</h2>
        </div>
        <div className="invisible-box">
          <h4>Create your fundraiser</h4>
          <p>Share a few details about yourself and create a fundraiser in no time</p>
        </div>
        <div className="invisible-box">
          <h4>Share your fundraiser</h4>
          <p>Share your fundraiser on different platforms to get more support</p>
        </div>
        <div className="invisible-box">
          <h4>Manage your funds</h4>
          <p>Track and manage funds from your donors easily</p>
        </div>
        <div className="flex flex-col gap-4">
          
  <Link to="/createfundraising">
    <button className="green-button">Start fundraiser</button>
  </Link>
  <Link to="/learn">
    <button className="green-button">Learn more</button>
  </Link>
</div>


      </div>
    </div>
          </div>
        </div>
      </center>

    
      <div id="offcanvas" data-uk-offcanvas="flip: true; overlay: true">
        <div className="uk-offcanvas-bar">
    <div id="offcanvas" data-uk-offcanvas="flip: true; overlay: true">
      <div className="uk-offcanvas-bar">
        <h2>Nichangie</h2>
        <button className="uk-offcanvas-close" type="button" data-uk-close="ratio: 1.2"></button>
        <ul className="uk-nav uk-nav-primary uk-nav-offcanvas uk-margin-medium-top uk-text-center">
          <li><Link to ="/support">Support</Link></li>
          <li><Link to ="/seeall">Ongoingfundraisers</Link></li>
          <li><Link to ="/login">Sign in</Link></li>
          <li><Link to ="/register">Sign up</Link></li>
        </ul>
        <div className="uk-margin-medium-top">
          <a className="uk-button uk-width-1-1 uk-button-primary-light" href="sign-up.html">Sign Up</a>
        </div>
        <div className="uk-margin-medium-top uk-text-center">
          <div data-uk-grid className="uk-child-width-auto uk-grid-small uk-flex-center">
            <div>
              <a href="https://twitter.com/" data-uk-icon="icon: twitter" className="uk-icon-link" target="_blank"></a>
            </div>
            <div>
              <a href="https://www.facebook.com/" data-uk-icon="icon: facebook" className="uk-icon-link" target="_blank"></a>
            </div>
            <div>
              <a href="https://www.instagram.com/" data-uk-icon="icon: instagram" className="uk-icon-link" target="_blank"></a>
            </div>
            <div>
              <a href="https://vimeo.com/" data-uk-icon="icon: vimeo" className="uk-icon-link" target="_blank"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </body>
  );
};

export default HomePage;
