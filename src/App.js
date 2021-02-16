import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Experience from "./components/Experience"
import Particles from "react-particles-js";


function App() {


  return (
    
    <>
      <Navbar />
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 50
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }} />
      <Header />
      <Experience />
    </>
      
    
  )
}

export default App;
