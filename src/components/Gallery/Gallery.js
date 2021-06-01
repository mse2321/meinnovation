import React, { useState } from 'react';
import GalleryModal from './GalleryModal/GalleryModal';
import projects from '../../data/projects.json';
import galleryImage3 from '../../images/xpCalc.jpg';
import galleryImage2 from '../../images/bballQuiz.jpg';
import galleryImage1 from '../../images/muzak.jpg';
import { Container, Row, Col } from 'react-bootstrap';

const Gallery = () => {
	const images = [galleryImage1, galleryImage2, galleryImage3]
	const [itemIndex, setItemIndex] = useState(0);
	const [showModal, toggleModal] = useState(false);
	
    const changeProject = (e) => {
	    e.preventDefault();
	    let galleryIndex = e.target.getAttribute("data-item");

		setItemIndex(galleryIndex)
	}

	const showTheModal = () => {
		toggleModal(true);
	}
	
    return (
	 	<Container fluid id="gallery_wrap">
			<Row id="content_wrap">
				<div className="gallery_container">
					<div className="gallery">
						<div className="photos">
							<div className="gallery_item">
								<img className="gallery_image" src={images[0]} alt={projects[itemIndex].title} onClick={() => showTheModal()} />
								{
									showModal &&
										<GalleryModal 
											toggleModal={toggleModal}
											title={projects[itemIndex].title} 
											desc={projects[itemIndex].desc} 
											link={projects[itemIndex].link} 
											link2={projects[itemIndex].link2} />
								}
							</div>
							<div className="gallery_item">
								<img className="gallery_image" src={images[0]} alt={projects[itemIndex].title} onClick={() => showTheModal()} />
								{
									showModal &&
										<GalleryModal 
											toggleModal={toggleModal}
											title={projects[itemIndex].title} 
											desc={projects[itemIndex].desc} 
											link={projects[itemIndex].link} 
											link2={projects[itemIndex].link2} />
								}
							</div>
							<div className="gallery_item">
								<img className="gallery_image" src={images[0]} alt={projects[itemIndex].title} onClick={() => showTheModal()} />
								{
									showModal &&
										<GalleryModal 
											toggleModal={toggleModal}
											title={projects[itemIndex].title} 
											desc={projects[itemIndex].desc} 
											link={projects[itemIndex].link} 
											link2={projects[itemIndex].link2} />
								}
							</div>
						</div>
					</div>
				</div>
			</Row>
	    </Container>    
    );
}

export default Gallery;