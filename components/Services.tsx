
import React from 'react';
import { Shield, Radio, Search, AlertTriangle, CheckCircle, Layout } from 'lucide-react';
import Galaxy from './Galaxy';

const services = [
  {
    title: "Threat Intelligence & Monitoring",
    description: "Real-time threat detection and analysis to identify vulnerabilities before they're exploited.",
    icon: <Radio className="w-8 h-8 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Security Operations Center (SOC)",
    description: "24/7 monitoring and incident response to protect your infrastructure around the clock.",
    icon: <Shield className="w-8 h-8 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Penetration Testing & VAPT",
    description: "Comprehensive security audits to identify and remediate system weaknesses via vulnerability assessments.",
    icon: <Search className="w-8 h-8 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Incident Response & Forensics",
    description: "Rapid response teams to contain breaches and conduct thorough digital investigations.",
    icon: <AlertTriangle className="w-8 h-8 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Compliance & Risk Management",
    description: "Ensure regulatory compliance with GDPR, ISO 27001, SOC 2, and other industry standards.",
    icon: <CheckCircle className="w-8 h-8 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Front-end Development with High-End Security",
    description: "Architecting resilient digital experiences where aesthetics meet enterprise-grade defense.",
    icon: <Layout className="w-8 h-8 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      <Galaxy hueShift={210} density={0.8} speed={1} opacity={0.12} />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">Our Core <span className="text-cyan-400">Services</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">Providing a comprehensive shield for your digital assets through industry-leading expertise and cutting-edge technology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-3xl bg-slate-900 overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 h-full flex flex-col"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/40"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-grow">
                <div className="mb-6 bg-slate-800/50 p-4 rounded-2xl inline-block group-hover:bg-cyan-500/20 transition-colors border border-slate-700 group-hover:border-cyan-500/30">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
