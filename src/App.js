import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { config } from 'react-spring'

function App() {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <>
      <Container fluid>
        <Row className='time-date'>
          <Col className='time'><p>5:12pm</p></Col>
          <Col className='date'><p>24th December 2022</p></Col>
        </Row>
        <Row style={{height: "100vh", position: "relative"}}>
          <Col>
            <div className='landing-greeting' sticky={{start: 0, end: 1}}>
              <h1>Good xxx,<br/>I'm Elijah.</h1>
            </div>
          </Col>
        </Row>
        <Row style={{height: "100vh", position: "relative"}}>
          <Col>
            <div className='page-links'><h1>About</h1></div>
            <div className='page-links'><h1>Projects</h1></div>
            <div className='page-links'><h1>LinkedIn</h1></div>
            <div className='page-links'><h1>GitHub</h1></div>
            <div className='page-links'><h1>Contact</h1></div>            
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
