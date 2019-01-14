import React, { Component } from 'react';
import { FaTimes } from "react-icons/fa";

class GalleryInfo extends Component {
    constructor(props) {
    super(props);

    this.state = {
      "display" : "displayNone"
    }
    this.hideModal = this.hideModal.bind(this);
  }

  hideModal(e) {
    e.preventDefault();

    this.setState({
      "display" : "displayNone"
    })

  }
  render() {
    return (
      <div id="metadata" className={this.props.class}>
        <div className="meta_wrap">
          <div>
            <div className="art_title">
              <h3>{this.props.title}</h3>
            </div>
            <div className="subdata desc">{this.props.desc}</div>
            <div className="subdata tech">{this.props.tech}</div>
          </div>
        </div>
        <div className="metadata_button_wrap">
          <div className="subdata subdata-link">
            <a href={this.props.link} target="_blank"><button>View Online</button></a>
            <a href={this.props.link2} target="_blank"><button className="gitLink">View in GitHub</button></a>
          </div>
          <div className="meta_close" onClick={this.hideModal}>
            <FaTimes />
          </div>
        </div>
      </div>     
    );
  }
}

export default GalleryInfo;