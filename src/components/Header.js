import React, { Component } from 'react';
import { FaGithub, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";

class Header extends Component {
  render() {
    return (
      <header id="intro">
          <div id="contact_wrap" className="contact">
          <a href="mailto:mse233@aol.com?Subject=ME%20Innovation%20Inquiry" target="_blank" rel="noopener noreferrer" className="contact_icon">
            <FaEnvelopeSquare className="contact_icons" />
          </a>
          <a href="http://github.com/mse2321" className="contact_icon" target="_blank" rel="noopener noreferrer">
            <FaGithub className="contact_icons" />
          </a>
          <a href="http://www.linkedin.com/in/meinnovation" className="contact_icon" rel="noopener noreferrer"target="_blank">
            <FaLinkedin className="contact_icons" />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;

