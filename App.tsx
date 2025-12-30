
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Approach from './components/Approach';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import TermsOfServiceModal from './components/TermsOfServiceModal';
import CookiePolicyModal from './components/CookiePolicyModal';
import SubmissionsModal from './components/SubmissionsModal';

const App: React.FC = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
  const [isSubmissionsModalOpen, setIsSubmissionsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <div id="main-content" className="flex-grow">
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Approach />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <Footer 
          onPrivacyClick={() => setIsPrivacyModalOpen(true)} 
          onTermsClick={() => setIsTermsModalOpen(true)}
          onCookieClick={() => setIsCookieModalOpen(true)}
          onAdminClick={() => setIsSubmissionsModalOpen(true)}
        />
      </div>
      <ScrollToTop />
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
      <TermsOfServiceModal 
        isOpen={isTermsModalOpen} 
        onClose={() => setIsTermsModalOpen(false)} 
      />
      <CookiePolicyModal 
        isOpen={isCookieModalOpen} 
        onClose={() => setIsCookieModalOpen(false)} 
      />
      <SubmissionsModal 
        isOpen={isSubmissionsModalOpen} 
        onClose={() => setIsSubmissionsModalOpen(false)} 
      />
    </div>
  );
};

export default App;
