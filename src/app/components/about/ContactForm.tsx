"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-24 px-4 bg-cream">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-forest/5 rounded-full flex items-center justify-center">
                <Mail className="text-forest" size={20} />
              </div>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-forest mb-4">
              Get in Touch
            </h2>
            <p className="text-forest/70 text-lg max-w-2xl mx-auto text-balance">
              Whether you're a prospective client, firm owner, or talented
              professional, we'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border border-forest/10 shadow-sm">
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold uppercase tracking-widest text-forest/60 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cream/50 border border-forest/10 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest/20 transition-colors text-forest"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold uppercase tracking-widest text-forest/60 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cream/50 border border-forest/10 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest/20 transition-colors text-forest"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-widest text-forest/60 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-cream/50 border border-forest/10 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest/20 transition-colors resize-none text-forest"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full h-auto px-8 py-4 bg-forest text-gold hover:bg-forest/90 transition-all duration-300 shadow-lg hover:shadow-xl rounded-none"
                >
                  <span className="text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                    Send Message <Send size={14} />
                  </span>
                </Button>
              </div>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-forest/60">
              Or reach us directly at{" "}
              <a
                href="mailto:hello@multiplierholdings.com"
                className="text-forest font-medium hover:text-gold transition-colors"
              >
                hello@multiplierholdings.com
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
