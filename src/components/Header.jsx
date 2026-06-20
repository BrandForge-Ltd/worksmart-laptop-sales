import { X, ArrowUpRight } from '@phosphor-icons/react';

export default function Header({ onOrderClick }) {
  return (
    <header className="w-full px-6 lg:px-12 py-6 flex items-center justify-between relative z-20">
      <div className="flex items-center gap-2">
        <X weight="bold" size={24} className="text-brand-dark" />
        <span className="font-bold text-xl tracking-tight text-brand-dark uppercase">WorkSmart</span>
      </div>



      <button 
        onClick={onOrderClick}
        className="bg-white border border-brand-gray text-brand-dark rounded-full px-5 py-2.5 text-sm font-bold flex items-center gap-3"
      >
        Order Now
        <span className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center">
          <ArrowUpRight weight="bold" size={12} className="text-brand-dark" />
        </span>
      </button>
    </header>
  );
}
