import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import moment from "moment";

const getCurrentTime = () => {
  return moment().format("DD MMM YYYY");
};

const cardData = [
  {
    title: "Competition",
    time: getCurrentTime(),
    description: `INSEVENT mempersembahkan berbagai lomba kreatif yang menarik. Dalam kesempatan ini, 
    INSEVENT akan menyajikan rangkaian kompetisi yang beragam, menantang, dan memberikan kesempatan bagi peserta untuk mengekspresikan bakat serta kreativitasnya 
    dalam berbagai bidang.
    Selain memberikan kesempatan bagi para peserta untuk mengekspresikan bakat dan kreativitasnya, 
    INSEVENT juga bertekad untuk menghadirkan pengalaman kompetisi yang mengesankan. `,
    comp1: `Poster`,
    comp2: `UI/UX`,
    comp3: `E-Sport (Mobile Legend)`,
    comp4: `Dance`,
    comp5: `Band`,
    comp6: `Video Kreatif`,
  },

  {
    title: "Talkshow",
    time: getCurrentTime(),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
    dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, 
    varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
    non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. 
    Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.`,
    paragraf1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
    dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, 
    varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
    non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. 
    Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.`,
  },

  {
    title: "Pameran",
    time: getCurrentTime(),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
    dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, 
    varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
    non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. 
    Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.`,
    paragraf1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
    dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, 
    varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
    non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. 
    Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.`,
  },

  {
    title: "Bazar",
    time: getCurrentTime(),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
    dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, 
    varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
    non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. 
    Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.`,
    paragraf1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
    dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, 
    varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
    non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. 
    Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.`,
  },
  {
    title: "Charity",
    time: getCurrentTime(),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
    dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, 
    varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
    non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. 
    Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.`,
    paragraf1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
    dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, 
    varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
    non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. 
    Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.`,
  },
];

const limitWordsDescription = (text) => {
  const words = text.split(" ");
  if (words.length > 30) {
    return words.slice(0, 30).join(" ") + "...";
  }
  return text;
};

const Blog = () => {
  const cardRefs = useRef([]);
  const headingRef = useRef(null);
  const navRef = useRef(null);

  const [showContent, setShowContent] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showContent]);

  const handleReadMore = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="m-5">
      <Container>
        <h1
          ref={headingRef}
          className={showContent ? "slide-Y mb-4 fw-bold header-blog" : ""}
        >
          EVENT
        </h1>
        <div
          ref={headingRef}
          className={showContent ? "slide-Y mb-4 fw-bold" : ""}
        >
          Berikut adalah beberapa event yang ada di INSEVENT.
        </div>
        <div
          ref={navRef}
          className={
            showContent
              ? "slide-Y fs-6 d-flex align-items-center justify-content-center mb-5"
              : ""
          }
        ></div>
        <div>
          <Row xs={1} md={2} className="g-5">
            {cardData.map((card, idx) => (
              <Col
                key={idx}
                ref={(el) => (cardRefs.current[idx] = el)}
                className={showContent ? `slide-Y${idx + 1}` : ""}
              >
                <Card className="card-blog">
                  <Card.Text>
                    <span className="" style={{ fontSize: "10px" }}>
                      {card.time}
                    </span>
                  </Card.Text>
                  <Card.Title className="fw-bold">{card.title}</Card.Title>
                  <Card.Text style={{ fontSize: "12px" }}>
                    {limitWordsDescription(card.description)}
                  </Card.Text>
                  <Card.Link>
                    <Link to="#" onClick={() => handleReadMore(card)}>
                      Read More
                      <BiChevronRight className="ms-1" />
                    </Link>
                  </Card.Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <Modal
          show={selectedCard !== null}
          onHide={handleCloseModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="popup"
        >
          <Modal.Header closeButton className="popup-header">
          </Modal.Header>
          <img src="https://placeholder.com/500x500" alt=""className="popup-img" />
          <Modal.Title className="popup-title">
              {selectedCard?.title}
            </Modal.Title>
          <Modal.Body className="popup-description">
            {selectedCard?.description}
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default Blog;
