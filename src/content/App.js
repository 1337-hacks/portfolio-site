import '../App.css'
import './About'
import Scene from '../three-scene/Scene.js'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { config } from 'react-spring'
import {useEffect, useState} from 'react'
import About from './About'
import Projects from './Projects'
import Landing from './Landing'
import { useSpring, animated } from 'react-spring'

function App() {

  const [pageSelect, setPageSelect] = useState('landing')

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
      
      case 'landing':
        console.log("selected no page!");
        break;
    
      default:
        break;
    } 
  }, [pageSelect])
  
  const [date, setDate] = useState(new Date())

  useEffect(()=> {
    setInterval(()=> {
      setDate(new Date())
    }, 1000)
  }, [date])

  const [linkSpring, linkApi] = useSpring(()=>({
    from: {backgroundColor: '#E4C77D', color: '#251818'}
  }))

  const handleEnter = ()=> {
    linkApi.start({
      from: {backgroundColor: '#E4C77D', color: '#251818'},
      to: {backgroundColor: '#251818', color: '#D9CECE'}
    })
  }

  const handleLeave = ()=> {
    linkApi.start({
      from: {backgroundColor: '#251818', color: '#D9CECE'},
      to: {backgroundColor: '#E4C77D', color: '#251818'}
    })
  }

  function sendMail() {
    window.location = 'mailto:elijahnucum.exe@gmail.com'
  }

  return (
    <>
    <div className='wrapper'>
      <div className='home-container'>
        <div className='header'>
          <div className='time'>
            <p>{date.toLocaleString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'})}</p>
          </div>
          <div className='logo-container'><p><a className='logo' href='#home' onClick={()=>setPageSelect("landing")}>elijah.n</a></p></div>
          <div className='date'>
            <p>{date.toLocaleDateString()}</p>
          </div>
        </div>

        {pageSelect === 'landing' && <Landing/>}
        {pageSelect === 'projects' && <Projects/>}

        <div className='footer'>
          <animated.div className='links'>About</animated.div>
          <div className='links' onClick={()=>setPageSelect("projects")}>Projects</div>
          <div className='links' onClick={()=>window.open('https://www.linkedin.com/in/elijah-nucum-b30673208/')}>LinkedIn</div>
          <div className='links' onClick={()=>window.open('https://github.com/1337-hacks')}>GitHub</div>
          <div className='links' onClick={sendMail}>Contact</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
