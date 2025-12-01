"use client";

import { Briefcase, Code, Users } from "lucide-react";
import { Guilloche } from "@/components/guilloche/Guilloche";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import Hero from "@/app/components/homepage/Hero";

// Section wrapper component
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

export default function Careers() {
  const employees = [
    {
      name: "Sze Wai",
      role: "Engineer",
      quote:
        "Working at Multiplier... means I'm right at the edge of what's possible. Every day, we're exploring questions that haven't been fully figured out yet. It's exciting to innovate, push boundaries, and explore new approaches.",
    },
    {
      name: "Jane",
      role: "Product Lead",
      quote:
        "We're constantly talking with our users, sometimes daily, and actually building alongside them, so I know that we're creating something that really matters. This team is my favourite by far.",
    },
    {
      name: "Razvan",
      role: "Grumpy Eng",
      quote:
        "We're not stuck maintaining legacy systems or locked into old tech just because \"that's how it's always been done.\" If there's a better tool, we try it. If there's a smarter workflow, we adopt it.",
    },
    {
      name: "Amy",
      role: "Designer",
      quote:
        "My favorite part of working at Multiplier has to be the flexibility to set my own schedule, work from wherever I want, and collaborate with such a smart and fun team. I always return home feeling inspired.",
    },
    {
      name: "Alex",
      role: "Engineer",
      quote:
        "I get to build smart solutions with very talented people, in an environment where I can just be myself. We're playing with the latest AI tech... It's the kind of job that makes Mondays not suck.",
    },
    {
      name: "Tony",
      role: "IT",
      quote:
        "I love that the IT function is a blank slate. I get to bring years of experience to the table and build things the right way from the start. Everyone has been incredibly welcoming.",
    },
  ];

  return (
    <div className="">
      {/* Manifesto / Hero */}
      <Hero />

      {/* Work Style */}
      <Section className="bg-white text-forest">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="w-full max-w-xl ">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight">Work Style</h2>
            <p className="text-lg text-forest/70 leading-relaxed mb-6">
              Multiplier is an AI native company where each team member has a
              large role scope and unbounded opportunity for impact. We
              encourage everyone to experiment with the latest tools and models
              and rethink how their job should be done.
            </p>
            <p className="text-lg text-forest/70 leading-relaxed">
              As a globally distributed business, we have both in-person hubs
              (Singapore, San Francisco, London) and fully remote working
              options. Our culture of autonomy, alignment, and personal
              accountability creates substantial personal freedom.
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
              {[
                "Bonuses & Stock Based Compensation",
                "Investment in Personal Growth",
                "Cross-border Team Retreats",
                "Latest AI Tooling Stack",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rotate-45"></div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Teams Structure */}
      <Section className="bg-forest/5 relative">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl tracking-tighter  text-forest">The Multiplier Model</h2>
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
              <h3 className="font-serif text-2xl mb-2">
                Tech Pods
              </h3>
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
      </Section>

      {/* Employee Voices */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <span className="text-forest/60 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
            Voices
          </span>
          <h2 className="font-serif text-5xl md:text-6xl tracking-tighter  text-forest">From the Team</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((emp, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="p-8 bg-cream/30 border border-forest/5 h-full flex flex-col hover:border-gold/30 transition-colors">
                <div className="mb-6 text-forest/70 italic font-sans text-base leading-relaxed">
                  &ldquo;{emp.quote}&rdquo;
                </div>
                <div className="mt-auto flex items-center gap-4 pt-4 border-t border-forest/5">
                  <div className="w-10 h-10 bg-forest text-gold flex items-center justify-center font-serif font-bold rounded-full text-lg">
                    {emp.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-forest text-sm">
                      {emp.name}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-forest/50">
                      {emp.role}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            className="group h-auto px-8 py-4 bg-forest text-gold hover:bg-gold hover:text-forest transition-all duration-300 shadow-xl rounded-none"
          >
            <a href="mailto:join@multiplierholdings.com">
              <span className="text-xs font-bold uppercase tracking-widest">
                Join us at Multiplier
              </span>
            </a>
          </Button>
          <p className="mt-4 text-forest/60 font-mono text-xs">
            join@multiplierholdings.com
          </p>
        </div>
      </Section>
    </div>
  );
}
