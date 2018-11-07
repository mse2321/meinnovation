import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Intro from './Intro';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div id="container">
        <Header />
        <Intro />
        <Projects />
        <About />
        <Nav />
        <Footer />
      </div>
    );
  }
}

export default App;
