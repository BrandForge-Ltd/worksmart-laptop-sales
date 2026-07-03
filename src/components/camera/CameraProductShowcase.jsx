import { motion } from 'framer-motion';
import detectionImg from '../../assets/camera-detection.jpg';
import trackingImg from '../../assets/camera-tracking.jpg';
import powerImg from '../../assets/camera-power.jpg';
import unboxing1 from '../../assets/camera-unboxing-1.jpg';
import unboxing2 from '../../assets/camera-unboxing-2.jpg';

export default function CameraProductShowcase() {
  return (
    <section className="bg-white py-20 px-6 lg:px-12 relative z-30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-dark uppercase tracking-tight mb-4">
            See It In Action
          </h2>
          <div className="w-16 h-1 bg-brand-lime mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience the real power of the V380 PRO with these real-life feature demonstrations.
          </p>
        </div>

        {/* Zig-Zag Feature 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-gray">
              <img src={detectionImg} alt="Humanoid Detection Alarm" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark uppercase mb-4">Intelligent Humanoid Detection</h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Never get false alarms from pets or wind. The advanced AI instantly recognizes human figures, triggers a custom alarm voice, and pushes a real-time notification to your phone.
            </p>
            <div className="inline-block bg-brand-lime/20 text-brand-dark font-bold px-4 py-2 rounded-full text-sm">
              Instant Push Notifications
            </div>
          </motion.div>
        </div>

        {/* Zig-Zag Feature 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-gray">
              <img src={trackingImg} alt="Human Automatic Tracking" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark uppercase mb-4">Auto-Tracking PTZ</h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              When an intruder is detected, the camera's motorized PTZ lens automatically rotates to follow their movements across your property, ensuring they never leave the frame.
            </p>
            <div className="inline-block bg-brand-purple text-white font-bold px-4 py-2 rounded-full text-sm">
              355° Horizontal Rotation
            </div>
          </motion.div>
        </div>

        {/* Zig-Zag Feature 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-gray">
              <img src={powerImg} alt="Adaptive Power Mode" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark uppercase mb-4">Smart Adaptive Power</h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Balances continuous recording with battery life. When the battery is low, it smartly switches to PIR detection mode—sleeping to save power and instantly waking up to record when motion is detected.
            </p>
            <div className="inline-block bg-brand-lime/20 text-brand-dark font-bold px-4 py-2 rounded-full text-sm">
              24/7 Solar Autonomy
            </div>
          </motion.div>
        </div>

        {/* Unboxing / What you get */}
        <div className="bg-brand-gray/30 rounded-[2rem] p-8 lg:p-16 border border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-4xl font-bold text-brand-dark uppercase mb-4">What's In The Box?</h3>
            <p className="text-gray-600">Everything you need for a complete, wire-free installation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg border-2 border-white"
            >
              <img src={unboxing1} alt="V380 Box and Contents" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg border-2 border-white"
            >
              <img src={unboxing2} alt="V380 Solar Panel and Camera" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
