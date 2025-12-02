"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";

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

export default function EmployeeVoices() {
  return (
    <Section className="bg-white">
      <div className="text-center mb-16">
        <span className="text-forest/60 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
          Voices
        </span>
        <h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-forest">
          From the Team
        </h2>
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
                  <div className="font-bold text-forest text-sm">{emp.name}</div>
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
  );
}
