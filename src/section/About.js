import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { deskripsi_event } from "../data/about";
import { Image } from "react-bootstrap";
import img1 from "../assets/logo.png";

function About() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ maxWidth: "100%", maxHeight: "100%" }}>
      <Container>
        <Row>
          <div className="header-about">INSEVENT</div>
        </Row>
        <Row className="text-start d-flex align-items-center justify-content-center">
          <Col xs={12} md={6}>
            <h2>About This Event</h2>
            <p className="text-about fs-6">{deskripsi_event.text}</p>
            <p className="text-about fs-6">{deskripsi_event.text2}</p>
          </Col>
          <Col xs={12} md={6}>
            <Image src={img1} className="img-fluid" style={{ maxWidth: "100%", maxHeight: "100%" }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
