import { motion } from 'framer-motion';

// Using raw image URLs from the conversation — user to replace with local copies if needed.
// The unboxing shot is available locally. Others are referenced from the uploaded set.
const feeds = [
  {
    camId: 'CAM 01',
    mode: 'AI AUTO-TRACK',
    timestamp: '07:42:13',
    src: '/camera/product-unboxing.jpg',
    caption: 'PTZ lens locks on and auto-follows every intruder',
    color: '#00C2FF',
  },
  {
    camId: 'CAM 02',
    mode: 'MOTION ALERT',
    timestamp: '02:17:49',
    src: '/camera/cam-detection.jpg',
    caption: 'Humanoid detection alert pushed to your phone in seconds',
    color: '#FF6B00',
  },
  {
    camId: 'CAM 03',
    mode: 'NIGHT VISION',
    timestamp: '23:58:04',
    src: '/camera/cam-nightvision.jpg',
    caption: 'Full-color clarity at 2AM — no flashlight needed',
    color: '#7CFF9B',
  },
];

export default function CameraShowcase() {
  return (
    <section className="px-6 lg:px-12 pb-20 lg:pb-32">
      {/* Section header */}
      <div className="flex flex-col items-start mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-cam-blue" />
          <span className="font-mono-cam text-cam-blue text-xs tracking-widest uppercase">Live Feeds</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-cam-text uppercase tracking-wide">
          See It In Action
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feeds.map(({ camId, mode, timestamp, src, caption, color }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="group relative rounded-2xl overflow-hidden bg-black border border-white/8 cam-monitor-frame"
            style={{ boxShadow: `0 0 0 1px ${color}30, 0 0 28px ${color}12` }}
          >
            {/* CCTV monitor overlay — top bar */}
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-2.5 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
              <div className="flex items-center gap-2">
                {/* Pulsing indicator dot */}
                <span
                  className="animate-rec w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: color, boxShadow: `0 0 5px ${color}` }}
                />
                <span className="font-mono-cam text-white/90 text-[10px] tracking-widest">{camId}</span>
                <span className="text-white/30 text-[10px] font-mono-cam">|</span>
                <span className="font-mono-cam text-white/60 text-[10px] tracking-widest">{mode}</span>
              </div>
            </div>

            {/* Image */}
            <div className="h-64 w-full overflow-hidden">
              <img
                src={src}
                alt={caption}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = '#0D111C';
                }}
              />
            </div>

            {/* Bottom timestamp + caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-4 pt-8 pb-4 pointer-events-none">
              <div className="flex items-end justify-between">
                <p className="text-white text-sm font-semibold leading-snug max-w-[70%]">{caption}</p>
                <span className="font-mono-cam text-white/40 text-[10px] tabular-nums">{timestamp}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
