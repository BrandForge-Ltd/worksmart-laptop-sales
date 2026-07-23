import { motion } from 'framer-motion';
import { Lightning, ArrowRight } from '@phosphor-icons/react';

export default function CameraHero({ onOrderClick }) {
  return (
    <section className="relative px-6 lg:px-12 pt-10 pb-16 lg:pt-20 lg:pb-32 flex flex-col lg:flex-row items-center min-h-[80vh]">
      <div className="hero-blob"></div>

      <div className="w-full lg:w-[55%] relative z-10 mb-12 lg:mb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-brand-purple font-bold text-xs tracking-widest uppercase mb-6"
        >
          <Lightning weight="fill" size={16} />
          No WiFi. No Wires. No Blind Spots.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-[5.5rem] font-bold leading-[0.9] tracking-tight mb-8 break-words"
        >
          <span className="block text-brand-dark">SEE</span>
          <span className="block text-brand-purple my-1">EVERYTHING</span>
          <span className="block text-brand-dark">24/7.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
        >
          The V380 PRO runs on solar power and 4G LTE — two lenses, two live screens,
          watching every angle of your property every hour of the night.
        </motion.p>

        <div className="mb-6">
          <div className="flex items-end gap-3 mb-1">
            <span className="text-4xl lg:text-5xl font-black text-brand-dark tracking-tighter">₦95,000</span>
            <del className="text-gray-400 text-xl font-semibold mb-1">₦145,000</del>
          </div>
          <p className="text-red-600 font-bold text-sm bg-red-100 w-max px-3 py-1 rounded-full animate-pulse flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            🔥 High Demand: Selling out fast!
          </p>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <button
            onClick={onOrderClick}
            className="bg-brand-lime hover:bg-[#bce000] text-brand-dark px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-brand-lime/20"
          >
            Order Now
            <ArrowRight weight="bold" size={20} />
          </button>
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2">
            🚚 Pay On Delivery Available
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full lg:w-[45%] relative z-10 aspect-video lg:h-[600px]"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl rotate-[-2deg] border-4 border-white"
          >
            <div className="w-full aspect-video bg-brand-dark flex flex-col items-center justify-center relative">
              <iframe
                className="absolute inset-0 w-full h-full scale-[1.35] pointer-events-none"
                src="https://www.youtube.com/embed/FCII3ZyMzUo?autoplay=1&mute=1&loop=1&playlist=FCII3ZyMzUo&controls=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3"
                title="V380 PRO 4G LTE Solar Dual Screen Camera"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
