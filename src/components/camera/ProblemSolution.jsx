import { motion } from 'framer-motion';
import { X, Check } from '@phosphor-icons/react';

const pains = [
  'Needs WiFi that barely reaches the gate',
  'Goes completely blind at night',
  'Misses the thief who came from the side',
  'Footage too blurry for evidence',
  'Dies during NEPA outage',
];

const solutions = [
  '4G SIM — works anywhere in Nigeria',
  'Full-color night vision, even at 2AM',
  'Two lenses covering opposite angles',
  'Crystal-clear dual recording, always',
  'Solar panel charges it every single day',
];

export default function ProblemSolution() {
  return (
    <section className="px-6 lg:px-12 py-16 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-px bg-cam-orange" />
          <span className="font-mono-cam text-cam-orange text-xs tracking-widest uppercase">The Problem</span>
        </div>

        <h2 className="text-3xl lg:text-5xl font-bold text-cam-text mb-4 leading-tight">
          Your old camera<br />
          <span className="text-cam-muted font-normal">is letting you down.</span>
        </h2>
        <p className="text-cam-muted text-lg max-w-2xl mb-16 leading-relaxed">
          You've installed cameras before. Every time — the same frustrations.
          We built the V380 PRO to solve every single one.
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Pain card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl border border-red-900/30 bg-red-950/10 p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center">
                <X weight="bold" size={16} className="text-cam-red" />
              </div>
              <span className="font-mono-cam text-cam-red text-sm tracking-wider">TYPICAL CAMERA</span>
            </div>
            <ul className="flex flex-col gap-4">
              {pains.map((pain, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full border border-red-700/50 flex items-center justify-center mt-0.5">
                    <X weight="bold" size={10} className="text-red-500" />
                  </div>
                  <span className="text-cam-muted text-sm leading-relaxed line-through decoration-red-900/60">{pain}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="rounded-2xl border border-cam-orange/25 bg-cam-orange/5 p-8 relative overflow-hidden"
          >
            {/* Subtle corner glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-cam-orange/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="w-8 h-8 rounded-full bg-cam-orange/20 flex items-center justify-center">
                <Check weight="bold" size={16} className="text-cam-orange" />
              </div>
              <span className="font-mono-cam text-cam-orange text-sm tracking-wider">V380 PRO</span>
            </div>
            <ul className="flex flex-col gap-4 relative z-10">
              {solutions.map((sol, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cam-orange/20 border border-cam-orange/40 flex items-center justify-center mt-0.5">
                    <Check weight="bold" size={10} className="text-cam-orange" />
                  </div>
                  <span className="text-cam-text text-sm font-medium leading-relaxed">{sol}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
