import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="about_wrap">
          <h2>About ME</h2>
          <div className="about_col_wrap">
            <div className="about_col">
              <div className="about_image_container">
                <img className="about_image" src="images/marcusPhoto2018.jpg" alt="sample" />
              </div>
            </div>
            <div className="about_col">
              <div className="about_content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci nunc, 
                  posuere ac sapien quis, porttitor maximus urna. Aenean rhoncus odio neque, 
                  a molestie tortor aliquam eget. Etiam sed augue ex. Nunc ut nulla sit amet 
                  lorem mollis fringilla nec ac magna. Nulla et porta sem, non blandit arcu. 
                  Donec quis tortor in enim consectetur convallis ut eget libero. 
                  Praesent nec lacus non felis dapibus rhoncus. Pellentesque hendrerit vehicula quam, 
                  pulvinar aliquet mauris mattis ac. Aliquam erat volutpat. 
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                  Suspendisse ac enim ex. Curabitur magna nisi, eleifend sed tempor at, rutrum id magna. 
                  Nulla ullamcorper molestie lectus eget ullamcorper. Vestibulum id porta ante. 
                  Vivamus malesuada justo a laoreet eleifend. Curabitur blandit mi nibh, sed ullamcorper diam volutpat a. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
