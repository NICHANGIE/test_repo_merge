import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (

    <div data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent ; top: #header">
      <nav className="uk-navbar-container uk-letter-spacing-small uk-text-bold">
        <div className="uk-container">
          <div data-uk-navbar>
            <div className="uk-navbar-left">
              <img src="./nichangielogo.png" alt="logo" width="50cm" height="50cm" />
              <h2>Nichangie</h2>
            </div>
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav uk-visible@m" data-uk-scrollspy-nav="closest: li; scroll: true; offset: 80">
                <li className="uk-active"><a href="support.html">Support</a></li>
                <li><a href="">Language</a></li>
                <li>
                  <a href="sign-in.html">Sign in</a>
                </li>
              </ul>
              <div>
                <a className="uk-navbar-toggle" data-uk-search-icon href="#"></a>
                <div className="uk-drop uk-background-default" data-uk-drop="mode: click; pos: left-center; offset: 0">
                  <form className="uk-search uk-search-navbar uk-width-1-1">
                    <input className="uk-search-input uk-text-demi-bold" type="search" placeholder="Search..." autoFocus />
                  </form>
                </div>
              </div>
              <div className="uk-navbar-item">
                <div><a className="uk-button uk-button-primary-light" href="sign-up.html">Sign Up</a></div>
              </div>
              <a className="uk-navbar-toggle uk-hidden@m" href="#offcanvas" data-uk-toggle>
                <span data-uk-navbar-toggle-icon></span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
