import React, { Component } from 'react';
import GalleryInfo from './GalleryInfo';
import data from '../data/projects.json';
import ImageGallery from 'react-image-gallery';

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
			"items" : [],
			"isActive" : ""
		}
		this.showModal = this.showModal.bind(this);
	}

	componentDidMount() {
		const projects = data;
		if (projects.length < 5) { 
  			const itemElements = projects.map((project, index) => (
	            <a key={index} href="sample" className={this.state.isActive} item={index} onClick={this.changeProject}>&#8226;</a>
	        ));

	        this.setState({
				"items" : itemElements
			});
        }
	}

	showModal(e) {
	    e.preventDefault();

	    const projects = data;
	    let index = 1;

	    this.setState({
			"title": projects[index].title,
			"desc": projects[index].desc,
			"link": projects[index].link,
			"link2": projects[index].link2,
			"display" : "displayBlock"
		})

	}

  	render() {
  		const images = [
	  		{
		      	"original": "images/sample-image4-min.jpg"
			},
			{
				"original": "images/sample-image1-min.jpg"
			},
			{	
				"original": "images/sample-image3-min.jpg"
			},
			{
				"original": "images/sample-image2-min.jpg"
			}
	    ]

    	return (
	 		<div id="gallery_wrap">
	            <ImageGallery items={images} 
	            	onClick={this.showModal} 
	            	showBullets={true} 
	            	lazyLoad={true} 
	            	showPlayButton={false}
	            	showFullscreenButton={false}
	            	showThumbnails={false} />
	            <GalleryInfo class={this.state.display} title={this.state.title} 
	            	desc={this.state.desc} link={this.state.link} link2={this.state.link2} />
	        </div>    
    	);
  	}
}

export default Gallery;

