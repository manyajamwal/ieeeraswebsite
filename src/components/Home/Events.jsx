// Events.js
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Events.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reboot from "../../assets/Home/reboot.svg";
import roboescape from "../../assets/Home/roboescape.svg";


function Events() {
  const settings = {
    dots: true,
    infinite: true, // Enable looping
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Container fluid className="home-event-section" id="event">
      <Container>
        <Row>
          <Col md={12} className="projects-header">
          <h1 style={{ fontSize: "3vw", textAlign: "center" }} >
            <span className="purple"> EVENTS </span> 
          </h1>
          </Col>
        </Row>

          <br></br>
          <Row>
          <Col md={12} className="projects-body">
          <Slider {...settings}>
            <div className="project-item">
              <div className="project-box">
                <div className="project-img">
                  <img
                    src={reboot}
                    alt="event1 pic"
                    className="img-fluid"
                    style={{ maxHeight: "200px" }}
                  />                
                </div>
                <br></br>
                <p>The sequel to our annual hackathon, REBOOT 3.0, presents an intensive 36-hour event where participants immerse themselves in continuous collaboration. Throughout the hackathon, attendees will be treated to enlightening presentations by esteemed speakers, providing valuable insights. To add excitement and foster creativity, engaging contests will be interspersed, offering a refreshing break from the intense work sessions.
                The pinnacle of the event will be the evaluation of projects by a panel of distinguished experts, each renowned in their respective fields. Their discerning judgment will culminate in the recognition of the three most innovative ideas conceived from scratch during the hackathon.
                REBOOT 3.0 promises to be an unparalleled experience, combining relentless innovation, intellectual discourse, and spirited competition to inspire and propel participants towards groundbreaking solutions.</p>
              </div>
            </div>
            <div className="project-item">
              <div className="project-box">
              <div className="project-img">
                  <img
                    src={roboescape}
                    alt="event2 pic"
                    className="img-fluid"
                    style={{ maxHeight: "150px" }}
                  />                
                </div>
                <br></br>
                <p>Participants immersed themselves in the world of Roboescape, where every moment was filled with excitement. They faced challenging puzzles and mysterious riddles, each one leading to the next level of fun. As they delved deeper, the puzzles became even more intriguing, keeping them engaged and eager for more.

                Amidst the thrill of the game, participants remained vigilant, ready for any surprises that might come their way. Winners were celebrated with exciting prizes, adding to the excitement of the event.Roboescape offers an extraordinary adventure, seamlessly blending limitless innovation with cherished moments shared among friends and the triumphs over challenges.</p>
              </div>
            </div>
            <div className="project-item">
              <div className="project-box">
                <h2>RASVERSE</h2>
                <br></br>
                <br></br>

                <p>The successfully held event was a dynamic platform that welcomed young and budding minds to unleash their creativity and tackle real-world problems, regardless of their technical background. Participants were encouraged to pitch their innovative ideas aimed at addressing pressing challenges in society, industries, or communities.The event not only showcased the creativity and ingenuity of the participants but also provided a platform for networking and collaboration.Overall, the event celebrated innovative thinking and entrepreneurship, empowering young minds to turn their ideas into tangible solutions that can make a meaningful difference in the world.</p>
              </div>
            </div>
          </Slider>
          </Col>

          </Row>

        </Container>
      </Container>
  );
}

export default Events;
