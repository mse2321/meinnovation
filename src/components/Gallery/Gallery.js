import React, { useState } from 'react';
import GalleryModal from './GalleryModal/';
import Selector from './Selector/';
import projects from '../../data/projects.json';
import galleryImage1 from '../../images/sample-image4-min.jpg';
import galleryImage2 from '../../images/sample-image1-min.jpg';
import galleryImage3 from '../../images/sample-image3-min.jpg';

const Gallery = (props) => {
	const images = [galleryImage1, galleryImage2, galleryImage3]
	const [itemIndex, setItemIndex] = useState(0);
	
    const changeProject = (e) => {
	    e.preventDefault();
	    let galleryIndex = e.target.getAttribute("data-item");

		setItemIndex(galleryIndex)
	}
	
	const showTheModal = (e) => {
	    e.preventDefault();
		props.showModal();
	}

    return (
	 	<div id="gallery_wrap">
	 	    <div className="gallery">
	            <div className="photos">
	            	<img className="gallery_image" src={images[itemIndex]} alt={projects[itemIndex].title} onClick={(e) => showTheModal(e)} />
	            </div>
	        </div>
	        <div className="slide_selection">
	            <ul className="slide_selectors">
	                {
						projects.map((project, index) => (
							<Selector key={index} index={index} selectedIndex={itemIndex} changeProject={(e) => changeProject(e)}/>
						))
					}
	            </ul>
	        </div>
	        <GalleryModal title={projects[itemIndex].title} 
	            desc={projects[itemIndex].desc} link={projects[itemIndex].link} link2={projects[itemIndex].link2} />
	    </div>    
    );
}

export default Gallery;

