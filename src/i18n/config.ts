import type { Language } from '../types';

/**
 * Get the browser's preferred language
 * Defaults to 'en' if not Spanish
 */
export const getBrowserLanguage = (): Language => {
  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'es' ? 'es' : 'en';
};

/**
 * Get the saved language from localStorage
 * Falls back to browser language if not found
 */
export const getSavedLanguage = (): Language => {
  const saved = localStorage.getItem('lang');
  if (saved === 'es' || saved === 'en') {
    return saved;
  }
  return getBrowserLanguage();
};

/**
 * Save the language preference to localStorage
 */
export const saveLanguage = (lang: Language): void => {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
};
