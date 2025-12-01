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
      className={`p-8 border bg-white shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 ${
        dimmed ? 'opacity-30' : 'opacity-100 border-forest/10'
      }`}
    >
      <div className="mb-4 flex items-start justify-between">
        <h3 className="font-serif text-2xl text-forest group-hover:text-gold transition-colors">
          {firm.name}
        </h3>
        <div className="p-2 bg-forest/5 rounded-full">
          <MapPin size={16} className="text-forest" />
        </div>
      </div>

      <div className="mb-4">
        <span className="text-xs uppercase tracking-widest text-forest/60 font-bold">
          {firm.location}
        </span>
      </div>

      <p className="text-forest/70 text-sm leading-relaxed mb-4">
        {firm.description}
      </p>

      <div className="pt-4 border-t border-forest/10">
        <span className="text-[10px] uppercase tracking-widest text-forest/50 font-bold block mb-2">
          Coverage
        </span>
        <div className="flex flex-wrap gap-2">
          {firm.coverage.map((region, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gold/10 text-gold text-xs font-bold uppercase tracking-wider"
            >
              {region}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
