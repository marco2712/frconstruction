import React from "react";
import type { Language, SectionId, Translations } from '../../types';

interface NavBarProps {
  t: Translations;
  lang: Language;
  activeSection: SectionId;
  onChangeLang: (lang: Language) => void;
  onNavigate: (section: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({
  t,
  lang,
  activeSection,
  onChangeLang,
  onNavigate,
}) => {
  const itemClass = (active: boolean) =>
    `
      bg-transparent appearance-none
      border-0 outline-none focus:outline-none focus:ring-0
      rounded-none shadow-none
      px-0 py-0
      text-sm font-medium
      transition-none
      ${active ? "text-yellow-400" : "text-gray-300 hover:text-gray-100"}
    `;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    onNavigate(section);
  };

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="text-gray-200 font-semibold tracking-wide bg-transparent border-0 cursor-pointer hover:text-yellow-400 transition-colors"
        >
          {t.companyName}
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a
            href="#home"
            className={itemClass(activeSection === "home")}
            onClick={(e) => handleNavClick(e, "home")}
          >
            {t.nav.home}
          </a>

          <a
            href="#services"
            className={itemClass(activeSection === "services")}
            onClick={(e) => handleNavClick(e, "services")}
          >
            {t.nav.services}
          </a>

          <a
            href="#testimonials"
            className={itemClass(activeSection === "testimonials")}
            onClick={(e) => handleNavClick(e, "testimonials")}
          >
            {t.nav.testimonials}
          </a>

          <a
            href="#about"
            className={itemClass(activeSection === "about")}
            onClick={(e) => handleNavClick(e, "about")}
          >
            {t.nav.about}
          </a>

          <a
            href="#contact"
            className={itemClass(activeSection === "contact")}
            onClick={(e) => handleNavClick(e, "contact")}
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Language Switcher */}
        <div className="flex items-center space-x-2 text-sm select-none">
          <span
            role="button"
            tabIndex={0}
            className={`${
              lang === "en" ? "text-yellow-400" : "text-gray-400 hover:text-gray-300"
            } cursor-pointer bg-transparent transition-colors`}
            onClick={() => onChangeLang("en")}
            onKeyDown={(e) => handleKeyDown(e, () => onChangeLang('en'))}
          >
            EN
          </span>
          <span className="text-gray-600">|</span>
          <span
            role="button"
            tabIndex={0}
            className={`${
              lang === "es" ? "text-yellow-400" : "text-gray-400 hover:text-gray-300"
            } cursor-pointer bg-transparent transition-colors`}
            onClick={() => onChangeLang("es")}
            onKeyDown={(e) => handleKeyDown(e, () => onChangeLang('es'))}
          >
            ES
          </span>
        </div>
      </div>
    </header>
  );
};
