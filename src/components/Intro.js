import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <section id="intro_wrap">
        <div id="intro_data">
          <div id="intro_logo_wrap">
            <img className="intro_logo"  src="images/meinnovationBulb_only.svg"  alt="ME Innovation Logo" /> 
            <h1>Marcus Eubanks: Innovation</h1>
          </div>
            <div id="welcome_wrap">
            <p className="welcome">Front-End Developer with design and marketing chops</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
