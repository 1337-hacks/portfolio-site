import '../App.css'
import './About'
import Scene from '../three-scene/Scene.js'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { config } from 'react-spring'
import {useEffect, useState} from 'react'
import About from './About'
import Projects from './Projects'

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
    <div className='wrapper'>
      <div className='home-container'>
        <div className='header'>
          <div className='time'>
            <p>{date.toLocaleString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'})}</p>
          </div>
          <div className='logo'><p>elijah.n</p></div>
          <div className='date'>
            <p>{date.toLocaleDateString()}</p>
          </div>
        </div>

        {/* <div className='landing-row'>
          <div className='landing-row-left'>
            <div className='greeting-1'>
              <h2>Good {greeting}!<br/>I'm Elijah,</h2>
            </div>
          </div>
          <div className='landing-row-right'>
            <div className='greeting-2'>
              <h2>an Aspiring<br/>Web Developer.</h2>
            </div>
          </div>
        </div> */}

        <Projects/>

        <div className='footer'>
          <div className='links'><a href="#about">About</a></div>
          <div className='links'><a href="#projects" onClick={()=>setPageSelect("projects")}>Projects</a></div>
          <div className='links'><a href="#linkedin">LinkedIn</a></div>
          <div className='links'><a href="#github">GitHub</a></div>
          <div className='links'><a href="#contact">Contact</a></div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
