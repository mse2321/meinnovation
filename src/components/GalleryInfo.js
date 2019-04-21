import React, { Component } from 'react';
import { FaTimes } from "react-icons/fa";
import { connect } from 'react-redux';
import * as actions from '../actions';

class GalleryInfo extends Component {

  hideTheModal(e) {
    e.preventDefault();
    this.props.hideModal();
  }

  render() {
    return (
      <div id="metadata" className={this.props.display}>
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
            <a href={this.props.link} target="_blank" rel="noopener noreferrer"><button>View Online</button></a>
            <a href={this.props.link2} target="_blank" rel="noopener noreferrer"><button className="gitLink">View in GitHub</button></a>
          </div>
          <div className="meta_close" onClick={ this.hideTheModal.bind(this) }>
            <FaTimes />
          </div>
        </div>
      </div>     
    );
  }
}

var mapStateToProps = state => {
  return {
    display: state.display
  };
}

var mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch(actions.hideModalAction())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryInfo);