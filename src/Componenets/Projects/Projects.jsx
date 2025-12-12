import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
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
      link: "https://your-portfolio-link.com",
      github: "https://github.com/your-username/portfolio"
    },
    {
      title: "Assign Alert",
      description: "A weather forecasting app using OpenWeather API.",
      image: todo,
      technologies: ["React", "API", "PHP","SQL"],
      link: "https://your-weather-app-link.com",
      github: "https://github.com/your-username/assign-alert"
    },
    {
      title: "Face Recognition Attendance System",
      description: "An app that recognizes valid identity of students and takes attendance automatically.",
      image: face,
      technologies: ['Python','Machine Learning',"SQL"],
      link: "https://your-todo-app-link.com",
      github: "https://github.com/your-username/face-recognition-attendance"
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
