import { Container } from "react-bootstrap";
import Inforsa from "../assets/img/inforsa.png";
import Insevent from "../assets/img/logo.png";
import badak from "../assets/img/logo/Badak.png";
import hmti from "../assets/img/logo/HMTI.png";
import permikomnas from "../assets/img/logo/permikomnas-removebg-preview.png";
import psi from "../assets/img/logo/bempsi.png";
import wgm from "../assets/img/logo/widyagama.png";
import smdpos from "../assets/img/logo/samarinda pos.jpg";
import bemkm from "../assets/img/logo/Logo BEM KM.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectCoverflow, Autoplay } from "swiper/modules";

const Sponsor = () => {
  return (
    <Container className="sponsor-medpart">
      <div>
        <h1 className="sponsor-title">Sponsor and Media Partner</h1>
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]} // Include Autoplay here
          autoplay={true}
          className="sponsor-swiper"
        >
          <SwiperSlide>
            <img src={bemkm} alt="Inforsa Logo" className="img-sponsor-medpart"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Insevent} alt="Insevent Logo" className="img-sponsor-medpart"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Inforsa} alt="Inforsa Logo" className="img-sponsor-medpart"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={hmti} alt="Insevent Logo" className="img-sponsor-medpart"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={badak} alt="Inforsa Logo" className="img-sponsor-medpart"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={permikomnas} alt="Inforsa Logo" className="img-sponsor-medpart"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={psi} alt="Inforsa Logo" className="img-sponsor-medpart"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={wgm} alt="Inforsa Logo" className="img-sponsor-medpart"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={smdpos} alt="Inforsa Logo" className="img-sponsor-medpart"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default Sponsor;
