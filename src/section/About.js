import React, { useRef, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import img1 from "../assets/img/logo.png";

const deskripsi_event = {
  text: [
    `INSEVENT (Information System Event) merupakan sebuah kegiatan tahunan  yang diselenggarakan oleh program studi Sistem Informasi di Fakultas Teknik, Universitas Mulawarman. Tema INSEVENT tahun ini adalah "Euphoria Of Technological Innovation and Culture (ECHOTURE)".`,
  ],
  text2: [
    ` INSEVENT menyelenggarakan berbagai kegiatan akademik maupun non-akademik, termasuk seminar dan berbagai kompetisi lainnya.`,
  ],
};

const About= () => {
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
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ maxWidth: "100%", maxHeight: "100%" }}
    >
      <Container>
        <Row ref={sectionRef1} className={showContent1 ? "slide-in" : ""}>
          <div className="about-title">INSEVENT</div>
          <div className="about-title">2023</div>
        </Row>
        <Row
          ref={sectionRef2}
          className={
            showContent2
              ? "slide-in1 text-start d-flex align-items-center justify-content-center"
              : ""
          }
        >
          <Col xs={12} md={6} className="order-2 order-md-1">
            <Container>
              <div className="about-subtitle">
                About This Event
                <p>{deskripsi_event.text}</p>
                <p>{deskripsi_event.text2}</p>
              </div>
            </Container>
          </Col>
          <Col xs={12} md={6} className="order-1 order-md-2">
            <Image
              src={img1}
              className="img-fluid"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
