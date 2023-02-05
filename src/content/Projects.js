import '../App.css'
import { motion } from 'framer-motion'

function Projects() {

    return (
        <motion.div 
            className='projects-section'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
        <div className='scroll-wrapper-about'>
            <div className='scroll-title-projects'>
                <h2> • Projects • Projects • Projects • Projects • Projects • Projects • Projects • Projects • Projects • Projects • </h2>
            </div>
        </div>

        <div className='projects-list'>
            <div className='projects-row'>
                <h4>Comfort.AI Company Website</h4>
                <h4>2021</h4>
            </div>
            <div className='projects-row'>
                <h4>Portfolio Site 23</h4>
                <h4>2023</h4>
            </div>
        </div>

        </motion.div>
            
    );
}

export default Projects;