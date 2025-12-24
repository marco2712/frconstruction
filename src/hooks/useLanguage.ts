import { useState, useEffect } from 'react';
import type { Language } from '../types';
import { getSavedLanguage, saveLanguage } from '../i18n/config';
import { translations } from '../i18n/locales/translations';

/**
 * Custom hook for managing language state and translations
 */
export const useLanguage = () => {
  const [lang, setLang] = useState<Language>(getSavedLanguage);

  useEffect(() => {
    saveLanguage(lang);
  }, [lang]);

  const t = translations[lang];

  return { lang, setLang, t };
};
