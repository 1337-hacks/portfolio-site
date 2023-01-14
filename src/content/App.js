import '../App.css'
import './About'
import Scene from '../three-scene/Scene.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { config } from 'react-spring'
import {useEffect, useState, createRef} from 'react'
import About from './About'

function App() {

  const [pageSelect, setPageSelect] = useState('none')

  useEffect(()=>{
    switch (pageSelect) {
      case 'about':
        console.log("selected about page!");
        break;
      
      case 'projects':
        console.log("selected projects page!");
        break;
      
      case 'contact':
        console.log("selected contact page!");
        break;
      
      case 'none':
        console.log("selected no page!");
        break;
    
      default:
        break;
    } 
  }, [pageSelect])

  return (
    <>{pageSelect === 'none' && 
        <Container className='container' fluid style={{height: "200vh"}}>
          <Row>
            <Col className='landing-col' xs={12} md={true}>
              <div className='time'>
                <p>5:12pm</p>
              </div>
              <div className='landing-greeting'>
                <h2>Good xxx,<br/>I'm Elijah.</h2>
              </div>
            </Col>
            <Col className='links-col' xs={12} md={true}>
              <div className='date'>
                <p>24th December 2022</p>
              </div>
              <Stack gap={5}>
                <div className='links'><h1><a href="#about" onClick={()=>{setPageSelect('about')}}>About</a></h1></div>
                <div className='links'><h1><a href="#projects" onClick={()=>{setPageSelect('projects')}}>Projects</a></h1></div>
                <div className='links'><h1><a href="#linkedin">LinkedIn</a></h1></div>
                <div className='links'><h1><a href="#github">GitHub</a></h1></div>
                <div className='links'><h1><a href="#contact" onClick={()=>{setPageSelect('contact')}}>Contact</a></h1></div>
              </Stack> 
            </Col>
          </Row>
          <Row>
            <Col className='footer-col'>
              <p>Made by Elijah Nucum. All rights reserved 2022</p>
            </Col>
          </Row>
        </Container>
      }
      {pageSelect === 'about' && <About back={()=>setPageSelect('none')}/>}
    </>
  );
}

export default App;
