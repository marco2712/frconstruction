import { useState } from "react";
import { Home, Hammer, Wrench, Paintbrush, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceItem {
  title: string;
  items: string[];
}

interface ServicesTranslations {
  services: {
    residential: ServiceItem;
    construction: ServiceItem;
    handyman: ServiceItem;
    interior: ServiceItem;
  };
}

interface ServicesProps {
  t: ServicesTranslations;
}

export const Services: React.FC<ServicesProps> = ({ t }) => {
  const [active, setActive] = useState<number | null>(0);

  const services = [
    { data: t.services.residential, icon: Home, accent: "bg-blue-600" },
    { data: t.services.construction, icon: Hammer, accent: "bg-yellow-500" },
    { data: t.services.handyman, icon: Wrench, accent: "bg-gray-800" },
    { data: t.services.interior, icon: Paintbrush, accent: "bg-blue-700" },
  ];

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section id="services" className="py-28 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-5xl font-bold mb-6">
          What do you need help with?
        </h2>
        <p className="text-gray-400 mb-16 max-w-xl">
          Select a service to see details and get a quote.
          <span className="text-yellow-400"> One call. We handle it all.</span>
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isActive = active === i;

            return (
              <motion.div
                key={i}
                onClick={() => setActive(i)}
                layout
                whileHover={!isActive ? { scale: 1.0 } : undefined}
                className={`relative overflow-hidden cursor-pointer rounded-3xl p-6 border transition-all
                  ${
                    isActive
                      ? "border-yellow-400 scale-105"
                      : "border-white/10 opacity-80"
                  }
                `}
              >
                {/* OVERLAY CLICK / TAP */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="absolute inset-0 z-10 flex flex-col items-center justify-center
                                 bg-black/70 backdrop-blur-sm"
                    >
                      <Icon className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-yellow-400 mb-2 sm:mb-3" />
                      <span className="uppercase tracking-widest text-sm text-yellow-400">
                        {isMobile ? "Tap" : "Click"}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* CARD HEADER */}
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${service.accent}`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {service.data.title}
                  </h3>
                </div>

                {/* EXPANDED CONTENT */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="mt-6"
                    >
                      <ul className="space-y-3 text-gray-300">
                        {service.data.items.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>

                            <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(
                            `https://wa.me/1XXXXXXXXXX?text=Hello,%20I%20need%20${service.data.title}`,
                            "_blank"
                          );
                        }}
                              className="mt-6 w-full cta-btn text-black font-bold py-3 rounded-xl
                                         flex items-center justify-center gap-2 transition"
                      >
                        Get Quote <ArrowRight />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
