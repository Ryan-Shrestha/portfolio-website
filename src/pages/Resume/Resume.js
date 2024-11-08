import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-page">
      <h2>My Resume</h2>

      {/* Professional Summary Section */}
      <section className="resume-section summary">
        <h3>Professional Summary</h3>
        <p>
          Experienced SharePoint & Power Platform Developer with a strong background in Microsoft 365, Power Apps, Power Automate, and data-driven solutions. Proven skills in technical support, troubleshooting, and developing custom workflows and applications for enhanced productivity.
        </p>
      </section>

      {/* Experience Section */}
      <section className="resume-section experience">
        <h3>Experience</h3>
        <div className="resume-item">
          <h4>C2C Online</h4>
          <span>SharePoint & Power Platform Developer | 2022 - Present</span>
          <p>Developed custom SharePoint solutions, workflows, and applications using Power Apps and Power Automate to improve team collaboration and workflow automation.</p>
        </div>
        <div className="resume-item">
          <h4>C2C Online</h4>
          <span>IT Support Engineer | 2019 - 2022</span>
          <p>Provided technical support, managed Microsoft 365 environments, and conducted training sessions for end-users.</p>
        </div>
        <div className="resume-item">
          <h4>Consulting One</h4>
          <span>Desktop Support Specialist | 2016 - 2018</span>
          <p>Gained foundational IT experience in desktop support, troubleshooting, and user administration.</p>
        </div>
      </section>

      {/* Education Section */}
      <section className="resume-section education">
        <h3>Education</h3>
        <div className="resume-item">
          <h4>Graduate Certificate in Computer Science</h4>
          <span>Current | 2024</span>
        </div>
        <div className="resume-item">
          <h4>Certificate IV in Information Technology</h4>
          <span>2014 - 2016</span>
        </div>
        <div className="resume-item">
          <h4>Bachelor’s Degree in Business Studies</h4>
          <span>Seabird International College | 2010 - 2013</span>
        </div>
      </section>

      {/* Skills Section */}
      <section className="resume-section skills">
        <h3>Skills</h3>
        <ul>
          <li>Microsoft 365 & Products</li>
          <li>Power Platform (Power Apps, Power Automate, Power BI)</li>
          <li>SharePoint Development</li>
          <li>IT Technical Support & Troubleshooting</li>
          <li>React.js, JavaScript, HTML, CSS</li>
        </ul>
      </section>

      {/* Certifications Section */}
      <section className="resume-section certifications">
        <h3>Certifications</h3>
        <div className="resume-item">
          <h4>Microsoft Power Platform Developer Associate</h4>
          <span>2023 - 2024</span>
        </div>
      </section>
    </div>
  );
}

export default Resume;
