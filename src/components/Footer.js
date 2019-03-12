import React, { Component } from 'react';

class Footer extends Component {
	constructor(props) {
		super(props);
		
		let newDate = new Date()
		let year = newDate.getFullYear();

		this.state = {
			"currentYear" : year
		}
	}
  render() {
    return (
      <footer>
        <p>&copy;{ this.state.currentYear } ME Innovation Services</p>
      </footer>
    );
  }
}

export default Footer;
