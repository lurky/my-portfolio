import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'




const NavBar = () => {
    return (
        
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">My Portfolio Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="#home">
                        Home
                    </Nav.Link>
                    <Nav.Link href="#projects">
                        Projects
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="#experience">
                        Experience
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar;