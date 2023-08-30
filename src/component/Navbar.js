import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link as Linkobj } from "react-scroll";
import { useEffect } from "react";

import { UilEstate, UilInfoCircle, UilTrophy, UilMicrophone } from "@iconscout/react-unicons";

function Navi() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".Nav");
      if (window.scrollY >= 56) {
        navbar.classList.add("scrolled");
      } else if (window.scrollY <= 56) {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          fixed="top"
          key={expand}
          expand={expand}
          className="Nav"
          data-bs-theme="dark"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src="nav-insevent.png"
                width="150"
                height="35"
                sizes="10"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              data-bs-theme="dark"
              className="Nav"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    alt=""
                    src="insevent.ico"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{" "}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1">
                  <Nav.Link>
                    <Linkobj
                      to="Home"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={100}
                    >
                      <Nav.Link href="#Home">
                        <UilEstate size="20"/>
                        HOME
                      </Nav.Link>
                    </Linkobj>
                  </Nav.Link>
                  <Nav.Link>
                    <Linkobj
                      to="About"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={100}
                    >
                      <Nav.Link href="#About">
                        <UilInfoCircle size="20"/>
                        ABOUT
                      </Nav.Link>
                    </Linkobj>
                  </Nav.Link>
                  <Nav.Link>
                    <Linkobj
                      to="Comp"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={100}
                    >
                      <Nav.Link href="#Competition">
                        <UilTrophy size="20"/>
                        COMPETITION
                      </Nav.Link>
                    </Linkobj>
                  </Nav.Link>
                  <Nav.Link>
                    <Linkobj
                      to="Talkshow"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={100}
                    >
                      <Nav.Link href="#Talkshow">
                        <UilMicrophone size="20"/>
                        TALKSHOW
                      </Nav.Link>
                    </Linkobj>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navi;
