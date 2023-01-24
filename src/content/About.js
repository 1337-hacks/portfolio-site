import '../App.css'

function About(props) {

    return (
        <div className='about-page'>
            <div>
                <div className='about-area'>
                    <div className='about-title'>
                        <h2>About</h2>
                    </div>
                    <div className='back-button'>
                        <a href='#home' onClick={props.back}><h2>Back</h2></a>
                    </div>
                </div>
                <div className='about-description'>
                    <h3>
                        I am a recent graduate of Auckland University of Technology. <br/><br/>
                        I love to use my creativity to make innovative things and create interesting experiences. <br/><br/>
                        I also love going to the gym and listening to music, mainly rap and R&B.
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default About;