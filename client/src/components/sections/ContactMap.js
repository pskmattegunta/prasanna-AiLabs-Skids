// client/src/components/sections/ContactMap.js
import React from 'react';
import './ContactMap.css';

const ContactMap = () => {
  return (
    <section className="contact-map-section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Have questions or suggestions? We'd love to hear from you!</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <img src="/images/location-icon.png" alt="Location" />
              </div>
              <div>
                <h3>Our Location</h3>
                <p>11435 Glenlaurel Oaks Cir</p>
                <p>Jacksonville, FL 32257</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <img src="/images/email-icon.png" alt="Email" />
              </div>
              <div>
                <h3>Email Us</h3>
                <p><a href="mailto:pskmattegunta@gmail.com">pskmattegunta@gmail.com</a></p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <img src="/images/social-icon.png" alt="Social Media" />
              </div>
              <div>
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/facebook-icon.png" alt="Facebook" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/instagram-icon.png" alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h3>Send Us a Message</h3>
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-block">Send Message</button>
              </form>
            </div>
          </div>
          
          <div className="map-container">
            <div className="map-placeholder">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.1076179374164!2d-81.5549!3d30.1869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5ca4e8b50a201%3A0x2a35799da091436b!2s11435%20Glenlaurel%20Oaks%20Cir%2C%20Jacksonville%2C%20FL%2032257!5e0!3m2!1sen!2sus!4v1681743674839!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location">
              </iframe>
            </div>
          </div>
        </div>
        
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest tools, resources, and insights</p>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email Address" required />
            <button type="submit" className="btn">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;