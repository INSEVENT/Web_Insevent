import "./App.css";
import Navi from "./component/Navi.js";
import Carou from "./section/Carou";
import About from "./section/About";
import Blog from "./section/Blog";
import Foot from "./component/Foot";
import FaQ from "./section/FaQ";
import React, { useEffect, useState, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Talkshow from "./section/Talkshow";
import Sponsor from "./section/Sponsor";
import { Container, Image } from "react-bootstrap";
import img1 from "./assets/logo.png";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Competition from "./pages/Comp";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
  }, []);

  useEffect(() => {
    if (isLoaded && targetRef.current) {
      const delay = 1000;
      setTimeout(() => {
        scroll.scrollTo(targetRef.current.offsetTop, {
          duration: 1000,
          smooth: "easeInOutQuart",
        });
      }, delay);
    }
  }, [isLoaded]);
  const LoadingPage = () => {
    return (
      <div className="loading-page">
        <Container className="img-container">
          <Image
            src={img1}
            className="img-fluid image-loading"
            style={{ maxWidth: "50%" }}
          />
        </Container>
      </div>
    );
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Menunda perubahan untuk memberikan waktu pada animasi fade in
    }
  }, [isLoaded]);
  return (
    <Router>
      <div>
        {isLoaded ? (
          <div className={`App ${isLoading ? "" : "hidden"}`}>
            <Navi />
            <Link
              to="Comp"
              smooth={true}
              duration={500}
              delay={0}
              offset={-50}
              spy={true}
              exact="true"
              className="scroll-link"
            ></Link>
            <div className="sec1">
              <div id="Home"></div>
              <Carou />
            </div>
            <div className="sec2">
              <div id="About"></div>
              <About />
            </div>
            <div className="sec3" ref={targetRef}>
              <div id="Comp"></div>
              <Blog />
            </div>
            <div className="sec4">
              <Sponsor />
            </div>
            <div className="sec2">
              <div id="Talkshow"></div>
              <Talkshow />
            </div>
            <div className="sec2">
              <div id="FaQ"></div>
              <FaQ />
            </div>
            <Foot />
          </div>
        ) : (
          <LoadingPage />
        )}
      </div>
      <Routes>
        <Route path="/competition" element={<Competition />} />
      </Routes>
    </Router>
  );
}

export default App;

