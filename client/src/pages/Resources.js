// client/src/pages/Resources.js
import React, { useEffect, useState } from 'react';
import './Resources.css';

// Resource categories data
const resourceCategories = [
  {
    id: 'understanding',
    title: 'Understanding Autism Spectrum Disorder (ASD)',
    icon: 'https://img.icons8.com/color/48/brain.png',
    description: 'Essential guides and information about autism spectrum disorder.',
    resources: [
      {
        title: "A Parent's Guide to Autism",
        description: 'Comprehensive toolkit for families learning about autism for the first time.',
        link: 'https://www.autismspeaks.org/tool-kit/parents-guide-autism',
        type: 'Website',
        tags: ['Guide', 'Parents', 'Basics']
      },
      {
        title: 'Autism Parent Handbook',
        description: 'Detailed handbook covering signs, diagnosis, and coping strategies.',
        link: 'https://divisionofresearch.kaiserpermanente.org/autism-handbook',
        type: 'PDF',
        tags: ['Handbook', 'Medical', 'Support']
      },
      {
        title: 'Early Signs of Autism',
        description: 'Learn about early indicators and when to seek professional help.',
        link: 'https://www.cdc.gov/ncbddd/autism/signs.html',
        type: 'Article',
        tags: ['Early Detection', 'Signs', 'Development']
      }
    ]
  },
  {
    id: 'therapy',
    title: 'Therapy & Intervention Resources',
    icon: 'https://img.icons8.com/color/48/communication.png',
    description: 'Speech therapy, behavioral intervention, and other therapeutic approaches.',
    resources: [
      {
        title: 'Speech Therapy Activities',
        description: 'Interactive exercises and games for speech development.',
        link: 'https://www.speechandlanguagekids.com/free-materials/',
        type: 'Interactive',
        tags: ['Speech', 'Activities', 'Development']
      },
      {
        title: 'ABA Therapy Guide',
        description: 'Understanding Applied Behavior Analysis therapy and its benefits.',
        link: 'https://www.autismspeaks.org/applied-behavior-analysis-aba-0',
        type: 'Guide',
        tags: ['ABA', 'Therapy', 'Behavior']
      }
    ]
  },
  {
    id: 'education',
    title: 'Educational Support',
    icon: 'https://img.icons8.com/color/48/school.png',
    description: 'Resources for academic success and school integration.',
    resources: [
      {
        title: 'IEP Guide for Parents',
        description: 'Understanding and advocating for Individualized Education Programs.',
        link: 'https://www.understood.org/en/school-learning/special-services/ieps',
        type: 'Guide',
        tags: ['Education', 'IEP', 'Rights']
      },
      {
        title: 'Classroom Strategies',
        description: 'Tips for teachers and educators working with autistic students.',
        link: 'https://www.autism.org.uk/advice-and-guidance/topics/education',
        type: 'Resource',
        tags: ['Teaching', 'Classroom', 'Support']
      }
    ]
  }
];

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  // Add fade-in animation effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-element');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.classList.add('fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Filter resources based on search and tags
  const filterResources = (resources) => {
    return resources.filter(resource => {
      const matchesSearch = 
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTags = 
        selectedTags.length === 0 ||
        resource.tags.some(tag => selectedTags.includes(tag));

      return matchesSearch && matchesTags;
    });
  };

  // Get all unique tags
  const getAllTags = () => {
    const tags = new Set();
    resourceCategories.forEach(category => {
      category.resources.forEach(resource => {
        resource.tags.forEach(tag => tags.add(tag));
      });
    });
    return Array.from(tags).sort();
  };

  return (
    <div className="resources-container">
      <header>
        <h1>Autism Support Resources</h1>
        <p>Expert-curated resources to empower families and support children with autism through their journey of growth and development.</p>
        
        <div className="search-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="tags-filter">
            {getAllTags().map(tag => (
              <button
                key={tag}
                className={`tag ${selectedTags.includes(tag) ? 'active' : ''}`}
                onClick={() => {
                  setSelectedTags(prev =>
                    prev.includes(tag)
                      ? prev.filter(t => t !== tag)
                      : [...prev, tag]
                  );
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </header>
      
      <main className="container">
        <nav className="category-nav">
          <button
            className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Resources
          </button>
          {resourceCategories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <img src={category.icon} alt="" style={{ height: '20px', marginRight: '8px' }} />
              {category.title}
            </button>
          ))}
        </nav>

        {(activeCategory === 'all' ? resourceCategories : 
          resourceCategories.filter(cat => cat.id === activeCategory)
        ).map(category => (
          <div key={category.id} className="section fade-element">
            <h2>
              <img src={category.icon} alt="" style={{ height: '40px' }} />
              {category.title}
            </h2>
            <p className="section-description">{category.description}</p>
            <div className="resources-wrapper">
              <div className="resources-track">
                {filterResources(category.resources).map((resource, idx) => (
                  <div key={idx} className="resource-card">
                    <div className="resource-type">{resource.type}</div>
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>
                    <div className="resource-tags">
                      {resource.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <a href={resource.link} target="_blank" rel="noopener noreferrer" 
                       className="resource-link">
                      Visit Resource
                      <svg viewBox="0 0 24 24" width="16" height="16">
                        <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Resources;