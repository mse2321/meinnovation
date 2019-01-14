import React, { Component } from 'react';
import Gallery from "./Gallery";

class Home extends Component {
  render() {
    return (
      <section id="projects">
        <div id="main_wrap">
          <Gallery />
        </div>
      </section>
    );
  }
}

export default Home;