import React from 'react'
import logo from '../images/mei_logo.svg'
import { FaEnvelopeSquare, FaGithub, FaLinkedin } from "react-icons/fa"
import { Container, Row, Col } from 'react-bootstrap'

const Header = () => {
  return (
    <header id="intro">
      <Container fluid id="nav_wrap">
        <Row>
          <Col xs={12} md={10} lg={10} xl={10} className="brand_wrap">
            <div id="nav_logo_wrap">
                <img className="nav_logo" src={ logo } alt="ME Innovation Logo" />
            </div>
            <h1>
              <div>
                <span className="heading1">ME </span>
                <span className="heading2">INNOVATIONS</span>
              </div>
            </h1>
          </Col>
          <Col xs={12} md={2} lg={2} xl={2} className="flex-row-reverse contact_container">
            <nav id="contact_wrap" className="contact">
              <ul className='contact_links'>
                <li>
                  <a href="mailto:marcus@meinnovationservices.com?subject=Inquiry" target="_blank" rel="noopener noreferrer" className="contact_icon">
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
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;

