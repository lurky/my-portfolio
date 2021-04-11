import React from "react";
import Typed from "react-typed";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./Projects";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Img from '../img/wife.png' 




const Header = () => {
    return (
        <>
       
            <a name="home">
            <div className="wrapper">
                <Container fluid='nd' className="container-header vh-100">
                <Row md={2}> 
                    <Col> 
                        <Card className="front" text="primary" style={{ background:'rgba(255,255,255,0.2', backdropFilter:'blur(40px)'}}>
                            <Card.Img variant="top" src={Img}/>
                            <Card.Body>
                            <Card.Text>
                                <Typed 
                                style={{ fontSize:"1.5rem"}}
                                strings={["Hi, I'm Michael Wood", "Hi, I'm motivated","Hi, I'm passionate", "Hi, I'm ready to get started"]}  
                                typeSpeed={125}
                                backSpeed={80}
                                loop
                                backDelay={1000}
                                smartBackspace /> 
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                        
                    <Col>
                    <Projects/>
                    </Col>
                </Row>
                       
                </Container>
            </div>
        </a>
        </>
    )
}

export default Header
