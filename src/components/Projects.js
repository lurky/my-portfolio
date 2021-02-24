import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'


const Projects = () => {
    return (
        <a name="projects">
       <div className="bg-projects">
            <div className="container">
                <div className="projects-main-info">
                <CardDeck>
                    <Card className="front"
                        bg={'dark'}
                        text={'light'}>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Ice Cream Social App</Card.Title>
                            <Card.Text>
                                This Android app was my final project for my first Mobile Apps course.
                                The concept is simple. Return the joy of hearing the notorious ice cream
                                truck music when it is approaching using a mobile app that alerts the user
                                when the Ice cream truck is close.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button var="pills">View on GitHub</Button>
                        </Card.Footer>
                    </Card>
                    <Card className="front"
                        bg={'dark'}
                        text={'light'}>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                        <Card className="front"
                            bg={'dark'}
                            text={'light'}>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                </div>
            </div>
        </div>
        </a>
    )
}

export default Projects
