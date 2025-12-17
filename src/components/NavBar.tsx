import React from "react";

interface NavTranslations {
  companyName: string;
  nav: {
    home: string;
    services: string;
    testimonials: string;
    about: string;
    contact: string;
  };
}

interface NavBarProps {
  t: NavTranslations;
  lang: "en" | "es";
  activeSection: "home" | "services" | "testimonials" | "about" | "contact";
  onChangeLang: (lang: "en" | "es") => void;
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
      ${active ? "text-yellow-400" : "text-gray-300"}
    `;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <span className="text-gray-200 font-semibold tracking-wide">
          {t.companyName}
        </span>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a
            href="#home"
            className={itemClass(activeSection === "home")}
            onClick={(e) => { e.preventDefault(); onNavigate("home"); }}
          >
            {t.nav.home}
          </a>

          <a
            href="#services"
            className={itemClass(activeSection === "services")}
            onClick={(e) => { e.preventDefault(); onNavigate("services"); }}
          >
            {t.nav.services}
          </a>

          <a
            href="#testimonials"
            className={itemClass(activeSection === "testimonials")}
            onClick={(e) => { e.preventDefault(); onNavigate("testimonials"); }}
          >
            {t.nav.testimonials}
          </a>

          <a
            href="#about"
            className={itemClass(activeSection === "about")}
            onClick={(e) => { e.preventDefault(); onNavigate("about"); }}
          >
            {t.nav.about}
          </a>

          <a
            href="#contact"
            className={itemClass(activeSection === "contact")}
            onClick={(e) => { e.preventDefault(); onNavigate("contact"); }}
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Language */}
        <div className="flex items-center space-x-2 text-sm select-none">
          <span
            role="button"
            tabIndex={0}
            className={`${lang === "en" ? "text-yellow-400" : "text-gray-400"} cursor-pointer bg-transparent`}
            onClick={() => onChangeLang("en")}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onChangeLang('en'); }}
          >
            EN
          </span>
          <span className="text-gray-500">/</span>
          <span
            role="button"
            tabIndex={0}
            className={`${lang === "es" ? "text-yellow-400" : "text-gray-400"} cursor-pointer bg-transparent`}
            onClick={() => onChangeLang("es")}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onChangeLang('es'); }}
          >
            ES
          </span>
        </div>
      </div>
    </header>
  );
};
