import {useState, useEffect} from 'react'

function Landing() {
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
            <div className='landing-row'>
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
            </div>
        </>
    )
}

export default Landing