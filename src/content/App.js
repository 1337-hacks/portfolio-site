import '../App.css'
import './About'
import Scene from '../three-scene/Scene.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { config } from 'react-spring'
import {useEffect, useState, createRef, useRef, useCallback, useLayoutEffect} from 'react'
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

  const scrollRef = useRef(null)
  const linkRef = useRef(null)

  const handleScroll = useCallback(()=> {
      if(scrollRef.current) {
        const scroll = scrollRef.current.scrollTop
        if(scroll >= (scrollRef.current.scrollHeight / 2)) {
          scrollRef.current.scrollTop = 1
        }
        if(scroll <= 0) {
          scrollRef.current.scrollTop = (scrollRef.current.scrollHeight / 2) - 1
        }
      }
  },[])

  const [date, setDate] = useState(new Date())
  const [greeting, setGreeting] = useState("xxx")

  useEffect(()=> {
    setInterval(()=> {
      setDate(new Date())
    }, 1000)
  }, [date])

  useEffect(()=> {
    let time = date.getHours()

    if(time < 12) {
      setGreeting("morning");
    }
    else if(time >= 12 && time < 18) {
      setGreeting("afternoon");
    }
    else {
      setGreeting("evening");
    }
  }, [date]);

  return (
    <>
      

      {pageSelect === 'none' && 
        <div className='home-container'>

          <div className='time'>
            <p>{date.toLocaleString([], {hour: '2-digit', minute:'2-digit'})}</p>
          </div>
          <div className='date'>
            <p>{date.toLocaleDateString()}</p>
          </div>

          <div className='landing-col'>
            <div className='landing-greeting'>
              <h2>Good {greeting},<br/>I'm Elijah.</h2>
            </div>
          </div>
          
          <div className='links-col' ref={scrollRef} onScroll={handleScroll}>
            <div className='links' ref={linkRef}><h1><a href="#about">About</a></h1></div>
            <div className='links'><h1><a href="#projects" onClick={()=> console.log(date)}>Projects</a></h1></div>
            <div className='links'><h1><a href="#linkedin">LinkedIn</a></h1></div>
            <div className='links'><h1><a href="#github">GitHub</a></h1></div>
            <div className='links'><h1><a href="#contact">Contact</a></h1></div>
            <div className='links'><h1><a href="#about">About</a></h1></div>
            <div className='links'><h1><a href="#projects">Projects</a></h1></div>
            <div className='links'><h1><a href="#linkedin">LinkedIn</a></h1></div>
            <div className='links'><h1><a href="#github">GitHub</a></h1></div>
            <div className='links'><h1><a href="#contact">Contact</a></h1></div>
          </div>

        </div>
      }
      {pageSelect === 'about' && <About back={()=>setPageSelect('none')}/>}
    </>
  );
}

export default App;
