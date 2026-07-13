import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import { useModal } from '../context/ModalContext';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const ConsultationCTA: React.FC = () => {
  const { setCursorType } = useCursor();
  const { openModal } = useModal();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Slow parallax zoom on background
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  return (
    <section
      id="consultation"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-text"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0"
        style={{ scale }}
      >
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop"
          alt="International university campus"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-8 md:px-16 max-w-5xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="font-heading font-medium text-[clamp(48px,8vw,110px)] leading-[0.92] tracking-[-0.04em] uppercase text-white mb-6"
        >
          Let's Plan
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.35, ease }}
          className="font-heading font-medium text-[clamp(48px,8vw,110px)] leading-[0.92] tracking-[-0.04em] uppercase text-white mb-6"
        >
          Your Global
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="font-heading font-medium text-[clamp(48px,8vw,110px)] leading-[0.92] tracking-[-0.04em] uppercase text-white mb-16"
        >
          Future.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="text-base md:text-lg text-white/60 max-w-xl mx-auto font-sans leading-relaxed mb-14"
        >
          Book a free 1-on-1 session with our expert counsellors. No obligation, no pressure — just clarity on your path to global education.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={(e) => { e.preventDefault(); openModal(); }}
            className="px-8 py-4 bg-white text-brand-text text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-brand-bg cursor-pointer"
            onMouseEnter={() => setCursorType('view')}
            onMouseLeave={() => setCursorType('default')}
          >
            Book a Free Consultation
          </button>
          <a
            href="tel:+911234567890"
            className="flex items-center gap-3 px-8 py-4 border border-white/30 text-white text-xs font-semibold tracking-widest uppercase hover:border-white transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setCursorType('view')}
            onMouseLeave={() => setCursorType('default')}
          >
            Call Us: +91 12345 67890
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
