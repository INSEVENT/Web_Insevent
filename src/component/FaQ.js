import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";
import { useRef, useEffect, useState } from 'react';

export default function FaQ() {
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section1 = sectionRef1.current;
      const section2 = sectionRef2.current;
      const sectionTop1 = section1.getBoundingClientRect().top;
      const sectionTop2 = section2.getBoundingClientRect().top;
      const sectionHeight1 = section1.offsetHeight;
      const sectionHeight2 = section2.offsetHeight;
      const windowHeight = window.innerHeight;

      if (sectionTop1 < windowHeight && !showContent1) {
        if (sectionTop1 + sectionHeight1 > 0) {
          setShowContent1(true);
        }
      }

      if (sectionTop2 < windowHeight && !showContent2) {
        if (sectionTop2 + sectionHeight2 > 0) {
          setShowContent2(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showContent1, showContent2]);
  return (
    <MDBContainer>
      <section>
        <MDBTypography
          ref={sectionRef1} className={showContent1 ? "slide-in text-center mb-4 pb-2 text-FaQ fw-bold headerFaQ" : ""}
        >
          FAQ
        </MDBTypography>
        <p ref={sectionRef1} className={showContent1 ? "slide-in text-center mb-5 subhead-FaQ" : ""}>
          Find the answers for the most frequently asked questions below
        </p>
        <Container ref={sectionRef2} className={showContent2 ? "slide-in" : ""}>
        <MDBRow className="question">
            <MDBCol md="6" lg="4" className="mb-4">
                <MDBTypography className="mb-3 text-FaQ">
                <MDBIcon far icon="paper-plane pe-2" /><br/>A simple
                question?
                </MDBTypography>
                <p className="FaQ">
                <strong>
                    <u>Absolutely!</u>
                </strong>{" "}
                We work with top payment companies which guarantees your safety
                and security. All billing information is stored on our payment
                processing partner.
                </p>
            </MDBCol>
            <MDBCol md="6" lg="4" className="mb-4">
                <MDBTypography className="mb-3 text-FaQ">
                <MDBIcon fas icon="pen-alt pe-2" /><br/>A question that
                is longer then the previous one?
                </MDBTypography>
                <p className="FaQ">
                <strong>
                    <u>Yes, it is possible!</u>
                </strong>{" "}
                You can cancel your subscription anytime in your account. Once the
                subscription is cancelled, you will not be charged next month.
                </p>
            </MDBCol>
            <MDBCol md="6" lg="4" className="mb-4">
                <MDBTypography className="mb-3 text-FaQ">
                <MDBIcon fas icon="user pe-2" /><br/>A simple question?
                </MDBTypography>
                <p className="FaQ">
                Currently, we only offer monthly subscription. You can upgrade or
                cancel your monthly account at any time with no further
                obligation.
                </p>
            </MDBCol>
            <MDBCol md="6" lg="4" className="mb-4">
                <MDBTypography className="mb-3 text-FaQ">
                <MDBIcon fas icon="rocket pe-2" /><br/>A simple question?
                </MDBTypography>
                <p className="FaQ">
                Yes. Go to the billing section of your dashboard and update your
                payment information.
                </p>
            </MDBCol>
            <MDBCol md="6" lg="4" className="mb-4">
                <MDBTypography className="mb-3 text-FaQ">
                <MDBIcon fas icon="home pe-2" /><br/>A simple question?
                </MDBTypography>
                <p className="FaQ">
                <strong>
                    <u>Unfortunately no</u>.
                </strong>{" "}
                We do not issue full or partial refunds for any reason.
                </p>
            </MDBCol>
            <MDBCol md="6" lg="4" className="mb-4">
                <MDBTypography className="mb-3 text-FaQ">
                <MDBIcon fas icon="book-open pe-2" /><br/>Another
                question that is longer than usual
                </MDBTypography>
                <p className="FaQ">
                Of course! We’re happy to offer a free plan to anyone who wants to
                try our service.
                </p>
            </MDBCol>
        </MDBRow>
        </Container>
      </section>
    </MDBContainer>
  );
}