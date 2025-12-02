"use client";

import FadeIn from "@/components/animations/FadeIn";

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

const openPositions = [
  {
    title: "Product Engineer, Corporate Accounting Pod",
    location: "Remote (Cantonese speaking)",
    type: "Full-time",
    team: "Engineering",
    link: "https://www.notion.so/multiplierholdings/JD-Product-Engineer-Corporate-Accounting-Pod-Cantonese-speaking-2b63d1dd922e8094aa6fc1486613ed91",
  },
  {
    title: "Strategic Finance Associate",
    location: "Remote",
    type: "Full-time",
    team: "Finance",
    link: "https://www.notion.so/multiplierholdings/JD-Strategic-Finance-Associate-2a83d1dd922e802193fdf0d1792f60e1",
  },
];

export default function OpenPositions() {
  return (
    <Section className="bg-cream/30">
      <div className="text-center mb-16">
        <span className="text-forest/60 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
          Opportunities
        </span>
        <h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-forest">
          Open Positions
        </h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {openPositions.map((position, i) => (
          <FadeIn key={i} delay={i * 100}>
            <a
              href={position.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 bg-white border border-forest/10 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="font-serif text-2xl text-forest group-hover:text-dark-gold transition-colors mb-3">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="flex items-center gap-2 text-forest/60">
                      <div className="w-1 h-1 bg-gold rotate-45"></div>
                      {position.team}
                    </span>
                    <span className="flex items-center gap-2 text-forest/60">
                      <div className="w-1 h-1 bg-gold rotate-45"></div>
                      {position.location}
                    </span>
                    <span className="flex items-center gap-2 text-forest/60">
                      <div className="w-1 h-1 bg-gold rotate-45"></div>
                      {position.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-forest/60 group-hover:text-dark-gold transition-colors">
                  <span className="text-xs font-bold uppercase tracking-wider">
                    View Details
                  </span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>

      {openPositions.length === 0 && (
        <div className="text-center py-16">
          <p className="text-forest/60 text-lg">
            No open positions at the moment. Check back soon!
          </p>
        </div>
      )}
    </Section>
  );
}
