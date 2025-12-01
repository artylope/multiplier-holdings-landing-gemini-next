"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="bg-forest border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Wordmark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center">
               {/* Logo Mark - simplified to match style */}
              <div className="relative w-8 h-8">
                 <div className="absolute inset-0 border border-gold transform rotate-45" />
                 <div className="absolute inset-2 border border-gold/50" />
              </div>
            </div>
            <span className="text-xl font-serif tracking-widest text-cream group-hover:text-white transition-colors uppercase">
              Multiplier
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "uppercase text-xs font-bold tracking-[0.2em] transition-colors",
                  pathname === link.href
                    ? "text-gold"
                    : "text-[#94A396] hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
    
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gold hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block py-3 text-xs font-bold tracking-[0.2em] transition-colors uppercase",
                  pathname === link.href
                    ? "text-gold"
                    : "text-[#94A396] hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
             <Link
                href="/partner-access"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mt-4 py-3 text-xs font-bold tracking-[0.2em] text-gold border border-gold text-center hover:bg-gold hover:text-forest transition-colors uppercase"
              >
                Partner Access
              </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
