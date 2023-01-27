import '../App.css'
import { Suspense } from 'react'
import { Canvas, useThree, useLoader, useFrame } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import placeholder from '../images/placeholder-2.jpg'
import { useSpring, animated } from 'react-spring'

function Projects() {

    const [imgSpring, api] = useSpring(()=> ({
        from: {scale: 1}
    }))

    const handleEnter = ()=> {
        api.start({
            from: {scale: 1},
            to: {scale: 2}
        })

        console.log("entered")
    }

    const handleLeave = ()=> {
        api.start({
            from: {scale: 2},
            to: {scale: 1}
        })

        console.log("left")
    }

    return (
        <div className='projects-section'>
            <Canvas flat linear dpr={window.devicePixelRatio} gl={{ antialias: false }}>
                <Suspense fallback={null}>
                    <ScrollControls infinite horizontal damping={4} pages={2} distance={2} maxSpeed={1} style={{scrollbarWidth: 'none'}}>
                        <Scroll html className='projects-scroll'>
                            {/* <div className='projects-link' style={{position: 'absolute', left: '0%'}}>
                                <img className='projects-photos' src={placeholder} alt='placeholder'/>
                                <h2 className='projects-text' style={{top: '-31px'}}>Projects</h2>
                            </div> */}
                            <div className='projects-link'>
                                <img className='projects-photos' src={placeholder} alt='placeholder'/>
                                <h2 className='projects-text'>Projects</h2>
                            </div>
                            <div className='projects-link'>
                                <animated.img 
                                    style={{...imgSpring}}
                                    className='projects-photos' 
                                    src={placeholder} 
                                    alt='placeholder'
                                    // onMouseEnter={handleEnter}
                                    // onMouseLeave={handleLeave}
                                />
                                <h2 className='projects-text'>Projects</h2>
                            </div>
                            <div className='projects-link'>
                                <img className='projects-photos' src={placeholder} alt='placeholder'/>
                                <h2 className='projects-text'>Projects</h2>
                            </div>
                            <div className='projects-link'>
                                <img className='projects-photos' src={placeholder} alt='placeholder'/>
                                <h2 className='projects-text'>Projects</h2>
                            </div>
                            <div className='projects-link'>
                                <img className='projects-photos' src={placeholder} alt='placeholder'/>
                                <h2 className='projects-text'>Projects</h2>
                            </div>
                            {/* <div className='projects-link' style={{position: 'absolute', right: '0%'}}>
                                <img className='projects-photos' src={placeholder} alt='placeholder'/>
                                <h2 className='projects-text' style={{top: '-31px'}}>Projects</h2>
                            </div> */}
                        </Scroll>
                    </ScrollControls>
                </Suspense>
            </Canvas>
        </div>
    );
}

export default Projects;