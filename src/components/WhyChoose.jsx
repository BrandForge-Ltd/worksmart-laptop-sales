import { motion } from 'framer-motion';
import { Lightning, ShieldCheck, BatteryFull, Briefcase, Plug } from '@phosphor-icons/react';

const reasons = [
  {
    icon: Lightning,
    title: "Performance that Delivers",
    desc: "Powered by 8GB of RAM and a lightning-fast 128GB SSD, the Dell 3190 boots up in seconds, runs smoothly, and lets you multitask without lag. From spreadsheets to online classes and creative projects, you'll get reliable speed every time."
  },
  {
    icon: ShieldCheck,
    title: "Durability You Can Rely On",
    desc: "Engineered to withstand daily use, the Dell 3190 features a rugged build that resists drops, spills, and pressure — perfect for classrooms, offices, and travel."
  },
  {
    icon: BatteryFull,
    title: "All-Day Productivity",
    desc: "Stay unplugged longer with impressive battery life that keeps you going from morning to evening. No need to worry about constant charging during power outages."
  },
  {
    icon: Briefcase,
    title: "Compact, Lightweight, and Built to Move",
    desc: "Its slim design fits easily into your bag, making it your ideal companion for school, business meetings, or remote work."
  },
  {
    icon: Plug,
    title: "Connectivity Made Easy",
    desc: "With multiple ports and wireless options, you can connect effortlessly to the internet, external devices, and projectors — anytime, anywhere."
  }
];

export default function WhyChoose() {
  return (
    <section className="relative px-6 lg:px-12 py-12 lg:py-24 z-30 bg-brand-bg">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-brand-dark rounded-[2rem] p-8 lg:p-16 shadow-2xl"
      >
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white uppercase tracking-wide mb-4 text-center">Why Choose DELL 3190?</h2>
          <div className="w-16 h-1 bg-brand-lime"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {reasons.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-gray/10 flex items-center justify-center">
                <feat.icon size={32} className="text-brand-lime" />
              </div>
              <h3 className="text-white font-bold text-lg leading-tight">{feat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
