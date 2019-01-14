import React, { Component } from 'react';
import Gallery from "./Gallery";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "../images/sample-image1-min.jpg"
    }
  }

  render() {
    return (
      <section id="projects">
        <div id="main_wrap">
          <Gallery image={this.state.image} />
        </div>
      </section>
    );
  }
}

export default Home;