
import React, { useEffect } from 'react';
import { X, Scale, Gavel, Mail, MapPin, Globe, ShieldCheck } from 'lucide-react';

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfServiceModal: React.FC<TermsOfServiceModalProps> = ({ isOpen, onClose }) => {
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
            <div className="p-2 bg-blue-100 rounded-lg">
              <Scale className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-slate-900 font-bold text-lg leading-none">Terms of Service</h2>
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
              <h1 className="text-3xl font-bold text-slate-900 mb-2 uppercase tracking-tight">TERMS OF SERVICE</h1>
              <p className="text-slate-500 text-sm italic font-sans">Last Updated: December 2025</p>
            </div>

            <div className="space-y-8 text-sm md:text-base leading-relaxed text-justify font-sans">
              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">1</span>
                  Acceptance of Terms
                </h3>
                <p>
                  By accessing or using <a href="https://www.sahasrakshi.co.in" className="text-blue-600 hover:underline">www.sahasrakshi.co.in</a> or engaging with Sahasrakshi Global Services, you agree to comply with and be bound by these Terms of Service (“Terms”). If you do not agree with these Terms, you should not use our website or services.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">2</span>
                  Scope of Services
                </h3>
                <p>Sahasrakshi Global Services provides cybersecurity-related services, including but not limited to:</p>
                <ul className="list-disc ml-6 mt-3 space-y-1">
                  <li>Security assessments and consulting</li>
                  <li>Vulnerability assessments and penetration testing</li>
                  <li>Threat monitoring and advisory services</li>
                  <li>Incident response guidance and support</li>
                </ul>
                <p className="mt-3 italic">All services are provided strictly under lawful, authorized, and ethical boundaries.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">3</span>
                  Authorized Use Only
                </h3>
                <p>You agree that:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>You will only request or use our services for systems, applications, or networks you own or are explicitly authorized to test.</li>
                  <li>You will not use our services or content for illegal, malicious, or unethical activities.</li>
                </ul>
                <p className="mt-4 font-semibold text-slate-900">Sahasrakshi will not be responsible for misuse of information, tools, or recommendations provided.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">4</span>
                  Intellectual Property
                </h3>
                <p>All content on this website, including text, graphics, branding, documents, methodologies, and materials, is the intellectual property of Sahasrakshi Global Services unless otherwise stated. You may not copy, reproduce, distribute, or modify any content without prior written consent.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">5</span>
                  Confidentiality
                </h3>
                <p>Any information shared during engagements, discussions, or assessments will be treated as confidential and handled in accordance with professional cybersecurity standards. Likewise, clients are expected to maintain confidentiality regarding proprietary methodologies, reports, and deliverables provided by Sahasrakshi.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">6</span>
                  Limitation of Liability
                </h3>
                <p>To the maximum extent permitted by law:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Sahasrakshi shall not be liable for indirect, incidental, or consequential damages.</li>
                  <li>Cybersecurity outcomes depend on multiple factors; no guarantee of absolute security is implied.</li>
                  <li>Our services aim to reduce risk, not eliminate it entirely.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">7</span>
                  Disclaimer
                </h3>
                <p>All services and website content are provided on an “as-is” basis. While we strive for accuracy and effectiveness, we make no warranties regarding completeness, reliability, or suitability for a particular purpose.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">8</span>
                  Termination
                </h3>
                <p>Sahasrakshi reserves the right to suspend or terminate access to services or the website if these Terms are violated or if misuse is identified.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">9</span>
                  Governing Law
                </h3>
                <p>These Terms shall be governed by and interpreted in accordance with the laws of India, without regard to conflict-of-law principles.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">10</span>
                  Modifications to Terms
                </h3>
                <p>We may update these Terms periodically. Continued use of our website or services after changes are posted constitutes acceptance of the updated Terms.</p>
              </section>

              <section className="pt-8 border-t border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">11</span>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase">Email</span>
                      <a href="mailto:info@sahasrakshi.co.in" className="text-slate-900 font-bold hover:text-blue-600 transition-colors">info@sahasrakshi.co.in</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase">Website</span>
                      <a href="https://www.sahasrakshi.co.in" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-bold hover:text-blue-600 transition-colors">www.sahasrakshi.co.in</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 col-span-full">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
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
                <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-900">Legal Agreement End</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 bg-slate-50 text-center text-slate-400 text-[10px] uppercase tracking-widest">
          Sahasrakshi Global Services © {new Date().getFullYear()} — Authorized Legal Documentation
        </div>
      </div>
    </div>
  );
};

export default TermsOfServiceModal;
