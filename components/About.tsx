
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden relative electric-border p-8 flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.1)]">
                <div className="absolute inset-0 opacity-20 z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #22d3ee 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                <div className="z-10 text-center">
                   <div className="text-8xl font-black mb-2 animate-text-shimmer leading-none">50+</div>
                   <div className="animate-text-shimmer font-bold tracking-widest text-sm uppercase px-4">Years Collective Experience</div>
                </div>
             </div>
             <div className="absolute -top-10 -right-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px]"></div>
             <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600/10 rounded-full blur-[80px]"></div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">About <span className="text-cyan-400">Us</span></h2>
            <div className="space-y-6 text-slate-400 leading-relaxed text-justify">
              <p>
                Sahasrakshi Global Services was founded with one clear purpose: to help organizations stay ahead of constantly evolving cyber threats. 
                Inspired by the meaning of <span className="text-white font-medium">'Sahasraksha' — The Thousand-Eyed Protector</span>, we operate with the same spirit of constant awareness, precision, and vigilance.
              </p>
              <p>
                Our team is made up of certified cybersecurity professionals who bring together deep technical expertise and real-world experience. 
                We don't just rely on tools—we rely on insight, strategy, and continuous learning.
              </p>
              <p>
                Whether supporting fast-growing startups or established enterprises, we tailor our security approach to each organization's unique environment—ensuring that their digital assets stay protected around the clock.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
