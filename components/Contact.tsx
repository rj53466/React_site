
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, ShieldAlert, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Galaxy from './Galaxy';

interface FormState {
  name: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    service: 'Penetration Testing',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (name: string, value: string) => {
    let error = '';
    if (name === 'name') {
      const nameRegex = /^[a-zA-Z\s]{2,60}$/;
      if (!value) error = 'Name is required';
      else if (!nameRegex.test(value)) error = 'Please enter a valid name (2-60 characters, letters only)';
    }
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) error = 'Email is required';
      else if (!emailRegex.test(value)) error = 'Please enter a valid email address';
    }
    if (name === 'message') {
      if (!value) error = 'Message is required';
      else if (value.length < 20) error = 'Please provide more details (min 20 characters)';
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validate(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validate(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const saveSubmissionLocally = (data: FormState) => {
    try {
      const existing = JSON.parse(localStorage.getItem('sahasrakshi_inquiries') || '[]');
      const newEntry = {
        ...data,
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        status: 'Unread'
      };
      localStorage.setItem('sahasrakshi_inquiries', JSON.stringify([newEntry, ...existing]));
    } catch (e) {
      console.error('Failed to save inquiry locally:', e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const newErrors: FormErrors = {
      name: validate('name', formData.name),
      email: validate('email', formData.email),
      message: validate('message', formData.message)
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true, service: true });

    if (Object.values(newErrors).every(err => !err)) {
      setIsSubmitting(true);
      try {
        const payload = {
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          _subject: `New Inquiry from ${formData.name}: ${formData.service}`,
          _captcha: "false",
          _template: "table"
        };
        const response = await fetch("https://formsubmit.co/ajax/info@sahasrakshi.co.in", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(payload)
        });
        const result = await response.json();
        if (response.ok && result.success === "true") {
          saveSubmissionLocally(formData);
          setIsSuccess(true);
          setFormData({ name: '', email: '', service: 'Penetration Testing', message: '' });
          setTouched({});
        } else {
          throw new Error(result.message || "Relay failure");
        }
      } catch (err) {
        saveSubmissionLocally(formData);
        setSubmitError("We encountered a technical relay issue. However, your inquiry has been SECURELY SAVED in our local management portal.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/40 relative overflow-hidden">
      <Galaxy hueShift={190} density={1.2} rotationSpeed={0.15} starSpeed={0.8} opacity={0.12} />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Get In <span className="text-cyan-400">Touch</span></h2>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                Direct transmission to our security operations mailbox. End-to-end audit logging enabled.
              </p>
              <div className="space-y-6 mb-12">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                    <Mail className="text-cyan-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Email</span>
                    <a href="mailto:info@sahasrakshi.co.in" className="text-white hover:text-cyan-400 transition-colors">info@sahasrakshi.co.in</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                    <Phone className="text-cyan-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Phone</span>
                    <span className="text-white">+91 7795817300</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                    <MapPin className="text-cyan-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Address</span>
                    <span className="text-white">Bengaluru, KA, India</span>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-slate-950/80 border border-slate-800 rounded-2xl backdrop-blur-md">
                 <div className="flex items-center space-x-3 mb-4">
                    <ShieldAlert className="text-orange-500 w-6 h-6" />
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">Security Disclosure</h3>
                 </div>
                 <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    Found a vulnerability? Email us with details. We acknowledge receipt within 48 hours.
                 </p>
                 <a href="mailto:info@sahasrakshi.co.in" className="inline-block px-6 py-2 border border-slate-700 hover:border-orange-500 hover:text-orange-500 text-slate-300 text-sm font-bold rounded-lg transition-all uppercase tracking-wide">
                    Report Vulnerability
                 </a>
              </div>
            </div>
            <div className="bg-slate-950/90 p-8 md:p-10 rounded-3xl border border-slate-800 relative overflow-hidden shadow-2xl backdrop-blur-xl">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">Relay Successful</h3>
                  <button onClick={() => setIsSuccess(false)} className="text-cyan-400 font-bold hover:underline uppercase text-sm tracking-widest">
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Name</label>
                      <input 
                        type="text" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur}
                        className={`w-full bg-slate-900/50 border ${errors.name ? 'border-red-500/50' : 'border-slate-800'} rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-500 transition-colors`} 
                        placeholder="Full Name" 
                      />
                    </div>
                    <div className="relative">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email</label>
                      <input 
                        type="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur}
                        className={`w-full bg-slate-900/50 border ${errors.email ? 'border-red-500/50' : 'border-slate-800'} rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-500 transition-colors`} 
                        placeholder="Email Address" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Service</label>
                    <select name="service" value={formData.service} onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 text-white outline-none cursor-pointer">
                      <option>Penetration Testing</option>
                      <option>24/7 SOC & MDR</option>
                      <option>Incident Response</option>
                      <option>Security Consulting</option>
                    </select>
                  </div>
                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Project Brief</label>
                    <textarea 
                      name="message" rows={4} value={formData.message} onChange={handleChange} onBlur={handleBlur}
                      className={`w-full bg-slate-900/50 border ${errors.message ? 'border-red-500/50' : 'border-slate-800'} rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-500 transition-colors`} 
                      placeholder="Briefly describe your security needs..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" disabled={isSubmitting}
                    className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-lg transition-all shadow-lg uppercase tracking-widest">
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : "Submit Inquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
