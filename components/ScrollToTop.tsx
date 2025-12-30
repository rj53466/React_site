
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // make scrolling smooth
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
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-cyan-400 shadow-2xl transition-all hover:bg-cyan-600 hover:text-white hover:border-cyan-500 hover:-translate-y-1 active:scale-90"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <ArrowUp className="relative z-10 w-6 h-6 transition-transform group-hover:animate-bounce" />
      </button>
    </div>
  );
};

export default ScrollToTop;
