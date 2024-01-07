"use client"
import Footer from './Footer';
import Header from './Header';
import Home from './Home';

const App = () => {

    return(
      <div className="main_container">
        <Header />
        <div className="intro_container">
          <Home />
        </div>
        <Footer />
      </div>
    )
}

export default App;
