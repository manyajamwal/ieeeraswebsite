import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Events from "./Events";
import Board from "./Board";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Blogs from "./Blog_g";


function Home({ scrollToElement }) {
  const aboutRef = useRef(null);
  const eventsRef = useRef(null);
  const blogsRef = useRef(null);
  const boardRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const scrollToRef = (ref, offset = 0) => {
      if (ref && ref.current) {
        window.scrollTo({
          top: ref.current.offsetTop - offset,
          behavior: "smooth",
        });
      }
    };

    switch (scrollToElement) {
      case "about":
        scrollToRef(aboutRef);
        break;
      case "events":
        scrollToRef(eventsRef, 60); // Adjust offset as needed
        break;
      case "blogs":
          scrollToRef(blogsRef, 60); // Adjust offset as needed
          break;
      case "board":
        scrollToRef(boardRef, 60); // Adjust offset as needed
        break;
      case "gallery":
        scrollToRef(galleryRef, 60); // Adjust offset as needed
        break;
      case "contact":
        scrollToRef(contactRef, 60); // Adjust offset as needed
        break;
      default:
        scrollToRef(); // Scroll to the top of the page
        break;
    }
  }, [scrollToElement]);

  return (
    <section>
      <Particle />
      <Container fluid className="home-section" id="home">
        <Container fluid className="home-content">
          <Row className="justify-content">
            <Col md={7} className="home-header" style={{ paddingLeft: "40px" }}>
              <h1 className="heading" style={{ fontSize: "2.5vw" }}>
                Welcome to
              </h1>
              <h1 className="heading-name">
                <strong className="main-name"> IEEE - Robotics and Automation Society</strong>
              </h1>
              <h1 className="heading">
                Here Innovation Sparks, Solutions Unfold with AI and Robotics
              </h1>

            </Col>
            <Col md={5}>
            </Col>
          </Row>
        </Container>
      </Container>

      <div ref={aboutRef}>
        <Home2 />
      </div>

      <div ref={eventsRef}>
        <Events />
      </div>

      
      <div ref={blogsRef}>
        <Blogs />
      </div>

      <div ref={boardRef}>
        <Board />
      </div>

      <div ref={galleryRef}>
        <Gallery />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
    </section>
  );
}

export default Home;
