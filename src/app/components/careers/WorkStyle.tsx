"use client";

import { Guilloche } from "@/components/guilloche/Guilloche";

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-24 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

const benefits = [
  "Bonuses & Stock Based Compensation",
  "Investment in Personal Growth",
  "Cross-border Team Retreats",
  "Latest AI Tooling Stack",
];

export default function WorkStyle() {
  return (
    <Section className="bg-white text-forest">
      <div className="grid md:grid-cols-2 gap-16">
        <div className="w-full max-w-xl">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight">
            Work Style
          </h2>
          <p className="text-lg text-forest/70 leading-relaxed mb-6">
            Multiplier is an AI native company where each team member has a large
            role scope and unbounded opportunity for impact. We encourage everyone
            to experiment with the latest tools and models and rethink how their job
            should be done.
          </p>
          <p className="text-lg text-forest/70 leading-relaxed">
            As a globally distributed business, we have both in-person hubs
            (Singapore, San Francisco, London) and fully remote working options. Our
            culture of autonomy, alignment, and personal accountability creates
            substantial personal freedom.
          </p>
        </div>
        <div className="bg-cream p-8 border border-forest/10 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <Guilloche type="rosette" color="#122C18" />
          </div>
          <h3 className="font-display font-bold text-lg uppercase tracking-widest mb-6 border-b border-forest/10 pb-4">
            The Upside
          </h3>
          <ul className="space-y-4">
            {benefits.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-gold rotate-45"></div>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
