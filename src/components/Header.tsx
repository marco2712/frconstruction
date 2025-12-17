import React from "react";
import { ChevronRight } from "lucide-react";

interface HeroTranslations {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  tagline: string;
}

interface HeroProps {
  t: HeroTranslations;
  scrollToSection: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ t, scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-[12vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-handyman.jpg')",
        }}
      />

      {/* Dark overlay (lighter) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Gradient overlay (lighter) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40" />

      {/* CONTENT */}
      <div className="container mx-auto px-[5vw] text-center relative z-10 pt-[8vh]">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t.hero.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-4">
            {t.tagline}
          </p>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>

          <button
            onClick={() => scrollToSection("contact")}
            className="group px-8 py-4 cta-btn rounded-lg
                       font-bold text-lg hover:bg-yellow-500 transition
                       transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>{t.hero.cta}</span>
            <ChevronRight className="group-hover:translate-x-1 transition" />
          </button>
        </div>
      </div>
    </section>
  );
};
