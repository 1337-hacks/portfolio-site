import {useState, useEffect} from 'react'
import { useSpring, animated } from 'react-spring'
import { motion } from 'framer-motion'

function Home() {
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
            <motion.div 
                className='landing-section'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
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
            </motion.div>
        </>
    )
}

export default Home