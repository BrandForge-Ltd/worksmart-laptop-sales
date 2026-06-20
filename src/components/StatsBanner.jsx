import { motion } from 'framer-motion';
import { Cube, Users, Star, Headset } from '@phosphor-icons/react';

const stats = [
  { icon: Cube, value: "10h+", label: "Battery Life" },
  { icon: Users, value: "Education", label: "Ready to use" },
  { icon: Star, value: "Rugged", label: "Drop-tested" },
  { icon: Headset, value: "24/7", label: "Support" }
];

export default function StatsBanner() {
  return (
    <section className="px-6 lg:px-12 pb-12 lg:pb-24">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-brand-purple-dark to-brand-purple rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8 shadow-xl text-center md:text-left"
      >
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center gap-4 text-white w-full md:w-auto justify-center md:justify-start">
            <stat.icon size={40} className="opacity-80" />
            <div>
              <h4 className="text-2xl font-bold leading-tight">{stat.value}</h4>
              <p className="text-sm text-white/80">{stat.label}</p>
            </div>
            {idx !== stats.length - 1 && (
              <div className="hidden md:block w-px h-12 bg-white/20 ml-8"></div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
