import React, { Component } from 'react';
import { FaPencilAlt, FaLaptop, FaEnvelope } from "react-icons/fa";

class Services extends Component {
  render() {
    return (
      <section id="services">
        <div className="services_wrap container-fluid">
          <h2>Services</h2>
          <div className="services_col_wrap row">
            <div className="services_col col-md-12 col-lg-4 col-xl-4">
              <FaPencilAlt className="services_icons" />
              <h3>Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur orci nunc, posuere ac sapien quis, porttitor maximus urna. 
                Aenean rhoncus odio neque, a molestie tortor aliquam eget. Etiam sed augue ex.
              </p>
            </div>
            <div className="services_col col-md-12 col-lg-4 col-xl-4">
              <FaLaptop className="services_icons" />
              <h3>Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur orci nunc, posuere ac sapien quis, porttitor maximus urna. 
                Aenean rhoncus odio neque, a molestie tortor aliquam eget. Etiam sed augue ex.
              </p>
            </div>
            <div className="services_col col-md-12 col-lg-4 col-xl-4">
              <FaEnvelope className="services_icons" />
              <h3>Consulting</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur orci nunc, posuere ac sapien quis, porttitor maximus urna. 
                Aenean rhoncus odio neque, a molestie tortor aliquam eget. Etiam sed augue ex.
              </p>
            </div>
            <div className="pitch_container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="services_button">
                Let's Innovate!
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
