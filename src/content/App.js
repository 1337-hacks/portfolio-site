import '../App.css'
import {useEffect, useState} from 'react'
import About from './About'
import Projects from './Projects'
import Home from './Home'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, Link, useLocation } from 'react-router-dom';

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

  const location = useLocation();

  return (
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
        
          <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/projects' element={< Projects />}></Route>
          </Routes>
          </AnimatePresence>
        

        <div className='footer'>
          <Link className='links' to='/about'>About</Link>
          <Link className='links' to='/projects'>Projects</Link>
          <div className='links' onClick={()=>window.open('https://www.linkedin.com/in/elijah-nucum-b30673208/')}>LinkedIn</div>
          <div className='links' onClick={()=>window.open('https://github.com/1337-hacks')}>GitHub</div>
          <div className='links' onClick={sendMail}>Contact</div>
        </div>
      </div>
  );
}

export default App;
