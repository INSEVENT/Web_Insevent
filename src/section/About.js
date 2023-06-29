import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../assets/logo.png'

function About() {
  return (
    <Container>
        <Row>
            <div className='header-about'>INSEVENT</div>
        </Row>
        <Row>
        <Col style={{textAlign:'justify'}} xs={6}>
            <h2>About This Event</h2>
            <p className='text-about'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae.
            </p>
        </Col>
        <Col>
            <img src={img1} className='img-about'></img>
        </Col>
        </Row>
    </Container>
  );
}

export default About;