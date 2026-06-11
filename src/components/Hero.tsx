import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const Hero: React.FC = () => {
  const { setCursorType } = useCursor();

  const lineVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, delay: 0.2 + delay, ease },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.15 },
    visible: (delay: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 1.4, delay: 0.3 + delay, ease },
    }),
  };

  return (
    <section className="relative min-h-screen bg-brand-bg pt-40 pb-24 px-8 md:px-16 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">

        {/* Tiny Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-10"
        >
          TCA Edu Hub — Your Path to Success
        </motion.p>

        {/* Stacked Typography */}
        <div className="flex flex-col gap-4 md:gap-6 select-none">

          {/* Line 1: STUDY */}
          <motion.div custom={0} variants={lineVariants} initial="hidden" animate="visible">
            <h1 className="font-heading font-medium text-[clamp(64px,12vw,148px)] leading-[0.92] tracking-[-0.04em] uppercase text-brand-text">
              Study
            </h1>
          </motion.div>

          {/* Line 2: BEYOND + floating image */}
          <motion.div custom={0.15} variants={lineVariants} initial="hidden" animate="visible"
            className="flex flex-wrap items-center gap-4 md:gap-6 justify-end"
          >
            <h1 className="font-heading font-medium text-[clamp(64px,12vw,148px)] leading-[0.92] tracking-[-0.04em] uppercase text-brand-text">
              Beyond
            </h1>

            {/* Floating campus image */}
            <div
              className="relative overflow-hidden rounded-xl w-[180px] h-[100px] md:w-[260px] md:h-[148px] lg:w-[320px] lg:h-[182px] shrink-0"
              onMouseEnter={() => setCursorType('view')}
              onMouseLeave={() => setCursorType('default')}
            >
              <motion.img
                custom={0.15}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop"
                alt="International university campus"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <h1 className="font-heading font-medium text-[clamp(64px,12vw,148px)] leading-[0.92] tracking-[-0.04em] uppercase text-brand-text">
              Borders
            </h1>
          </motion.div>

          {/* Line 3: GLOBAL DREAMS + floating image */}
          <motion.div custom={0.3} variants={lineVariants} initial="hidden" animate="visible"
            className="flex flex-wrap items-center gap-4 md:gap-6"
          >
            {/* Second floating image */}
            <div
              className="relative overflow-hidden rounded-xl w-[150px] h-[90px] md:w-[220px] md:h-[130px] lg:w-[280px] lg:h-[165px] shrink-0"
              onMouseEnter={() => setCursorType('view')}
              onMouseLeave={() => setCursorType('default')}
            >
              <motion.img
                custom={0.3}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop"
                alt="Students graduating abroad"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <h1 className="font-heading font-medium text-[clamp(64px,12vw,148px)] leading-[0.92] tracking-[-0.04em] uppercase text-brand-text">
              Global
            </h1>
          </motion.div>

          {/* Line 4: DREAMS. */}
          <motion.div custom={0.45} variants={lineVariants} initial="hidden" animate="visible"
            className="flex justify-end"
          >
            <h1 className="font-heading font-medium text-[clamp(64px,12vw,148px)] leading-[0.92] tracking-[-0.04em] uppercase text-brand-text">
              Dreams.
            </h1>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease }}
          className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-brand-text/10 pt-10"
        >
          <p className="text-lg text-brand-muted max-w-lg font-sans leading-relaxed">
            Get personalized counselling, university admissions support, scholarships, and visa guidance from experts who help students study in the world's top destinations.
          </p>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#consultation"
              className="flex items-center gap-3 px-6 py-3.5 bg-brand-accent text-brand-bg text-xs font-semibold tracking-widest uppercase group transition-all duration-300 hover:bg-brand-hover cursor-none"
              onMouseEnter={() => setCursorType('view')}
              onMouseLeave={() => setCursorType('default')}
            >
              Book Free Consultation
              <span className="transform transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>
            <a
              href="#destinations"
              className="flex items-center gap-3 px-6 py-3.5 border border-brand-text/30 text-brand-text text-xs font-semibold tracking-widest uppercase group transition-all duration-300 hover:border-brand-text cursor-none"
              onMouseEnter={() => setCursorType('view')}
              onMouseLeave={() => setCursorType('default')}
            >
              Explore Destinations
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
