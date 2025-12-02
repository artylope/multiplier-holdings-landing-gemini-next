'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Section from '@/components/Section';
import WorldMap from '@/components/WorldMap';
import FirmCard from '@/components/FirmCard';
import FadeIn from '@/components/animations/FadeIn';

const firms = [
  {
    name: 'Expat Tax Professionals',
    location: 'Hackensack, NJ',
    coverage: ['North America', 'Europe', 'Asia Pacific'],
    description: 'US Federal Tax Return Preparation and compliance for US citizens living abroad, specializing in offshore disclosures and foreign tax credits.'
  },
  {
    name: 'Citrine International',
    location: 'Oxford, UK',
    coverage: ['Europe', 'North America'],
    description: 'Boutique international tax compliance firm providing UK and US tax advisory and compliance services with offices in Oxford, London, and Paris.'
  },
  {
    name: 'Onside Accounting',
    location: 'London, UK',
    coverage: ['Europe'],
    description: 'Chartered Certified Accountants supporting technology startups and high-growth businesses with cloud accounting, tax advisory, and R&D tax credits.'
  }
];

export default function PortfolioNetwork() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  return (
    <Section id="network" className="bg-cream">
      <div className="text-center mb-20">
        <span className="text-forest/50 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">
          Global Reach
        </span>
        <h2 className="font-serif text-5xl md:text-6xl tracking-tight text-forest leading-[1.1]">
          Portfolio Network
        </h2>
        {selectedRegion && (
          <div className="mt-8 animate-in fade-in slide-in-from-top-2">
            <span className="inline-flex items-center gap-3 px-5 py-2.5 bg-forest text-cream text-sm tracking-wide border border-gold/20">
              <span className="text-gold/70 text-xs uppercase tracking-wider">Filtering:</span>
              <span className="font-medium">{selectedRegion}</span>
              <button
                onClick={() => setSelectedRegion(null)}
                className="ml-1 hover:text-gold transition-colors"
                aria-label="Clear filter"
              >
                <X size={16} strokeWidth={2.5} />
              </button>
            </span>
          </div>
        )}
      </div>

      <FadeIn>
        <div className="mb-20">
          <WorldMap selectedRegion={selectedRegion} onSelectRegion={setSelectedRegion} />
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-6">
        {firms.map((firm, idx) => {
          const isIncluded = selectedRegion ? firm.coverage.includes(selectedRegion) : true;

          return (
            <FadeIn key={idx} delay={200 + (idx * 150)}>
              <FirmCard firm={firm} dimmed={!isIncluded} />
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
