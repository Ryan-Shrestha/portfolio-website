import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Me</h1>
        <p>I am an experienced IT professional specializing in Microsoft 365, SharePoint, and Power Platform Development. 
          Starting my career in desktop support, I developed strong troubleshooting and technical skills, which led me to 
          more advanced roles in software and systems administration. In my current role, I create custom solutions using 
          Power Apps, Power Automate, and Power BI to streamline workflows and enhance productivity. I’m passionate about 
          continuous learning, currently pursuing a Graduate Certificate in Computer Science. My goal is to expand my expertise 
          in data science and web development, leveraging technology to drive impactful, data-driven solutions for organizations.</p>
      </section>

      {/* Bio Section */}
      <section className="about-bio">
        <h2>My Journey</h2>
        <p>
          I am a SharePoint & Power Platform Developer with a strong background in IT support and Microsoft 365
          administration. Over the years, I’ve evolved from troubleshooting technical issues to creating impactful solutions
          with Power Apps, Power Automate, and SharePoint. My goal is to continue learning and advancing my skills, while
          delivering powerful, data-driven solutions to improve productivity.
        </p>
      </section>

      {/* Skills Summary Section */}
      <section className="about-skills">
        <h2>Skills</h2>
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
        </div>
      </section>

      {/* Interests Section */}
      <section className="about-interests">
        <h2>Outside of Work</h2>
        <p>I enjoy exploring new technologies, working on personal coding projects, and staying active through outdoor activities like hiking and cycling.</p>
      </section>
    </div>
  );
}

export default About;
