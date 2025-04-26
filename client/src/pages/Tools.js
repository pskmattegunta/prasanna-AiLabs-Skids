// client/src/pages/Tools.js
import React from 'react';
import './Pages.css';

const Tools = () => {
  // Sample tools data - you can replace with your actual tools
  const tools = [
    {
      id: 1,
      name: "SpeechBoost AI",
      description: "Interactive speech therapy assistant that provides real-time feedback on pronunciation and speech patterns",
      category: "Speech",
      image: "speech-boost.jpg", // You'll need to add these images to your project
      comingSoon: false
    },
    {
      id: 2,
      name: "EmotionReader",
      description: "Helps children identify and understand emotions through interactive games and visual aids",
      category: "Emotional",
      image: "emotion-reader.jpg",
      comingSoon: false
    },
    {
      id: 3,
      name: "CogniFlex",
      description: "Adaptive exercises that grow with your child to develop critical thinking and problem-solving skills",
      category: "Cognitive",
      image: "cogniflex.jpg",
      comingSoon: false
    },
    {
      id: 4,
      name: "MotorMate",
      description: "Uses camera tracking to guide and refine fine and gross motor skill development through fun activities",
      category: "Motor Skills",
      image: "motor-mate.jpg",
      comingSoon: true
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>AI Tools for Special Needs</h1>
          <p>Explore our specialized tools designed to support children's development</p>
        </div>
      </div>
      
      <div className="container">
        <div className="page-intro">
          <h2>Our Technology Approach</h2>
          <p>
            At AILabs-Skids, we develop tools that combine the latest advancements in 
            artificial intelligence with research-backed approaches to special education. 
            Each tool is designed to be accessible, engaging, and effective.
          </p>
        </div>
        
        <div className="tools-grid">
          {tools.map(tool => (
            <div className="tool-card" key={tool.id}>
              <div className="tool-image">
                {/* Use a placeholder if images aren't available yet */}
                <img 
                  src={`/images/${tool.image}`} 
                  alt={tool.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x200?text=Tool+Image';
                  }}
                />
                {tool.comingSoon && <div className="coming-soon-badge">Coming Soon</div>}
              </div>
              <div className="tool-content">
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
                {!tool.comingSoon ? (
                  <a href="#demo" className="btn btn-primary">Try Demo</a>
                ) : (
                  <a href="#notify" className="btn btn-secondary">Get Notified</a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="tools-cta">
          <h3>Looking for a Specific Solution?</h3>
          <p>We can develop custom tools to address specific needs</p>
          <a href="/contact" className="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Tools;