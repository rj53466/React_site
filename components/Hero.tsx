
import React from 'react';
import { PhoneCall, ShieldCheck, Info } from 'lucide-react';
import { scrollToSection } from './Navbar';
import GlitchBackground from './GlitchBackground';

const Hero: React.FC = () => {
  const frameworks = [
    { label: "OWASP", desc: "Open Web Application Security Project. Global standard for web security." },
    { label: "PTES", desc: "Penetration Testing Execution Standard. Ensuring high-quality security audits." },
    { label: "NIST", desc: "NIST Cybersecurity Framework. A gold standard for security management." },
    { label: "MITRE ATT&CK", desc: "Real-world adversary behavior mapping for better threat detection." }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      <GlitchBackground />

      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-8 border border-cyan-500/30 bg-cyan-500/5 rounded-full opacity-0 animate-[fade-in_1s_ease-out_forwards]">
          <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">Vigilance Beyond Vision</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 max-w-5xl mx-auto leading-tight tracking-tight animate-blur-in opacity-0">
          Hardening Your <br className="hidden md:block"/><span className="text-gradient">Attack Surface</span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-0 animate-[fade-in_1s_ease-out_0.5s_forwards]">
          Outcome-focused, framework-aligned, and report-ready. We help organizations detect threats in real-time and respond with surgical precision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 opacity-0 animate-[fade-in_1s_ease-out_0.8s_forwards]">
          <button 
            onClick={() => scrollToSection('#contact')}
            className="w-full sm:w-auto flex items-center justify-center space-x-3 px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-cyan-900/20 transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Request a Quote</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('#services')}
            className="w-full sm:w-auto px-10 py-5 bg-slate-900/50 hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center space-x-3"
          >
            <ShieldCheck className="w-5 h-5 text-cyan-500" />
            <span>Explore Services</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-[fade-in_1s_ease-out_1s_forwards]">
           {frameworks.map((f, idx) => (
             <div key={idx} className="group relative">
               <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-slate-400 uppercase tracking-widest cursor-help hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
                 {f.label}
               </span>
               <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-[10px] text-slate-300 font-medium leading-relaxed shadow-2xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-50 translate-y-2 group-hover:translate-y-0">
                 <div className="flex items-start gap-2">
                   <Info className="w-3 h-3 text-cyan-500 shrink-0 mt-0.5" />
                   <p>{f.desc}</p>
                 </div>
                 <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-800"></div>
               </div>
             </div>
           ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 0.8; transform: translateY(0); }
        }
      `}} />
    </section>
  );
};

export default Hero;
