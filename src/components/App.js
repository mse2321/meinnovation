import React from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';
import Nav from './Nav';
import About from './About/';
import Home from './Home';
import MobileIntro from "./MobileIntro";

var mapStateToProps = state => {
  return {
    modalDisplay: state.modalDisplay
  };
}

const App = (props) => {
    return(
      <div className="main_container">
        {
          props.modalDisplay ? <div className="disableBackground" /> : ''
        }
        <MobileIntro />
        <Home />
        <About />
        <Nav />
        <Footer />
      </div>
    )
}

export default connect(mapStateToProps)(App);
