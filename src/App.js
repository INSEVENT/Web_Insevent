import "./App.css";

import React, { useEffect, useState, useRef } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Container, Image } from "react-bootstrap";
import img1 from "./assets/img/logo.png";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Navbar from "./component/Navbar";
import About from "./component/About";
import Blog from "./component/Blog";
import Footer from "./component/Footer";
import FaQ from "./component/FaQ";
import Talkshow from "./component/Talkshow";
import Sponsor from "./component/Sponsor";
import Home from "./component/Home";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2500);
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
    } else {
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
      }, 500);
    }
  }, [isLoaded]);
  return (
    <div>
      {isLoaded ? (
        <div className={`App ${isLoading ? "" : "hidden"}`}>
          <Navbar />
          <div>
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <div>
                      <div className="sec1">
                        <div id="Home"></div>
                        <Home />
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
                      <div className="sec3">
                        <div id="FaQ"></div>
                        <FaQ />
                      </div>
                    </div>
                  }
                />
              </Routes>
            </Router>
          </div>
          <Footer />
        </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}

export default App;
