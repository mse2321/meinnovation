import React from 'react';
import myPhoto from '../../images/marcusPhoto2018.jpg';
import aboutContent from '../../data/aboutContent.json';

const About = () => {
    return (
      <section id="about">
        <div className="about_wrap container-fluid">
          <h2>{aboutContent.content.section_heading}</h2>
          <div className="about_col_wrap row">
            <div className="about_col col-md-12 col-lg-4 col-xl-4">
              <div className="about_image_container">
                <img className="about_image" src={ myPhoto } alt="Marcus Eubanks" />
              </div>
            </div>
            <div className="about_col col-md-12 col-lg-6 col-xl-6">
              <div className="about_content">
                {
                  (aboutContent.content.section_content).map((content, index) => (
                    <p key={index}>{content}</p>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;
