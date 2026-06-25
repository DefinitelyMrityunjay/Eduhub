import React, { useEffect, useRef, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Lenis from 'lenis';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { CursorProvider } from '../context/CursorContext';
import { ModalProvider } from '../context/ModalContext';
import { CustomCursor } from '../components/CustomCursor';
import { ConsultationModal } from '../components/ConsultationModal';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useCursor } from '../context/CursorContext';
import { useModal } from '../context/ModalContext';
import { getMedicalBySlug, medicalData, type MedicalProgram } from '../data/medicalData';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const curtainEase = [0.76, 0, 0.24, 1] as [number, number, number, number];

// ── Hero ──────────────────────────────────────────────────────────────────────
const Hero: React.FC<{ program: MedicalProgram }> = ({ program }) => {
  const { setCursorType } = useCursor();
  const { openModal } = useModal();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section ref={sectionRef} className="relative min-h-[70vh] md:min-h-[80vh] flex items-end justify-start overflow-hidden bg-brand-text pt-28">
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

      <motion.div style={{ opacity, y }} className="relative z-10 w-full px-8 md:px-16 pb-16 md:pb-28 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease }}
          className="mb-8"
        >
          <Link
            to="/medical"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors text-[11px] tracking-widest uppercase font-semibold cursor-none"
            onMouseEnter={() => setCursorType('view')}
            onMouseLeave={() => setCursorType('default')}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Medical Programs
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05, ease }}
          className="text-[10px] tracking-[0.3em] uppercase font-semibold text-white/40 mb-5"
        >
          TCA Edu Hub — {program.icon} {program.category === 'abroad' ? 'Study Abroad' : 'India Programs'}
        </motion.p>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, delay: 1.1, ease }}
            className="font-heading text-[clamp(40px,7vw,110px)] font-medium tracking-[-0.04em] leading-[0.88] uppercase text-white"
          >
            {program.title}
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease }}
          className="text-base md:text-lg text-white/55 max-w-2xl font-sans leading-relaxed mt-5 mb-10"
        >
          {program.tagline}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.45, ease }}
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
      </motion.div>
    </section>
  );
};

// ── Overview ──────────────────────────────────────────────────────────────────
const Overview: React.FC<{ program: MedicalProgram }> = ({ program }) => (
  <section className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease }}
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-5">Overview</p>
        <h2 className="font-heading text-[clamp(28px,3.5vw,48px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text mb-6">
          {program.subtitle}
        </h2>
        <p className="text-base font-sans text-brand-muted leading-relaxed">{program.intro}</p>

        {program.duration && (
          <div className="mt-8 p-5 border border-brand-text/10 rounded-xl">
            <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-2">Duration</p>
            <p className="text-sm font-sans text-brand-text leading-relaxed">{program.duration}</p>
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
        className="flex flex-col gap-3"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-2">Key Facts</p>
        <div className="grid grid-cols-1 gap-2.5">
          {program.keyFacts.map((fact) => (
            <div key={fact} className="flex items-start gap-3 p-3.5 border border-brand-text/8 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
              <span className="text-sm text-brand-text font-sans leading-snug">{fact}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// ── Accreditations ────────────────────────────────────────────────────────────
const Accreditations: React.FC<{ program: MedicalProgram }> = ({ program }) => (
  <section className="py-16 md:py-20 px-8 md:px-16 border-b border-brand-text/8 bg-brand-text/[0.02]">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="mb-8"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">Recognized By</p>
        <h2 className="font-heading text-[clamp(24px,3vw,40px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text">
          Global Accreditations
        </h2>
      </motion.div>

      <div className="flex flex-wrap gap-3">
        {program.accreditations.map((acc, i) => (
          <motion.div
            key={acc}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06, ease }}
            className="flex items-center gap-2.5 px-5 py-3 border border-brand-text/15 rounded-full text-sm font-sans text-brand-text"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
            {acc}
          </motion.div>
        ))}
      </div>

      {program.licenseExams.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mt-10"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-4">
            {program.category === 'abroad' ? 'Licensing Exams You Can Appear For' : 'Career Pathways'}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {program.licenseExams.map((exam) => (
              <span
                key={exam}
                className="px-4 py-2 bg-brand-text text-brand-bg text-xs font-semibold tracking-wide rounded-full"
              >
                {exam}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  </section>
);

// ── Why Study Here ─────────────────────────────────────────────────────────────
const WhyStudyHere: React.FC<{ program: MedicalProgram }> = ({ program }) => (
  <section className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="mb-14"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">Advantages</p>
        <h2 className="font-heading text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text">
          Why {program.category === 'abroad' ? `Study in ${program.country}` : `Choose ${program.title}`}?
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {program.whyStudyHere.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: i * 0.06, ease }}
            className="flex flex-col gap-4 p-7 border border-brand-text/10 rounded-2xl bg-brand-bg hover:border-brand-text/20 transition-colors duration-300"
          >
            <span className="text-3xl leading-none">{item.emoji}</span>
            <div>
              <h3 className="font-heading text-base font-medium text-brand-text tracking-tight mb-2">{item.title}</h3>
              <p className="text-sm text-brand-muted font-sans leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Eligibility ───────────────────────────────────────────────────────────────
const Eligibility: React.FC<{ program: MedicalProgram }> = ({ program }) => (
  <section className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8 bg-brand-text">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="mb-14"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-white/30 mb-3">Requirements</p>
        <h2 className="font-heading text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-white">
          Eligibility Criteria
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {program.eligibility.map((item, i) => (
          <motion.div
            key={item.heading}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: i * 0.07, ease }}
            className="flex flex-col gap-4 p-7 rounded-2xl border border-white/10"
          >
            <h3 className="font-heading text-base font-medium text-white/90 tracking-tight">{item.heading}</h3>
            <ul className="flex flex-col gap-2.5">
              {item.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5 text-sm text-white/55 font-sans leading-snug">
                  <span className="text-white/30 shrink-0 mt-0.5">—</span>
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

// ── Subjects (India programs only) ────────────────────────────────────────────
const Subjects: React.FC<{ program: MedicalProgram }> = ({ program }) => {
  if (!program.subjects?.length) return null;
  return (
    <section className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-14"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">Curriculum</p>
          <h2 className="font-heading text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text">
            Subjects Covered
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {program.subjects.map((group, i) => (
            <motion.div
              key={group.heading}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.07, ease }}
              className="p-7 border border-brand-text/10 rounded-2xl"
            >
              <h3 className="font-heading text-sm font-medium text-brand-text tracking-tight mb-4">{group.heading}</h3>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-brand-muted font-sans">
                    <span className="text-brand-text/30 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Costs ─────────────────────────────────────────────────────────────────────
const Costs: React.FC<{ program: MedicalProgram }> = ({ program }) => (
  <section className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">
          {program.category === 'abroad' ? 'Annual Living Expenses' : 'Fee Structure'}
        </p>
        <h2 className="font-heading text-[clamp(28px,3.5vw,48px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text mb-6">
          Cost Overview
        </h2>
        {program.costNote && (
          <p className="text-sm text-brand-muted font-sans leading-relaxed">{program.costNote}</p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease }}
        className="border border-brand-text/10 rounded-2xl overflow-hidden"
      >
        <table className="w-full">
          <thead>
            <tr className="bg-brand-text text-brand-bg">
              <th className="text-left px-6 py-4 text-[10px] tracking-widest uppercase font-semibold">Category</th>
              <th className="text-left px-6 py-4 text-[10px] tracking-widest uppercase font-semibold">Estimated Cost</th>
            </tr>
          </thead>
          <tbody>
            {program.costs.map((row, i) => (
              <tr
                key={row.category}
                className={`border-t border-brand-text/8 ${i % 2 === 0 ? 'bg-brand-bg' : 'bg-brand-text/[0.02]'}`}
              >
                <td className="px-6 py-4 text-sm font-sans text-brand-text">{row.category}</td>
                <td className="px-6 py-4 text-sm font-sans font-semibold text-brand-text">{row.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  </section>
);

// ── Climate (abroad only) ─────────────────────────────────────────────────────
const Climate: React.FC<{ program: MedicalProgram }> = ({ program }) => {
  if (!program.climate?.length) return null;
  return (
    <section className="py-16 md:py-20 px-8 md:px-16 border-b border-brand-text/8 bg-brand-text/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-10"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">Weather</p>
          <h2 className="font-heading text-[clamp(24px,3vw,40px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text">
            Climate in {program.country}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {program.climate.map((season, i) => (
            <motion.div
              key={season.season}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="flex flex-col gap-3 p-6 border border-brand-text/10 rounded-xl text-center"
            >
              <span className="text-4xl">{season.emoji}</span>
              <div>
                <p className="font-heading text-base font-medium text-brand-text">{season.season}</p>
                <p className="text-xs text-brand-muted font-sans mt-1">{season.temp}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Documents Required ────────────────────────────────────────────────────────
const Documents: React.FC<{ program: MedicalProgram }> = ({ program }) => (
  <section className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="mb-14"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">Paperwork</p>
        <h2 className="font-heading text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text">
          Documents Required
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {program.documentsRequired.map((group, i) => (
          <motion.div
            key={group.heading}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: i * 0.07, ease }}
            className="p-6 border border-brand-text/10 rounded-2xl"
          >
            <h3 className="text-[10px] tracking-widest uppercase font-semibold text-brand-muted mb-4">{group.heading}</h3>
            <ul className="flex flex-col gap-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-brand-text font-sans leading-snug">
                  <span className="text-brand-text/30 shrink-0 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Comparison Table ──────────────────────────────────────────────────────────
const Comparison: React.FC<{ program: MedicalProgram }> = ({ program }) => (
  <section className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8 bg-brand-text/[0.02]">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="mb-12"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">Analysis</p>
        <h2 className="font-heading text-[clamp(28px,3.5vw,48px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text">
          {program.comparison.col1Label} vs {program.comparison.col2Label}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
        className="border border-brand-text/10 rounded-2xl overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="bg-brand-text text-brand-bg">
                <th className="text-left px-6 py-4 text-[10px] tracking-widest uppercase font-semibold">Parameter</th>
                <th className="text-left px-6 py-4 text-[10px] tracking-widest uppercase font-semibold">{program.comparison.col1Label}</th>
                <th className="text-left px-6 py-4 text-[10px] tracking-widest uppercase font-semibold">{program.comparison.col2Label}</th>
              </tr>
            </thead>
            <tbody>
              {program.comparison.rows.map((row, i) => (
                <tr
                  key={row.parameter}
                  className={`border-t border-brand-text/8 ${i % 2 === 0 ? 'bg-brand-bg' : 'bg-brand-text/[0.02]'}`}
                >
                  <td className="px-6 py-4 text-sm font-semibold text-brand-text font-sans">{row.parameter}</td>
                  <td className="px-6 py-4 text-sm text-brand-muted font-sans">{row.col1}</td>
                  <td className="px-6 py-4 text-sm text-brand-text font-sans">{row.col2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  </section>
);

// ── Universities / Colleges ────────────────────────────────────────────────────
const Universities: React.FC<{ program: MedicalProgram }> = ({ program }) => (
  <section className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="mb-14"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">Institutions</p>
        <h2 className="font-heading text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text">
          Top {program.category === 'abroad' ? 'Universities' : 'Colleges'}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {program.universities.map((uni, i) => (
          <motion.div
            key={uni.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.06, ease }}
            className="p-6 border border-brand-text/10 rounded-xl hover:border-brand-text/20 transition-colors duration-300"
          >
            <h3 className="font-heading text-sm font-medium text-brand-text tracking-tight leading-snug">{uni.name}</h3>
            <div className="flex items-center gap-3 mt-3">
              {uni.established && (
                <span className="text-[10px] tracking-wider text-brand-muted font-sans">Est. {uni.established}</span>
              )}
              {uni.established && <span className="text-brand-muted/40">·</span>}
              <span className="text-[10px] tracking-wider text-brand-muted font-sans">{uni.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── TCA Services ──────────────────────────────────────────────────────────────
const TCAServices: React.FC<{ program: MedicalProgram }> = ({ program }) => (
  <section className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8 bg-brand-text">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="mb-14"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-white/30 mb-3">What We Offer</p>
        <h2 className="font-heading text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-white">
          How TCA Edu Hub Helps You
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {program.tcaServices.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: i * 0.06, ease }}
            className="flex flex-col gap-4 p-7 border border-white/10 rounded-2xl"
          >
            <span className="text-3xl leading-none">{svc.emoji}</span>
            <div>
              <h3 className="font-heading text-base font-medium text-white/90 tracking-tight mb-2">{svc.title}</h3>
              <p className="text-sm text-white/50 font-sans leading-relaxed">{svc.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Why Trust TCA ─────────────────────────────────────────────────────────────
const WhyTrust: React.FC<{ program: MedicalProgram }> = ({ program }) => (
  <section className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
      >
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-4">Our Promise</p>
        <h2 className="font-heading text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text">
          Why Trust TCA Edu Hub?
        </h2>
        <p className="mt-6 text-sm text-brand-muted font-sans leading-relaxed max-w-sm">
          We are dedicated to helping you make informed decisions and achieve your medical education goals with confidence.
        </p>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3"
      >
        {program.whyTrust.map((point) => (
          <li key={point} className="flex items-start gap-3 text-sm text-brand-text font-sans">
            <span className="text-brand-accent font-bold shrink-0">✓</span>
            {point}
          </li>
        ))}
      </motion.ul>
    </div>
  </section>
);

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQ: React.FC<{ program: MedicalProgram }> = ({ program }) => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-12"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">Common Questions</p>
          <h2 className="font-heading text-[clamp(28px,3.5vw,48px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text">
            FAQs
          </h2>
        </motion.div>

        <div className="flex flex-col divide-y divide-brand-text/8">
          {program.faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05, ease }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-6 py-6 text-left cursor-none group"
              >
                <span className="text-sm font-sans font-medium text-brand-text leading-snug group-hover:text-brand-muted transition-colors">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-brand-muted shrink-0 mt-0.5 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm text-brand-muted font-sans leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── CTA Banner ────────────────────────────────────────────────────────────────
const CTABanner: React.FC<{ program: MedicalProgram }> = ({ program }) => {
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
            className="font-heading text-[clamp(28px,4vw,52px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-white mb-4"
          >
            Start Your Medical Journey Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-sm text-white/55 font-sans leading-relaxed"
          >
            {program.ctaText}
          </motion.p>
        </div>
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          onClick={() => openModal()}
          className="shrink-0 flex items-center gap-3 px-7 py-4 rounded-full bg-brand-bg text-brand-text hover:bg-white/90 transition-all duration-300 text-xs font-semibold tracking-widest uppercase group cursor-none"
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

// ── Related Programs ──────────────────────────────────────────────────────────
const RelatedPrograms: React.FC<{ currentSlug: string; category: 'abroad' | 'india' }> = ({ currentSlug, category }) => {
  const { setCursorType } = useCursor();
  const related = medicalData.filter((p) => p.slug !== currentSlug && p.category === category).slice(0, 3);
  if (related.length === 0) return null;

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
            Related Programs
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {related.map((prog, i) => (
            <motion.div
              key={prog.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
            >
              <Link
                to={`/medical/${prog.slug}`}
                className="group flex flex-col gap-4 p-6 border border-brand-text/10 rounded-xl hover:border-brand-text/25 transition-all duration-300 cursor-none"
                onMouseEnter={() => setCursorType('view')}
                onMouseLeave={() => setCursorType('default')}
              >
                <span className="text-3xl leading-none">{prog.icon}</span>
                <h3 className="font-heading text-lg font-medium text-brand-text tracking-tight group-hover:text-brand-accent transition-colors">
                  {prog.title}
                </h3>
                <p className="text-xs text-brand-muted font-sans leading-relaxed line-clamp-2">{prog.tagline}</p>
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

// ── Page Shell ────────────────────────────────────────────────────────────────
const MedicalDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = getMedicalBySlug(slug ?? '');

  useEffect(() => {
    if (!program) return;
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
  }, [program]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!program) return <Navigate to="/medical" replace />;

  return (
    <CursorProvider>
      <ModalProvider>
        <div className="relative min-h-screen bg-brand-bg text-brand-text overflow-hidden">
          <CustomCursor />
          <ConsultationModal />
          <Navbar />
          <main>
            <Hero program={program} />
            <Overview program={program} />
            <Accreditations program={program} />
            <WhyStudyHere program={program} />
            <Eligibility program={program} />
            {program.subjects && <Subjects program={program} />}
            <Costs program={program} />
            {program.climate && <Climate program={program} />}
            <Documents program={program} />
            <Comparison program={program} />
            <Universities program={program} />
            <TCAServices program={program} />
            <WhyTrust program={program} />
            <FAQ program={program} />
            <CTABanner program={program} />
            <RelatedPrograms currentSlug={program.slug} category={program.category} />
          </main>
          <Footer />
        </div>
      </ModalProvider>
    </CursorProvider>
  );
};

export default MedicalDetailPage;
