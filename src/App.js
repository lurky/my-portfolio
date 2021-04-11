import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Particles from "react-particles-js";
import Footer from "./components/Footer";


function App() {


  return (
    
    <>
      <NavBar />
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 160,
              "density": {
                "enable": true
              }
            },
            "size": {
              "value": 5,
              "random": true,
              "anim": {
                "speed": 2,
                "size_min": 0.3
              }
            },
            "line_linked": {
              "enable": false
            },
            "move": {
              "random": true,
              "speed": 1,
              "direction": "random",
              "out_mode": "out"
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "bubble"
              },
              "onclick": {
                "enable": true,
                "mode": "repulse"
              }
            },
            "modes": {
              "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
              },
              "repulse": {
                "distance": 400,
                "duration": 4
              }
            }
          }
        }} />
      <Header />
      <Experience />
      <div className="footer-wrapper">
      <Footer />
      </div>
    </>
      
    
  )
}

export default App;
