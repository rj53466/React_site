
import React from 'react';
import { scrollToSection } from './Navbar';
import { Settings, Info } from 'lucide-react';

interface FooterProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onCookieClick?: () => void;
  onAdminClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick, onTermsClick, onCookieClick, onAdminClick }) => {
  const handleFooterLink = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onPrivacyClick) onPrivacyClick();
  };

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onTermsClick) onTermsClick();
  };

  const handleCookieClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onCookieClick) onCookieClick();
  };

  const handleAdminClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onAdminClick) onAdminClick();
  };

  const complianceBadges = [
    { label: "ISO 27001-ALIGNED", desc: "Following international standards for information security management." },
    { label: "OWASP TOP 10", desc: "Mitigating the 10 most critical web security vulnerabilities." },
    { label: "SOC2 READY", desc: "Prepared for service organization data security and privacy audits." }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="Images/logo.png" alt="Sahasrakshi" className="w-12 h-12 object-contain" />
              <div className="flex flex-col">
                <span className="text-white font-bold tracking-tighter text-xl leading-none uppercase">
                  SAHASRAKSHI
                </span>
                <span className="text-cyan-500 text-[10px] tracking-[0.3em] font-bold uppercase opacity-80">
                  Global Services
                </span>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
              Cybersecurity services for modern teams. Built with a focus on outcome-driven defense and auditor-friendly reporting.
            </p>
            <div className="flex flex-wrap gap-3">
              {complianceBadges.map((badge, idx) => (
                <div key={idx} className="group relative">
                  <span className="px-2 py-1 bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-500 rounded cursor-help group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all uppercase">
                    {badge.label}
                  </span>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 p-2 bg-slate-900 border border-slate-800 rounded-lg text-[9px] text-slate-400 leading-tight opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-50 shadow-xl">
                    <p>{badge.desc}</p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#services" onClick={(e) => handleFooterLink(e, '#services')} className="hover:text-cyan-400 transition-colors">Pentesting</a></li>
              <li><a href="#services" onClick={(e) => handleFooterLink(e, '#services')} className="hover:text-cyan-400 transition-colors">SOC Monitoring</a></li>
              <li><a href="#services" onClick={(e) => handleFooterLink(e, '#services')} className="hover:text-cyan-400 transition-colors">Compliance</a></li>
              <li><a href="#services" onClick={(e) => handleFooterLink(e, '#services')} className="hover:text-cyan-400 transition-colors">VAPT Audits</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Internal</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <button 
                  onClick={handleAdminClick} 
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <Settings size={14} />
                  Client Inquiries
                </button>
              </li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Knowledge Base</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Portal Login</a></li>
              <li><a href="#contact" onClick={(e) => handleFooterLink(e, '#contact')} className="hover:text-cyan-400 transition-colors">Help Desk</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-900 space-y-4 md:space-y-0">
          <p className="text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} Sahasrakshi Global Services. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <a href="#" onClick={handlePrivacyClick} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" onClick={handleTermsClick} className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" onClick={handleCookieClick} className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
