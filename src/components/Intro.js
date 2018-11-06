import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <section id="intro_wrap">
        <div id="intro_data">
          <div id="intro_logo_wrap">
            <p>Marcus Eubanks: Innovation</p>
            </div> <!-- end of logo_wrap -->
            <div id="welcome_wrap">
            <p className="welcome">Front-End Developer with design and marketing chops</p>
          </div> <!-- end of welcome_wrap -->
        </div> <!-- end of intro_wrap -->
      </section>
    );
  }
}

export default Intro;
