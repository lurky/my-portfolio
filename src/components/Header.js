import React from "react";
import Typed from "react-typed";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Contact";


const Header = () => {
    return (
        <div className="bg-header">
            <div className="container">
                <div className="main-info front">
                    <h1>Software Developer</h1>
                    <Typed 
                
                    strings={["Hi, I'm Michael Wood", "Hi, I'm motivated","Hi, I'm passionate", "Hi, I'm ready to get started"]}  
                    typeSpeed={125}
                    backSpeed={80}
                    loop
                    backDelay={1000}
                    smartBackspace /> 
                    <Contact />
                    </div>
            </div>
        </div>
    )
}

export default Header
