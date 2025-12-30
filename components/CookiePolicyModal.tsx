
import React, { useEffect } from 'react';
import { X, Cookie, Info, ShieldCheck, Mail, MapPin, Globe } from 'lucide-react';

interface CookiePolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookiePolicyModal: React.FC<CookiePolicyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-500">
        
        {/* Header (Non-Paper part) */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Cookie className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h2 className="text-slate-900 font-bold text-lg leading-none">Cookie Policy</h2>
              <p className="text-slate-500 text-xs mt-1">Sahasrakshi Global Services</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Paper Content */}
        <div className="flex-grow overflow-y-auto bg-slate-100 p-6 md:p-12">
          <div className="max-w-[210mm] mx-auto bg-white shadow-[0_0_40px_rgba(0,0,0,0.05)] min-h-screen p-8 md:p-16 border border-slate-200 font-serif text-slate-800 relative">
            
            {/* Watermark/Logo on paper */}
            <div className="absolute top-8 right-8 opacity-5 grayscale pointer-events-none">
              <img src="Images/logo.png" alt="Sahasrakshi" className="w-24 h-24" />
            </div>

            <div className="flex flex-col items-center mb-12 border-b-2 border-slate-100 pb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2 uppercase tracking-tight">COOKIE POLICY</h1>
              <p className="text-slate-500 text-sm italic font-sans">Last Updated: December 2025</p>
            </div>

            <div className="space-y-8 text-sm md:text-base leading-relaxed text-justify font-sans">
              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">1</span>
                  Introduction
                </h3>
                <p>
                  At Sahasrakshi Global Services, we believe in being clear and open about how we collect and use data related to you. In the spirit of transparency, this policy provides detailed information about how and when we use cookies on our website.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">2</span>
                  What are Cookies?
                </h3>
                <p>
                  Cookies are small text files that are sent by us to your computer or mobile device. They are unique to your account or your browser. They help our website recognize your device and store some information about your preferences or past actions.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">3</span>
                  How We Use Cookies
                </h3>
                <p>Cookies are used to improve your experience and to help us understand how people use our site. We use cookies for the following purposes:</p>
                <div className="mt-4 space-y-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">Essential Cookies</h4>
                    <p className="text-xs text-slate-600">These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas. Without these cookies, services you have asked for cannot be provided.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">Performance & Analytics</h4>
                    <p className="text-xs text-slate-600">These cookies help us understand how our website is performing and how you interact with it. We use this data to improve the layout and functionality of the site. All information collected is aggregated and therefore anonymous.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">Functional Cookies</h4>
                    <p className="text-xs text-slate-600">These allow our website to remember choices you make when you use the site, such as remembering your login details or language preference. The purpose of these cookies is to provide you with a more personal experience.</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">4</span>
                  Third-Party Cookies
                </h3>
                <p>
                  In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on. These third parties may include analytics services (such as Google Analytics) or social media platforms.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">5</span>
                  How to Control Cookies
                </h3>
                <p>
                  Most browsers allow you to control cookies through their settings, which may be adapted to reflect your consent to the use of cookies. Further, most browsers also enable you to review and erase cookies, including Sahasrakshi cookies. Please note that if you limit the ability of websites to set cookies, you may worsen your overall user experience.
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-1">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" className="text-orange-600 hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.apple.com/en-in/guide/safari/sfri11471/mac" target="_blank" className="text-orange-600 hover:underline">Safari</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" className="text-orange-600 hover:underline">Firefox</a></li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">6</span>
                  Updates to this Policy
                </h3>
                <p>
                  We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                </p>
              </section>

              <section className="pt-8 border-t border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">7</span>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase">Email</span>
                      <a href="mailto:info@sahasrakshi.co.in" className="text-slate-900 font-bold hover:text-orange-600 transition-colors">info@sahasrakshi.co.in</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase">Website</span>
                      <a href="https://www.sahasrakshi.co.in" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-bold hover:text-orange-600 transition-colors">www.sahasrakshi.co.in</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 col-span-full">
                    <MapPin className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase">Location</span>
                      <span className="text-slate-900 font-bold">Bengaluru, Karnataka, India</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-20 pt-8 border-t border-slate-100 flex justify-center">
              <div className="text-center opacity-30 grayscale pointer-events-none scale-75">
                <img src="Images/logo.png" alt="Sahasrakshi" className="w-16 h-16 mx-auto mb-2" />
                <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-900">Cookie Protocol End</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 bg-slate-50 text-center text-slate-400 text-[10px] uppercase tracking-widest">
          Sahasrakshi Global Services © {new Date().getFullYear()} — Authorized Cookie Management
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyModal;
