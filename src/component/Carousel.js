import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img4.jpg";
import img3 from "../assets/img/img3.jpg";
import React, { useState, useEffect } from "react";

function Carou() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var date = new Date().getDate();
    let monthIndex = new Date().getMonth();
    let monthName = monthNames[monthIndex];
    var year = new Date().getFullYear();
    setCurrentDate(monthName + " " + date + "," + year);
  }, []);
  return (
    <>
      <Carousel className="carousel">
        <Carousel.Item interval={1000}>
          <img className="d-block w-100 carou" src={img2} alt="First slide" />
          <Carousel.Caption className="caroucapt"></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100 carou" src={img1} alt="Second slide" />
          <Carousel.Caption className="caroucapt">
            {/* <div style={{fontSize:'26px'}}>{currentDate}</div> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100 carou" src={img3} alt="Third slide" />
          <Carousel.Caption className="caroucapt">
            {/* <div style={{fontSize:'26px'}}>{currentDate}</div> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Carou;
