import { motion } from 'framer-motion';
import { SimCard, SunHorizon, Aperture, Robot, Moon, SpeakerHigh } from '@phosphor-icons/react';

const reasons = [
  {
    icon: SimCard,
    title: '4G LTE — Works Without WiFi',
    desc: 'Insert any Nigerian SIM card and get instant remote live access from anywhere. Specifically designed for farms, construction sites, and remote areas where WiFi is completely unavailable.',
  },
  {
    icon: SunHorizon,
    title: 'Solar-Powered — Never Dies',
    desc: 'The built-in rechargeable battery charges via the solar panel daily. Even on cloudy or rainy days, stored battery power keeps the camera running through the night.',
  },
  {
    icon: Aperture,
    title: 'Dual Lens, Dual Live Screen',
    desc: 'One fixed wide-angle lens permanently monitors your gate. One PTZ lens rotates 355° horizontally and 90° vertically. Both record simultaneously so no evidence is ever missed.',
  },
  {
    icon: Robot,
    title: 'AI Human Tracking',
    desc: 'PIR thermal sensors plus AI human-shape recognition eliminate false alarms from wind and animals. The PTZ lens locks on and automatically follows real intruders across the frame.',
  },
  {
    icon: Moon,
    title: '3 Night Vision Modes',
    desc: 'Choose from infrared black & white, full-color floodlight (white LED), or smart auto mode that switches to full color only when motion is detected — preserving battery.',
  },
  {
    icon: SpeakerHigh,
    title: 'Active Deterrence + Two-Way Audio',
    desc: 'Built-in siren and flashing red/blue warning lights scare off intruders before they act. Integrated mic and speaker let you speak directly to anyone near the camera in real time.',
  },
];

export default function CameraFeatures() {
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
          <h2 className="text-3xl lg:text-4xl font-bold text-white uppercase tracking-wide mb-4 text-center">
            Why Choose The V380 PRO?
          </h2>
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
