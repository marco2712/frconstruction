import React from 'react';
import { CheckCircle, Wrench, Home, Phone } from 'lucide-react';
import type { Translations } from '../../types';

interface AboutProps {
  t: Translations;
}

export const About: React.FC<AboutProps> = ({ t }) => {
  const features = [
    {
      Icon: CheckCircle,
      title: t.whyChoose.quality.title,
      desc: t.whyChoose.quality.desc,
      gradient: 'from-yellow-50 to-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      Icon: Wrench,
      title: t.whyChoose.experience.title,
      desc: t.whyChoose.experience.desc,
      gradient: 'from-blue-50 to-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      Icon: Home,
      title: t.whyChoose.price.title,
      desc: t.whyChoose.price.desc,
      gradient: 'from-yellow-50 to-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      Icon: Phone,
      title: t.whyChoose.available.title,
      desc: t.whyChoose.available.desc,
      gradient: 'from-blue-50 to-blue-100',
      iconColor: 'text-blue-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-[5vw]">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          {t.about.title}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
            {t.about.description}
          </p>
          
          <div className="grid md:grid-cols-4 gap-[2vw]">
            {features.map((feature, index) => {
              const { Icon, title, desc, gradient, iconColor } = feature;
              return (
                <div
                  key={index}
                  className={`text-center p-6 bg-gradient-to-br ${gradient} rounded-xl hover:shadow-lg transition-shadow duration-300`}
                >
                  <Icon className={`w-12 h-12 ${iconColor} mx-auto mb-4`} />
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
