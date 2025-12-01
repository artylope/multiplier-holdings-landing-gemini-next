"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Noah Peppers",
    role: "CEO",
    bio: "Leading Multiplier's vision to transform professional services through AI and operational excellence.",
    linkedin: "#",
  },
  {
    name: "Argyris Zymnis",
    role: "CTO",
    bio: "Building the technical infrastructure powering the next generation of professional services.",
    linkedin: "#",
  },
  {
    name: "Frederik Voet",
    role: "Head of Corporate Development",
    bio: "Driving strategic partnerships and M&A to expand the Multiplier portfolio.",
    linkedin: "#",
  },
  {
    name: "Paige Dolby",
    role: "Head of Business Operations",
    bio: "Ensuring operational excellence and scalability across the organization.",
    linkedin: "#",
  },
  {
    name: "Carrie Tan",
    role: "Head of People",
    bio: "Cultivating culture and building world-class teams at Multiplier.",
    linkedin: "#",
  },
  {
    name: "Martin Brennan",
    role: "Leader at Onside Accounting",
    bio: "Leading Onside Accounting's mission to deliver exceptional accounting services with precision and care.",
    linkedin: "#",
  },
  {
    name: "Emily White",
    role: "Leader at Citrine International",
    bio: "Driving Citrine International's vision for cross-border tax and compliance excellence.",
    linkedin: "#",
  },
  {
    name: "Joshua Ashman",
    role: "Leader at ETP",
    bio: "Guiding ETP's commitment to innovative professional services solutions.",
    linkedin: "#",
  },
];

export default function Team() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-forest/60 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
            Leadership
          </span>
          <h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-forest">
            Meet the Team
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="group">
                {/* Avatar Circle */}
                <div className="mb-6 relative">
                  <div className="w-32 h-32 mx-auto bg-forest/5 rounded-full flex items-center justify-center border-2 border-forest/10 group-hover:border-gold transition-colors">
                    <span className="font-serif text-4xl text-forest">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="font-serif text-xl text-forest mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-dark-gold mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-forest/70 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center gap-2 text-forest/60 hover:text-gold transition-colors text-sm"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
