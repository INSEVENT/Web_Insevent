import React, { useRef, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { deskripsi_event } from "../data/about";
import { Image } from "react-bootstrap";
import img1 from "../assets/logo.png";

function About() {
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section1 = sectionRef1.current;
      const section2 = sectionRef2.current;
      const sectionTop1 = section1.getBoundingClientRect().top;
      const sectionTop2 = section2.getBoundingClientRect().top;
      const sectionHeight1 = section1.offsetHeight;
      const sectionHeight2 = section2.offsetHeight;
      const windowHeight = window.innerHeight;

      if (sectionTop1 < windowHeight && !showContent1) {
        if (sectionTop1 + sectionHeight1 > 0) {
          setShowContent1(true);
        }
      }

      if (sectionTop2 < windowHeight && !showContent2) {
        if (sectionTop2 + sectionHeight2 > 0) {
          setShowContent2(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showContent1, showContent2]);

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ maxWidth: "100%", maxHeight: "100%" }}>
      <Container>
        <Row ref={sectionRef1} className={showContent1 ? "slide-in" : ""}>
          <div className="header-about">INSEVENT</div>
        </Row>
        <Row ref={sectionRef2} className={showContent2 ? "slide-in1 text-start d-flex align-items-center justify-content-center" : ""}>
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
