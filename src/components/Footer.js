import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-footer">
            <div className="container">
                <FaGithub href="https://github.com/lurky" onclick="href" style={{ float: 'right', margin:'0.5rem'}} /> 
                <FaLinkedin href="https://www.linkedin.com/in/michael-wood-99017b124/" onclick="href" style={{ float: 'right', margin: '0.5rem' }} />
                <p className="copy">Michael Wood &copy;2021</p>
            </div>
        </div>
    )
}
export default Footer;