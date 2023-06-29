import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/bgin7.png';
import React, {useState, useEffect} from 'react';
import {GoLocation} from 'react-icons/go';
import logo from '../assets/logo.png';
import { Button } from 'react-bootstrap';

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
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 carou"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption className='caroucapt'>
        <div style={{fontSize:'26px'}}>{currentDate}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <GoLocation/> Sistem Informasi FT UNMUL
        </p>
        <Button>See More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 carou"
          src={img1}
          alt="Second slide"
        />
        <Carousel.Caption className='caroucapt'>
        <div style={{fontSize:'26px'}}>{currentDate}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <GoLocation/> Sistem Informasi FT UNMUL
        </p>
        <Button>See More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 carou"
          src={img1}
          alt="Third slide"
        />
        <Carousel.Caption className='caroucapt'>
        <div style={{fontSize:'26px'}}>{currentDate}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <GoLocation/> Sistem Informasi FT UNMUL
        </p>
        <Button>See More</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carou;