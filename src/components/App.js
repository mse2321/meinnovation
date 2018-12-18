import React, { Component } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import About from './About';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';

class App extends React.Component {
  render() {
    return(
      <div id="container">
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
