import { FacebookLogo, TwitterLogo, InstagramLogo, MapPin, Phone, EnvelopeSimple } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 px-6 lg:px-12 relative z-20 border-t border-gray-800">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold uppercase tracking-tight mb-6">SOP<span className="text-brand-lime">Products</span></h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Providing premium, reliable, and versatile technology solutions for students, professionals, and creators. We deliver quality you can trust.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-brand-gray/10 flex items-center justify-center hover:bg-brand-lime hover:text-brand-dark transition-colors">
              <FacebookLogo weight="fill" size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-brand-gray/10 flex items-center justify-center hover:bg-brand-lime hover:text-brand-dark transition-colors">
              <TwitterLogo weight="fill" size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-brand-gray/10 flex items-center justify-center hover:bg-brand-lime hover:text-brand-dark transition-colors">
              <InstagramLogo weight="fill" size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold uppercase tracking-wide mb-6">Contact Us</h3>
          <ul className="flex flex-col gap-4 text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin weight="bold" size={20} className="text-brand-lime shrink-0 mt-1" />
              <span>Suit V7, Anambra warehouse, Ijesha bus stop, Oshodi - Apapa express way, Lagos.</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone weight="bold" size={20} className="text-brand-lime shrink-0" />
              <span>07084456004, 08161892581</span>
            </li>
            <li className="flex items-center gap-3">
              <EnvelopeSimple weight="bold" size={20} className="text-brand-lime shrink-0" />
              <span>trustedmedicals@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-5xl mx-auto pt-8 border-t border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SOPProducts. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
