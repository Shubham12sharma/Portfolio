import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa'; 
import img from '../../assets/image.png';
import todo from '../../assets/todo.png';
import face from '../../assets/facereco.jpg';

function Projects() {

  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React showcasing skills and projects.",
      image: img, 
      technologies: ["React", "CSS", "JavaScript"],
      link: "https://shubhamportfolio-main.netlify.app/",
      github: "https://github.com/Shubham12sharma/Portfolio"
    },
    {
      title: "Assign Alert",
      description: "AI-Powered Corporate Task, Sprint & Community Management System.",
      image: todo,
      technologies: ["React", "API", "Django","MongoDB"],
      link: "#",
      github: "https://github.com/Shubham12sharma/Assign-Alert"
    },
    {
      title: "Face Recognition Attendance System",
      description: "An app that recognizes valid identity of students and takes attendance automatically.",
      image: face,
      technologies: ['Python','Machine Learning',"SQL"],
      link: "#",
      github: "https://github.com/Shubham12sharma136/Face-Reco-system"
    }
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-tech">
              {project.technologies.map((tech, idx) => (
                <span className="tech-tag" key={idx}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-icon">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
