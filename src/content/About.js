import '../App.css'
import dp from '../images/dp.png'
import { motion } from 'framer-motion';

function About() {

    return (
        <motion.div 
            className='about-section'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='about-hero'>
                <img className='about-dp' src={dp} alt='me'/>
                <div className='scroll-wrapper-about'>
                    <div className='scroll-title-about'>
                        <h2> • About Me • About Me • About Me • About Me • About Me • About Me • About Me • About Me • About Me • About Me • About Me • About Me • About Me • About Me • About Me</h2>
                    </div>
                </div>
            </div>
            <div className='about-description'>
                <h4 className='desc'>
                    I am a recent graduate of Auckland University of Technology where I finished a Bachelors degree in Computer and Information Science.
                    <br/><br/>
                    After finishing university, I have continued to explore the world of web development, where I’ve found a deep interest in frontend web development and web design.
                    <br/><br/>
                    In my own free time I love going to the gym, listening to music and working on my own personal projects.
                </h4>
            </div>
            <div className='about-technologies'>
                <h3>Skills and Technologies</h3>
                <div className='about-icons'>
                    <ion-icon name="logo-react"></ion-icon>
                    <ion-icon name="logo-javascript"></ion-icon>
                    <ion-icon name="logo-figma"></ion-icon>
                    <ion-icon src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg"></ion-icon>
                </div>
            </div>
        </motion.div>
            
    );
}

export default About;