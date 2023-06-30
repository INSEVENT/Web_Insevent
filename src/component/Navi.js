import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {TbPointFilled} from 'react-icons/tb';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link as Linkobj } from 'react-scroll';

function Navi() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar fixed="top" key={expand} expand={expand} className='Nav' data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">
                <span>INS</span><span className='event'>EVENT</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              data-bs-theme="dark"
              className='Nav'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img
                alt=""
                src="favicon.ico"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1">
                <Nav.Link href="#home"><Linkobj to="Home" activeClass="active" spy={true} smooth={true} offset={0} duration={500}>HOME <TbPointFilled/></Linkobj></Nav.Link>
                <Nav.Link href="#about"><Linkobj to="About" activeClass="active" spy={true} smooth={true} offset={-50} duration={500}>ABOUT <TbPointFilled/></Linkobj></Nav.Link>
                <Nav.Link href="#competition"><Linkobj to="Comp" activeClass="active" spy={true} smooth={true} offset={-50} duration={500}>COMPETITION <TbPointFilled/></Linkobj></Nav.Link>
                <Nav.Link href="#talkshow"><Linkobj to="Talkshow" activeClass="active" spy={true} smooth={true} offset={-50} duration={500}>TALKSHOW <TbPointFilled/></Linkobj></Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="#login">LOGIN</Nav.Link>
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