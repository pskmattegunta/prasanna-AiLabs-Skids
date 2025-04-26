// client/src/pages/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <div className="container">
          <h1>About Prasanna-AILabs</h1>
          <p>Learn about our mission, team, and the technology behind our speech therapy tools.</p>
        </div>
      </div>
      
      <div className="container">
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            Prasanna-AILabs was founded with a simple but powerful vision: to make quality speech therapy 
            accessible to every child who needs it. This is a placeholder page where you can tell your story 
            and introduce your team.
          </p>
          
          <div className="about-section">
            <h3>Our Mission</h3>
            <p>
              At Prasanna-AILabs, we believe that every child deserves to be heard—and every parent deserves 
              a guiding hand. Through innovative AI-powered tools and compassionate support, we strive to 
              empower families on their speech therapy journey.
            </p>
          </div>
          
          <div className="about-section">
            <h3>Meet Our Team</h3>
            <p>
              Add your team information here. Include photos, roles, and brief bios of your team members.
            </p>
          </div>
          
          <div className="about-section">
            <h3>Our Approach</h3>
            <p>
              Describe your methodology and approach to speech therapy here. Explain how your AI tools 
              work and the benefits they provide to children and families.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;