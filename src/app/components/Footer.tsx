"use client";

import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import { Guilloche } from "../../components/guilloche/footer_pattern";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = footerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="bg-forest pt-24 pb-12 border-t-4 border-gold/30 relative overflow-hidden"
    >
      <Guilloche
        className="text-gold pointer-events-none top-20"
        opacity={0.15}
        type="wave"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div
            className="transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "100ms",
            }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-8 leading-tightest tracking-tight">
              Ready to elevate your <br />
              <span className="text-gold italic">Standards?</span>
            </h2>
            <p className="text-cream/60 max-w-md mb-4">
              Whether you are a prospective client, a firm owner, or an
              engineer, we invite you to start a conversation.
            </p>
            <a
              href="mailto:partners@multiplier.holdings"
              className="inline-flex items-center gap-3 text-gold border-b border-gold pb-1 hover:text-white hover:border-white transition-colors uppercase tracking-widest text-sm"
            >
              partners@multiplier.holdings <ChevronRight size={14} />
            </a>
          </div>
          <div
            className="grid grid-cols-3 gap-8 text-sm transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "300ms",
            }}
          >
            {/* Quick Links */}
            <div>
              <h3 className="text-xs font-bold tracking-widest uppercase text-cream/40 mb-4">
                Links
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  { href: "/", label: "Home" },
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/blog", label: "Blog" },
                  { href: "/careers", label: "Careers" },
                  { href: "/about", label: "About" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="block text-cream/80 hover:text-gold hover:translate-x-1 transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xs font-bold tracking-widest uppercase text-cream/40 mb-4">
                Legal
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms of Service", href: "/terms" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="block text-cream/80 hover:text-gold hover:translate-x-1 transition-all duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Offices */}
            <div>
              <h3 className="text-xs font-bold tracking-widest uppercase text-cream/40 mb-4">
                Offices
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  { city: "San Francisco" },
                  { city: "London" },
                  { city: "Singapore" },
                ].map((office) => (
                  <li
                    key={office.city}
                    className="flex items-center gap-1 group cursor-default"
                  >
                    <div className="flex items-center justify-center transition-colors">
                      <MapPin size={10} className="text-gold" />
                    </div>
                    <span className="text-cream/90 font-medium tracking-wide">
                      {office.city}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
