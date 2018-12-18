import React, { Component } from 'react';
import { FaPencilAlt, FaLaptop, FaMap, FaEnvelope } from "react-icons/fa";

class Services extends Component {
  render() {
    return (
      <section id="services">
        <div className="services_wrap">
          <h2>Services</h2>
          <div className="services_col_wrap">
            <div className="services_col">
              <FaPencilAlt className="services_icons" />
              <h3>Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur orci nunc, posuere ac sapien quis, porttitor maximus urna. 
                Aenean rhoncus odio neque, a molestie tortor aliquam eget. Etiam sed augue ex.
              </p>
            </div>
            <div className="services_col">
              <FaLaptop className="services_icons" />
              <h3>Develop</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur orci nunc, posuere ac sapien quis, porttitor maximus urna. 
                Aenean rhoncus odio neque, a molestie tortor aliquam eget. Etiam sed augue ex.
              </p>
            </div>
            <div className="services_col">
              <FaEnvelope className="services_icons" />
              <h3>Deliver</h3>
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
