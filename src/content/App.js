import '../App.css'
import Scene from '../three-scene/Scene.js'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { config } from 'react-spring'
import {useEffect, useState} from 'react'
import About from './About'
import Projects from './Projects'
import Landing from './Landing'
import { useSpring, animated } from 'react-spring'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [date, setDate] = useState(new Date())

  useEffect(()=> {
    setInterval(()=> {
      setDate(new Date())
    }, 1000)
  }, [date])

  function sendMail() {
    window.location = 'mailto:elijahnucum.exe@gmail.com'
  }

  return (
    <Router>
      <div className='wrapper'>
        <div className='header'>
          <div className='time'>
            <p>{date.toLocaleString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'})}</p>
          </div>
          <div className='logo-container'><p><Link className='logo' to='/'>elijah.n</Link></p></div>
          <div className='date'>
            <p>{date.toLocaleDateString()}</p>
          </div>
        </div>

        <Routes>
          <Route exact path='/' element={< Landing />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/projects' element={< Projects />}></Route>
        </Routes>

        <div className='footer'>
          <Link className='links' to='/about'>About</Link>
          <Link className='links' to='/projects'>Projects</Link>
          <div className='links' onClick={()=>window.open('https://www.linkedin.com/in/elijah-nucum-b30673208/')}>LinkedIn</div>
          <div className='links' onClick={()=>window.open('https://github.com/1337-hacks')}>GitHub</div>
          <div className='links' onClick={sendMail}>Contact</div>
        </div>
      </div>
    </Router>
  );
}

export default App;
