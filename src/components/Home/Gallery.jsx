import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Gallery() {
  return (
    <Container fluid className="home-gallery">
      <Container>
        <h1 className="purple"><strong>Gallery</strong></h1>
        <h2 style={{ color: "white", paddingBottom: "40px" }}>Take a glimpse at our work</h2>
        <Row className="justify-content-center">
          <Col xs={12} md={4}>
            <img src="https://19arnab190201.github.io/ieeeRAS/assets/img/gallery/1.jpg" alt="" className="photo-gallery" />
          </Col>
          <Col xs={12} md={4}>
            <img src="https://19arnab190201.github.io/ieeeRAS/assets/img/gallery/3.jpg" alt="" className="photo-gallery" />
          </Col>
          <Col xs={12} md={4}>
            <img src="https://19arnab190201.github.io/ieeeRAS/assets/img/gallery/5.jpg" alt="" className="photo-gallery" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={4}>
            <img src="https://19arnab190201.github.io/ieeeRAS/assets/img/gallery/2.jpg" alt="" className="photo-gallery" />
          </Col>
          <Col xs={12} md={4}>
            <img src="https://19arnab190201.github.io/ieeeRAS/assets/img/gallery/4.jpg" alt="" className="photo-gallery" />
          </Col>
          <Col xs={12} md={4}>
            <img src="https://19arnab190201.github.io/ieeeRAS/assets/img/gallery/6.jpg" alt="" className="photo-gallery" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Gallery;
