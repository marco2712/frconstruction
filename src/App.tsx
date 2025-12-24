// Components
import { NavBar, Footer } from './components/layout';
import { Hero } from './features/hero';
import { About } from './features/about';
import { Services } from './features/services';
import { Testimonials } from './features/testimonials';
import { Contact } from './features/contact';

// Hooks & Utils
import { useLanguage } from './hooks/useLanguage';
import { useActiveSection } from './hooks/useActiveSection';
import { scrollToSection } from './utils';

// Types
import type { SectionId } from './types';

// Styles
import './styles/index.css';

function App() {
  // Custom hooks for cleaner code
  const { lang, setLang, t } = useLanguage();
  const sectionIds: SectionId[] = ['home', 'services', 'testimonials', 'about', 'contact'];
  const { activeSection, setActiveSection } = useActiveSection(sectionIds);

  const handleNavigate = (id: string) => {
    scrollToSection(id);
    if (id === 'home' || id === 'services' || id === 'testimonials' || id === 'about' || id === 'contact') {
      setActiveSection(id as SectionId);
    }
  };

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