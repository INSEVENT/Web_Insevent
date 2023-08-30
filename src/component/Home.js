import React, { useState, useEffect } from "react";
import { GoLocation } from "react-icons/go";
import { Button, Col, Container, Row } from "react-bootstrap";

import Carousel from "./Carousel";

const Header = () => {
  return (
    <Container style={{ paddingTop: "7%" }}>
      <div>
        <Row>
          <Col xs={12} md={8} className="carou-content1">
            <div className="carou-header">
              Euphoria of Technological <br />
              Innovation and Culture
            </div>
          </Col>
          <Col xs={12} md={4} className="carou-content2">
            <p>
              <GoLocation /> Sistem Informasi FT UNMUL
            </p>
            <p className="carou-text">
              Kolaborasi antara keterampilan teknologi dan menghidupkan kembali
              nilai-nilai kebudayaan lokal.{" "}
            </p>
            <Button>See More</Button>
          </Col>
          <Carousel />
        </Row>
      </div>
    </Container>
  );
};

export default Header;
