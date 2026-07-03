import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDown } from '@phosphor-icons/react';

const faqs = [
  {
    q: 'Does this camera require WiFi to work?',
    a: 'NO. This camera uses a 4G LTE SIM card to connect to the internet. It is specifically designed for remote areas where WiFi is completely unavailable. You will need to purchase a data plan for the SIM card to view the live stream on your phone via the V380 Pro app.',
  },
  {
    q: 'Do both screens rotate when I control the camera?',
    a: 'NO. Only one lens moves. The top lens is fixed and permanently stays pointed at one wide angle. The bottom lens is a PTZ (Pan Tilt Zoom) camera, which you can rotate 355° horizontally and 90° vertically using your smartphone app.',
  },
  {
    q: 'Will the camera work on cloudy or rainy days?',
    a: 'YES. The camera has a built-in rechargeable battery that stores extra power during sunny days. On cloudy or rainy days, the camera runs entirely on this stored battery power. The solar panel will still charge the battery slightly even on overcast days.',
  },
  {
    q: 'How much mobile data does the camera consume monthly?',
    a: 'It depends on your viewing time, but typically 2GB to 5GB per month. The camera only uses data when you open the app to watch live video, playback clips, or when it sends motion alert notifications. It does NOT consume data when it is simply recording to the local SD card.',
  },
  {
    q: 'Can I talk to someone through the camera?',
    a: 'YES. The camera features built-in two-way audio. It has an integrated microphone and speaker, allowing you to hear what is happening around the camera and speak directly to visitors or intruders through the V380 Pro app.',
  },
];

export default function CameraFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="px-6 lg:px-12 pb-24 relative z-30">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <p className="text-brand-purple font-bold text-[10px] tracking-widest uppercase mb-4">Got questions?</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark uppercase tracking-wide mb-2 text-center">Frequently Asked Questions</h2>
          <div className="w-12 h-0.5 bg-brand-lime"></div>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-brand-gray rounded-2xl overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-200/50 transition-colors"
              >
                <span className="font-bold text-brand-dark pr-8">{faq.q}</span>
                <motion.div animate={{ rotate: openIndex === idx ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <CaretDown weight="bold" size={20} className="text-brand-muted flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-brand-muted text-sm leading-relaxed border-t border-gray-200/50 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
