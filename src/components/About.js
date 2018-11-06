import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about">
        <div id="about_wrap">
          <h1>About ME</h1>
            <p>I truly love what I do and combine design, marketing, and programming skills to help web development projects succeed.</p>
          <div className="stats_wrap">
            <div className="stats_col">
              <div className="stats_heading"><i class="fa fa-wrench" aria-hidden="true"></i><h3></h3></div>
              <div className="stats"></div>
            </div> <!-- end of stats_col 1 -->
            <div className="stats_col">
              <div className="stats_heading"><i className="fa fa-code" aria-hidden="true"></i><h3></h3></div>
              <div className="stats"></div>
            </div> <!-- end of stats_col 2 -->
            <div className="stats_col">
              <div className="stats_heading"><i className="fa fa-battery-quarter" aria-hidden="true"></i><h3></h3></div>
              <div className="stats"></div>
            </div> <!-- end of stats_col 3 -->
            <div class="stats_col">
              <div className="stats_heading"><i className="fa fa-battery-quarter" aria-hidden="true"></i><h3></h3></div>
              <div className="stats"></div>
            </div> <!-- end of stats_col 3 -->
          </div> <!-- end of stats_wrap -->
        </div> <!-- end of about_wrap -->
      </section>
    );
  }
}

export default About;
