import { useState, useEffect } from 'react';
import type { SectionId } from '../types';

/**
 * Custom hook for tracking the active section based on scroll position
 */
export const useActiveSection = (sectionIds: SectionId[]) => {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  useEffect(() => {
    const onScroll = () => {
      const center = window.innerHeight / 2;
      let current: SectionId = 'home';
      
      for (const id of sectionIds) {
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
    onScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds]);

  return { activeSection, setActiveSection };
};
