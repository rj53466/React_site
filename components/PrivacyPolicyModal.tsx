
import React, { useEffect } from 'react';
import { X, FileText, Shield, Mail, MapPin, Globe } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
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
            <div className="p-2 bg-cyan-100 rounded-lg">
              <Shield className="w-5 h-5 text-cyan-600" />
            </div>
            <div>
              <h2 className="text-slate-900 font-bold text-lg leading-none">Privacy Policy</h2>
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
              <h1 className="text-3xl font-bold text-slate-900 mb-2">PRIVACY POLICY</h1>
              <p className="text-slate-500 text-sm italic font-sans">Last Updated: December 2025</p>
            </div>

            <div className="space-y-8 text-sm md:text-base leading-relaxed text-justify font-sans">
              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">1</span>
                  Introduction
                </h3>
                <p>
                  Sahasrakshi Global Services (“Sahasrakshi,” “we,” “our,” or “us”) is committed to protecting the privacy and security of individuals who interact with our website, services, and digital platforms.
                </p>
                <p className="mt-4">
                  This Privacy Policy explains how we collect, use, store, disclose, and protect personal information when you visit <a href="https://www.sahasrakshi.co.in" className="text-cyan-600 hover:underline">www.sahasrakshi.co.in</a>, communicate with us, or engage with our cybersecurity services. We recognize that trust is foundational to cybersecurity. Accordingly, we apply security-first principles to the handling of all personal and organizational data.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">2</span>
                  Information We Collect
                </h3>
                <p>We collect information only when necessary and in a lawful manner.</p>
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-1">2.1 Information You Provide Directly</h4>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Name, job title, company name</li>
                      <li>Email address and phone number</li>
                      <li>Inquiry details submitted through contact forms</li>
                      <li>Information shared during consultations, assessments, or engagements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-1">2.2 Information Collected Automatically</h4>
                    <p>When you access our website, we may automatically collect:</p>
                    <ul className="list-disc ml-6 space-y-1 mt-2">
                      <li>IP address, browser type and version</li>
                      <li>Device and operating system information</li>
                      <li>Pages visited and interaction timestamps</li>
                    </ul>
                    <p className="mt-2 text-slate-500 text-xs italic">This data is used strictly for security monitoring, analytics, and service improvement.</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">3</span>
                  Purpose of Data Collection
                </h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Responding to inquiries and service requests</li>
                  <li>Delivering cybersecurity services and consultations</li>
                  <li>Improving website functionality and user experience</li>
                  <li>Ensuring operational security and fraud prevention</li>
                  <li>Meeting legal, regulatory, or contractual obligations</li>
                </ul>
                <p className="mt-4 font-bold text-cyan-700">We do not sell, rent, or trade personal data under any circumstances.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">4</span>
                  Data Protection & Security Measures
                </h3>
                <p>As a cybersecurity-focused organization, Sahasrakshi implements strong technical and organizational safeguards, including:</p>
                <ul className="list-disc ml-6 space-y-1 mt-2">
                  <li>Access controls and role-based permissions</li>
                  <li>Encryption of sensitive data where applicable</li>
                  <li>Secure hosting and infrastructure monitoring</li>
                  <li>Internal security policies and awareness practices</li>
                </ul>
                <p className="mt-4">Despite best efforts, no system can be guaranteed 100% secure. However, we continuously assess and enhance our security posture to mitigate risks.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">5</span>
                  Data Sharing & Disclosure
                </h3>
                <p>We may share information only when:</p>
                <ul className="list-disc ml-6 space-y-1 mt-2">
                  <li>Required by law, regulation, or legal process</li>
                  <li>Necessary to protect our rights, users, or systems</li>
                  <li>Engaging trusted service providers under confidentiality agreements</li>
                </ul>
                <p className="mt-4 italic text-slate-500">All third parties are expected to maintain appropriate security and confidentiality standards.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">6</span>
                  Data Retention
                </h3>
                <p>Personal data is retained only for as long as necessary to fulfill its intended purpose or as required by legal or regulatory obligations. Once no longer required, data is securely deleted or anonymized.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">7</span>
                  Your Rights
                </h3>
                <p>Depending on applicable laws, you may have the right to access the personal data we hold about you, request correction of inaccurate information, request deletion, or withdraw consent. Requests can be made by contacting us using the details below.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">8</span>
                  Third-Party Links
                </h3>
                <p>Our website may contain links to third-party websites. Sahasrakshi is not responsible for the privacy practices or content of external sites. We encourage users to review their privacy policies separately.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">9</span>
                  Policy Updates
                </h3>
                <p>This Privacy Policy may be updated periodically to reflect changes in legal requirements, services, or security practices. Updates will be posted on this page with a revised “Last Updated” date.</p>
              </section>

              <section className="pt-8 border-t border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-slate-900 text-white text-[10px] flex items-center justify-center">10</span>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-cyan-600 mt-1" />
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase">Email</span>
                      <a href="mailto:info@sahasrakshi.co.in" className="text-slate-900 font-bold hover:text-cyan-600 transition-colors">info@sahasrakshi.co.in</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-cyan-600 mt-1" />
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase">Website</span>
                      <a href="https://www.sahasrakshi.co.in" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-bold hover:text-cyan-600 transition-colors">www.sahasrakshi.co.in</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 col-span-full">
                    <MapPin className="w-5 h-5 text-cyan-600 mt-1" />
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
                <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-900">End of Document</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 bg-slate-50 text-center text-slate-400 text-[10px] uppercase tracking-widest">
          Sahasrakshi Global Services © {new Date().getFullYear()} — Secure Document Management
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
