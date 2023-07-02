import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import inforsa from '../assets/inforsa.png';
import insevent from '../assets/logo.png';

export default class Sponsor extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 1,
      cssEase: "linear"
    };
    return (
        <Container className="sponsor-medpart">
        <div>
            <div className="sponsor">SPONSOR AND MEDIA PARTNER</div>
            <Slider {...settings}>
            <div>
                <img src={inforsa} alt="img1" className="img-sponsor-medpart"></img>
            </div>
            <div>
                <img src={insevent} alt="img1" className="img-sponsor-medpart"></img>
            </div>
            <div>
                <img src={inforsa} alt="img1" className="img-sponsor-medpart"></img>    
            </div>
            <div>
                <img src={insevent} alt="img1" className="img-sponsor-medpart"></img>
            </div>
            <div>
                <img src={inforsa} alt="img1" className="img-sponsor-medpart"></img>
            </div>
            <div>
                <img src={insevent} alt="img1" className="img-sponsor-medpart"></img>
            </div>
            </Slider>
        </div>
        </Container>
    );
  }
}