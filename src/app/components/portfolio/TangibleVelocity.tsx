'use client';

import Section from '@/components/Section';
import FadeIn from '@/components/animations/FadeIn';

const testimonials = [
  {
    quote: "The AI layer on top of these tools is liberating time for my staff to become proper tax consultants and not admin assistants doing a bit of tax.",
    author: "Greg Trotman",
    company: "Citrine International"
  },
  {
    quote: "Prior to Multiplier, I sent out 14 tax returns in a 14-hour day. This year, I was able to send",
    highlightedText: "24 tax returns in a 10-hour day",
    quoteSuffix: ".",
    author: "Emily White",
    company: "Citrine International"
  }
];

export default function TangibleVelocity() {
  return (
    <Section className="bg-forest border-y border-gold/20">
      <FadeIn>
        <h2 className="text-center font-serif text-4xl text-cream mb-16">Tangible Velocity</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="relative bg-white/5 border border-gold/30 p-10 rounded-sm"
            >
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold"></div>
              <p className="font-serif text-xl md:text-2xl text-cream italic mb-8 leading-relaxed">
                {testimonial.quote}
                {testimonial.highlightedText && (
                  <>
                    {' '}
                    <span className="text-gold">{testimonial.highlightedText}</span>
                    {testimonial.quoteSuffix}
                  </>
                )}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-gold"></div>
                <div>
                  <p className="font-bold text-gold text-sm tracking-widest uppercase">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-cream/50 uppercase">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
