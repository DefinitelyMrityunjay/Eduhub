import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const curtainEase = [0.76, 0, 0.24, 1] as [number, number, number, number];

export const Hero: React.FC = () => {
  const { setCursorType } = useCursor();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* ── Curtain overlay – slides up and away on load ── */}
      <motion.div
        className="absolute inset-0 z-50 bg-brand-text origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.1, delay: 0.1, ease: curtainEase }}
        style={{ transformOrigin: 'top' }}
      />

      {/* ── Background image with parallax + load reveal ── */}
      <motion.div
        className="absolute inset-0"
        style={{ scale }}
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1.08 }}
        transition={{ duration: 1.6, delay: 0.8, ease }}
      >
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop"
          alt="International university campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        style={{ opacity: scrollOpacity }}
        className="relative z-10 text-center px-8 md:px-16 max-w-5xl mx-auto pt-28 md:pt-32"
      >
        {/* Eyebrow */}
        <motion.p
          className="text-[10px] tracking-[0.3em] uppercase font-semibold text-white/50 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease }}
        >
          TCA Edu Hub — Free Expert Consultation
        </motion.p>

        {/* Heading lines – staggered curtain rise */}
        {["Let's Plan", 'Your Global', 'Future.'].map((line, i) => (
          <div key={line} className="overflow-hidden">
            <motion.h1
              className={`font-heading font-medium text-[clamp(48px,8vw,110px)] leading-[0.92] tracking-[-0.04em] uppercase text-white ${i < 2 ? 'mb-2' : 'mb-16'}`}
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.9, delay: 1.1 + i * 0.13, ease }}
            >
              {line}
            </motion.h1>
          </div>
        ))}

        {/* Subtext */}
        <motion.p
          className="text-base md:text-lg text-white/60 max-w-xl mx-auto font-sans leading-relaxed mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease }}
        >
          Book a free 1-on-1 session with our expert counsellors. No obligation, no pressure — just clarity on your path to global education.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.65, ease }}
        >
          <a
            href="#book"
            className="flex items-center gap-3 px-8 py-4 bg-white text-brand-text text-xs font-semibold tracking-widest uppercase group transition-all duration-300 hover:bg-brand-bg cursor-none"
            onMouseEnter={() => setCursorType('view')}
            onMouseLeave={() => setCursorType('default')}
          >
            Book Your Free Consultation
            <span className="transform transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </a>
          <a
            href="tel:+911234567890"
            className="flex items-center gap-3 px-8 py-4 border border-white/30 text-white text-xs font-semibold tracking-widest uppercase hover:border-white transition-all duration-300 cursor-none"
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
