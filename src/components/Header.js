import React from 'react';
import Typed from 'react-typed';
import "bootstrap/dist/css/bootstrap.min.css";


const Header = () => {
    return (
        <div className="bg-header">
            <div className="container">
                <div className="main-info">
                    <h1>Software Developer</h1>
                    <Typed 
                
                    strings={["Hi, I'm Michael Wood", "Hi, I'm motivated","Hi, I'm passionate", "Hi, I'm ready to get started"]}  
                    typeSpeed={60}
                    backSpeed={60}
                    loop /> 
                    <button type="button" class="btn btn-outline-warning btn-lg" rel="contact.js">Contact</button>
                </div>
            </div>
        </div>
    )
}

export default Header
