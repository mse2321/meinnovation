import React from 'react';

const SkillBar = (props) => {
    const { score, skillName } = props;

    return (
      <div className="skill_bar">
          <label>{skillName}</label>
          <progress id={skillName.toLowerCase()} value={score} max="100">{score}</progress>
      </div>
    );
}

export default SkillBar;
