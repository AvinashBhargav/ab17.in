import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className={`hero-title ${isVisible ? 'fade-in' : ''}`}>
            Avinash
            <span className="highlight">Portfolio</span>
          </h1>
          <p className={`hero-subtitle ${isVisible ? 'fade-in-delay' : ''}`}>
            Full Stack Developer & Creative Problem Solver
          </p>
          <div className={`hero-cta ${isVisible ? 'fade-in-delay-2' : ''}`}>
            <button className="cta-primary">View My Work</button>
            <a href="mailto:avinashbhargavbandi@gmail.com" className="cta-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate full-stack developer with expertise in creating 
                innovative digital solutions. My journey in technology is driven 
                by curiosity and a commitment to excellence.
              </p>
              <div className="skills">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">MongoDB</span>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>20+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Project 1</div>
              </div>
              <div className="project-info">
                <h3>E-Commerce Platform</h3>
                <p>Full-stack React and Node.js application with payment integration</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Stripe</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Project 2</div>
              </div>
              <div className="project-info">
                <h3>Task Management App</h3>
                <p>Collaborative project management tool with real-time updates</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Firebase</span>
                  <span>Material-UI</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Project 3</div>
              </div>
              <div className="project-info">
                <h3>Weather Dashboard</h3>
                <p>Interactive weather application with location-based forecasts</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>OpenWeather API</span>
                  <span>Chart.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-subtitle">
            Ready to bring your ideas to life? Let's discuss your project.
          </p>
          <div className="contact-info">
            <a href="mailto:avinash@example.com" className="contact-item">
              <span>📧</span>
              avinash@example.com
            </a>
            <a href="https://linkedin.com/in/avinash" className="contact-item">
              <span>💼</span>
              LinkedIn
            </a>
            <a href="https://github.com/avinash" className="contact-item">
              <span>🐙</span>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Avinash Portfolio. Built with React & ❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
