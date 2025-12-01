"use client";

import { Network, ShieldCheck } from "lucide-react";
import { Guilloche } from "@/components/guilloche/Guilloche";
import FadeIn from "@/components/animations/FadeIn";

export default function Platform() {
  return (
    <section id="platform" className="py-36 px-4 bg-white text-forest overflow-hidden relative">
      {/* Background: Digital Infrastructure via Security Printing Metaphor */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-[0.03] animate-spin-slow"
          style={{ animationDuration: "120s" }}
        >
          <Guilloche color="#122C18" type="rosette" />
        </div>

        <div className="absolute top-[8%] left-0 w-full h-16 opacity-[0.08]">
          <Guilloche type="security-strip" color="#122C18" opacity={1} />
        </div>
        <div className="absolute bottom-[8%] left-0 w-full h-16 opacity-[0.08]">
          <Guilloche type="security-strip" color="#122C18" opacity={1} />
        </div>

        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay">
          <Guilloche color="#122C18" type="wave" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
          <FadeIn>
            <span className="text-dark-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              The Platform
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 tracking-tight leading-none">
              Human Judgment,
              <br />
              <span className="text-dark-gold italic">Machine Precision.</span>
            </h2>
            <p className="text-forest/70 leading-relaxed mb-8">
              Developed at our engineering hubs in{" "}
              <span className="text-forest font-medium border-b border-dark-gold/30">
                San Francisco
              </span>{" "}
              and{" "}
              <span className="text-forest font-medium border-b border-dark-gold/30">
                Singapore
              </span>
              , the "Multiplier OS" handles the ingestion, categorization, and
              preliminary analysis of complex cross-border documentation,
              allowing our firm staff to focus on delivering exceptional service to our clients.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border border-forest/10 flex items-center justify-center shrink-0 bg-forest/5">
                  <Network className="text-forest" size={20} />
                </div>
                <div>
                  <h4 className="font-display text-lg mb-1 text-forest">
                    Contextual Awareness
                  </h4>
                  <p className="text-sm text-forest/60">
                    AI that understands the nuances of cross-border tax and compliance documentation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border border-forest/10 flex items-center justify-center shrink-0 bg-forest/5">
                  <ShieldCheck className="text-forest" size={20} />
                </div>
                <div>
                  <h4 className="font-display text-lg mb-1 text-forest">
                    Institutional Security
                  </h4>
                  <p className="text-sm text-forest/60">
                    Enterprise-grade security with the careful attention your clients expect.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="relative">
              {/* AI Extraction Popout Card */}
              <div className="absolute bottom-28 w-108  bg-white border-2 border-dark-gold shadow-2xl z-20 transform  hover:rotate-0 transition-transform duration-300">
                <div className="p-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <Guilloche color="#122C18" type="rosette" />
                  </div>
                  <div className="flex items-start gap-3 relative z-10">
                    <div className="w-10 h-10 bg-dark-gold flex items-center justify-center shrink-0">
                      <Network className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-forest mb-2 uppercase tracking-wide">AI Extraction Complete</p>
                      <p className="text-xs text-forest/70 leading-relaxed mb-3">
                        Personal details, SSN, and address automatically extracted from W-2 attachment and filled into the tax form.
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 bg-forest/10 flex-1">
                          <div className="h-full bg-dark-gold w-[99%]"></div>
                        </div>
                        <span className="text-[10px] font-bold text-dark-gold">99.8%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-dark-gold"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-dark-gold"></div>
              </div>

              {/* Tax Form UI Card */}
              <div className="relative bg-white border-2 border-forest/20 shadow-xl overflow-hidden ml-24">
              {/* Header */}
              <div className="bg-cream border-b border-forest/10 px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg text-forest">Form 1040 - 2024</h3>
                  <p className="text-xs text-forest/50 font-mono">US Individual Income Tax Return</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-dark-gold bg-gold/10 px-2 py-1 flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-dark-gold rounded-full animate-pulse"></div>
                    AI Processing
                  </span>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-6 space-y-4">
                {/* Primary Taxpayer */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-forest/60 mb-2 block">
                    Primary Taxpayer
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <input
                        type="text"
                        value="Young"
                        readOnly
                        className="w-full px-3 py-2 bg-cream/50 border border-forest/10 text-sm text-forest rounded-sm"
                      />
                      {/* AI Extraction Indicator */}
                      <div className="absolute -right-2 -top-2 w-5 h-5 bg-dark-gold rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        value="Nicholas"
                        readOnly
                        className="w-full px-3 py-2 bg-cream/50 border border-forest/10 text-sm text-forest rounded-sm"
                      />
                      <div className="absolute -right-2 -top-2 w-5 h-5 bg-dark-gold rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SSN */}
                <div className="relative">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-forest/60 mb-2 block">
                    Social Security Number
                  </label>
                  <input
                    type="text"
                    value="987-65-4321"
                    readOnly
                    className="w-full px-3 py-2 bg-cream/50 border border-forest/10 text-sm font-mono text-forest"
                  />
                  <div className="absolute right-3 top-8 w-5 h-5 bg-dark-gold rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-forest/60 mb-2 block">
                    Address
                  </label>
                  <input
                    type="text"
                    value="456 Oak St, San Francisco, CA 12345"
                    readOnly
                    className="w-full px-3 py-2 bg-cream/50 border border-forest/10 text-sm text-forest rounded-sm"
                  />
                </div>

                {/* AI Extraction Source Indicator */}
                <div className="relative pt-3 border-t border-forest/10 bg-dark-gold/5 -mx-6 px-6 pb-4">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-dark-gold/40 to-transparent"></div>

                  {/* Attachments */}
                  <div className="pt-3">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-forest/60">Attachments</p>
                      <span className="text-[8px] font-bold uppercase tracking-wider text-dark-gold flex items-center gap-1">
                        <div className="w-1 h-1 bg-dark-gold rounded-full animate-pulse"></div>
                        AI Scanning
                      </span>
                    </div>
                    <div className="w-full h-16 bg-gold/20 my-2 rounded-lg"></div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2.5 bg-white border-2 border-dark-gold/30 shadow-sm">
                        <div className="w-8 h-8 bg-dark-gold/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-dark-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                       
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-forest truncate">W-2_Nicholas_Young.pdf</p>
                          <p className="text-[10px] text-forest/50">142 KB • Processed</p>
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-green-700 bg-green-100 px-2 py-1">
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                {/* Decorative corners */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-dark-gold"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-dark-gold"></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
