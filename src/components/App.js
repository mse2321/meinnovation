import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import MobileIntro from "./MobileIntro";

const App = () => {

    return(
      <div className="main_container">
        <Header />
        <div className="mobile_intro_container">
          <MobileIntro />
          <Home />
        </div>
        <Footer />
      </div>
    )
}

export default App;
