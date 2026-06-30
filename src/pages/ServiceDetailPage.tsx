import React, { useEffect, useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Lenis from 'lenis';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CursorProvider } from '../context/CursorContext';
import { ModalProvider } from '../context/ModalContext';
import { ConsultationModal } from '../components/ConsultationModal';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useCursor } from '../context/CursorContext';
import { useModal } from '../context/ModalContext';
import { getServiceBySlug, servicesData, type ServiceData } from '../data/servicesData';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const curtainEase = [0.76, 0, 0.24, 1] as [number, number, number, number];

// ── Hero ─────────────────────────────────────────────────────────────────────
const Hero: React.FC<{ service: ServiceData }> = ({ service }) => {
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

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 w-full px-8 md:px-16 pb-16 md:pb-28 max-w-7xl mx-auto"
      >
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease }}
          className="mb-8"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors text-[11px] tracking-widest uppercase font-semibold cursor-pointer"
            onMouseEnter={() => setCursorType('view')}
            onMouseLeave={() => setCursorType('default')}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All Services
          </Link>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05, ease }}
          className="text-[10px] tracking-[0.3em] uppercase font-semibold text-white/40 mb-5"
        >
          TCA Edu Hub — {service.icon}
        </motion.p>

        {/* Title */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, delay: 1.1, ease }}
            className="font-heading text-[clamp(48px,8vw,120px)] font-medium tracking-[-0.04em] leading-[0.88] uppercase text-white"
          >
            {service.title}
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease }}
          className="text-base md:text-lg text-white/55 max-w-2xl font-sans leading-relaxed mt-5 mb-10"
        >
          {service.tagline}
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.45, ease }}
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

// ── Intro ─────────────────────────────────────────────────────────────────────
const Intro: React.FC<{ service: ServiceData }> = ({ service }) => (
  <section className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease }}
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-5">Overview</p>
        <p className="text-base md:text-lg font-sans text-brand-text leading-relaxed">
          {service.intro}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
        className="flex flex-col gap-5"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-1">
          {service.whyMatters.heading}
        </p>
        <p className="text-sm text-brand-muted font-sans leading-relaxed">
          {service.whyMatters.description}
        </p>
        <ul className="flex flex-col gap-2.5 mt-2">
          {service.whyMatters.points.map((pt) => (
            <li key={pt} className="flex items-start gap-3 text-sm text-brand-text font-sans">
              <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
              {pt}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

// ── Benefits Grid ─────────────────────────────────────────────────────────────
const Benefits: React.FC<{ service: ServiceData }> = ({ service }) => (
  <section className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="mb-14"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">What We Provide</p>
        <h2 className="font-heading text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text">
          Our {service.title} Services
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {service.benefits.map((benefit, i) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: i * 0.07, ease }}
            className="flex flex-col gap-4 p-7 border border-brand-text/10 rounded-2xl bg-brand-bg hover:border-brand-text/20 transition-colors duration-300"
          >
            <h3 className="font-heading text-base font-medium text-brand-text tracking-tight">{benefit.title}</h3>
            <ul className="flex flex-col gap-2">
              {benefit.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5 text-[13px] text-brand-muted font-sans leading-snug">
                  <span className="text-brand-text/40 mt-0.5 shrink-0 text-xs">—</span>
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Process ───────────────────────────────────────────────────────────────────
const Process: React.FC<{ service: ServiceData }> = ({ service }) => (
  <section className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
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
          Our Process
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {service.process.map((step, i) => (
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

// ── Why Choose Us ─────────────────────────────────────────────────────────────
const WhyChooseUs: React.FC<{ service: ServiceData }> = ({ service }) => (
  <section className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-4">Why TCA</p>
        <h2 className="font-heading text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text">
          Why Choose Us?
        </h2>
        <p className="mt-6 text-sm text-brand-muted font-sans leading-relaxed max-w-sm">
          {service.cta}
        </p>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3"
      >
        {service.whyChooseUs.map((point) => (
          <li key={point} className="flex items-start gap-3 text-sm text-brand-text font-sans">
            <span className="text-brand-accent font-bold shrink-0">✓</span>
            {point}
          </li>
        ))}
      </motion.ul>
    </div>
  </section>
);

// ── Related Services ──────────────────────────────────────────────────────────
const RelatedServices: React.FC<{ currentSlug: string }> = ({ currentSlug }) => {
  const { setCursorType } = useCursor();
  const related = servicesData.filter((s) => s.slug !== currentSlug).slice(0, 3);

  return (
    <section className="py-20 md:py-28 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-10"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">Explore More</p>
          <h2 className="font-heading text-[clamp(28px,3.5vw,48px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text">
            Related Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {related.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
            >
              <Link
                to={`/services/${service.slug}`}
                className="group flex flex-col gap-4 p-6 border border-brand-text/10 rounded-xl hover:border-brand-text/25 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setCursorType('view')}
                onMouseLeave={() => setCursorType('default')}
              >
                <span className="text-3xl leading-none">{service.icon}</span>
                <h3 className="font-heading text-lg font-medium text-brand-text tracking-tight group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-brand-muted font-sans leading-relaxed line-clamp-2">{service.tagline}</p>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-semibold text-brand-text/40 group-hover:text-brand-accent transition-colors mt-1">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
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
    <section className="py-20 md:py-28 px-8 md:px-16 bg-brand-text">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="font-heading text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-white mb-4"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-sm text-white/55 font-sans leading-relaxed"
          >
            Book a free consultation with our expert team and take the first step toward your global education goals.
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
const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug ?? '');

  useEffect(() => {
    if (!service) return;
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
  }, [service]);

  if (!service) return <Navigate to="/services" replace />;

  return (
    <CursorProvider>
      <ModalProvider>
        <div className="relative min-h-screen bg-brand-bg text-brand-text overflow-hidden">

          <ConsultationModal />
          <Navbar />
          <main>
            <Hero service={service} />
            <Intro service={service} />
            <Benefits service={service} />
            <Process service={service} />
            <WhyChooseUs service={service} />
            <CTABanner />
            <RelatedServices currentSlug={service.slug} />
          </main>
          <Footer />
        </div>
      </ModalProvider>
    </CursorProvider>
  );
};

export default ServiceDetailPage;
