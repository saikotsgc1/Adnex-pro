import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Rocket, Zap, Flame, Trophy, Check, ArrowRight, BarChart, Settings, Share2 } from 'lucide-react';
import GlitzText from '../components/GlitzText';
import MarketingFlood from '../components/MarketingFlood';

const Home: React.FC = () => {
  const navigate = useNavigate();

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 100 },
    },
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.1, // Reduced for readability
      transition: { duration: 2, ease: "easeInOut", delay: 0.5 },
    },
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="relative"
    >
      {/* Dynamic Background Texture */}
      <div className="absolute inset-0 z-0 overflow-hidden h-[100vh]">
        <MarketingFlood />
      </div>

      <div className="pt-24 md:pt-32 px-4 md:px-8 relative z-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto py-16 md:py-32">
          <motion.div 
            variants={containerVariants}
            className="glass-card rounded-[2.5rem] p-8 md:p-24 text-center border-white/10 relative overflow-hidden"
          >
            {/* Animated Decorative Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path 
                  variants={lineVariants}
                  d="M0 80 Q 25 75, 50 60 T 100 20" 
                  fill="none" 
                  stroke="#8F7BC8" 
                  strokeWidth="0.1" 
                />
                <motion.path 
                  variants={lineVariants}
                  d="M0 90 Q 30 85, 60 50 T 100 10" 
                  fill="none" 
                  stroke="#8F7BC8" 
                  strokeWidth="0.1" 
                />
              </svg>
            </div>

            <motion.div 
              variants={itemVariants}
              className="inline-block px-6 py-2 rounded-full bg-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-brand-primary/30 backdrop-blur-md dark:text-white"
            >
              Growth is Engineered. Not Guessed.
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-8xl font-black leading-[1.05] mb-10 tracking-tighter text-white"
            >
              <span className="block overflow-hidden">
                <motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}>
                  Most brands post content.
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span className="block text-brand-primary" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}>
                  We engineer growth.
                </motion.span>
              </span>
            </motion.h1>
            
            <div className="mb-12 max-w-2xl mx-auto flex flex-col items-center">
              <GlitzText 
                text="We turn ideas into brand success." 
                className="text-xl md:text-2xl text-slate-200 font-medium leading-relaxed"
                delay={1.2}
              />
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-slate-200 font-medium leading-relaxed mt-2"
              >
                Systems. Performance. Scale.
              </motion.p>
            </div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center items-center gap-6"
            >
              <button 
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto bg-brand-primary text-white px-12 py-5 rounded-2xl font-black text-lg hover:scale-[1.03] transition-all shadow-2xl shadow-brand-primary/30 flex items-center justify-center gap-2"
              >
                Start Scaling Today <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('pricing-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto glass-card px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all text-white"
              >
                View Growth Packages
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Value Section with staggered view animations */}
        <section className="max-w-7xl mx-auto py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Settings className="w-8 h-8" />, title: "Strategy-first mindset", desc: "Before a single ad is run, we architect a custom roadmap focused on your specific market variables." },
              { icon: <BarChart className="w-8 h-8" />, title: "Performance-driven execution", desc: "Our tactical deployments are measured by ROI, not vanity metrics. Every dollar is tracked for maximum yield." },
              { icon: <Share2 className="w-8 h-8" />, title: "Scalable growth systems", desc: "We build infrastructures that don't just work today, but scale predictably as your brand dominates the market." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10 }}
                className="glass-card p-12 rounded-[2rem] border-white/10 group"
              >
                <div className="mb-8 p-5 bg-brand-primary/10 rounded-[1.2rem] w-fit text-brand-primary group-hover:scale-110 transition-transform dark:text-[#B19DF2]">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-black mb-4 text-white tracking-tight">{service.title}</h3>
                <p className="text-slate-300 font-medium leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing-section" className="max-w-7xl mx-auto py-32 border-t border-slate-200 dark:border-white/5">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight text-white"
            >
              Your growth deserves the right system.
            </motion.h2>
            <p className="text-slate-300 font-bold uppercase tracking-widest text-sm">Pick your plan and scale today</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Starter", 
                price: "15k", 
                icon: <Zap size={20} />, 
                animation: { scale: [1, 1.15, 1] },
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                features: ["Core Strategy Audit", "Social Ads Management", "Basic Conversion Tracking", "Monthly Performance Review"] 
              },
              { 
                name: "Standard", 
                price: "20k", 
                icon: <Flame size={20} />, 
                animation: { opacity: [1, 0.7, 1], scale: [1, 1.05, 1] },
                transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                features: ["Expanded Ad Placement", "Content Strategy", "Funnel Optimization", "Weekly Reporting", "Market Analysis"] 
              },
              { 
                name: "Sales Machine", 
                price: "32k", 
                popular: true, 
                icon: <Rocket size={20} />, 
                animation: { y: [0, -8, 0] },
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                features: ["Multi-Channel Scale", "Advanced Retargeting", "Lead Gen Automation", "Competitor Intel", "Priority Support"] 
              },
              { 
                name: "E-commerce Growth", 
                price: "50k", 
                premium: true, 
                icon: <Trophy size={20} />, 
                animation: { y: [0, -6, 0] },
                transition: { duration: 2, repeat: Infinity, ease: "easeOut" },
                features: ["Full Store Scaling", "Inventory Velocity Ads", "Custom API Dashboards", "24/7 Monitoring", "Global Market Reach"] 
              }
            ].map((pkg, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`glass-card p-10 rounded-[2.5rem] relative overflow-hidden flex flex-col ${pkg.popular ? 'border-brand-primary/40 ring-1 ring-brand-primary/20 scale-105 z-10' : 'border-white/10 opacity-90'}`}
                whileHover={{ scale: pkg.popular ? 1.07 : 1.02 }}
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-black text-white">{pkg.name}</h3>
                    <motion.div 
                      animate={pkg.animation}
                      transition={pkg.transition}
                      className="text-brand-primary"
                    >
                      {pkg.icon}
                    </motion.div>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-black text-brand-primary mr-1 uppercase">BDT</span>
                    <span className="text-4xl font-black tracking-tighter text-white">{pkg.price}</span>
                    <span className="text-slate-300 text-xs font-bold uppercase tracking-widest">/ month</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-300">
                      <Check size={14} className="text-brand-primary mt-1 flex-shrink-0" /> 
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <button 
                    onClick={() => navigate('/contact', { state: { plan: pkg.name } })}
                    className="w-full py-4 rounded-xl font-black text-base transition-all bg-white/5 hover:bg-brand-primary hover:text-white border border-white/10 text-white hover:shadow-xl hover:shadow-brand-primary/20"
                  >
                    Scale Today
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final Statement Section */}
        <section className="max-w-7xl mx-auto py-44 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-6xl md:text-[10vw] font-black tracking-tighter leading-none text-white uppercase">
              Growth is <span className="text-brand-primary">Engineered.</span>
            </h2>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
};

export default Home;