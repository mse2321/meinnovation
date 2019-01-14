import React, { Component, Fragment } from 'react';
import GalleryInfo from './GalleryInfo';
import data from '../data/projects.json';

class Gallery extends Component {
	constructor(props) {
		super(props);
		const projects = data;

		this.state = {
			"display" : "displayNone",
			"title" : projects[0].title,
			"desc" : projects[0].desc,
			"link" : projects[0].link,
			"link2" : projects[0].link2,
			"image" : projects[0].image,
			"items" : []
		}
		this.changeProject = this.changeProject.bind(this);
		this.showModal = this.showModal.bind(this);
	}

	componentDidMount() {
		const projects = data;
		if (projects.length < 5) { 
  			const itemElements = projects.map((project, index) => (
	            <a key={index} href="sample" item={index} onClick={this.changeProject}>&#8226;</a>
	        ));

	        this.setState({
				"items" : itemElements
			});
        }
	}

	changeProject(e) {
	    e.preventDefault();
	    const projects = data;
	    let index = e.target.getAttribute("item");

	    this.setState({
			"title": projects[index].title,
			"desc": projects[index].desc,
			"link": projects[index].link,
			"link2": projects[index].link2,
			"image": projects[index].image
		})

	}

	showModal(e) {
	    e.preventDefault();

		this.setState({
			"display" : "displayBlock"
		})

	}

  	render() {
    	return (
	 		<div id="gallery_wrap">
	            <div className="gallery">
	              	<div className="photos">
	            		<img id="gallery_image" className="slide-animation"
	            			src={this.state.image} alt={this.props.title} onClick={this.showModal} />
	            	</div>
	        	</div>
	            <div className="slide_selection">
	                <div className="slide_selectors">{ this.state.items }</div>
	            </div>
	            <GalleryInfo class={this.state.display} title={this.state.title} 
	            	desc={this.state.desc} link={this.state.link} link2={this.state.link2} />
	        </div>    
    	);
  	}
}

export default Gallery;

