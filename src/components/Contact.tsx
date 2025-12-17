import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactTranslations {
  title: string;
  subtitle: string;
  cta: string;
  email: string;
}

interface ContactProps {
  t: {
    contact: ContactTranslations;
  };
}

export const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-[5vw] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.title}</h2>
        <p className="text-xl text-gray-300 mb-12">{t.contact.subtitle}</p>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-[1.2vw] md:space-y-0 md:space-x-[1.5vw] mb-[3vw]">
          <a href="tel:+1234567890" className="group px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold text-lg hover:bg-yellow-500 transition transform hover:scale-105 inline-flex items-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>{t.contact.cta}</span>
          </a>
          <a href="mailto:info@frconstruction.com" className="group px-8 py-4 bg-white text-gray-900 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 inline-flex items-center space-x-2">
            <Mail className="w-5 h-5" />
            <span>{t.contact.email}</span>
          </a>
        </div>

        <div className="max-w-2xl mx-auto space-y-4 text-gray-300">
          <div className="flex items-center justify-center space-x-3">
            <Phone className="w-6 h-6 text-yellow-400" />
            <span className="text-lg">+1 (234) 567-8900</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Mail className="w-6 h-6 text-yellow-400" />
            <span className="text-lg">info@frconstruction.com</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <MapPin className="w-6 h-6 text-yellow-400" />
            <span className="text-lg">Cali, Valle del Cauca, Colombia</span>
          </div>
        </div>
      </div>
    </section>
  );
};