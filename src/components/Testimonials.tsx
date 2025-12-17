import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Testimonial = {
  quote: string;
  name: string;
};

export type TestimonialsTranslations = {
  testimonials: {
    title: string;
    items: Testimonial[];
  };
};

export const Testimonials: React.FC<{ t: TestimonialsTranslations }> = ({ t }) => {
  const { title, items } = t.testimonials;

  if (!items || items.length === 0) {
    return null;
  }

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const dirRef = useRef<1 | -1>(1);

  const count = items.length;
  const goTo = (i: number, dir: 1 | -1 = 1) => {
    dirRef.current = dir;
    setIndex((i % count + count) % count);
  };
  const next = () => goTo(index + 1, 1);
  const prev = () => goTo(index - 1, -1);

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(id);
  }, [index, paused, count]);

  const slideVariants = {
    enter: (direction: 1 | -1) => ({ x: direction * 60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: 1 | -1) => ({ x: -direction * 60, opacity: 0 }),
  } as const;

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10">{title}</h2>

        <div
          className="relative"
          role="region"
          aria-roledescription="carousel"
          aria-label={title}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div className="h-[220px] sm:h-[200px] md:h-[180px] lg:h-[180px] flex items-stretch">
              <AnimatePresence initial={false} custom={dirRef.current} mode="popLayout">
                <motion.figure
                  key={index}
                  custom={dirRef.current}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                  className="w-full p-6 rounded-2xl border border-gray-200 shadow-sm bg-white flex flex-col justify-between"
                >
                  <blockquote className="text-gray-700 italic leading-relaxed text-lg text-center">“{items[index].quote}”</blockquote>
                  <figcaption className="mt-6 text-sm font-semibold text-gray-900 text-center">— {items[index].name}</figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          {count > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={prev}
                className="absolute -left-3 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full bg-gray-900 text-white/90 hover:text-white shadow-md"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={next}
                className="absolute -right-3 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full bg-gray-900 text-white/90 hover:text-white shadow-md"
              >
                ›
              </button>

              <div className="mt-6 flex items-center justify-center gap-2" role="tablist" aria-label="Testimonials pagination">
                {items.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all ${i === index ? 'w-6 bg-gray-900' : 'w-2.5 bg-gray-300'}`}
                    onClick={() => goTo(i, i > index ? 1 : -1)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
