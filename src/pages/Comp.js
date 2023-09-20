import React, { useState } from "react";
import cardData from "../data/comp";
import { useEffect } from "react";
import { Col, Container, ListGroup, Row, Card, CardGroup } from "react-bootstrap";
import { FiMapPin } from "react-icons/fi";

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
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="sec1 justify-content-center align-items-center" style={{ paddingTop: "7%" }}>
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
    console.log(card.juara)
    if(card.title === info){
    return(
    <div className="comp-info">
      <div className="comp-header">{card.title}</div>
      <div style={{ fontSize: "2vw" }}>{card.time}</div>
      <img alt="img" className="img-comp" src={card.imgSrc}></img>
      <div style={{marginBottom:'5%'}}>
      <div>Timeline</div>
      {card.info.detail.map((detailItem, index) => (
        <div key={index}>
          <Row style={{textAlign:"left"}}>
            <Col>{detailItem}</Col>
            <Col>{card.info.agenda[index]}</Col>
          </Row>
        </div>
      ))}
      </div>
      <div >
        <CardGroup>
        <Card bg="dark" text="light" className="col-card">
          <Card.Body>
            <Card.Title>Fee</Card.Title>
            <Card.Text className="card-fee">{card.biaya}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Hadiah</Card.Title>
            {Object.values(card.juara).map((item)=>{
            return(
              <Card.Text>{item}</Card.Text>
              )
            })}
          </Card.Body>
        </Card>
        </CardGroup>
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
