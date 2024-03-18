import React, { useRef, useEffect, useState } from 'react';

const ScrollIntoView = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // If target element is within viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once element is in view
        }
      });
    });

    // Start observing the target element
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup function
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []); // Only run once on mount

  return (
    <div ref={elementRef} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s' }}>
      {children}
    </div>
  );
};

export default ScrollIntoView;
