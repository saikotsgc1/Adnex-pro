import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle2, Home, ArrowRight } from 'lucide-react';

const Confirmation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const plan = location.state?.plan || "Inquiry";

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
      variants={containerVariants}
      className="pt-48 pb-32 px-4 md:px-8 max-w-4xl mx-auto flex flex-col items-center text-center"
    >
      <motion.div
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 15 } }
        }}
        className="w-24 h-24 bg-[#8F7BC8]/10 rounded-full flex items-center justify-center mb-10 border border-[#8F7BC8]/20"
      >
        <CheckCircle2 size={48} className="text-[#8F7BC8]" />
      </motion.div>

      <motion.h4 variants={itemVariants} className="text-[10px] font-black uppercase tracking-[0.5em] text-[#8F7BC8] mb-6">Request Captured</motion.h4>
      <motion.h1 variants={itemVariants} className="text-6xl md:text-9xl font-black mb-10 tracking-tighter text-slate-900 dark:text-white leading-[0.9]">
        Sequence <span className="text-brand-primary">Confirmed.</span>
      </motion.h1>
      
      <motion.p variants={itemVariants} className="text-2xl text-slate-700 dark:text-slate-300 mb-12 max-w-xl font-medium leading-relaxed opacity-80">
        Your growth request for the <span className="text-brand-primary font-black">{plan}</span> module has been logged. An AdNex PRO architect will contact you within 24 hours.
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
        <button 
          onClick={() => navigate('/')}
          className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-black/10"
        >
          <Home size={20} /> Back to Hub
        </button>
        <button 
          onClick={() => navigate('/team')}
          className="glass-card px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 hover:bg-white/5 transition-all"
        >
          Meet the Team <ArrowRight size={20} />
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-24 p-8 glass-card rounded-[2.5rem] border-white/10 w-full opacity-60">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 mb-6">Verification Specs</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
          <div>
            <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Status</p>
            <p className="text-base font-bold text-white">Processing</p>
          </div>
          <div>
            <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Priority</p>
            <p className="text-base font-bold text-brand-primary">Tier 1</p>
          </div>
          <div>
            <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Security</p>
            <p className="text-base font-bold text-white">Encrypted</p>
          </div>
          <div>
            <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">ID</p>
            <p className="text-base font-bold text-white">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Confirmation;