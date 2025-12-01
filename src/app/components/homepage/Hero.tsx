"use client";

import { Terminal, Globe, Coffee } from "lucide-react";
import { Guilloche } from "@/components/guilloche/Guilloche";
import FadeIn from "@/components/animations/FadeIn";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  features?: Array<{
    icon: React.ReactNode;
    label: string;
  }>;
}

export default function Hero({
  title = (
    <>
      The Operating System for <br />
      <span className="text-gold italic">High-Stakes Service.</span>
    </>
  ),
  subtitle = "In the future, all successful professional services firms will be technology companies. We are building that future today.",
  features = [
    { icon: <Terminal size={18} />, label: "AI Native Workflows" },
    { icon: <Globe size={18} />, label: "Globally Distributed" },
    { icon: <Coffee size={18} />, label: "High Autonomy" },
  ],
}: HeroProps) {
  return (
    <section className="py-24 px-4 bg-forest text-cream min-h-[60vh] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Guilloche type="wave" color="#EED89E" />
      </div>
      <FadeIn>
        <div className="max-w-7xl mx-auto">
          <div className="w-full flex flex-col items-start justify-start">
            <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tighter tracking-tighter">
              {title}
            </h1>
            <p className="md:text-lg text-cream/70 leading-relaxed mb-12 max-w-2xl">
              {subtitle}
            </p>
            <div className="w-full flex flex-col md:flex-row gap-8 text-sm font-mono text-gold/80 border-t border-gold/20 pt-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  {feature.icon} {feature.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
