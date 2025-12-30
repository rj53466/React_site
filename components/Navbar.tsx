
import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Phone, ChevronRight } from 'lucide-react';

export const scrollToSection = (id: string, wait: boolean = false) => {
  const targetId = id.replace('#', '');
  const element = document.getElementById(targetId);
  
  const performScroll = () => {
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (wait) {
    setTimeout(performScroll, 400);
  } else {
    performScroll();
  }
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const wasOpen = isMobileMenuOpen;
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    scrollToSection(href, wasOpen);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Approach', href: '#approach' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-[80] transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 py-3 shadow-2xl shadow-cyan-900/10' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-10 flex justify-between items-center">
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="outline-none group flex items-center gap-3"
          >
            <img 
              src="Images/logo.png" 
              alt="Sahasrakshi" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-tighter text-xl leading-none group-hover:text-cyan-400 transition-colors uppercase">
                SAHASRAKSHI
              </span>
              <span className="text-cyan-500 text-[10px] tracking-[0.3em] font-bold uppercase opacity-80">
                Global Services
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-300 hover:text-white text-sm font-semibold tracking-wide transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <div className="h-6 w-px bg-slate-800"></div>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white transition-all duration-300 bg-cyan-600 rounded-lg group hover:bg-cyan-500 shadow-lg shadow-cyan-900/20"
            >
              <span className="relative flex items-center">
                Expert Consultation
                <Shield className="ml-2 w-4 h-4 opacity-70 group-hover:scale-110 transition-transform" />
              </span>
            </a>
          </div>

          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden relative z-[100] p-2 transition-all duration-300 group"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <div className="w-11 h-11 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.3)] transform hover:scale-110 active:scale-95 transition-all text-white">
                <X size={24} strokeWidth={2.5} />
              </div>
            ) : (
              <div className="p-2 text-slate-300 hover:text-cyan-400 transition-colors">
                <Menu size={28} />
              </div>
            )}
          </button>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 z-[90] lg:hidden transition-all duration-700 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto menu-open-active' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" onClick={toggleMobileMenu}></div>

        <div 
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-slate-900 border-l border-slate-800/50 shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-10 flex flex-col items-center justify-center border-b border-slate-800/30 space-y-3">
             <img src="Images/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
             <div className="flex flex-col items-center">
                <span className="text-white font-bold text-base uppercase tracking-tight">SAHASRAKSHI</span>
                <span className="text-cyan-500 text-[8px] font-bold uppercase tracking-[0.2em]">Global Services</span>
             </div>
          </div>

          <div className="flex-grow py-8 px-8 flex flex-col space-y-4 overflow-y-auto">
            {navLinks.map((link, idx) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="mobile-nav-item flex items-center justify-between text-lg font-semibold text-slate-300 hover:text-cyan-400 transition-all group py-1.5"
                style={{ transitionDelay: isMobileMenuOpen ? `${idx * 60 + 200}ms` : '0ms' }}
              >
                <span className="relative">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full rounded-full"></span>
                </span>
                <ChevronRight size={18} className="text-slate-700 group-hover:text-cyan-500 transform translate-x-1 group-hover:translate-x-0 transition-all opacity-40 group-hover:opacity-100" />
              </a>
            ))}
          </div>

          <div 
            className="mobile-nav-item p-8 bg-slate-950/90 mt-auto border-t border-slate-800/40 rounded-t-[2.5rem]"
            style={{ transitionDelay: isMobileMenuOpen ? `${navLinks.length * 60 + 250}ms` : '0ms' }}
          >
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center justify-center w-full py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-bold rounded-xl shadow-xl shadow-cyan-900/30 mb-8 transform active:scale-95 transition-transform"
            >
              Get Expert Consultation
            </a>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4 text-slate-300">
                <div className="w-10 h-10 bg-slate-800/60 rounded-xl flex items-center justify-center border border-slate-700/50">
                   <Phone size={18} className="text-cyan-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-500 uppercase font-bold tracking-widest">Call Now</span>
                  <span className="text-base font-bold text-slate-200">+91 7795817300</span>
                </div>
              </div>
            </div>
            <div className="h-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
