import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Wrench, 
  MessageSquare, 
  Info, 
  Phone, 
  Menu, 
  X,
  Globe,
  Hammer
} from "lucide-react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t.nav.home, icon: Home },
    { id: 'services', label: t.nav.services, icon: Wrench },
    { id: 'testimonials', label: t.nav.testimonials, icon: MessageSquare },
    { id: 'about', label: t.nav.about, icon: Info },
    { id: 'contact', label: t.nav.contact, icon: Phone },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-lg border-b border-yellow-400/20 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-gray-200 font-bold text-xl tracking-wide bg-transparent border-0 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Hammer className="w-6 h-6 text-yellow-400 group-hover:rotate-12 transition-transform" />
            <span className="group-hover:text-yellow-400 transition-colors">
              {t.companyName}
            </span>
          </motion.button>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`
                    relative flex items-center gap-2 px-4 py-2 rounded-lg
                    text-sm font-medium transition-all
                    ${isActive 
                      ? "text-yellow-400" 
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  
                  {/* Indicador activo animado */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </nav>

          {/* Language Switcher con ícono */}
          <div className="hidden md:flex items-center gap-3">
            <Globe className="w-4 h-4 text-gray-400" />
            <div className="flex items-center gap-2">
              <motion.button
                onClick={() => onChangeLang("en")}
                className={`
                  px-3 py-1 rounded-md text-sm font-medium transition-all
                  ${lang === "en" 
                    ? "bg-yellow-400 text-gray-900" 
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                EN
              </motion.button>
              <motion.button
                onClick={() => onChangeLang("es")}
                className={`
                  px-3 py-1 rounded-md text-sm font-medium transition-all
                  ${lang === "es" 
                    ? "bg-yellow-400 text-gray-900" 
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ES
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-yellow-400 transition-colors"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gray-900 border-t border-gray-800 overflow-hidden"
            >
              <nav className="px-6 py-4 space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-lg
                        text-base font-medium transition-all
                        ${isActive 
                          ? "bg-yellow-400 text-gray-900" 
                          : "text-gray-300 hover:bg-gray-800 hover:text-white"
                        }
                      `}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </motion.a>
                  );
                })}

                {/* Language Switcher Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="flex items-center gap-3 px-4 py-3 border-t border-gray-800 mt-2 pt-4"
                >
                  <Globe className="w-5 h-5 text-gray-400" />
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        onChangeLang("en");
                        setMobileMenuOpen(false);
                      }}
                      className={`
                        px-4 py-2 rounded-md text-sm font-medium transition-all
                        ${lang === "en" 
                          ? "bg-yellow-400 text-gray-900" 
                          : "text-gray-400 hover:text-gray-200 border border-gray-700"
                        }
                      `}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => {
                        onChangeLang("es");
                        setMobileMenuOpen(false);
                      }}
                      className={`
                        px-4 py-2 rounded-md text-sm font-medium transition-all
                        ${lang === "es" 
                          ? "bg-yellow-400 text-gray-900" 
                          : "text-gray-400 hover:text-gray-200 border border-gray-700"
                        }
                      `}
                    >
                      ES
                    </button>
                  </div>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer para evitar que el contenido quede debajo del navbar */}
      <div className="h-16" />
    </>
  );
};
