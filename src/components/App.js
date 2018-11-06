import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Intro from './components/Intro';
import Projects from './components/Projects';

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
