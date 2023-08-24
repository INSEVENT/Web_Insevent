import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Nav } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import cardData from "../data/card";
import { BiChevronRight } from "react-icons/bi";
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const limitWordsDescription = (text) => {
  const words = text.split(' ');
  if (words.length > 30) {
    return words.slice(0, 30).join(' ') + '...';
  }
  return text;
};

function Blog() {
  const headingRef = useRef(null);
  const navRef = useRef(null);
  const cardRefs = useRef([]);

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heading = headingRef.current;
      const nav = navRef.current;
      const headingTop = heading.getBoundingClientRect().top;
      const navTop = nav.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (headingTop < windowHeight && !showContent) {
        if (headingTop + heading.offsetHeight > 0) {
          setShowContent(true);
        }
      }

      if (navTop < windowHeight && !showContent) {
        if (navTop + nav.offsetHeight > 0) {
          setShowContent(true);
        }
      }

      cardRefs.current.forEach((cardRef) => {
        const cardTop = cardRef.getBoundingClientRect().top;
        if (cardTop < windowHeight && !showContent) {
          if (cardTop + cardRef.offsetHeight > 0) {
            setShowContent(true);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showContent]);


  return (
    <div className="m-5">
      <Container className="text-light" style={{ minWidth: "100%", minHeight: "100vh", paddingBottom:'10%' }}>
        <h1 ref={headingRef} className={showContent ? 'slide-Y mb-4 fw-bold header-blog' : ''}>EVENT</h1>
        <div ref={headingRef} className={showContent ? 'slide-Y mb-4 fw-bold' : ''}>Berikut adalah beberapa event yang ada di INSEVENT.</div>
        <div ref={navRef} className={showContent ? 'slide-Y fs-6 d-flex align-items-center justify-content-center mb-5' : ''}>
        </div>

        <div>
          <Row xs={1} md={2} className="g-4">
            {cardData.map((card, idx) => (
              <Col key={idx} ref={(el) => (cardRefs.current[idx] = el)} className={showContent ? `slide-Y${idx + 1}` : ''}>
                <Card className="card-blog">
                  <div className="d-flex align-items-center" style={{ fontSize: "14px" }}>
                    <Card.Img variant="" src={card.imgSrc} alt="Card Image" className="card-img" />
                    <Card.Body className="text-start">
                      <div>
                        <Card.Text>
                            <span className="" style={{ fontSize: "10px" }}>
                              {card.time}
                            </span>
                        </Card.Text>
                        <Card.Title className="fw-bold">{card.title}</Card.Title>
                        <Card.Text style={{ fontSize: "12px" }}>{limitWordsDescription(card.description)}</Card.Text>
                        <Card.Link>
                          <Link to={card.readMore}>
                            Read More<BiChevronRight className="ms-1" />
                          </Link>
                        </Card.Link>
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
