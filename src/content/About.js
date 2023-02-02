import '../App.css'
import dp from '../images/dp.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function About() {

    return (
        <div className='about-section'>
            <div className='about-hero'>
                <img className='about-dp' src={dp} alt='me'/>
                <div className='about-scroll'>
                    <div className='about-title'>
                        <h2> • About Me • About Me • About Me • About Me • About Me • About Me • About Me • About Me • About Me • About Me • About Me • About Me • About Me • About Me • About Me</h2>
                        {/* <h2> • About Me • </h2> */}
                    </div>
                </div>    
            </div>
            <div className='about-description'>
                <h4>
                    I am a recent graduate of Auckland University of Technology where I finished a Bachelors degree in Computer and Information Science.
                    <br/><br/>
                    After finishing university, I have continued to explore the world of web development, where I’ve found a deep interest in frontend web development and web design.
                    <br/><br/>
                    In my own free time I love going to the gym, listening to music and working on my own personal projects.
                </h4>
            </div>
        </div>
    );
}

export default About;