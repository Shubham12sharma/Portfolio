import React from 'react'
import './Intro.css'
import bg2 from '../../assets/bg21.png'
function Intro() {
  return (
    <div>
        <section id="intro">
            <div className="introcontent">
                <span className="hello">Hello ,</span>
                <span className="introSec">I'm <span className="introName">Shubham</span> <br/> Software Developer</span>
                <p>I am a skilled web developer with experience in creating visually appealing and user-friendly websites.</p>
                <button className='introbtn'>Open to Work</button>
            </div>
            <img src={bg2} alt='' className='bg'/>
        </section>
    </div>
  )
}

export default Intro