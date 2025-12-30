
import React from 'react';
import { Quote, Star } from 'lucide-react';
import Galaxy from './Galaxy';

const testimonials = [
  {
    name: "Vikram Mehta",
    role: "Chief Technology Officer",
    company: "FinGuard Solutions",
    content: "The proactive threat monitoring from Sahasrakshi saved us from a potential ransomware attack within weeks of implementation. Their precision is unmatched.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Digital Infrastructure",
    company: "SwiftCart Global",
    content: "Their VAPT audits are incredibly thorough. They didn't just find vulnerabilities; they provided a roadmap for long-term resilience that our team could actually follow.",
    rating: 5
  },
  {
    name: "Shashank Reddy",
    role: "Founder & CEO",
    company: "Sivisha Industries",
    content: "'I really like the overall design, structure, and visual quality of the website.The work looks professional and aligns well with the brand vision. With a few final refinements in performance and user experience, this will be an excellent, high-quality product.'",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900/20 relative overflow-hidden">
      <Galaxy hueShift={240} density={0.5} saturation={0.4} speed={0.5} opacity={0.1} />
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">Client <span className="text-cyan-400">Feedback</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Trusted by industry leaders to protect their most critical digital assets and maintain operational integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between backdrop-blur-md"
            >
              <div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <div className="mb-6 relative">
                  <Quote className="absolute -top-2 -left-2 w-10 h-10 text-cyan-500/10" />
                  <p className="text-slate-300 italic leading-relaxed relative z-10">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex items-center space-x-4 border-t border-slate-800 pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border border-slate-700 shadow-lg">
                  <span className="text-cyan-400 font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-tight">{testimonial.name}</h4>
                  <p className="text-slate-500 text-xs">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center items-center space-x-2 text-slate-500">
            <span className="text-xs uppercase tracking-widest font-semibold">Verified Security Partner</span>
            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
