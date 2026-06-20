import { motion } from 'framer-motion';
import { Quotes, ArrowRight } from '@phosphor-icons/react';

export default function CTASection({ onOrderClick }) {
  return (
    <section className="px-6 lg:px-12 pb-12 lg:pb-24">
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#2A2447] rounded-3xl overflow-hidden min-h-[400px] flex items-end p-8 lg:p-12 shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1B1534] to-[#423377] z-0">
            <svg className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,100 C30,80 70,120 100,50 L100,100 Z" fill="#ffffff"/>
            </svg>
          </div>
          
          <div className="relative z-10 text-white max-w-md">
            <Quotes weight="fill" size={40} className="text-brand-lime mb-6" />
            <h3 className="text-2xl lg:text-3xl font-medium leading-snug mb-8">
              The Dell 2-in-1 adapts to my workflow effortlessly, whether I'm typing a report or presenting to clients.
            </h3>
            <div className="flex items-center gap-4">
              <div className="w-10 h-0.5 bg-white/30"></div>
              <div>
                <p className="font-bold text-sm">Sarah J.</p>
                <p className="text-xs text-white/60">Creative Director</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-brand-dark rounded-3xl p-8 lg:p-12 border border-gray-800 flex flex-col justify-center shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-block px-4 py-1 rounded-full border border-gray-700 text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-6">
              Limited Time Offer
            </div>
            <h3 className="text-white text-3xl font-bold mb-4 uppercase tracking-wide">
              Ready for <br/>an upgrade?
            </h3>
            <p className="text-gray-400 text-sm mb-10 max-w-sm leading-relaxed">
              Get the Dell 2-in-1 Chromebook today and transform the way you work and play.
            </p>
            
            <div className="mb-8 flex flex-col">
              <div className="flex items-end gap-3 mb-2">
                <span className="text-3xl font-black text-white tracking-tighter">₦205,000</span>
                <del className="text-gray-500 text-lg font-semibold mb-1">₦230,000</del>
              </div>
              <p className="text-red-400 font-bold text-xs bg-red-900/20 w-max px-3 py-1.5 rounded-full animate-pulse flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                🔥 Hurry! Only 11 units left in stock
              </p>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOrderClick}
              className="w-max bg-brand-lime text-brand-dark rounded-full pl-6 pr-2 py-2 font-bold text-sm tracking-wide flex items-center gap-4 shadow-neon transition-all group"
            >
              ORDER NOW
              <span className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-white group-hover:bg-black transition-colors">
                <ArrowRight weight="bold" size={16} />
              </span>
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
