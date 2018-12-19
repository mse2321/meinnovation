import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="contact_wrap">
          <h2>Contact</h2>
          <div className="contact_content">
            <form className="contact_form">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" name="firstname" />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input type="text" className="form-control" name="company" />
              </div>
              <div className="form-group">
                <label>What's your goal for this project?</label>
                <input type="text" className="form-control" name="goal" />
              </div>
              <div className="form-group">
                <label>Anything else I need to know?</label>
                <textarea className="form-control" name="details" rows="3">
                  Additional Details
                </textarea>
              </div>
              <button type="button">Send Away!</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
