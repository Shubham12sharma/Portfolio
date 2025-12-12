import React from 'react'
import './About.css'
import {  FaCode, FaLaptopCode } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <div className="about-container">
        
        <h2 className="about-title">
         About Me
        </h2>

        <p className="about-text">
          I am a passionate web developer who loves crafting modern, visually appealing,
          and user-friendly websites. With experience in the React,Django,MySQL,Mongodb.I enjoy turning ideas
          into functional digital experiences and continuously learning new technologies.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <FaCode className="card-icon" />
            <h3>Frontend Developer</h3>
            <p>Experienced in React, CSS, JavaScript, UI/UX, and responsive design.</p>
          </div>

          <div className="about-card">
            <FaLaptopCode className="card-icon" />
            <h3>Backend Developer</h3>
            <p>Skilled in Django, APIs, authentication, and database management.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
