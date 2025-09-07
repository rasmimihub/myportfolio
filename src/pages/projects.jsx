import "./projects.css";

function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>
          Here’s a showcase of my portfolio website—designed and developed with care. More projects coming soon!
        </p>
      </div>
      <div className="project-card">
        <div className="project-image">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Portfolio Preview"
          />
        </div>
        <div className="project-details">
          <h3>Personal Portfolio Website</h3>
          <p>
            This is the very site you’re visiting! Built with React, styled for elegance and responsiveness. It features a contact form, project section, and a modern design aesthetic.
          </p>
          <ul className="tech-list">
            <li>React</li>
            <li>CSS3</li>
            <li>Responsive Design</li>
            <li>Creativity</li>
          </ul>
          <a
            href="/"
            className="visit-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Site
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;