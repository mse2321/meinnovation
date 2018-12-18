import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="contact_wrap">
          <h2>Contact</h2>
          <div className="contact_content">
            <form className="contact_form">
              <label>First Name</label>
              <input type="text" name="firstname" />
              <label>Company</label>
              <input type="text" name="company" />
              <label>What's your goal for this project?</label>
              <input type="text" name="goal" />
              <label>What can I help you with?</label>
              <input type="checkbox" name="web_development" value="web_development" /> Web Development
              <input type="checkbox" name="graphic_design" value="graphic_design" /> Graphic Design
              <label>Anything else I need to know?</label>
              <textarea name="details">
                Additional Details
              </textarea>
              <button type="button">Send Away!</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
