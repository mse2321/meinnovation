import React, { Component } from 'react';

class GalleryInfo extends Component {
  render() {
    return (
      <div id="metadata">
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
          <div className="meta_close">
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
      </div>     
    );
  }
}

export default GalleryInfo;
