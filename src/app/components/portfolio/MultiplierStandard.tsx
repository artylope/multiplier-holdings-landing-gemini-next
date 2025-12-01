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
      <div className="text-center mb-16">
        <span className="text-forest/60 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
          Our Impact
        </span>
        <h2 className="font-serif text-4xl text-forest">The Multiplier Standard</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {impactStats.map((card, idx) => (
          <FadeIn key={idx} delay={idx * 150} className="h-full">
            <div className="h-full p-8 border border-forest/10 bg-cream/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-2">
              <div className="mb-6 p-4 bg-white border border-forest/10 rounded-full text-forest group-hover:bg-forest group-hover:text-gold transition-colors duration-500 shadow-sm">
                {card.icon}
              </div>
              <span className="font-serif text-5xl text-forest mb-2 block">{card.stat}</span>
              <span className="text-[10px] uppercase tracking-widest text-dark-gold font-bold mb-4 block">
                {card.label}
              </span>
              <p className="text-forest/60 text-sm leading-relaxed">{card.sub}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
