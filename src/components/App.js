import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import About from './About';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';

class App extends React.Component {
  render() {
    return(
      <div className="main_container">
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
