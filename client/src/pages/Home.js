// client/src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>💙 Empowering Every Voice. Supporting Every Journey.</h1>
          <h2>At <em>Prasanna-AILabs</em>, we believe that every child deserves to be heard—and every parent deserves a guiding hand.</h2>
          <div className="cta-buttons">
            <Link to="/start" className="cta-button">Start Your Journey</Link>
            <Link to="/resources" className="cta-button">Explore Tools</Link>
            <Link to="/community" className="cta-button">Join Our Community</Link>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="mission-section">
        <div className="container">
          <h2>✨ Our Mission — Why This Matters So Deeply</h2>
          <div className="mission-content">
            <p>
              Raising a child with special needs is not just parenting—it's a journey of <strong>courage, compassion, and unconditional love</strong>. But we know this road can also be <strong>isolating</strong>, <strong>confusing</strong>, and filled with questions that don't always have easy answers.
            </p>
            <p>
              That's why we created <strong>Prasanna-AILabs</strong>— <em>A place built from the heart. Backed by innovation. Rooted in empathy.</em>
            </p>
          </div>

          <div className="quote-block">
            <p><em>"There is no greater disability in society than the inability to see a person as more."</em> — <strong>Robert M. Hensel</strong></p>
          </div>

          <div className="drives-us">
            <h3>🧡 What Drives Us</h3>
            <p>
              We're here to help children <strong>speak</strong>, <strong>grow</strong>, and <strong>thrive</strong>—and to help parents feel <strong>supported</strong>, <strong>informed</strong>, and <strong>never alone</strong>.
            </p>
            <ul className="features-list">
              <li>
                <span className="feature-icon">🤖</span>
                <div className="feature-content">
                  <h4>AI Speech Therapy Tools</h4>
                  <p>Personalized and playful exercises that adapt to your child's pace</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">📚</span>
                <div className="feature-content">
                  <h4>Helpful Resources</h4>
                  <p>FAQs, guides, and parenting tips curated with love and simplicity</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">🏫</span>
                <div className="feature-content">
                  <h4>Scholarship & Support Info</h4>
                  <p>Connecting families with real opportunities and trusted partners</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">🌈</span>
                <div className="feature-content">
                  <h4>Success Stories</h4>
                  <p>Real families. Real breakthroughs. Real hope.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="quote-block">
            <p><em>"Children are not a distraction from more important work. They are the most important work."</em> — <strong>Dr. John Trainer</strong></p>
          </div>
        </div>
      </section>

      {/* Personal Note Section */}
      <section className="founder-section">
        <div className="container">
          <h2>💞 A Message From Our Founder</h2>
          <div className="founder-content">
            <div className="founder-image">
              Founder Photo
            </div>
            <div className="founder-message">
              <p>
                "This mission is personal. I've seen the strength it takes. The hope it requires. I built this platform to give families a <strong>digital shoulder to lean on</strong>—with tools that help and stories that heal."
              </p>
              <p className="founder-signature">— <em>Prasanna Mattegunta</em>, Founder, Prasanna-AILabs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Preview Section */}
      <section className="resources-preview">
        <div className="container">
          <h2>Explore Our Resources</h2>
          <div className="resource-cards">
            <div className="resource-card">
              <div className="resource-icon">🧠</div>
              <h3>Understanding Autism</h3>
              <p>Expert-backed guides and research for parents and caregivers.</p>
              <Link to="/resources" className="resource-link">Learn More</Link>
            </div>
            <div className="resource-card">
              <div className="resource-icon">🗣️</div>
              <h3>Speech Therapy Tools</h3>
              <p>Interactive tools and resources to support communication skills.</p>
              <Link to="/resources" className="resource-link">Explore Tools</Link>
            </div>
            <div className="resource-card">
              <div className="resource-icon">❤️</div>
              <h3>Parent Support</h3>
              <p>Connect with other parents and access emotional support resources.</p>
              <Link to="/resources" className="resource-link">Find Support</Link>
            </div>
          </div>
          <div className="view-all">
            <Link to="/resources" className="view-all-link">View All Resources</Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="join-section">
        <div className="container">
          <h2>Begin Your Journey With Us Today</h2>
          <p>Every step forward matters. Every voice deserves to be heard.</p>
          <Link to="/start" className="join-button">Get Started Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;