// ========================================
// TYPE DEFINITIONS
// ========================================

export type Language = 'en' | 'es';

export type SectionId = 'home' | 'services' | 'testimonials' | 'about' | 'contact';

// ========================================
// TRANSLATION TYPES
// ========================================

export interface Testimonial {
  quote: string;
  name: string;
}

export interface ServiceCategory {
  title: string;
  items: string[];
}

export interface WhyChooseItem {
  title: string;
  desc: string;
}

export interface Translations {
  companyName: string;
  tagline: string;
  nav: {
    home: string;
    services: string;
    testimonials: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
  };
  services: {
    title: string;
    residential: ServiceCategory;
    construction: ServiceCategory;
    handyman: ServiceCategory;
    interior: ServiceCategory;
  };
  whyChoose: {
    title: string;
    quality: WhyChooseItem;
    experience: WhyChooseItem;
    price: WhyChooseItem;
    available: WhyChooseItem;
  };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
    email: string;
  };
  testimonials: {
    title: string;
    items: Testimonial[];
  };
  footer: {
    rights: string;
    slogan: string;
  };
}

export type TranslationsMap = Record<Language, Translations>;
