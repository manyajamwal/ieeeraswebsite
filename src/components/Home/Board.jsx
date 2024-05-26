import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BoardCard from "./BoardCards";
import Particle from "../Particle";
import faculty from "../../assets/Home/faculty.png";
import yug from "../../assets/Home/yug.png";
import gauri from "../../assets/Home/gauri.png";
import aditya from "../../assets/Home/aditya.png";
import ani from "../../assets/Home/ani.png";
import akshar from "../../assets/Home/akshar.png";
import induja from "../../assets/Home/induja.png";
import stuti from "../../assets/Home/stuti.png";
import parth from "../../assets/Home/parth.png";
import vaibhav from "../../assets/Home/vaibhav.png";
import keshav from "../../assets/Home/keshav.png";

function Board() {
  return (
    <Container fluid className="home-board-section">
      <Particle />
      <Container>
        <h1 className="purple text-center mb-4">FACULTY</h1>
        <Row className="justify-content-center mb-4">
          <Col md={3} className="board-card faculty-box">
            <BoardCard imgPath={faculty} title="Sumit Kumar Jindal" description="Faculty Coordinator" linkedin="https://www.linkedin.com/in/sumit-jindal-b991a2101/" />
          </Col>
        </Row>
        <h1 className="purple text-center mb-4">BOARD</h1>
        <Row className="justify-content-center mb-4">
          <Col sm={6} md={4} lg={3} className="board-card">
            <BoardCard imgPath={yug} title="Yugmita Katyayan" description="Chairperson" linkedin="" github=""/>
          </Col>
          <Col sm={6} md={4} lg={3} className="board-card">
            <BoardCard imgPath={gauri} title="Gaurpriya Singh Roy" description="Vice-Chairperson" linkedin="https://www.linkedin.com/in/gaurpriyasinghroy/" github="https://github.com/gaurpriyaroyyyy"/>
          </Col>

        </Row>
        <Row className="justify-content-center mb-4">
        <Col sm={6} md={4} lg={3} className="board-card">
            <BoardCard imgPath={aditya} title="Adtiya Purwar" description="Secretary" linkedin="https://www.linkedin.com/in/aditya-purwar-710890241" github="https://github.com/Aditya3012Purwar"/>
          </Col>
          <Col sm={6} md={4} lg={3} className="board-card">
            <BoardCard imgPath={ani} title="Anirudh Singareddy" description="Co-Secretary" linkedin="https://www.linkedin.com/in/anirudh-singareddy" github="https://github.com/anirudh233"/>
          </Col>
          <Col sm={6} md={4} lg={3} className="board-card">
            <BoardCard imgPath={akshar} title="Akshar Patel" description="Technical Head" linkedin="https://www.linkedin.com/in/akshar-patel-6101a91b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" github=""/>
          </Col>
          <Col sm={6} md={4} lg={3} className="board-card">
            <BoardCard imgPath={induja} title="Induja S" description="Design Head" linkedin="https://www.linkedin.com/in/induja-s-4623b2284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" github="https://github.com/indujsachu"/>
          </Col>
        </Row>
        <Row className="justify-content-center mb-4">
          <Col sm={6} md={4} lg={3} className="board-card">
            <BoardCard imgPath={stuti} title="Stuti Kothari" description="Finance Head" linkedin="https://www.linkedin.com/in/stuti-kothari-776810225/" github="https://github.com/BazingaStuti"/>
          </Col>
          <Col sm={6} md={4} lg={3} className="board-card">
            <BoardCard imgPath={parth} title="Parth Agarwal" description="Events Head" linkedin="https://www.linkedin.com/in/parth-agrawal-20a149235/" github="https://github.com/parth-agrawall"/>
          </Col>
          <Col sm={6} md={4} lg={3} className="board-card">
            <BoardCard imgPath={vaibhav} title="Vaibhav Kapoor" description="Management Head" linkedin="" github=""/>
          </Col>
          <Col sm={6} md={4} lg={3} className="board-card">
            <BoardCard imgPath={keshav} title="Keshav Gupta" description="R&D Head" linkedin="https://www.linkedin.com/in/keshav-gupta-43987321b/" github="https://github.com/Keshav0508"/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Board;