
import React from 'react';
import { Target, Users, Zap } from 'lucide-react';
import Galaxy from './Galaxy';

const Approach: React.FC = () => {
  const approaches = [
    {
      title: "Proactive, Not Reactive",
      description: "We leverage threat intelligence, security assessments, and predictive modeling to identify risks before they become incidents—reducing downtime and costly responses.",
      icon: <Target className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Collaboration Over Complexity",
      description: "Security works best when teams understand it. We simplify decision-making and ensure internal teams are confident, aware, and supported—not overwhelmed with technical noise.",
      icon: <Users className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Continuous Evolution",
      description: "As attackers evolve, so must defenses. With ongoing monitoring, assessments, and improvement cycles, your security posture stays strong long after implementation.",
      icon: <Zap className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <section id="approach" className="py-24 bg-slate-900/30 relative overflow-hidden">
      <Galaxy hueShift={160} density={0.4} autoCenterRepulsion={0.5} opacity={0.1} />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">Our Approach To <span className="text-cyan-400">Security</span></h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Cybersecurity isn't a one-time implementation—it's a long-term partnership built on consistency, clarity, and proactive thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {approaches.map((item, idx) => (
            <div key={idx} className="relative p-10 bg-slate-950/80 border border-slate-800 rounded-3xl overflow-hidden group backdrop-blur-md">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  {item.icon}
               </div>
               <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{item.title}</h3>
               <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block py-3 px-8 rounded-full border border-slate-800 bg-slate-900 font-bold text-lg shadow-xl shadow-cyan-900/10">
            <span className="text-cyan-400">Built on Strategy.</span> <span className="text-white">Strengthened by Vigilance.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
