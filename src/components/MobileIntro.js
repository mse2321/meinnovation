import React from 'react';
import logo from '../images/mei_updated_main.svg';

const MobileIntro = () => {
  const heading = 'Marcus Eubanks: Innovation';

  return (
    <section id="intro_wrap">
      <div id="intro_data">
        <div id="intro_logo_wrap">
          <img className="intro_logo"  src={ logo }  alt="ME Innovation Logo" /> 
          <h1>{heading}</h1>
        </div>
      </div>
    </section>
  );
}

export default MobileIntro;
