'use client';

import React from 'react';
import { MapPin } from 'lucide-react';

interface Firm {
  name: string;
  location: string;
  coverage: string[];
  description: string;
}

interface FirmCardProps {
  firm: Firm;
  dimmed?: boolean;
}

export default function FirmCard({ firm, dimmed = false }: FirmCardProps) {
  return (
    <div
      className={`p-10 border bg-white transition-all duration-500 group ${
        dimmed ? 'opacity-30' : 'opacity-100 border-forest/10 hover:border-gold/30 hover:shadow-2xl hover:shadow-forest/5'
      }`}
    >
      <div className="mb-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="mt-1 p-1.5 bg-forest/5 group-hover:bg-gold/10 transition-colors">
            <MapPin size={14} className="text-forest/60 group-hover:text-gold transition-colors" strokeWidth={2} />
          </div>
          <span className="text-[11px] uppercase tracking-[0.15em] text-forest/50 font-medium leading-tight">
            {firm.location}
          </span>
        </div>
        <h3 className="font-serif text-3xl text-forest leading-[1.2] tracking-tight group-hover:text-gold transition-colors">
          {firm.name}
        </h3>
      </div>

      <p className="text-forest/60 text-[15px] leading-[1.7] mb-6 font-light">
        {firm.description}
      </p>

      <div className="pt-6 border-t border-forest/10">
        <span className="text-[10px] uppercase tracking-[0.2em] text-forest/40 font-semibold block mb-3">
          Coverage
        </span>
        <div className="flex flex-wrap gap-2">
          {firm.coverage.map((region, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 bg-gold/10 text-dark-gold text-[11px] font-medium uppercase tracking-[0.1em] border border-gold/20"
            >
              {region}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
