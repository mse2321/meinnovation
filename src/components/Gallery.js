import React, { Component } from 'react';
import { connect } from 'react-redux';
import GalleryInfo from './GalleryInfo';
import data from '../data/projects.json';
import * as actions from '../actions';
import galleryImage1 from '../images/sample-image1-min.jpg';
import galleryImage2 from '../images/sample-image2-min.jpg';
import galleryImage3 from '../images/sample-image3-min.jpg';
import galleryImage4 from '../images/sample-image4-min.jpg';


class Gallery extends Component {
	constructor(props) {
		super(props);
		const projects = data;

		this.state = {
			"index" : 0,
			"title" : projects[0].title,
			"desc" : projects[0].desc,
			"link" : projects[0].link,
			"link2" : projects[0].link2,
			"images" : [ galleryImage4, galleryImage1, galleryImage3, galleryImage2 ],
			"items" : [],
			"isActive" : ""
		};

		this.showTheModal = this.showTheModal.bind(this);
		this.changeProject = this.changeProject.bind(this);
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
	    let galleryIndex = e.target.getAttribute("item");
	    console.log(galleryIndex);

	    this.setState({
	    	"index": galleryIndex,
			"title": projects[galleryIndex].title,
			"desc": projects[galleryIndex].desc,
			"link": projects[galleryIndex].link,
			"link2": projects[galleryIndex].link2,
			"image": projects[galleryIndex].image
		})
	}
	
	showTheModal(e) {
	    e.preventDefault();
		this.props.showModal();
	}

  	render() {

    	return (
	 		<div id="gallery_wrap">
	 			 <div className="gallery">
	              	<div className="photos">
	            		<img className="gallery_image"
	            			src={this.state.images[this.state.index]} alt={this.props.title} onClick={this.showTheModal} />
	            	</div>
	        	</div>
	            <div className="slide_selection">
	                <div className="slide_selectors">
	                	{ this.state.items }
	                </div>
	            </div>
	            <GalleryInfo className={this.props.display} title={this.state.title} 
	            	desc={this.state.desc} link={this.state.link} link2={this.state.link2} />
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
    showModal: () => dispatch(actions.showModalAction())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

