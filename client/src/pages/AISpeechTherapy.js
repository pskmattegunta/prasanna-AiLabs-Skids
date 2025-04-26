// client/src/pages/AISpeechTherapy.js
import React from 'react';
import './Resources.css';

const aiSpeechResources = [
  {
    title: 'AI-Powered Speech Therapy Tools',
    description: 'Discover AI tools designed to assist with speech therapy for children with special needs.',
    link: 'https://www.speechtherapytalk.com/ai-speech-therapy.html',
    type: 'Website',
    tags: ['AI', 'Speech', 'Therapy']
  },
  {
    title: 'Speech Therapy Apps Using AI',
    description: 'A curated list of mobile apps using AI for speech and language development.',
    link: 'https://www.verywellfamily.com/best-speech-therapy-apps-4583057',
    type: 'Apps',
    tags: ['Apps', 'AI', 'Speech']
  }
];

function AISpeechTherapy() {
  return (
    <div className="resources-page">
      <h1 className="resources-title">AI Speech Therapy</h1>
      <p className="resources-description">
        Explore the latest in AI-powered speech therapy tools and resources for children with special needs.
      </p>
      <div className="resource-list">
        {aiSpeechResources.map((resource, idx) => (
          <div className="resource-card" key={idx}>
            <h2 className="resource-title">{resource.title}</h2>
            <p className="resource-description">{resource.description}</p>
            <a href={resource.link} className="resource-link" target="_blank" rel="noopener noreferrer">
              Visit Resource
            </a>
            <div className="resource-tags">
              {resource.tags.map((tag, i) => (
                <span className="resource-tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AISpeechTherapy;
