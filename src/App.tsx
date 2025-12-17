import React, { useState, useEffect } from 'react';
import { Hero } from './components/Header';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { translations } from './locales/translations';
import { scrollToSection } from './utils/scrollToSection';
import './App.css';

function App() {
  const [lang, setLang] = useState<'en' | 'es'>(() => {
    const saved = localStorage.getItem('lang');
    if (saved === 'es' || saved === 'en') return saved as 'en' | 'es';
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'es' ? 'es' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];
  const [activeSection, setActiveSection] = useState<'home' | 'services' | 'testimonials' | 'about' | 'contact'>('home');
  const handleNavigate = (id: string) => {
    scrollToSection(id);
    if (id === 'home' || id === 'services' || id === 'testimonials' || id === 'about' || id === 'contact') {
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const ids: Array<'home' | 'services' | 'testimonials' | 'about' | 'contact'> = ['home', 'services', 'testimonials', 'about', 'contact'];
    const onScroll = () => {
      const center = window.innerHeight / 2;
      let current: typeof activeSection = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= center && rect.bottom >= center) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar t={t} lang={lang} activeSection={activeSection} onChangeLang={setLang} onNavigate={handleNavigate} />
      <Hero t={t} scrollToSection={scrollToSection} />
      <About t={t} />
      <Services t={t} />
      <Testimonials t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}

export default App;