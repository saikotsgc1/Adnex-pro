import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, MapPin, Phone, Send, Loader2, MessageSquare } from 'lucide-react';
import MarketingFlood from '../components/MarketingFlood';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPlan = location.state?.plan;
  
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: selectedPlan ? `Inquiry for ${selectedPlan} Package` : '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value) error = 'Name is required';
        else if (value.length < 2) error = 'Name must be at least 2 characters';
        break;
      case 'email':
        if (!value) error = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(value)) error = 'Invalid email format';
        break;
      case 'subject':
        if (!value) error = 'Subject is required';
        else if (value.length < 5) error = 'Subject must be at least 5 characters';
        break;
      case 'message':
        if (!value) error = 'Message is required';
        else if (value.length < 10) error = 'Message must be at least 10 characters';
        break;
      default:
        break;
    }
    setErrors(prev => ({ ...prev, [name]: error }));
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation check
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message)
    };

    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }

    setLoading(true);
    setTimeout(() => {
      navigate('/confirmation', { state: { plan: selectedPlan } });
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 100 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="relative min-h-screen"
    >
      <div className="absolute inset-0 z-0 overflow-hidden h-[100vh] opacity-20">
        <MarketingFlood />
      </div>

      <div className="pt-32 md:pt-48 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-32">
          <motion.div variants={containerVariants}>
            <motion.h1 variants={itemVariants} className="text-6xl md:text-9xl font-black mb-10 tracking-tighter text-slate-900 dark:text-white leading-[0.9]">
              Let's <span className="text-brand-primary dark:text-[#B19DF2]">Talk Growth</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-2xl text-slate-700 dark:text-slate-200 mb-16 max-w-md font-medium leading-relaxed">
              Reach out. We'll handle the strategy. Ready to scale your brand? Contact us now.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-10">
              {[
                { icon: <MapPin size={24} />, label: "Location", value: "Habiganj Sadar, Habiganj, Bangladesh" },
                { icon: <Mail size={24} />, label: "Email", value: "info@adnexpro.com" },
                { icon: <Phone size={24} />, label: "Direct", value: "+880 1738775957" },
                { icon: <MessageSquare size={24} />, label: "WhatsApp", value: "+880 1738775957" }
              ].map((item, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex items-center space-x-6 group">
                  <div className="bg-[#8F7BC8]/15 p-5 rounded-[1.5rem] text-[#8F7BC8] border border-[#8F7BC8]/20 group-hover:scale-110 transition-transform dark:text-[#B19DF2] dark:bg-white/5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 mb-1">{item.label}</p>
                    <span className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="glass-card p-8 md:p-16 rounded-[2.5rem] border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-10 w-40 h-40 bg-[#8F7BC8]/10 blur-[80px] rounded-full"></div>
            
            <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-300">Name</label>
                  <input 
                    required 
                    type="text" 
                    name="name"
                    placeholder="Full Name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-slate-100/50 dark:bg-black/40 border ${errors.name ? 'border-red-500' : 'border-slate-300 dark:border-white/20'} rounded-xl px-6 py-5 focus:border-[#8F7BC8] outline-none transition-all text-slate-900 dark:text-white font-medium`} 
                  />
                  {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">{errors.name}</p>}
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-300">Email</label>
                  <input 
                    required 
                    type="email" 
                    name="email"
                    placeholder="Business Email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-slate-100/50 dark:bg-black/40 border ${errors.email ? 'border-red-500' : 'border-slate-300 dark:border-white/20'} rounded-xl px-6 py-5 focus:border-[#8F7BC8] outline-none transition-all text-slate-900 dark:text-white font-medium`} 
                  />
                  {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">{errors.email}</p>}
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-300">Subject</label>
                <input 
                  required 
                  type="text" 
                  name="subject"
                  placeholder="Growth Objectives" 
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-slate-100/50 dark:bg-black/40 border ${errors.subject ? 'border-red-500' : 'border-slate-300 dark:border-white/20'} rounded-xl px-6 py-5 focus:border-[#8F7BC8] outline-none transition-all text-slate-900 dark:text-white font-medium`} 
                />
                {errors.subject && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">{errors.subject}</p>}
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-300">Message</label>
                <textarea 
                  required 
                  rows={4} 
                  name="message"
                  placeholder="Tell us about your brand goals..." 
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-slate-100/50 dark:bg-black/40 border ${errors.message ? 'border-red-500' : 'border-slate-300 dark:border-white/20'} rounded-xl px-6 py-5 focus:border-[#8F7BC8] outline-none resize-none transition-all text-slate-900 dark:text-white font-medium`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">{errors.message}</p>}
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#8F7BC8] text-white py-6 rounded-2xl font-black text-xl shadow-2xl shadow-[#8F7BC8]/30 hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 dark:bg-brand-primary"
              >
                {loading ? (
                  <> <Loader2 className="animate-spin" /> Transmitting... </>
                ) : (
                  <> <Send size={20} /> Send Message </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;