import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <aside>
        <nav>
          <ul id="nav_links">
            <li><a href="intro">Home</a></li>
            <li><a href="projects">Projects</a></li>
            <li><a href="about">About</a></li>
          </ul>
        </nav>
      </aside>
    );
  }
}

export default Nav;