import React, { Component } from 'react';
import { FaTimes, FaCircle } from "react-icons/fa";

class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <div id="main_wrap">
          <div id="gallery_wrap">
            <div className="gallery">
              <div className="gallery_hint">
                <p>Click or Tap the image for details</p>
              </div>
              <div className="photos">
                <img id="gallery_image" className="slide-animation"  src="images/sample-image2-min.jpg"  alt="sample" /> 
              </div>
              <div className="slide_selection">
                <div className="slide_selectors">
                  <a className="active" href="sample"><FaCircle /></a>
                  <a href="sample"><FaCircle /></a>
                  <a href="sample"><FaCircle /></a>
                  <a href="sample"><FaCircle /></a>
                </div>
              </div>
            </div>
          </div>
          <div id="metadata">
            <div className="meta_wrap">
              <div class="meta_close">
                <FaTimes />
              </div>
              <div>
                <div className="art_title"><h3>Muzak</h3></div>
                <div className="subdata desc">Song preview search engine w/ custom player</div>
                <div className="subdata tech">
                  HTML5, CSS3, JavaScript, 
                  jQuery, Bootstrap, Angular, 
                  Spotify API, Responsive</div>
              </div>
            </div>
            <div className="metadata_button_wrap">
              <div className="subdata subdata-link">
                <a href="link" target="_blank"><button>View Online</button></a>
                <a href="link2" target="_blank"><button className="gitLink">View in GitHub</button></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;