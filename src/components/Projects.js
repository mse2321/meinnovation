import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <div id="main_wrap">
          <h1>Projects</h1>
          <div className="instructions">
            <!-- set angular binding to change the instructions based on screen width -->
            <p>Swipe through the images or use the dots below to view projects.<br><span>Double tap the images for more details.</span></p>
          </div> <!-- end of instructions -->
          <div id="gallery_wrap">
            <gallery>
              <photo>
                <img id="gallery_image" className="slide-animation"  src=""  alt=""> 
              </photo>
              <div className="slide_selection">
                <div className="slide_selectors">
                  <a>&#8226;</a>
                </div>
              </div>
              <!-- end of slide_selection -->
            </gallery>
          </div> <!-- end of gallery_wrap -->
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
          </div> <!-- end of metadata -->
        </div> <!-- end of main_wrap -->
      </section>
    );
  }
}

export default Projects;