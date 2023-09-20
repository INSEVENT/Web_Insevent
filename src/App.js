import "./App.css";
import Navi from "./component/Navbar.js";
import Foot from "./component/Footer";
import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import img1 from "./assets/img/logo.png";
import { Routes, Route } from "react-router-dom";
import Competition from "./pages/Comp";
import Main from "./pages/Main";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2500);
  }, []);
  const LoadingPage = () => {
    return(
    <div className="loading-page">
      <Container className="img-container">
        <Image
          src={img1}
          className="img-fluid image-loading"
          style={{ maxWidth: "50%" }}
        />
      </Container>
    </div>
    )
  };
  return (
    <div>
    {isLoaded ? (
    <div className="App">
    <Navi />
    <div>
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/competition" element={<Competition />} />
    </Routes>
    </div>
    <Foot />
    </div>
    ):(<LoadingPage/>)}
    </div>
  );
}

export default App;
