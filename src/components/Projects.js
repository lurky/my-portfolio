import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import Img from '../img/ecpi.png'


const Projects = () => {
    return (
        <a name="projects">
       <div className="bg-projects">
            <div className="container">
                <div className="projects-main-info">
         
                    <Card className="front"
                        text={'secondary'}
                        style={{ height:'fit-content', background:'rgba(255,255,255,0.2', backdropFilter:'blur(40px)'}}>
                        <Card.Img variant="top" src={Img} />
                        <Card.Body>
                            <Card.Title>Projects I'm Proud of</Card.Title>

                            <Carousel>
                            <Carousel.Item interval={1000}>
                                <img
                                className="d-block w-100"
                                src=""
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>

                           
                        </Card.Body>
                    </Card>
              
                </div>
            </div>
        </div>
        </a>
    )
}

export default Projects;
