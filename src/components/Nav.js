import React, { Component } from 'react';
import { FaHome, FaUser, FaConciergeBell, FaBookOpen } from "react-icons/fa";

class Nav extends Component {
  render() {
    return (
      <aside>
        <nav>
          <ul className="nav_links">
            <li><a href="intro">Home</a></li>
            <li><a href="projects">Projects</a></li>
            <li><a href="about">About</a></li>
            <li><a href="services">Services</a></li>
          </ul>
          <ul className="nav_links_mobile">
            <li><a href="intro"><FaHome className="nav_links_mobile_icons" /><br/>Home</a></li>
            <li><a href="projects"><FaBookOpen className="nav_links_mobile_icons" /><br/>Projects</a></li>
            <li><a href="about"><FaUser className="nav_links_mobile_icons" /><br/>About</a></li>
            <li><a href="services"><FaConciergeBell className="nav_links_mobile_icons" /><br/>Services</a></li>
          </ul>
        </nav>
      </aside>
    );
  }
}

export default Nav;