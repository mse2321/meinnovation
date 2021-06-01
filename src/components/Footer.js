import React from 'react';

const Footer = () => {
	const newDate = new Date()
	const year = newDate.getFullYear();
	const footerContent = 'ME Innovations';

    return (
      <footer>
        <p>&copy;{ year + ' ' + footerContent}</p>
      </footer>
    );
}

export default Footer;
