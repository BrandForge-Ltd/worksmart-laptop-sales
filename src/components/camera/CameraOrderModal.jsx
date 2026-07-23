import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, WhatsappLogo, CheckCircle, WarningCircle, ArrowRight, ArrowLeft } from '@phosphor-icons/react';
import { FREE_POD_STATES } from '../../utils/constants';
import { states as getStates, lgas as getLgas } from 'nigerian-states-and-lgas';

export default function CameraOrderModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    state: '',
    lga: ''
  });
  const [errors, setErrors] = useState({});

  const statesList = useMemo(() => getStates(), []);
  
  const lgasList = useMemo(() => {
    if (!formData.state) return [];
    try {
      return getLgas(formData.state) || [];
    } catch (e) {
      return [];
    }
  }, [formData.state]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStep(1);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'state') {
      setFormData({ ...formData, state: value, lga: '' });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^\+?[0-9\s\-]{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.state) newErrors.state = 'Please select a delivery state';
    if (!formData.lga) newErrors.lga = 'Please select a Local Government Area';
    if (!formData.address.trim()) newErrors.address = 'Delivery address is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();
    
    if (!validateStep2()) return;

    const isFreePOD = FREE_POD_STATES.includes(formData.state);
    const deliveryTerms = isFreePOD ? 'Eligible for Free Pay On Delivery' : 'Requires Commitment Fee';

    // Track Lead Event for Meta Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Smart WiFi Security Camera',
        currency: 'NGN',
        value: 95000
      });
    }

    const message = `Hello, I want to order the Smart WiFi Security Camera.%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*State:* ${formData.state}%0A*LGA:* ${formData.lga}%0A*Address:* ${formData.address}%0A%0A*Delivery Terms:* ${deliveryTerms}`;
    window.open(`https://wa.me/2348161892581?text=${message}`, '_blank');
    onClose();
    navigate('/thank-you');
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-dark/80 backdrop-blur-sm z-50 overflow-y-auto"
          >
            <div 
              className="flex min-h-full items-center justify-center p-4"
              onClick={onClose}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl border-2 border-brand-gray overflow-hidden"
              >
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
                >
                  <X weight="bold" size={20} className="text-brand-dark" />
                </button>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2 pr-12">
                    <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight">Order Details</h2>
                    <span className="text-sm font-bold text-brand-purple bg-brand-purple/10 px-3 py-1 rounded-full">Step {step} of 2</span>
                  </div>
                  <p className="text-brand-muted text-sm">
                    {step === 1 ? "Enter your contact info to get started." : "Where should we deliver your Security Camera?"}
                  </p>
                </div>

                <div className="relative min-h-[380px]">
                  <AnimatePresence mode="wait" custom={step}>
                    {step === 1 ? (
                      <motion.form 
                        key="step1"
                        custom={1}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="flex flex-col gap-5 absolute w-full"
                        onSubmit={handleNextStep}
                      >
                        <div>
                          <label className="block text-xs font-bold text-brand-dark uppercase tracking-wide mb-2">Full Name</label>
                          <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={`w-full bg-brand-gray/30 border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-brand-purple'} rounded-xl px-4 py-3 text-brand-dark outline-none transition-colors`}
                          />
                          {errors.name && <p className="text-red-500 text-xs font-semibold mt-1.5">{errors.name}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-brand-dark uppercase tracking-wide mb-2">Email Address</label>
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={`w-full bg-brand-gray/30 border ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-brand-purple'} rounded-xl px-4 py-3 text-brand-dark outline-none transition-colors`}
                          />
                          {errors.email && <p className="text-red-500 text-xs font-semibold mt-1.5">{errors.email}</p>}
                        </div>
                        
                        <div>
                          <label className="block text-xs font-bold text-brand-dark uppercase tracking-wide mb-2">Phone Number</label>
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+234 800 000 0000"
                            className={`w-full bg-brand-gray/30 border ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-brand-purple'} rounded-xl px-4 py-3 text-brand-dark outline-none transition-colors`}
                          />
                          {errors.phone && <p className="text-red-500 text-xs font-semibold mt-1.5">{errors.phone}</p>}
                        </div>

                        <div className="mt-4">
                          <button
                            type="submit"
                            className="w-full bg-brand-dark hover:bg-black text-white rounded-xl py-3.5 font-bold flex items-center justify-center gap-2 transition-colors"
                          >
                            Continue to Delivery
                            <ArrowRight weight="bold" size={20} />
                          </button>
                        </div>
                      </motion.form>
                    ) : (
                      <motion.form 
                        key="step2"
                        custom={-1}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="flex flex-col gap-4 absolute w-full"
                        onSubmit={handleWhatsAppOrder}
                      >
                        <div className="flex gap-3">
                          <div className="flex-1">
                            <label className="block text-xs font-bold text-brand-dark uppercase tracking-wide mb-2">State</label>
                            <select
                              name="state"
                              value={formData.state}
                              onChange={handleChange}
                              className={`w-full bg-brand-gray/30 border ${errors.state ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-brand-purple'} rounded-xl px-3 py-3 text-sm text-brand-dark outline-none transition-colors appearance-none cursor-pointer`}
                            >
                              <option value="" disabled>Select State</option>
                              {statesList.map(state => (
                                <option key={state} value={state}>{state}</option>
                              ))}
                            </select>
                            {errors.state && <p className="text-red-500 text-[10px] font-semibold mt-1">{errors.state}</p>}
                          </div>
                          
                          <div className="flex-1">
                            <label className="block text-xs font-bold text-brand-dark uppercase tracking-wide mb-2">LGA</label>
                            <select
                              name="lga"
                              value={formData.lga}
                              onChange={handleChange}
                              disabled={!formData.state}
                              className={`w-full ${!formData.state ? 'bg-gray-100 opacity-50 cursor-not-allowed' : 'bg-brand-gray/30 cursor-pointer'} border ${errors.lga ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-brand-purple'} rounded-xl px-3 py-3 text-sm text-brand-dark outline-none transition-colors appearance-none`}
                            >
                              <option value="" disabled>Select LGA</option>
                              {lgasList.map(lga => (
                                <option key={lga} value={lga}>{lga}</option>
                              ))}
                            </select>
                            {errors.lga && <p className="text-red-500 text-[10px] font-semibold mt-1">{errors.lga}</p>}
                          </div>
                        </div>

                        {formData.state && (
                          <div className={`p-3 rounded-lg flex items-start gap-2 border ${FREE_POD_STATES.includes(formData.state) ? 'bg-green-50 border-green-200 text-green-800' : 'bg-orange-50 border-orange-200 text-orange-800'}`}>
                            {FREE_POD_STATES.includes(formData.state) ? (
                              <>
                                <CheckCircle weight="fill" size={20} className="text-green-600 shrink-0 mt-0.5" />
                                <p className="text-xs font-medium leading-relaxed">
                                  <span className="font-bold">Eligible for 100% Free Pay on Delivery.</span> No commitment fee required!
                                </p>
                              </>
                            ) : (
                              <>
                                <WarningCircle weight="fill" size={20} className="text-orange-500 shrink-0 mt-0.5" />
                                <p className="text-xs font-medium leading-relaxed">
                                  <span className="font-bold">A commitment fee is required</span> for shipments to {formData.state} state.
                                </p>
                              </>
                            )}
                          </div>
                        )}

                        <div>
                          <label className="block text-xs font-bold text-brand-dark uppercase tracking-wide mb-2">Detailed Delivery Address</label>
                          <textarea 
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter your full street address, bus stop, or landmark"
                            rows="2"
                            className={`w-full bg-brand-gray/30 border ${errors.address ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-brand-purple'} rounded-xl px-4 py-3 text-brand-dark outline-none transition-colors resize-none`}
                          ></textarea>
                          {errors.address && <p className="text-red-500 text-xs font-semibold mt-1.5">{errors.address}</p>}
                        </div>

                        <div className="flex flex-col gap-3 mt-2">
                          <button
                            type="submit"
                            className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white rounded-xl py-3.5 font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#25D366]/20"
                          >
                            <WhatsappLogo weight="fill" size={22} />
                            Checkout with WhatsApp
                          </button>
                          
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="w-full text-brand-muted hover:text-brand-dark font-semibold text-sm flex items-center justify-center gap-1 transition-colors"
                          >
                            <ArrowLeft weight="bold" size={16} />
                            Back to Contact Info
                          </button>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
