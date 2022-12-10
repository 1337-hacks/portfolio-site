import '../App.css'
import Scene from '../three-scene/Scene.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { config } from 'react-spring'
import {useEffect, useState, createRef} from 'react'

function App() {

  return (
    <>
      <Container className='container' fluid style={{height: "200vh"}}>
        <Row>
          <Col className='time-date-col' md={1}>
            <div className='time-date'>
              <p>5:12pm</p>
            </div>
          </Col>
          <Col className='landing-col' xs={12} md={true}>
            <div className='landing-greeting'>
              <h2>Good xxx,<br/>I'm Elijah.</h2>
            </div>
          </Col>
          <Col className='links-col' xs={12} md={true}>
            <div className='links'><h1><a href="#about">About</a></h1></div>
            <div className='links'><h1><a href="#projects">Projects</a></h1></div>
            <div className='links'><h1><a href="#linkedin">LinkedIn</a></h1></div>
            <div className='links'><h1><a href="#github">GitHub</a></h1></div>
            <div className='links'><h1><a href="#contact">Contact</a></h1></div>
          </Col>
          <Col className='time-date-col' md={2}>
            <div className='time-date'>
              <p>24th December 2022</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='footer-col'>
            <p>Made by Elijah Nucum. All rights reserved 2022</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
