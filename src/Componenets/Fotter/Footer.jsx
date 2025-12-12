import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; 
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text">© {new Date().getFullYear()} Shubham Sharma. All rights reserved.</p>
        <div className="socials">
          <a href="https://www.linkedin.com/in/shubham-sharma-435078286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="icon">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Shubham12sharma" target="_blank" rel="noopener noreferrer" className="icon">
            <FaGithub />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"   className="icon" >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
