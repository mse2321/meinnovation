import React, { useState } from 'react';
import GalleryModal from './GalleryModal/GalleryModal';
import Selector from './Selector/';
import projects from '../../data/projects.json';
import galleryImage3 from '../../images/xpCalc.jpg';
import galleryImage2 from '../../images/bballQuiz.jpg';
import galleryImage1 from '../../images/muzak.jpg';
import { Container, Row, Col } from 'react-bootstrap';

const Gallery = () => {
	const images = [galleryImage1, galleryImage2, galleryImage3]
	const [itemIndex, setItemIndex] = useState(0);
	
    const changeProject = (e) => {
	    e.preventDefault();
	    let galleryIndex = e.target.getAttribute("data-item");

		setItemIndex(galleryIndex)
	}
	
    return (
	 	<Container fluid id="gallery_wrap">
			<Row id="content_wrap">
				<Col xs={12} md={7} lg={7} xl={8}>
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
				</Col>
				<Col xs={12} md={7} lg={7} xl={4}>
					<GalleryModal 
						title={projects[itemIndex].title} 
						desc={projects[itemIndex].desc} 
						link={projects[itemIndex].link} 
						link2={projects[itemIndex].link2} />
				</Col>
			</Row>
	    </Container>    
    );
}

export default Gallery;

/*

<Container fluid>
                    <Row id="content_wrap">
                        <Col xs={12} md={7} lg={7} xl={7}>
                            <ContentContainer>
                                <SearchBar />
                                <SearchResultsContainer />
                            </ContentContainer>
                        </Col>
                        <Col className="sidebar_container" xs={12} md={5} lg={5} xl={5}>
                            <Sidebar />
                        </Col>
                        <Footer />
                    </Row>
                </Container>

*/