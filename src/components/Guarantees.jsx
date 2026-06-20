import { ShieldCheck, Truck, ClockCounterClockwise } from '@phosphor-icons/react';

const guarantees = [
  {
    title: 'Pay on Delivery',
    description: 'Inspect your laptop before paying. Available nationwide.',
    icon: <Truck weight="duotone" size={40} className="text-brand-lime" />
  },
  {
    title: '48-Hour Return Policy',
    description: 'Not satisfied? Return it within 48 hours for a full refund.',
    icon: <ClockCounterClockwise weight="duotone" size={40} className="text-brand-lime" />
  },
  {
    title: '100% Secure Checkout',
    description: 'Your payment details are protected with bank-level encryption.',
    icon: <ShieldCheck weight="duotone" size={40} className="text-brand-lime" />
  }
];

export default function Guarantees() {
  return (
    <section className="bg-brand-dark py-12 border-y border-gray-800 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {guarantees.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="shrink-0 bg-brand-gray/10 p-3 rounded-full">
                {item.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
