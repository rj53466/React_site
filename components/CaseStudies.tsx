
import React from 'react';
import { ExternalLink, ShieldCheck, Zap, Database } from 'lucide-react';
import Galaxy from './Galaxy';

const cases = [
  {
    title: "Fintech API — Critical Auth Bypass",
    description: "Found multi-tenant JWT validation flaw; prevented cross-tenant data access. Rolled out fix within 48h.",
    icon: <Zap className="w-5 h-5 text-yellow-500" />
  },
  {
    title: "Manufacturing SOC — Ransomware Averted",
    description: "EDR detected early lateral movement; playbook led to isolation in 12 minutes. Zero data loss.",
    icon: <ShieldCheck className="w-5 h-5 text-green-500" />
  },
  {
    title: "SaaS Cloud — S3 Exposure",
    description: "Discovered public backups bucket; implemented SCPs & BlockPublicAcls; verified via retest.",
    icon: <Database className="w-5 h-5 text-blue-500" />
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-24 bg-slate-950 relative overflow-hidden">
      <Galaxy hueShift={180} density={1} rotationSpeed={0.05} repulsionStrength={3} opacity={0.12} />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">Case <span className="text-cyan-400">Studies</span></h2>
          <p className="text-slate-400 text-lg">Anonymized snapshots of recent high-impact outcomes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className="group p-8 bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 rounded-3xl transition-all duration-300 backdrop-blur-sm">
               <div className="mb-6 flex items-center justify-between">
                  <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-cyan-500/10 transition-colors">
                    {item.icon}
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all" />
               </div>
               <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{item.title}</h3>
               <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
