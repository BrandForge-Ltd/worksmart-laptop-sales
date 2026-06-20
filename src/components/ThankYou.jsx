import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, WhatsappLogo, Package, Truck, EnvelopeOpen } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function ThankYou() {
  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-12 flex flex-col items-center justify-center px-6 selection:bg-brand-purple/30 relative overflow-hidden bg-brand-bg">
      {/* Background blobs for premium feel */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px] -z-10 mix-blend-multiply"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-lime/10 rounded-full blur-[120px] -z-10 mix-blend-multiply"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-[2rem] p-8 md:p-12 max-w-3xl w-full shadow-2xl border border-brand-gray/50"
      >
        <div className="text-center mb-10">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="w-20 h-20 bg-brand-lime/20 rounded-full flex items-center justify-center mx-auto mb-6 relative"
          >
            <div className="absolute inset-0 bg-brand-lime/30 rounded-full animate-ping opacity-50"></div>
            <CheckCircle weight="fill" size={48} className="text-[#a3c300]" />
          </motion.div>

          <h1 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tight uppercase mb-3">
            Order Confirmed!
          </h1>
        </div>
        
        {/* Next Steps Section */}
        <div className="bg-brand-gray/30 rounded-2xl p-6 md:p-8 mb-10 border border-gray-100">
          <h3 className="text-brand-dark font-bold text-lg mb-6 uppercase tracking-wide flex items-center gap-2">
            <Package weight="bold" size={24} className="text-brand-purple" />
            What happens next?
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 shrink-0 bg-white rounded-full flex items-center justify-center shadow-sm">
                <EnvelopeOpen weight="duotone" size={20} className="text-brand-purple" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-brand-dark mb-1">Confirmation Receipt</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Check your email (and spam folder) for your detailed receipt.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 shrink-0 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Truck weight="duotone" size={20} className="text-brand-lime" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-brand-dark mb-1">Dispatch & Delivery</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Our logistics team will call you within 24 hours to schedule delivery.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/"
            className="w-full sm:w-auto bg-white border-2 border-brand-dark text-brand-dark hover:bg-gray-50 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all"
          >
            <ArrowLeft weight="bold" size={20} />
            Back to Home
          </Link>
          
          <a 
            href="https://wa.me/2340000000000" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5A] text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-500/20"
          >
            <WhatsappLogo weight="fill" size={20} />
            Chat with Support
          </a>
        </div>
        
      </motion.div>
    </div>
  );
}
