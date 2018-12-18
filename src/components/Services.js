import React, { Component } from 'react';
import { FaPencilAlt, FaLaptop, FaMap } from "react-icons/fa";

class Services extends Component {
  render() {
    return (
      <section id="services">
        <div className="services_wrap">
          <h2>Services</h2>
          <div className="services_col_wrap">
          <div className="services_col">
              <FaMap />
              <h3>Concept</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur orci nunc, posuere ac sapien quis, porttitor maximus urna. 
                Aenean rhoncus odio neque, a molestie tortor aliquam eget. Etiam sed augue ex.
              </p>
            </div>
            <div className="services_col">
              <FaPencilAlt />
              <h3>Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur orci nunc, posuere ac sapien quis, porttitor maximus urna. 
                Aenean rhoncus odio neque, a molestie tortor aliquam eget. Etiam sed augue ex.
              </p>
            </div>
            <div className="services_col">
              <FaLaptop />
              <h3>Develop</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur orci nunc, posuere ac sapien quis, porttitor maximus urna. 
                Aenean rhoncus odio neque, a molestie tortor aliquam eget. Etiam sed augue ex.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
