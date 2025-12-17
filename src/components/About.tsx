import React from 'react';
import { CheckCircle, Wrench, Home, Phone } from 'lucide-react';

export type AboutTranslations = {
  about: { title: string; description: string };
  whyChoose: {
    quality: { title: string; desc: string };
    experience: { title: string; desc: string };
    price: { title: string; desc: string };
    available: { title: string; desc: string };
  };
};

export const About: React.FC<{ t: AboutTranslations }> = ({ t }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-[5vw]">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">{t.about.title}</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
            {t.about.description}
          </p>
          
          <div className="grid md:grid-cols-4 gap-[2vw]">
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl hover:shadow-lg transition">
              <CheckCircle className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">{t.whyChoose.quality.title}</h3>
              <p className="text-sm text-gray-600">{t.whyChoose.quality.desc}</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition">
              <Wrench className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">{t.whyChoose.experience.title}</h3>
              <p className="text-sm text-gray-600">{t.whyChoose.experience.desc}</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl hover:shadow-lg transition">
              <Home className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">{t.whyChoose.price.title}</h3>
              <p className="text-sm text-gray-600">{t.whyChoose.price.desc}</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">{t.whyChoose.available.title}</h3>
              <p className="text-sm text-gray-600">{t.whyChoose.available.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};