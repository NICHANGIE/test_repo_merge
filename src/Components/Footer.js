import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="uk-section uk-section-secondary uk-section-small">
      <div className="uk-container uk-text-muted">
        <div className="uk-child-width-1-2@s uk-child-width-1-3@m" data-uk-grid>
          <div>
            <h4>Company info</h4>
            <ul className="uk-list uk-text-small">
              <li><a className="uk-link-muted" href="#">About us</a></li>
              <li><a className="uk-link-muted" href="#">Professionals</a></li>
            </ul>
          </div>
          <div>
            <h4>Features</h4>
            <ul className="uk-list uk-text-small">
              <li><a className="uk-link-muted" href="#">Fundraiser management</a></li>
              <li><a className="uk-link-muted" href="#">Share</a></li>
              <li><a className="uk-link-muted" href="#">Unlimited support</a></li>
            </ul>
          </div>
          <div>
            <div className="uk-margin">
              <a href="#" className="uk-logo">Nichangie</a>
            </div>
            <div className="uk-margin uk-text-small">
              <p><a href="">+255711995201</a></p>
            </div>
            <div className="uk-margin">
              <div data-uk-grid className="uk-child-width-auto uk-grid-small">
                <div className="uk-first-column">
                  <a href="https://www.twitter.com/" data-uk-icon="icon: twitter" className="uk-icon-link uk-icon"
                    target="_blank"></a>
                </div>
                <div>
                  <a href="https://www.instagram.com/" data-uk-icon="icon: instagram" className="uk-icon-link uk-icon"
                    target="_blank"></a>
                </div>
                <div>
                  <a href="mailto:laurynmethod@gmail.com" data-uk-icon="icon: mail" className="uk-icon-link uk-icon"
                    target="_blank"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
