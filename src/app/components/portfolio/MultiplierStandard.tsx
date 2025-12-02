'use client';

import { Globe, Users, TrendingUp } from 'lucide-react';
import Section from '@/components/Section';
import FadeIn from '@/components/animations/FadeIn';

const impactStats = [
  {
    icon: <Globe size={24} />,
    stat: "14",
    label: "Jurisdictions",
    sub: "Deep local expertise managed centrally"
  },
  {
    icon: <Users size={24} />,
    stat: "$2B+",
    label: "Assets Advised",
    sub: "Across private wealth and corporate clients"
  },
  {
    icon: <TrendingUp size={24} />,
    stat: "40%",
    label: "Efficiency Gain",
    sub: "Average first-year margin improvement"
  }
];

export default function MultiplierStandard() {
  return (
    <Section id="portfolio" className="bg-white border-y border-forest/5">
      <div className="text-center mb-20">
        <span className="text-forest/50 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">
          Our Impact
        </span>
        <h2 className="font-serif text-5xl md:text-6xl tracking-tight text-forest leading-[1.1]">
          The Multiplier Standard
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {impactStats.map((card, idx) => (
          <FadeIn key={idx} delay={idx * 150} className="h-full">
            <div className="h-full p-10 border border-forest/10 bg-cream/30 hover:bg-cream/40 transition-all duration-500 flex flex-col items-center text-center group hover:border-gold/30 hover:shadow-lg hover:shadow-forest/5">
              <div className="mb-8 p-3 bg-white border border-forest/10 text-forest group-hover:bg-forest group-hover:text-gold group-hover:border-gold/30 transition-all duration-500">
                {card.icon}
              </div>
              <span className="font-serif text-6xl md:text-7xl text-forest mb-4 block leading-none tracking-tight group-hover:text-gold transition-colors duration-300">
                {card.stat}
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-dark-gold font-bold mb-5 block">
                {card.label}
              </span>
              <p className="text-forest/60 text-[15px] leading-[1.7] font-light max-w-xs">{card.sub}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
