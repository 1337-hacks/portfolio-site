import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { config } from 'react-spring'

function App() {
  return (
    <>
      <Container fluid style={{position: "relative", height: "200vh"}}>
        <Row className='time-date'>
          <Col className='time'><p>5:12pm</p></Col>
          <Col className='date'><p>24th December 2022</p></Col>
        </Row>
        <Row>
          <Col style={{position: "relative", height: "200vh"}}>
            <div className='landing-greeting'>
              <h2>Good xxx,<br/>I'm Elijah.</h2>
            </div>
          </Col>
          <Col style={{position: "relative", paddingTop: "100vh"}}>
            <div className='page-links'><h1><a href="#about">About</a></h1></div>
            <div className='page-links'><h1><a href="#projects">Projects</a></h1></div>
            <div className='page-links'><h1><a href="#linkedin">LinkedIn</a></h1></div>
            <div className='page-links'><h1><a href="#github">GitHub</a></h1></div>
            <div className='page-links'><h1><a href="#contact">Contact</a></h1></div>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{position: "relative", height: "100vh"}}>
        <Row>
          <Col style={{position: "absolute", bottom: "0%", textAlign: "center"}}>
            <p>Made by Elijah Nucum. All rights reserved 2022</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
