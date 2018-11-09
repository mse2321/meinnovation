import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about">
        <div id="about_wrap">
          <h1>Skills</h1>
          <div className="stats_wrap">
            <div className="stats_col">
              <div className="stats_heading"><i className="fa fa-wrench" aria-hidden="true"></i><h3>Tools</h3></div>
              <div className="stats">Illustrator, Dreamweaver, PhotoShop, Github/Git, BitBucket, WAMP/XAMPP, NPM, Grunt, Gulp, Webpack</div>
            </div>
            <div className="stats_col">
              <div className="stats_heading"><i className="fa fa-code" aria-hidden="true"></i><h3>Technologies</h3></div>
              <div className="stats">HTML/CSS3, JavaScript (ES6), SQL, SASS, jQuery, Bootstrap, Angular 1.5, JSON, PHP, React/Redux, Wordpress</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
