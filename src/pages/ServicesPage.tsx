import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CursorProvider } from '../context/CursorContext';
import { ModalProvider } from '../context/ModalContext';
import { ConsultationModal } from '../components/ConsultationModal';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useCursor } from '../context/CursorContext';
import { useModal } from '../context/ModalContext';
import { servicesData } from '../data/servicesData';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const curtainEase = [0.76, 0, 0.24, 1] as [number, number, number, number];

const ServiceCard: React.FC<{
  slug: string;
  title: string;
  tagline: string;
  whyChooseUs: string[];
  index: number;
}> = ({ slug, title, tagline, whyChooseUs, index }) => {
  const { setCursorType } = useCursor();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.06, ease }}
    >
      <Link
        to={`/services/${slug}`}
        className="group flex flex-col gap-6 p-8 md:p-10 border border-brand-text/10 bg-brand-bg hover:border-brand-text/25 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] transition-all duration-400 h-full cursor-pointer"
        onMouseEnter={() => setCursorType('view')}
        onMouseLeave={() => setCursorType('default')}
      >
        <div>
          <h3 className="font-heading text-2xl md:text-3xl font-medium text-brand-text tracking-tight leading-tight group-hover:text-brand-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-2 text-sm text-brand-muted font-sans leading-relaxed">
            {tagline}
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
          {whyChooseUs.slice(0, 6).map((point) => (
            <li key={point} className="flex items-start gap-2 text-xs text-brand-text/70 font-sans">
              <span className="w-1 h-1 rounded-full bg-brand-text/30 shrink-0 mt-1.5" />
              {point}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-semibold text-brand-text/40 group-hover:text-brand-accent transition-colors duration-300 pt-2 border-t border-brand-text/8">
          <span>View Service</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </Link>
    </motion.div>
  );
};

const PageContent: React.FC = () => {
  const { setCursorType } = useCursor();
  const { openModal } = useModal();

  return (
    <>
      {/* Curtain */}
      <motion.div
        className="fixed inset-0 z-[100] bg-brand-text origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.0, delay: 0.05, ease: curtainEase }}
      />

      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-8 md:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-text/[0.025] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease }}
            className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-6"
          >
            TCA Edu Hub — Comprehensive Support
          </motion.p>
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.9, delay: 1.0, ease }}
              className="font-heading text-[clamp(52px,9vw,130px)] font-medium tracking-[-0.04em] leading-[0.88] uppercase text-brand-text"
            >
              Our Services
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease }}
            className="text-base md:text-lg text-brand-muted font-sans leading-relaxed max-w-2xl mt-6 mb-10"
          >
            From career counselling and university selection to visa assistance and onshore support — we guide students and families through every step of the international education journey.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.35, ease }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => openModal()}
              className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-brand-accent text-brand-bg hover:bg-brand-hover transition-all duration-300 text-xs font-semibold tracking-widest uppercase group cursor-pointer"
              onMouseEnter={() => setCursorType('view')}
              onMouseLeave={() => setCursorType('default')}
            >
              Book Free Consultation
              <span className="w-5 h-5 rounded-full bg-brand-bg text-brand-text flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-3 h-3" />
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {servicesData.map((service, i) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                tagline={service.tagline}
                whyChooseUs={service.whyChooseUs}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 px-8 md:px-16 border-t border-brand-text/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="font-heading text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text mb-4"
            >
              Ready to Begin Your Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="text-sm text-brand-muted font-sans leading-relaxed"
            >
              Our expert counsellors are committed to helping you discover your potential, explore opportunities, and build a future aligned with your ambitions.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            onClick={() => openModal()}
            className="shrink-0 flex items-center gap-3 px-7 py-4 rounded-full bg-brand-accent text-brand-bg hover:bg-brand-hover transition-all duration-300 text-xs font-semibold tracking-widest uppercase group cursor-pointer"
            onMouseEnter={() => setCursorType('view')}
            onMouseLeave={() => setCursorType('default')}
          >
            Book Consultation
            <span className="w-5 h-5 rounded-full bg-brand-bg text-brand-text flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-3 h-3" />
            </span>
          </motion.button>
        </div>
      </section>
    </>
  );
};

const ServicesPage: React.FC = () => {
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
            <PageContent />
          </main>
          <Footer />
        </div>
      </ModalProvider>
    </CursorProvider>
  );
};

export default ServicesPage;
