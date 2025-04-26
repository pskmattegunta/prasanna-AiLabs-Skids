// client/src/components/sections/BlogResources.js
import React from 'react';

const BlogResources = () => {
  return (
    <div className="blog-resources fade-element">
      <h2>Featured Articles</h2>
      <div className="blog-grid">
        <div className="blog-card fade-element">
          <img src="/images/blog-autism-strategies.jpg" alt="Autism Strategies" />
          <div className="blog-content">
            <div className="blog-category">Autism Support</div>
            <h3>5 Evidence-Based Strategies for Supporting Communication</h3>
            <p>Practical approaches to help children with autism develop communication skills at home and school.</p>
            <div className="blog-footer">
              <span>April 10, 2025</span>
              <span>Dr. Emily Carter</span>
            </div>
          </div>
        </div>
        
        <div className="blog-card fade-element">
          <img src="/images/blog-sensory-tools.jpg" alt="Sensory Tools" />
          <div className="blog-content">
            <div className="blog-category">Sensory Support</div>
            <h3>Creating an Effective Sensory Corner at Home</h3>
            <p>How to design calming spaces that help children regulate sensory input and manage emotions.</p>
            <div className="blog-footer">
              <span>April 5, 2025</span>
              <span>Rachel Thompson, OT</span>
            </div>
          </div>
        </div>
        
        <div className="blog-card fade-element">
          <img src="/images/blog-inclusive-education.jpg" alt="Inclusive Education" />
          <div className="blog-content">
            <div className="blog-category">Education</div>
            <h3>Advocating for Inclusive Education: A Parent's Guide</h3>
            <p>Navigating the education system to ensure your child receives appropriate accommodations and support.</p>
            <div className="blog-footer">
              <span>March 28, 2025</span>
              <span>Maria Sanchez, Ed.D</span>
            </div>
          </div>
        </div>
        
        <div className="blog-card fade-element">
          <img src="/images/blog-tech-tools.jpg" alt="Technology Tools" />
          <div className="blog-content">
            <div className="blog-category">Technology</div>
            <h3>New Assistive Technologies Transforming Special Education</h3>
            <p>Review of the latest apps and devices making learning more accessible for children with diverse needs.</p>
            <div className="blog-footer">
              <span>March 22, 2025</span>
              <span>Tech Review Team</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="view-all-container">
        <a href="/blog" className="btn">View All Articles</a>
      </div>
    </div>
  );
};

export default BlogResources;