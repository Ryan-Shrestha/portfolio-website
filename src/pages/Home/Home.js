import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Ryan Shrestha</h1>
          <p>Power Platform Developer | Aspiring Data Scientist</p>
          <button className="cta-button"><Link className="link" to="/portfolio">See My Work</Link></button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>SKILLS</h2>
        <p>MY KNOWLEDGE LEVEL IN SOFTWARE</p>
        <div className="skills-list">
          <div className="skill">
            <span className="skill-name">Microsoft 365</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">Power Platform</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">SharePoint</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">JavaScript</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">HTML & CSS</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <h2>FEATURED PROJECTS</h2>
        <div className="project-timeline">
          <div className="project-item">
            <div className="project-date">2023</div>
            <div className="project-content">
              <h3>Project Management App</h3>
              <p>Built with Power Apps and Power Automate to streamline project tracking and task assignments across teams.</p>
            </div>
          </div>
          <div className="project-item">
            <div className="project-date">2022</div>
            <div className="project-content">
              <h3>Data Dashboard</h3>
              <p>Developed a data visualization dashboard using Power BI for enhanced reporting and decision-making.</p>
            </div>
          </div>
          <div className="project-item">
            <div className="project-date">2021</div>
            <div className="project-content">
              <h3>Employee Onboarding Workflow</h3>
              <p>Created an automated onboarding process with Power Automate, reducing setup time and ensuring compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="call-to-action">
        <h2>Let's Work Together</h2>
        <button className="cta-button"><Link className='link' to="/contact">Contact</Link></button>
      </section>
    </div>
  );
}

export default Home;
