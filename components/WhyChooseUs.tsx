
import React from 'react';
import { Clock, Briefcase, Cpu, Sliders, Award } from 'lucide-react';
import { scrollToSection } from './Navbar';
import Galaxy from './Galaxy';

const reasons = [
  {
    title: "24/7 Expert Support",
    description: "Our dedicated security team is available round-the-clock to respond to threats and support your operations.",
    icon: <Clock className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "Proven Team Experience",
    description: "Our team collectively brings over 50+ years of hands-on cybersecurity expertise across enterprise environments.",
    icon: <Briefcase className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "Advanced AI-Powered Solutions",
    description: "Leverage machine learning and artificial intelligence for predictive threat detection and automated response.",
    icon: <Cpu className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "Customized Security Strategies",
    description: "Tailored solutions designed to fit your specific industry requirements, infrastructure, and risk profile.",
    icon: <Sliders className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "Industry-Leading Certifications",
    description: "Our team holds CISSP, CEH, CISM, OSCP, and other top-tier security certifications.",
    icon: <Award className="w-6 h-6 text-cyan-400" />
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <Galaxy focal={[0.8, 0.4]} density={0.8} hueShift={160} speed={1} opacity={0.12} />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 uppercase tracking-tight">Why Choose <span className="text-cyan-400">Sahasrakshi?</span></h2>
            <div className="space-y-8">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 mt-1">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">{reason.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/20 to-slate-900 border border-slate-800 p-12 rounded-3xl relative overflow-hidden backdrop-blur-sm">
             <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
             <div className="relative z-10 text-center flex flex-col items-center">
                <div className="mb-8">
                  <img src="Images/logo.png" alt="Sahasrakshi Logo" className="w-24 h-24 object-contain" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">Securing Your Digital Future Today</h4>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-sm">
                  Ready to elevate your security posture? Get a comprehensive audit focused on your unique business needs.
                </p>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="px-8 py-3 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-500 transition-all inline-block shadow-lg shadow-cyan-600/20 active:scale-95"
                >
                  Request a Free Audit
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
