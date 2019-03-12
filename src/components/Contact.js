import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "firstname" : "",
      "company" : "",
      "goal" : "",
      "details" : ""
    }
    this.handleForm = this.handleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleForm(e) {
    let target = e.target
    this.setState({
      [target.name]: target.value
    })
  }

  handleSubmit(e) {
      e.preventDefault();
      console.log(this.state);
  }

  render() {
    return (
      <section id="contact">
        <div className="contact_wrap">
          <h2>Contact</h2>
          <div className="contact_content">
            <form className="contact_form">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" value={ this.state.firstname } name="firstname" onChange={this.handleForm} />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input type="text" className="form-control" value={ this.state.company } name="company" onChange={this.handleForm} />
              </div>
              <div className="form-group">
                <label>What's your goal for this project?</label>
                <input type="text" className="form-control" value={ this.state.goal } name="goal" onChange={this.handleForm} />
              </div>
              <div className="form-group">
                <label>Anything else I need to know?</label>
                <textarea className="form-control" name="details" value={ this.state.details } rows="3" onChange={this.handleForm}></textarea>
              </div>
              <button type="button" onClick={this.handleSubmit}>Send Away!</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

//convert form-groups to components
