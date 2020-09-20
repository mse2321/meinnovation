import React from 'react';
import myPhoto from '../../images/marcusPhoto2018.jpg';
import aboutContent from '../../data/aboutContent.json';
import SkillBar from '../SkillBar/';

const About = (props) => {
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
              <div className="skills_container">
                <h3>Skills Breakdown</h3>
                {
                  aboutContent.skills.map((skill, index) => (
                    <SkillBar key={index} score={skill.score} skillName={skill.name} />
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
