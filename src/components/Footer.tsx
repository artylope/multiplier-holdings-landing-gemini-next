import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-cream">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column: Logo, Tagline, Copyright */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cream rounded flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-forest" />
              </div>
              <span className="text-xl font-bold tracking-tight">MULTIPLIER</span>
            </div>
            <p className="text-gold/90 text-sm">
              The operating system for professional services
            </p>
            <p className="text-cream/60 text-xs pt-4">
              © {currentYear} Multiplier Holdings. All rights reserved.
            </p>
          </div>

          {/* Middle Column: Office Locations & Page Links */}
          <div className="space-y-6">
            <div>
              <h3 className="text-gold font-semibold mb-3 text-sm tracking-wide">
                OFFICES
              </h3>
              <ul className="space-y-2 text-sm text-cream/80">
                <li>Singapore</li>
                <li>San Francisco</li>
              </ul>
            </div>
            <div>
              <h3 className="text-gold font-semibold mb-3 text-sm tracking-wide">
                QUICK LINKS
              </h3>
              <ul className="space-y-2 text-sm">
                <Link
                  href="/portfolio"
                  className="block text-cream/80 hover:text-gold transition-colors"
                >
                  Portfolio
                </Link>
                <Link
                  href="/careers"
                  className="block text-cream/80 hover:text-gold transition-colors"
                >
                  Careers
                </Link>
                <Link
                  href="/about"
                  className="block text-cream/80 hover:text-gold transition-colors"
                >
                  About
                </Link>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact */}
          <div className="space-y-4">
            <h3 className="text-gold font-semibold mb-3 text-sm tracking-wide">
              CONTACT
            </h3>
            <a
              href="mailto:partners@multiplier.holdings"
              className="text-sm text-cream/80 hover:text-gold transition-colors block"
            >
              partners@multiplier.holdings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
