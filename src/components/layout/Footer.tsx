import React from 'react';
import type { Translations } from '../../types';

interface FooterProps {
  t: Translations;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">
          &copy; {currentYear} {t.companyName}. {t.footer.rights}.
        </p>
        <p className="text-sm italic text-gray-500">{t.footer.slogan}</p>
      </div>
    </footer>
  );
};
