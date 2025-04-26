// client/src/pages/Contact.js
import React, { useEffect } from 'react';
import ContactMap from '../components/sections/ContactMap';
import './Pages.css';

const Contact = () => {
  useEffect(() => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        
        // Toggle active class on header
        header.classList.toggle('active');
        
        // Toggle display of content
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
    
    // Don't forget to include the cleanup function
    return () => {
      accordionHeaders.forEach(header => {
        header.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Contact AILabs-Skids</h1>
          <p>We're here to help and answer any questions you may have</p>
        </div>
      </div>
      
      <div className="container">
        <div className="page-intro">
          <h2>Get in Touch</h2>
          <p>
            Whether you have questions about our tools, need technical support, want to discuss 
            partnership opportunities, or simply want to share your feedback, we're eager to hear from you.
          </p>
        </div>
        
        <div className="support-options">
          <div className="support-card">
            <div className="support-icon">
              <img src="/images/family-support.png" alt="Family Support" />
            </div>
            <h3>Family Support</h3>
            <p>Questions about tools or resources for your child</p>
            <a href="mailto:family@ailabs-skids.com" className="support-link">family@ailabs-skids.com</a>
          </div>
          <div className="support-card">
            <div className="support-icon">
              <img src="/images/professional-support.png" alt="Professional Support" />
            </div>
            <h3>Professional Inquiries</h3>
            <p>For educators, therapists, and healthcare providers</p>
            <a href="mailto:professional@ailabs-skids.com" className="support-link">professional@ailabs-skids.com</a>
          </div>
          <div className="support-card">
            <div className="support-icon">
              <img src="/images/tech-support.png" alt="Technical Support" />
            </div>
            <h3>Technical Support</h3>
            <p>Help with using our tools and applications</p>
            <a href="mailto:support@ailabs-skids.com" className="support-link">support@ailabs-skids.com</a>
          </div>
        </div>
        
        <ContactMap />
        
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="accordion">
            <div className="accordion-item">
              <h3 className="accordion-header">Are your tools clinically validated?</h3>
              <div className="accordion-content">
                <p>
                  All of our tools are developed in consultation with clinical experts and undergo rigorous testing. 
                  While we continuously gather data on outcomes, we recommend using our tools as a supplement to 
                  professional therapy and education rather than a replacement.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header">How do you ensure privacy and data security?</h3>
              <div className="accordion-content">
                <p>
                  We take privacy extremely seriously, especially when it comes to children's data. All of our tools 
                  comply with relevant data protection regulations, including COPPA. We only collect the minimum data 
                  necessary to provide our services, encrypt all personal information, and never sell data to third parties.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header">Do you offer scholarships or financial assistance?</h3>
              <div className="accordion-content">
                <p>
                  Yes, we are committed to making our tools accessible to all families who need them. We offer a 
                  financial assistance program for families who qualify. Please contact us directly at 
                  pskmattegunta@gmail.com to learn more about our scholarship opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;