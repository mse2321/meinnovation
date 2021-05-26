import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import About from './About/';
import Home from './Home';
import MobileIntro from "./MobileIntro";

const App = () => {

    return(
      <div className="main_container">
        <div className="mobile_intro_container">
          <MobileIntro />
          <Home />
        </div>
        <About />
        <Nav />
        <Footer />
      </div>
    )
}

export default App;
