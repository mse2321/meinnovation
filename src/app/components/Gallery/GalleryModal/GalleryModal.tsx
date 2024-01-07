import React from 'react';

const GalleryInfo = (props: any) => {
  const { toggleModal } = props;

  const viewOnlineText = 'Online';
  const viewGitHubText = 'GitHub';

  const closeModal = () => {
    toggleModal(false);
  }

  return (
    <div id="metadata">
      <div className="meta_wrap">
        <div>
          <div className="art_title">
            <h3>{props.title}</h3>
          </div>
          <div>
            <button className="close" onClick={() => closeModal()}>x</button>
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
      </div>
    </div>     
  );
}

export default GalleryInfo;