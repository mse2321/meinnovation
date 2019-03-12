import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import About from './About';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import Intro from "./Intro";

class App extends React.Component {
  render() {
    return(
      <div className="main_container">
        <Intro />
        <Home />
        <About />
        <Services />
        <Contact />
        <Nav />
        <Footer />
      </div>
    )
  }
}

export default App;
