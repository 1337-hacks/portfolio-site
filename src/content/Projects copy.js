/* THIS IS AN OLD COPY OF Projects.js . THIS MAY BE USED AGAIN IN THE FUTURE. */

// import '../App.css'
// import { Suspense } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { ScrollControls, Scroll } from '@react-three/drei'
// import placeholder from '../images/placeholder-2.jpg'
// import { motion } from 'framer-motion'

// function Projects() {

//     return (
//         <motion.div 
//             className='projects-section'
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//         >
//             <Canvas flat linear dpr={window.devicePixelRatio} gl={{ antialias: false }}>
//                 <Suspense fallback={null}>
//                     <ScrollControls horizontal damping={4} pages={2} distance={2} maxSpeed={1} style={{scrollbarWidth: 'none'}}>
//                         <Scroll html className='projects-scroll'>
//                             {/* <div className='projects-link' style={{position: 'absolute', left: '0%'}}>
//                                 <img className='projects-photos' src={placeholder} alt='placeholder'/>
//                                 <h2 className='projects-text' style={{top: '-31px'}}>Projects</h2>
//                             </div> */}
//                             <div className='projects-link'>
//                                 <img className='projects-photos' src={placeholder} alt='placeholder'/>
//                                 <h2 className='projects-text'>Projects</h2>
//                             </div>
//                             <div className='projects-link'>
//                                 <img
//                                     className='projects-photos' 
//                                     src={placeholder} 
//                                     alt='placeholder'
//                                     // onMouseEnter={handleEnter}
//                                     // onMouseLeave={handleLeave}
//                                 />
//                                 <h2 className='projects-text'>Projects</h2>
//                             </div>
//                             <div className='projects-link'>
//                                 <img className='projects-photos' src={placeholder} alt='placeholder'/>
//                                 <h2 className='projects-text'>Projects</h2>
//                             </div>
//                             <div className='projects-link'>
//                                 <img className='projects-photos' src={placeholder} alt='placeholder'/>
//                                 <h2 className='projects-text'>Projects</h2>
//                             </div>
//                             {/* <div className='projects-link' style={{position: 'absolute', right: '0%'}}>
//                                 <img className='projects-photos' src={placeholder} alt='placeholder'/>
//                                 <h2 className='projects-text' style={{top: '-31px'}}>Projects</h2>
//                             </div> */}
//                         </Scroll>
//                     </ScrollControls>
//                 </Suspense>
//             </Canvas>
//         </motion.div>
            
//     );
// }

// export default Projects;

/* 
PROJECTS CSS

.projects-scroll {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 200%;
  height: 100%;
  flex-grow: 2;
}

.projects-link {
  display: flex;
  justify-content: center;
  align-items: center;
}

.projects-photos {
  height: 240px;
  width: 160px;
  position: absolute;
}

.projects-text {
  position: absolute;
  top: 45%;
}
*/