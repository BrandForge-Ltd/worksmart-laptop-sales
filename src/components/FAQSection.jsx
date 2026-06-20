import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDown } from '@phosphor-icons/react';

const faqs = [
  {
    q: "What type of SSD is used and is it replaceable?",
    a: "The 128 GB storage is an M.2 SSD (SATA), which is physically removable and replaceable — unlike the eMMC storage found in base models. You can swap it for a larger M.2 SATA SSD (e.g., 256 GB or 512 GB) if you need more space later, though this would require opening the laptop."
  },
  {
    q: "Why choose 8 GB over the base 4GB?",
    a: "8 GB DDR4 is a significant upgrade over the base 4 GB. It allows comfortable multitasking — running antivirus, multiple browser tabs, video calls, and office applications simultaneously without slowdowns. On Windows 10/11, 4 GB is tight; 8 GB gives the OS enough headroom to operate smoothly. This configuration is strongly recommended if you're running Windows."
  },
  {
    q: "How long does the battery last?",
    a: "Dell rates it at up to 10–11 hours. With 8 GB RAM, battery life is similar to the 4 GB model since RAM power draw difference is minimal. Real-world usage with screen brightness around 50–70% and mixed workloads typically yields 7–9 hours. Lowering brightness and using battery saver mode helps reach the upper end."
  },
  {
    q: "What ports are available?",
    a: "Two USB 3.1 Gen 1 Type-A ports, one HDMI 1.4 port, a headset/mic combo jack, and a Noble Wedge Lock slot. There is no USB-C or Thunderbolt port. If you need USB-C, you'll need an adapter plugged into one of the USB-A ports."
  },
  {
    q: "Does it support wifi and bluetooth?",
    a: "Yes — Wi-Fi 5 (802.11ac, 2x2) and Bluetooth 4.2 Low Energy. Some units include the Intel Wireless-AC 8265 module. Wi-Fi 5 is fast enough for HD video streaming, large file downloads, and video calls without noticeable bottlenecks on typical home or school networks."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CaretDown weight="bold" size={20} className="text-brand-muted flex-shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
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
