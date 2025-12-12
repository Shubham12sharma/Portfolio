import React from "react";
import NavBar from "./Componenets/NavBar/NavBar";
import Contact from "./Componenets/Contact/Contact";
import Intro from "./Componenets/Intro/Intro";
import About from "./Componenets/About/About";
import Projects from "./Componenets/Projects/Projects";
import Certificate from "./Componenets/Certificate/Certificate";
import Footer from "./Componenets/Fotter/Footer";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <NavBar />

      {/* SECTIONS */}
      <div id="Intro">
        <Intro />
      </div>

      <div id="About">
        <About />
      </div>

      <div id="Project">
        <Projects />
      </div>

      <div id="Certificate">
        <Certificate />
      </div>

      {/* ✔ ADD THIS — CONTACT SECTION WITH ID */}
      <div id="contact">
        <Contact />
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
