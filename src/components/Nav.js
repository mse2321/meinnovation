import React from 'react';
import { FaEnvelopeSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from '../images/meInnovationBulb_mid.svg';


const Nav = () => {
    return (
      <aside>
        <div id="nav_logo_wrap">
          <img className="nav_logo" src={ logo } alt="ME Innovation Logo" />
        </div>
        <nav id="contact_wrap" className="contact">
          <ul className='contact_links'>
            <li>
              <a href="contact_page" target="_blank" rel="noopener noreferrer" className="contact_icon">
                <FaEnvelopeSquare className="contact_icons" />
              </a>
            </li>
            <li>
              <a href="http://github.com/mse2321" className="contact_icon gitHubIcon" target="_blank" rel="noopener noreferrer">
                <FaGithub className="contact_icons" />
              </a>
            </li>
            <li>
              <a href="http://www.linkedin.com/in/meinnovation" className="contact_icon" rel="noopener noreferrer"target="_blank">
                <FaLinkedin className="contact_icons" />
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    );
}

export default Nav;