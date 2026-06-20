import { UserFocus, GraduationCap, Briefcase, Code } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

const audiences = [
  {
    title: 'Students & Educators',
    description: 'Perfect for online classes, assignments, and research. Its rugged design withstands backpack travel and daily campus use.',
    icon: <GraduationCap weight="duotone" size={48} className="text-brand-purple" />
  },
  {
    title: 'Business Professionals',
    description: 'A reliable companion for remote work, virtual meetings, and handling office applications smoothly with its upgraded 8GB RAM.',
    icon: <Briefcase weight="duotone" size={48} className="text-brand-purple" />
  },
  {
    title: 'Content Creators',
    description: 'Use the 2-in-1 touchscreen tablet mode for sketching, planning content, and editing media on the go.',
    icon: <Code weight="duotone" size={48} className="text-brand-purple" />
  },
  {
    title: 'Everyday Users',
    description: 'Great for web browsing, streaming Netflix, and staying connected with family thanks to its all-day battery life.',
    icon: <UserFocus weight="duotone" size={48} className="text-brand-purple" />
  }
];

export default function WhoIsItFor() {
  return (
    <section className="px-6 lg:px-12 py-12 lg:py-24 bg-white relative z-20">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark uppercase tracking-tight mb-6">
          Who Is This Laptop <span className="text-brand-purple">For?</span>
        </h2>
        <p className="max-w-2xl text-brand-muted text-lg">
          The Dell 3190 is versatile enough to handle a wide range of use cases. Whether you're learning, working, or creating, it adapts to your lifestyle.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {audiences.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-brand-bg rounded-2xl p-8 border border-brand-gray hover:border-brand-purple hover:shadow-xl transition-all group"
          >
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3 uppercase tracking-wide">{item.title}</h3>
            <p className="text-brand-muted leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
