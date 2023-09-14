import React, { useState } from "react";
import cardData from "../data/comp";
import { useEffect } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import Comp from "./pages.2/Comp";

function Competition() {
  const [info,setinfo] = useState("Poster")
  const vidkref = () =>{
    setinfo("Video Kreatif")
  }
  const poster = () =>{
    setinfo("Poster")
  }
  const uiux = () =>{
    setinfo("UI UX")
  }
  const ml = () =>{
    setinfo("Mobile Legends")
  }
  const dance = () =>{
    setinfo("Modern Dance")
  }
  const tari = () =>{
    setinfo("Tari Tradisional")
  }
  const akustik = () =>{
    setinfo("Akustik")
  }
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas saat halaman B dimuat
  }, []);
  
  return (
    <div className="sec1 justify-content-center align-items-center" style={{ minHeight: "150vh" }}>
      <Container>
      <Row>
      <Col> 
      <div className='ListGroup'>
        <div className='ListGroup-header'>List Perlombaan : </div>
        <ListGroup.Item action className='ListGroup-item' onClick={poster}>Poster</ListGroup.Item>
        <ListGroup.Item action className='ListGroup-item' onClick={vidkref}>Video Kreatif</ListGroup.Item>
        <ListGroup.Item action className='ListGroup-item' onClick={uiux}>UI UX</ListGroup.Item>
        <ListGroup.Item action className='ListGroup-item' onClick={ml}>Mobile Legends</ListGroup.Item>
        <ListGroup.Item action className='ListGroup-item' onClick={dance}>Modern Dance</ListGroup.Item>
        <ListGroup.Item action className='ListGroup-item' onClick={tari}>Tari Traditional</ListGroup.Item>
        <ListGroup.Item action className='ListGroup-item' onClick={akustik}>Akustik</ListGroup.Item>
      </div>
      </Col>
      <Col xs={8}>
      {cardData.map((card)=>{
      if(card.title === info){
      return(
      <div className="mt-5">
        <h1>{card.title}</h1>
        <h3 style={{ fontSize: "10px" }}>{card.time}</h3>
        <img
          src={card.imgSrc}
          alt="img"
          style={{ width: "300px", height: "300px" }}
        />
        <div className="m-5 mt-0" style={{ fontSize: "12px" }}>
          <p >{card.description}</p>
          <p >{card.paragraf1}</p>
        </div>
      </div>
      )
      }
      })}
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default Competition;
