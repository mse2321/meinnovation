import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header id="intro">
          <div id="contact_wrap" className="contact">
          <a href="mailto:mse233@aol.com?Subject=ME%20Innovation%20Inquiry" target="_blank" rel="noopener noreferrer" className="contact_icon">
            <img id="emailIcon" src="build/img/email_circle-min.png" alt="Send ME an email" />
          </a>
          <a href="http://github.com/mse2321" className="contact_icon" target="_blank" rel="noopener noreferrer">
            <img id="gitHub" src="build/img/gitHub_circle-min.png" alt="Check out my GitHub Repositories" />
          </a>
          <a href="http://www.linkedin.com/in/meinnovation" className="contact_icon" rel="noopener noreferrer"target="_blank">
            <img id="linkedIn" src="build/img/linkedIn_circle-min.png" alt="Look at my LinkedIn Profile" />
          </a>
        </div>
        <div id="button_wrap">
          <i className="fa fa-bars" aria-hidden="true"></i>
          <i className="fa fa-times" aria-hidden="true"></i>
          </div>
      </header>
    );
  }
}

export default Header;

