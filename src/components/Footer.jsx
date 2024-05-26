import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logo_light from '../../../ieeeras/src/assets/Home/RASLOGO.png'


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Container>
        <Row className="footer-section">  
        <Col md={2} className="footer-col">
        <img src={logo_light} alt="" className="raslogo" />
        </Col>
        <Col md={2} className="footer-col">

</Col>
          <Col md={2} className="footer-col">
            <h3 style={{color:"white"}}><strong>About us</strong></h3>
            <a href="#" >HOME</a><br></br>
            <a href="#" >BOARD</a><br></br>
            <a href="#" >ABOUT US</a>
          </Col>
  
          <Col md={2} className="footer-col">
            <h3 style={{color:"white"}}><strong>Our Domains</strong></h3>
            <a href="#" >Technical</a><br></br>
            <a href="#" >Management</a><br></br>
            <a href="#" >Design</a>
          </Col>
          <Col md={2} className="footer-col">
            <h3 style={{color:"white"}}><strong>Developers</strong></h3>
            <a href="#" >Manya Jamwal</a><br></br>
            <a href="#" >Anvi Kapoor</a><br></br>
            <a href="#" >Swastika</a><br></br>
            <a href="#" >Vasu Johri</a><br></br>
            
            

          </Col>
        <Col md={1} className="footer-col">
        <ul className="home-about-social-links">
            
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/company/ieee-ras-vit/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ieeerasvit?igsh=MWplNGRpOHhpNjQwZg=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              
            </ul>
        </Col>
        </Row>
      </Container>
      <Row>
        <Col md="15" className="footer-copywright">
          <h3>Designed and Developed by IEEE-RAS ©2024</h3>
        </Col>
        <Col md="4" className="footer-copywright">
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            

            
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
