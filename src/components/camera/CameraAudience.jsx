import { Buildings, Plant, Fish, Car, Anchor, Tree } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

const audiences = [
  {
    title: 'Construction & Warehouse Sites',
    description: 'Monitor expensive building materials, tools, and heavy machinery overnight. Secures large open perimeter fences without complex wiring.',
    icon: <Buildings weight="duotone" size={48} className="text-brand-purple" />,
  },
  {
    title: 'Farms & Rural Properties',
    description: 'Monitor livestock, barns, and remote gates to prevent animal theft. Protects vast crop fields spread across acres of land.',
    icon: <Plant weight="duotone" size={48} className="text-brand-purple" />,
  },
  {
    title: 'Fish Ponds & Hatcheries',
    description: 'Keep a 24/7 eye on remote waterfront infrastructure far from any WiFi or power supply.',
    icon: <Fish weight="duotone" size={48} className="text-brand-purple" />,
  },
  {
    title: 'Remote Parking Lots',
    description: 'Watch over detached vehicle lots and employee parking zones far from any WiFi or power grid.',
    icon: <Car weight="duotone" size={48} className="text-brand-purple" />,
  },
  {
    title: 'Boats & Docks',
    description: 'Watches over marine property, boat slips, and lakeside piers without needing to run cable.',
    icon: <Anchor weight="duotone" size={48} className="text-brand-purple" />,
  },
  {
    title: 'Campsites & Rural Areas',
    description: 'Keeps public recreational zones, trailheads, and remote beehives (apiaries) safe around the clock.',
    icon: <Tree weight="duotone" size={48} className="text-brand-purple" />,
  },
];

export default function CameraAudience() {
  return (
    <section className="px-6 lg:px-12 py-12 lg:py-24 bg-white relative z-20">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark uppercase tracking-tight mb-6">
          Where This Camera <span className="text-brand-purple">Works Best</span>
        </h2>
        <p className="max-w-2xl text-brand-muted text-lg">
          The V380 PRO was engineered for exactly the locations where ordinary cameras fail — no power, no WiFi, no problem.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
            <p className="text-brand-muted leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
