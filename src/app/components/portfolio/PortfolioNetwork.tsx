'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Section from '@/components/Section';
import WorldMap from '@/components/WorldMap';
import FirmCard from '@/components/FirmCard';
import FadeIn from '@/components/animations/FadeIn';

// Sample firms data - can be moved to a separate data file
const firms = [
  {
    name: 'Citrine International',
    location: 'San Francisco, CA',
    coverage: ['North America', 'Europe'],
    description: 'Cross-border tax and compliance specialists for high-net-worth individuals and families.'
  },
  {
    name: 'Sterling Advisory',
    location: 'Singapore',
    coverage: ['Asia Pacific', 'Middle East'],
    description: 'Multi-jurisdictional accounting and wealth structuring for global families.'
  },
  {
    name: 'Apex Partners',
    location: 'London, UK',
    coverage: ['Europe', 'Middle East'],
    description: 'International tax planning and regulatory compliance for multinational corporations.'
  },
  {
    name: 'Summit Financial',
    location: 'Hong Kong',
    coverage: ['Asia Pacific'],
    description: 'Corporate restructuring and tax optimization across Asian markets.'
  },
  {
    name: 'Horizon Group',
    location: 'Dubai, UAE',
    coverage: ['Middle East', 'Europe', 'Asia Pacific'],
    description: 'Global wealth management and tax advisory for UHNW families.'
  },
  {
    name: 'Pacific Advisory',
    location: 'Sydney, Australia',
    coverage: ['Asia Pacific'],
    description: 'Cross-border tax solutions and family office services.'
  }
];

export default function PortfolioNetwork() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  return (
    <Section id="network" className="bg-cream">
      <div className="text-center mb-16">
        <span className="text-forest/60 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
          Global Reach
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-forest">Portfolio Network</h2>
        {selectedRegion && (
          <div className="mt-4 animate-in fade-in slide-in-from-top-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-forest text-gold rounded-full text-sm shadow-md border border-gold/30">
              Filtering by: <span className="font-bold">{selectedRegion}</span>
              <button
                onClick={() => setSelectedRegion(null)}
                className="ml-2 hover:text-white"
              >
                <X size={14} />
              </button>
            </span>
          </div>
        )}
      </div>

      <FadeIn>
        <div className="mb-16">
          <WorldMap selectedRegion={selectedRegion} onSelectRegion={setSelectedRegion} />
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
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
