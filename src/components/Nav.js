import React, { Component } from 'react';
import { FaHome, FaUser, FaConciergeBell, FaEnvelopeSquare, FaGithub, FaLinkedin } from "react-icons/fa";

class Nav extends Component {
  render() {
    return (
      <aside>
        <div id="intro_logo_wrap">
          <img className="intro_logo" src="images/meInnovationBulb_mid.svg" alt="ME Innovation Logo" />
        </div>
        <nav>
          <ul className="nav_links">
            <li><a href="intro">Home</a></li>
            <li><a href="about">About ME</a></li>
            <li><a href="services">Services</a></li>
          </ul>
          <ul className="nav_links_mobile">
            <li><a href="intro"><FaHome className="nav_links_mobile_icons" /><br/>Home</a></li>
            <li><a href="about"><FaUser className="nav_links_mobile_icons" /><br/>About ME</a></li>
            <li><a href="services"><FaConciergeBell className="nav_links_mobile_icons" /><br/>Services</a></li>
          </ul>
        </nav>
        <div id="contact_wrap" className="contact">
          <a href="contact_page" target="_blank" rel="noopener noreferrer" className="contact_icon">
            <FaEnvelopeSquare className="contact_icons" />
          </a>
          <a href="http://github.com/mse2321" className="contact_icon gitHubIcon" target="_blank" rel="noopener noreferrer">
            <FaGithub className="contact_icons" />
          </a>
          <a href="http://www.linkedin.com/in/meinnovation" className="contact_icon" rel="noopener noreferrer"target="_blank">
            <FaLinkedin className="contact_icons" />
          </a>
        </div>
      </aside>
    );
  }
}

export default Nav;