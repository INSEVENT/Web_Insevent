import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img4.jpg';
import img3 from '../assets/img3.jpg';
import React, {useState, useEffect} from 'react';
import {GoLocation} from 'react-icons/go';
import { Button, Col, Container, Row } from 'react-bootstrap';
import img from '../assets/img2.png'

function Carou() {
    const [currentDate, setCurrentDate] = useState('');
  
  useEffect(() => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date().getDate(); //Current Date
    let monthIndex = (new Date().getMonth());
    let monthName = monthNames[monthIndex];
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(
       monthName + ' ' + date + ',' + year 
    );
  }, []);
  return (
    <Container style={{paddingTop:'7%'}}>
    <div>
      <Row>
        <Col xs={12} md={8} className='carou-content1'>
          <div className='carou-header'>Euphoria of Technological <br/>Innovation and Culture</div>
        </Col>
        <Col xs={12} md={4} className='carou-content2'>
        {/* <img className='img-carou' src={img}></img> */}
        <p>
          <GoLocation/> Sistem Informasi FT UNMUL
        </p>
        {/* <div style={{fontSize:'26px'}}>{currentDate}</div>   */}
        <p className='carou-text'>Kolaborasi antara keterampilan teknologi dan menghidupkan kembali nilai-nilai kebudayaan lokal. </p>
        <Button><a>See More</a></Button>
        </Col>
      </Row>
    </div>
    <Carousel className='carousel'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 carou"
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption className='caroucapt'>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 carou"
          src={img1}
          alt="Second slide"
        />
        <Carousel.Caption className='caroucapt'>
        {/* <div style={{fontSize:'26px'}}>{currentDate}</div> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 carou"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption className='caroucapt'>
        {/* <div style={{fontSize:'26px'}}>{currentDate}</div> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default Carou;