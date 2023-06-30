import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image, Nav } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import cardData from "../data/card";

function Blog() {
  return (
    <div className="m-5">
      <Container
        className="text-light"
        style={{ minWidth: "100%", minHeight: "100vh" }}
      >
        <h1 className="mb-4">Short heading goes here</h1>
        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="fs-6 d-flex align-items-center justify-content-center mb-5">
          <Nav variant="pills" defaultActiveKey="#" className="flex-wrap">
            <Nav.Item>
              <Nav.Link href="#" className="text-light">
                View all
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" eventKey="link-1" className="text-light">
                Option 1
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" eventKey="link-2" className="text-light">
                Option 2
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" eventKey="link-3" className="text-light">
                Option 3
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" eventKey="link-4" className="text-light">
                Option 4
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <div className="fs-6">
          <Row xs={1} md={2} className="g-4">
            {cardData.map((card, idx) => (
              <Col key={idx}>
                <Card>
                  <div className="d-flex align-items-center">
                    <Card.Img
                      variant=""
                      src={card.imgSrc}
                      alt="Card Image"
                      style={{ maxWidth: "25%", maxHeight: "25%" }}
                    />
                    <Card.Body className="text-start">
                      <div>
                        <Card.Text>{card.category}</Card.Text>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.description}</Card.Text>
                        <Card.Link>{card.readMore}</Card.Link>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Blog;
