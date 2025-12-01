import AboutHero from "@/app/components/about/AboutHero";
import MultiplierModel from "@/app/components/about/MultiplierModel";
import Team from "@/app/components/about/Team";
import ContactForm from "@/app/components/about/ContactForm";

export default function About() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <MultiplierModel />
      <Team />
      <ContactForm />
    </div>
  );
}
