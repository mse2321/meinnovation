import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about">
        <div id="about_wrap">
          <h2>Skills</h2>
          <div className="stats_wrap">
            <div className="stats_col">
              <div className="stats_heading"><i className="fa fa-wrench" aria-hidden="true"></i><h3>Tools</h3></div>
              <div className="stats">[tools]</div>
            </div>
            <div className="stats_col">
              <div className="stats_heading"><i className="fa fa-code" aria-hidden="true"></i><h3>Technologies</h3></div>
              <div className="stats">[skills]</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
