// client/src/config.js

// This file provides a consistent way to access environment variables
// including PUBLIC_URL for image paths across your application

const config = {
    // Set up a default base URL for public assets
    // This works even if process.env.PUBLIC_URL is undefined
    PUBLIC_URL: typeof window !== 'undefined' && window.__PUBLIC_URL__ 
      ? window.__PUBLIC_URL__ 
      : '',
    
    // Add any other configuration variables here
    API_URL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api',
  };
  
  // Helper function to get image paths
  export const getImagePath = (imageName) => {
    return `${config.PUBLIC_URL}/images/${imageName}`;
  };
  
  export default config;