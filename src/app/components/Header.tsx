"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MultiplierLogo } from "./MultiplierLogo";

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
      <div className="max-w-7xl mx-auto ">
        <div className="px-4 flex items-center justify-between h-20">
          {/* Logo and Wordmark */}
          <Link href="/" className="group flex items-center gap-0">
            <MultiplierLogo
              variant="icon"
              className="text-gold group-hover:text-cream transition-colors h-5 -ml-10"
            /><MultiplierLogo
            variant="text"
            className="text-gold group-hover:text-cream transition-colors h-3.5 -ml-8"
          />
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
          <nav className="md:hidden py-6 px-4 border-t border-white/10">
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
            
          </nav>
        )}
      </div>
    </header>
  );
}
