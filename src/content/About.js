import '../App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'

function About() {
    return (
        <Container className='about-page'>
            <Row>
                <Col md={3} className='about-area'>
                    <div className='about-title'>
                        <h2>About</h2>
                    </div>
                    <div className='back-button'>
                        <h2>Back</h2>
                    </div>
                </Col>
                <Col md={9} className='about-description'>
                    <h3>
                        I am a recent graduate of Auckland University of Technology. <br/><br/>
                        I love to use my creativity to make innovative things and create interesting experiences. <br/><br/>
                        I also love going to the gym and listening to music, mainly rap and R&B.
                    </h3>
                </Col>
            </Row>
        </Container>
    );
}

export default About;