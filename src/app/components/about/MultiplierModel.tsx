"use client";

import { Briefcase, Code, Users } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function MultiplierModel() {
  return (
    <section className="py-24 px-4 bg-forest/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-forest">
            The Multiplier Model
          </h2>
          <p className="text-forest/60 mt-4">
            Three distinct engines driving our growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FadeIn delay={0}>
            <div className="bg-white p-8 h-full border-t-4 border-gold shadow-sm hover:shadow-xl transition-all">
              <Briefcase className="text-forest mb-6" size={32} />
              <h3 className="font-serif text-2xl mb-2">Multiplier HoldCo</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-dark-gold mb-4">
                Capital & Culture
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                Small, focused management team dedicated to capital allocation,
                strategy, and building our shared culture.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-white p-8 h-full border-t-4 border-gold shadow-sm hover:shadow-xl transition-all">
              <Code className="text-forest mb-6" size={32} />
              <h3 className="font-serif text-2xl mb-2">Tech Pods</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-dark-gold mb-4">
                Product & Engineering
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                Semi-autonomous cross-functional teams headed by a
                single-threaded leader. We avoid tangled meetings in favor of
                ownership and shipping.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="bg-white p-8 h-full border-t-4 border-gold shadow-sm hover:shadow-xl transition-all">
              <Users className="text-forest mb-6" size={32} />
              <h3 className="font-serif text-2xl mb-2">Multiplier Portfolio</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-dark-gold mb-4">
                Service Excellence
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                Boutique, premium service-oriented firms. The home for
                professionals who combine domain expertise with a desire to
                leverage AI.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
