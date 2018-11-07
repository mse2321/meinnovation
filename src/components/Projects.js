import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <div id="main_wrap">
          <h1>Projects</h1>
          <div className="instructions">
            <p>Swipe through the images or use the dots below to view projects.</p>
            <p>Double tap the images for more details.</p>
          </div>
          <div id="gallery_wrap">
            <gallery>
              <photo>
                <img id="gallery_image" className="slide-animation"  src=""  alt="" /> 
              </photo>
              <div className="slide_selection">
                <div className="slide_selectors">
                  <a href="sample">&#8226;</a>
                </div>
              </div>
            </gallery>
          </div>
          <div id="metadata">
            <div className="meta_wrap">
              <div>
                <div className="art_title"><h2>title</h2></div>
                <div className="subdata" id="desc">desc</div>
                <div className="subdata" id="tech">tech</div>
              </div>
            </div>
            <div className="metadata_button_wrap">
              <div className="subdata subdata-link">
                <a href="link" target="_blank"><button>Click to View</button></a>
                <a href="link2" target="_blank"><button className="gitLink">Click to View in GitHub</button></a>
              </div>
              <div className="meta_close">
                <i className="fa fa-times" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;