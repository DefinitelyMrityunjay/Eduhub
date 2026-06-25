import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CursorProvider } from '../context/CursorContext';
import { ModalProvider } from '../context/ModalContext';
import { CustomCursor } from '../components/CustomCursor';
import { ConsultationModal } from '../components/ConsultationModal';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useCursor } from '../context/CursorContext';
import { useModal } from '../context/ModalContext';
import { medicalData } from '../data/medicalData';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const curtainEase = [0.76, 0, 0.24, 1] as [number, number, number, number];

const abroadPrograms = medicalData.filter((p) => p.category === 'abroad');
const indiaPrograms = medicalData.filter((p) => p.category === 'india');

// ── Hero ──────────────────────────────────────────────────────────────────────
const Hero: React.FC = () => {
  const { setCursorType } = useCursor();
  const { openModal } = useModal();

  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end justify-start overflow-hidden bg-brand-text pt-28">
      <motion.div
        className="absolute inset-0 z-50 bg-brand-text origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.0, delay: 0.05, ease: curtainEase }}
      />

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-brand-text" />
        <div
          className="absolute top-0 left-0 w-full h-full opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #ffffff 0%, transparent 60%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 50%)' }}
        />
      </div>

      <div className="relative z-10 w-full px-8 md:px-16 pb-16 md:pb-24 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease }}
          className="text-[10px] tracking-[0.3em] uppercase font-semibold text-white/40 mb-5"
        >
          TCA Edu Hub — Medical Education
        </motion.p>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, delay: 1.05, ease }}
            className="font-heading text-[clamp(48px,8vw,120px)] font-medium tracking-[-0.04em] leading-[0.88] uppercase text-white"
          >
            Medical
            <br />
            Programs
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease }}
          className="text-base md:text-lg text-white/55 max-w-2xl font-sans leading-relaxed mt-5 mb-10"
        >
          Expert guidance for MBBS, BDS, BAMS, BHMS and NEET counselling — both in India and top destinations abroad.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.35, ease }}
          onClick={() => openModal()}
          className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-brand-text hover:bg-white/90 transition-all duration-300 text-xs font-semibold tracking-widest uppercase group cursor-none"
          onMouseEnter={() => setCursorType('view')}
          onMouseLeave={() => setCursorType('default')}
        >
          Book Free Consultation
          <span className="w-5 h-5 rounded-full bg-brand-text text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight className="w-3 h-3" />
          </span>
        </motion.button>
      </div>
    </section>
  );
};

// ── Program Card ──────────────────────────────────────────────────────────────
const ProgramCard: React.FC<{ program: (typeof medicalData)[0]; index: number }> = ({ program, index }) => {
  const { setCursorType } = useCursor();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.07, ease }}
    >
      <Link
        to={`/medical/${program.slug}`}
        className="group flex flex-col h-full gap-5 p-7 border border-brand-text/10 rounded-2xl bg-brand-bg hover:border-brand-text/25 hover:shadow-sm transition-all duration-300 cursor-none"
        onMouseEnter={() => setCursorType('view')}
        onMouseLeave={() => setCursorType('default')}
      >
        <span className="text-4xl leading-none">{program.icon}</span>

        <div className="flex-1">
          <h3 className="font-heading text-xl font-medium text-brand-text tracking-tight mb-2 group-hover:text-brand-accent transition-colors duration-300">
            {program.title}
          </h3>
          <p className="text-sm text-brand-muted font-sans leading-relaxed">{program.tagline}</p>
        </div>

        {program.duration && (
          <div className="pt-4 border-t border-brand-text/8">
            <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-muted">
              Duration: {program.duration.split('(')[0].trim()}
            </span>
          </div>
        )}

        {program.country && (
          <div className="pt-4 border-t border-brand-text/8">
            <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-muted">
              {program.country}
            </span>
          </div>
        )}

        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-semibold text-brand-text/40 group-hover:text-brand-accent transition-colors duration-300">
          <span>Explore Program</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </Link>
    </motion.div>
  );
};

// ── Programs Section ──────────────────────────────────────────────────────────
const Programs: React.FC = () => (
  <section className="py-20 md:py-28 px-8 md:px-16">
    <div className="max-w-7xl mx-auto flex flex-col gap-24">

      {/* Abroad Programs */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-12 flex flex-col md:flex-row md:items-end gap-4 justify-between"
        >
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">International</p>
            <h2 className="font-heading text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text">
              MBBS Abroad
            </h2>
          </div>
          <p className="text-sm text-brand-muted font-sans leading-relaxed max-w-sm">
            Study medicine at globally recognized universities across 6 countries with NMC-approved programs, affordable fees, and full clinical training.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {abroadPrograms.map((program, i) => (
            <ProgramCard key={program.slug} program={program} index={i} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-brand-text/8" />

      {/* India Programs */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-12 flex flex-col md:flex-row md:items-end gap-4 justify-between"
        >
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">India</p>
            <h2 className="font-heading text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text">
              Medical Courses
            </h2>
          </div>
          <p className="text-sm text-brand-muted font-sans leading-relaxed max-w-sm">
            Expert counselling for MBBS, BDS, BAMS, BHMS and complete NEET UG admission support — government and private colleges across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {indiaPrograms.map((program, i) => (
            <ProgramCard key={program.slug} program={program} index={i} />
          ))}
        </div>
      </div>

    </div>
  </section>
);

// ── Stats Strip ───────────────────────────────────────────────────────────────
const StatsStrip: React.FC = () => {
  const stats = [
    { value: '11', label: 'Programs Covered' },
    { value: '6', label: 'Countries Abroad' },
    { value: '5', label: 'India Courses' },
    { value: '100%', label: 'NEET Compliant' },
  ];

  return (
    <section className="py-16 px-8 md:px-16 bg-brand-text">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="flex flex-col gap-2"
            >
              <span className="font-heading text-[clamp(40px,5vw,72px)] font-medium tracking-[-0.04em] leading-none text-white">
                {stat.value}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-white/40">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── CTA Banner ────────────────────────────────────────────────────────────────
const CTABanner: React.FC = () => {
  const { setCursorType } = useCursor();
  const { openModal } = useModal();

  return (
    <section className="py-20 md:py-28 px-8 md:px-16 border-t border-brand-text/8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="font-heading text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text mb-4"
          >
            Not Sure Where to Start?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-sm text-brand-muted font-sans leading-relaxed"
          >
            Our expert counsellors will guide you through every step — from choosing the right program and country to securing admission and visa.
          </motion.p>
        </div>
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          onClick={() => openModal()}
          className="shrink-0 flex items-center gap-3 px-7 py-4 rounded-full bg-brand-text text-brand-bg hover:bg-brand-hover transition-all duration-300 text-xs font-semibold tracking-widest uppercase group cursor-none"
          onMouseEnter={() => setCursorType('view')}
          onMouseLeave={() => setCursorType('default')}
        >
          Book Free Consultation
          <span className="w-5 h-5 rounded-full bg-brand-bg text-brand-text flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight className="w-3 h-3" />
          </span>
        </motion.button>
      </div>
    </section>
  );
};

// ── Page Shell ────────────────────────────────────────────────────────────────
const MedicalPage: React.FC = () => {
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
          <CustomCursor />
          <ConsultationModal />
          <Navbar />
          <main>
            <Hero />
            <StatsStrip />
            <Programs />
            <CTABanner />
          </main>
          <Footer />
        </div>
      </ModalProvider>
    </CursorProvider>
  );
};

export default MedicalPage;
