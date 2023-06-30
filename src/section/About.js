import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { deskripsi_event } from "../data/about";
import { Image } from "react-bootstrap";
import img1 from "../assets/logo.png";

function About() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Container>
        <Row>
          <div className="header-about fs-1">INSEVENT</div>
        </Row>
        <Row>
          <Col style={{textAlign:'justify'}} xs={6}>
            <h2>About This Event</h2>
            <p className="text-about fs-6">{deskripsi_event.text}</p>
            <p className="text-about fs-6">{deskripsi_event.text2}</p>
          </Col>
          <Col>
            <Image
              src={img1}
              className="img-fluid align-items-center justify-content-center"
              style={{ width: "50vw", height: "50vh" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;

