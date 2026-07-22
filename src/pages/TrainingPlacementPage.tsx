import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CursorProvider } from '../context/CursorContext';
import { ModalProvider } from '../context/ModalContext';
import { ConsultationModal } from '../components/ConsultationModal';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useCursor } from '../context/CursorContext';
import { useModal } from '../context/ModalContext';
import { trainingPlacementData as data } from '../data/trainingPlacementData';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const curtainEase = [0.76, 0, 0.24, 1] as [number, number, number, number];

// ── Hero ─────────────────────────────────────────────────────────────────────
const Hero: React.FC = () => {
  const { setCursorType } = useCursor();
  const { openModal } = useModal();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section ref={sectionRef} className="relative min-h-[70vh] md:min-h-[80vh] flex items-end justify-start overflow-hidden bg-brand-text pt-28">
      {/* Curtain */}
      <motion.div
        className="absolute inset-0 z-50 bg-brand-text origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.0, delay: 0.05, ease: curtainEase }}
      />

      {/* Background texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-brand-text" />
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, #ffffff 0%, transparent 60%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 50%)',
          }}
        />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 w-full px-8 md:px-16 pb-16 md:pb-28 max-w-7xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease }}
          className="text-[10px] tracking-[0.3em] uppercase font-semibold text-white/40 mb-5"
        >
          TCA Edu Hub — Career Programs
        </motion.p>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, delay: 0.95, ease }}
            className="font-heading text-[clamp(40px,7.5vw,110px)] font-medium tracking-[-0.04em] leading-[0.88] uppercase text-white"
          >
            {data.title}
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15, ease }}
          className="text-base md:text-lg text-white/55 max-w-2xl font-sans leading-relaxed mt-5 mb-10"
        >
          {data.tagline}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3, ease }}
          onClick={() => openModal()}
          className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-brand-text hover:bg-white/90 transition-all duration-300 text-xs font-semibold tracking-widest uppercase group cursor-pointer"
          onMouseEnter={() => setCursorType('view')}
          onMouseLeave={() => setCursorType('default')}
        >
          Book Free Consultation
          <span className="w-5 h-5 rounded-full bg-brand-text text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight className="w-3 h-3" />
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
};

// ── Intro + Why It Matters ────────────────────────────────────────────────────
const Intro: React.FC = () => (
  <section className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease }}
        className="flex flex-col gap-5"
      >
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-1">Overview</p>
        {data.intro.map((para) => (
          <p key={para} className="text-base md:text-lg font-sans text-brand-text leading-relaxed">
            {para}
          </p>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
        className="flex flex-col gap-5"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-1">
          {data.whyMatters.heading}
        </p>
        <p className="text-sm text-brand-muted font-sans leading-relaxed">
          {data.whyMatters.description}
        </p>
        <ul className="flex flex-col gap-2.5 mt-2">
          {data.whyMatters.points.map((pt) => (
            <li key={pt} className="flex items-start gap-3 text-sm text-brand-text font-sans">
              <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
              {pt}
            </li>
          ))}
        </ul>
        <p className="text-sm text-brand-muted font-sans leading-relaxed italic mt-1">{data.whyMatters.closing}</p>
      </motion.div>
    </div>
  </section>
);

// ── Training Domains ──────────────────────────────────────────────────────────
const TrainingDomains: React.FC = () => (
  <section id="training-domains" className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="mb-14 max-w-2xl"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">What We Provide</p>
        <h2 className="font-heading text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text mb-5">
          Industry-Oriented Technical Training
        </h2>
        <p className="text-sm text-brand-muted font-sans leading-relaxed">{data.domainsIntro}</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.domains.map((domain, i) => (
          <motion.div
            key={domain.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: i * 0.06, ease }}
            className="flex flex-col gap-3 p-7 border border-brand-text/10 rounded-2xl bg-brand-bg hover:border-brand-text/20 transition-colors duration-300"
          >
            <h3 className="font-heading text-base font-medium text-brand-text tracking-tight">{domain.title}</h3>
            <p className="text-[13px] text-brand-muted font-sans leading-relaxed">{domain.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Real Projects ─────────────────────────────────────────────────────────────
const RealProjects: React.FC = () => (
  <section className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">Hands-On Experience</p>
        <h2 className="font-heading text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text mb-6">
          {data.projects.heading}
        </h2>
        <p className="text-sm text-brand-muted font-sans leading-relaxed">{data.projects.intro}</p>
        <p className="text-sm text-brand-muted font-sans leading-relaxed mt-5 italic">{data.projects.closing}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
        className="flex flex-col gap-8"
      >
        <div>
          <p className="text-[11px] uppercase tracking-widest font-semibold text-brand-text/60 mb-3">Students work on</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {data.projects.types.map((type) => (
              <li key={type} className="flex items-start gap-2.5 text-sm text-brand-text font-sans">
                <span className="text-brand-text/40 mt-0.5 shrink-0 text-xs">—</span>
                {type}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-widest font-semibold text-brand-text/60 mb-3">{data.projects.outcomesHeading}</p>
          <ul className="flex flex-col gap-2">
            {data.projects.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3 text-sm text-brand-text font-sans">
                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  </section>
);

// ── Placement Preparation ─────────────────────────────────────────────────────
const PlacementPrep: React.FC = () => (
  <section id="placement-prep" className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="mb-14 max-w-2xl"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">Get Recruitment Ready</p>
        <h2 className="font-heading text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text mb-5">
          Placement Preparation Program
        </h2>
        <p className="text-sm text-brand-muted font-sans leading-relaxed">{data.placementPrepIntro}</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.placementPrep.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: i * 0.06, ease }}
            className="flex flex-col gap-3 p-7 bg-brand-text rounded-2xl text-brand-bg"
          >
            <h3 className="font-heading text-base font-medium text-white/90 tracking-tight">{item.title}</h3>
            <p className="text-[13px] text-white/55 font-sans leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Placement Assistance ──────────────────────────────────────────────────────
const PlacementAssistance: React.FC = () => (
  <section className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-4">Beyond Training</p>
        <h2 className="font-heading text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text mb-5">
          {data.placementAssistance.heading}
        </h2>
        <p className="text-sm text-brand-muted font-sans leading-relaxed max-w-sm">{data.placementAssistance.intro}</p>
        <p className="mt-5 text-sm text-brand-muted font-sans leading-relaxed max-w-sm italic">{data.placementAssistance.closing}</p>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3"
      >
        {data.placementAssistance.points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-sm text-brand-text font-sans">
            <span className="text-brand-accent font-bold shrink-0">✓</span>
            {point}
          </li>
        ))}
      </motion.ul>
    </div>
  </section>
);

// ── Benefits ───────────────────────────────────────────────────────────────────
const Benefits: React.FC = () => (
  <section className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="mb-14"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">Why Train With Us</p>
        <h2 className="font-heading text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text">
          {data.benefitsHeading}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.benefits.map((benefit, i) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: i * 0.07, ease }}
            className="flex flex-col gap-3 p-7 border border-brand-text/10 rounded-2xl bg-brand-bg hover:border-brand-text/20 transition-colors duration-300"
          >
            <h3 className="font-heading text-base font-medium text-brand-text tracking-tight">{benefit.title}</h3>
            <p className="text-[13px] text-brand-muted font-sans leading-relaxed">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Journey ────────────────────────────────────────────────────────────────────
const Journey: React.FC = () => (
  <section id="journey" className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="mb-14"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">How It Works</p>
        <h2 className="font-heading text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text">
          {data.journeyHeading}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.journey.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: i * 0.07, ease }}
            className="flex flex-col gap-4 p-7 bg-brand-text rounded-2xl text-brand-bg"
          >
            <span className="font-heading text-5xl font-medium tracking-[-0.04em] opacity-20 leading-none">{step.step}</span>
            <div>
              <h3 className="font-heading text-lg font-medium text-white/90 tracking-tight mb-2">{step.title}</h3>
              <p className="text-sm text-white/55 font-sans leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Closing CTA ────────────────────────────────────────────────────────────────
const ClosingCTA: React.FC = () => {
  const { setCursorType } = useCursor();
  const { openModal } = useModal();

  return (
    <section className="py-20 md:py-28 px-8 md:px-16 bg-brand-text">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="font-heading text-[clamp(28px,3.5vw,48px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-white mb-5"
          >
            {data.closing.heading}
          </motion.h2>
          {data.closing.paragraphs.map((para, i) => (
            <motion.p
              key={para}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.05, ease }}
              className="text-sm text-white/55 font-sans leading-relaxed mt-3"
            >
              {para}
            </motion.p>
          ))}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="text-sm text-white font-sans font-semibold leading-relaxed mt-5"
          >
            {data.closing.cta}
          </motion.p>
        </div>
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          onClick={() => openModal()}
          className="shrink-0 flex items-center gap-3 px-7 py-4 rounded-full bg-brand-bg text-brand-text hover:bg-white/90 transition-all duration-300 text-xs font-semibold tracking-widest uppercase group cursor-pointer"
          onMouseEnter={() => setCursorType('view')}
          onMouseLeave={() => setCursorType('default')}
        >
          Book Free Consultation
          <span className="w-5 h-5 rounded-full bg-brand-text text-brand-bg flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight className="w-3 h-3" />
          </span>
        </motion.button>
      </div>
    </section>
  );
};

// ── Page Shell ────────────────────────────────────────────────────────────────
const TrainingPlacementPage: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });
    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => { lenis.destroy(); };
  }, []);

  return (
    <CursorProvider>
      <ModalProvider>
        <div className="relative min-h-screen bg-brand-bg text-brand-text overflow-hidden">

          <ConsultationModal />
          <Navbar />
          <main>
            <Hero />
            <Intro />
            <TrainingDomains />
            <RealProjects />
            <PlacementPrep />
            <PlacementAssistance />
            <Benefits />
            <Journey />
            <ClosingCTA />
          </main>
          <Footer />
        </div>
      </ModalProvider>
    </CursorProvider>
  );
};

export default TrainingPlacementPage;
