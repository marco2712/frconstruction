import React from 'react';

interface FooterTranslations {
  companyName: string;
  footer: {
    rights: string;
    slogan: string;
  };
}

interface FooterProps {
  t: FooterTranslations;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">&copy; 2024 {t.companyName}. {t.footer.rights}.</p>
        <p className="text-sm italic">{t.footer.slogan}</p>
      </div>
    </footer>
  );
};