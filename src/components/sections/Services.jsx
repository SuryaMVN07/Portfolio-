import React from 'react';
import { SERVICES } from '../../data/services';

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 px-6 sm:px-8 bg-white/[0.02] relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl sm:text-7xl font-black mb-16 tracking-tighter uppercase italic text-center reveal text-pink-400">Services.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="service-card group p-10 bg-black border border-white/10 rounded-[3rem] hover:border-purple-500 transition-all reveal"
                   style={{ background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(168, 85, 247, 0.08), transparent 40%)` }}>
                <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-purple-600/20 transition-all">
                  <Icon size={40} className={service.colorClass} />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed italic font-medium">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
