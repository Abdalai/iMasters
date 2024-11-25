import React, { useState, useEffect } from 'react';
import '../styles/scrolltotop.css'; 


const ScrollToTopButton = () => {
  
  const [isVisible, setIsVisible] = useState(false);

 
  const toggleVisibility = () => {
  
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth', 
    });
  };

 
  useEffect(() => {
    
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); 

  return (
    <button
      onClick={scrollToTop} 
      className={`sticky-btn ${isVisible ? 'show' : ''}`} 
      title="Till toppen" 
    >
       ↑ 
    </button>
  );
};


export default ScrollToTopButton;
