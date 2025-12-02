"use client";

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

export default function TeamPhotos() {
  return (
    <Section className="bg-forest/20 py-20">
      <div className="text-center mb-12">
        <span className="text-forest/50 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
          Life at Multiplier
        </span>
        <h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-forest mb-4 leading-[1.1]">
          Moments Together
        </h2>
        <p className="text-forest/60 text-lg max-w-2xl mx-auto">
          From team retreats to daily collaborations, see what makes our culture
          special
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <div
              key={i}
              className="flex-none w-80 h-80 bg-white rounded-xl p-3 shadow-sm border border-forest/10 snap-center transform hover:scale-[1.02] hover:shadow-lg hover:border-gold/30 transition-all duration-300"
            >
              <div className="w-full h-full bg-cream/50 rounded-lg flex items-center justify-center border border-forest/5">
                <div className="text-center text-forest/30">
                  <svg
                    className="w-16 h-16 mx-auto mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm font-medium">Photo {i + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </Section>
  );
}
