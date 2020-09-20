import React from 'react';
import { FaTimes } from "react-icons/fa";

const GalleryInfo = (props) => {

  const viewOnlineText = 'View Online';
  const viewGitHubText = 'View in GitHub';

  const hideTheModal = (e) => {
    e.preventDefault();
    props.hideModal();
  }

    return (
      <div id="metadata" className={props.modalDisplay ? 'displayBlock' : 'displayNone'}>
        <div className="meta_wrap">
          <div>
            <div className="art_title">
              <h3>{props.title}</h3>
            </div>
            <div className="subdata desc">{props.desc}</div>
            <div className="subdata tech">{props.tech}</div>
          </div>
        </div>
        <div className="metadata_button_wrap">
          <div className="subdata subdata-link">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <button>{viewOnlineText}</button>
            </a>
            <a href={props.link2} target="_blank" rel="noopener noreferrer">
              <button className="gitLink">{viewGitHubText}</button>
            </a>
          </div>
          <div className="meta_close" onClick={ (e) => hideTheModal(e) }>
            <FaTimes />
          </div>
        </div>
      </div>     
    );
}

export default GalleryInfo;