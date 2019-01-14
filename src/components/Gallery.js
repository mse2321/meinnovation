import React, { Component, Fragment } from 'react';
import GalleryInfo from './GalleryInfo';
//import { Data } from '../data/projects.json';

class Gallery extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "something",
			desc: "something else",
			link: "http://sample.com",
			link2: "http://sample.com"
		}
		this.changeProject = this.changeProject.bind(this);
	}

	changeProject(e) {
		e.preventDefault();
		console.log("project changing");
	}
  	render() {
    	return (
	 		<div id="gallery_wrap">
	            <div className="gallery">
	              	<div className="photos">
	            		<img id="gallery_image" className="slide-animation"  
	            			src={this.props.image}  alt={this.props.title} /> 
	            	</div>
	        	</div>
	            <div className="slide_selection">
	                <div className="slide_selectors">
	                  <a className="active" href="sample" onClick={this.changeProject}>&#8226;</a>
	                </div>
	            </div>
	            <GalleryInfo title={this.state.title} desc={this.state.desc} link={this.state.link} link2={this.state.link2} />
	        </div>    
    	);
  	}
}

export default Gallery;

