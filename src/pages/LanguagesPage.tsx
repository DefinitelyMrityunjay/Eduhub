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

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const curtainEase = [0.76, 0, 0.24, 1] as [number, number, number, number];

const whyPoints = [
  {
    title: 'Internationally Designed Curriculum',
    desc: 'Our courses follow globally recognized frameworks such as CEFR, ensuring students receive education that meets international standards.',
  },
  {
    title: 'Experienced Faculty',
    desc: 'Learn from qualified language instructors with extensive teaching experience and practical exposure to international language proficiency examinations.',
  },
  {
    title: 'Interactive Learning Environment',
    desc: 'We focus on speaking, listening, reading, writing, pronunciation, vocabulary, grammar, and real-life communication through engaging activities.',
  },
  {
    title: 'Small Batch Sizes',
    desc: 'Personalized attention allows every student to receive continuous feedback and achieve faster improvement.',
  },
  {
    title: 'Practical Language Skills',
    desc: 'Our programs are designed not only to help students pass examinations but also to communicate confidently in academic, professional, and everyday situations.',
  },
  {
    title: 'Flexible Learning Options',
    desc: 'Choose from classroom training, online live sessions, weekend batches, weekday batches, and customized learning schedules.',
  },
];

const languages = [
  {
    name: 'English',
    flag: '🇬🇧',
    tagline: "Master the world's most widely spoken international language.",
    desc: 'Our English programs cover everything from foundational communication to advanced academic and professional writing, helping you succeed in higher education, global careers, and international certifications.',
    programs: [
      'Spoken English',
      'Academic English',
      'Business English',
      'Professional Communication',
      'Grammar & Vocabulary',
      'Pronunciation & Accent Improvement',
      'Public Speaking',
      'Interview Preparation',
      'Presentation Skills',
      'Writing Skills',
    ],
    suitableFor: ['Students', 'Working Professionals', 'Study Abroad Aspirants', 'Corporate Employees', 'Job Seekers'],
  },
  {
    name: 'Punjabi',
    flag: '🇮🇳',
    tagline: 'Stay Connected to Your Roots',
    desc: 'For families living abroad, language is one of the strongest connections to culture, identity, traditions, and heritage. Our Punjabi program is specially designed for children and adults outside India who wish to reconnect with their roots.',
    programs: [
      'Speaking Punjabi Naturally',
      'Reading Gurmukhi',
      'Writing Punjabi',
      'Punjabi Literature',
      'Sikh History & Heritage',
      'Punjabi Culture & Traditions',
      'Everyday Conversation',
      'Festivals and Cultural Values',
    ],
    suitableFor: ['NRI Families', 'Children Living Abroad', 'Heritage Learners', 'Second-Generation Indians'],
  },
  {
    name: 'German',
    flag: '🇩🇪',
    tagline: 'One of the most valuable languages for education and careers in Europe.',
    desc: 'Our German language courses cover all CEFR levels from A1 to C2, preparing you for study in Germany, employment opportunities, visa requirements, permanent residency, and professional development.',
    programs: ['A1 — Beginner', 'A2 — Elementary', 'B1 — Intermediate', 'B2 — Upper Intermediate', 'C1 — Advanced', 'C2 — Mastery'],
    suitableFor: ['Study in Germany Aspirants', 'PR & Immigration Applicants', 'Working Professionals', 'Visa Applicants'],
  },
  {
    name: 'French',
    flag: '🇫🇷',
    tagline: 'French opens opportunities across Europe, Canada, Africa, and international organizations.',
    desc: 'From beginner conversation to advanced business French, our structured courses take you through grammar, listening, reading, writing, and travel communication across all CEFR levels.',
    programs: ['A1 — Beginner', 'A2 — Elementary', 'B1 — Intermediate', 'B2 — Upper Intermediate', 'C1 — Advanced', 'C2 — Mastery', 'Business French', 'Travel Communication'],
    suitableFor: ['Study in France / Canada', 'International Organization Aspirants', 'Business Professionals', 'Travel Enthusiasts'],
  },
  {
    name: 'Japanese',
    flag: '🇯🇵',
    tagline: 'Japan offers excellent opportunities in technology, engineering, business, and higher education.',
    desc: 'Our Japanese courses cover Hiragana, Katakana, Kanji, grammar, vocabulary, listening, speaking, reading, and business Japanese with cultural etiquette. Preparation available for JLPT N5 through N1.',
    programs: ['Hiragana & Katakana', 'Kanji', 'Grammar & Vocabulary', 'Listening & Speaking', 'Business Japanese', 'Cultural Etiquette', 'JLPT N5 → N1 Preparation'],
    suitableFor: ['Study in Japan Aspirants', 'IT & Engineering Professionals', 'Anime & Culture Enthusiasts', 'JLPT Exam Candidates'],
  },
  {
    name: 'More Languages',
    flag: '🌐',
    tagline: 'We offer coaching for several other international languages on demand.',
    desc: 'Based on student demand, we also provide coaching for Spanish, Italian, Korean, Mandarin Chinese, Arabic, Russian, Portuguese, Dutch, and many more. Contact us for upcoming batches and customized training.',
    programs: ['Spanish', 'Italian', 'Korean', 'Mandarin Chinese', 'Arabic', 'Russian', 'Portuguese', 'Dutch'],
    suitableFor: ['Custom Batches Available', 'Contact Us for Schedule'],
  },
];

const testCategories = [
  {
    title: 'English Language Tests',
    items: ['IELTS Academic', 'IELTS General Training', 'PTE Academic', 'TOEFL', 'Duolingo English Test', 'OET'],
  },
  {
    title: 'German Certification',
    items: ['Goethe A1', 'Goethe A2', 'Goethe B1', 'Goethe B2', 'Goethe C1', 'Goethe C2'],
  },
  {
    title: 'French Certification',
    items: ['DELF A1', 'DELF A2', 'DELF B1', 'DELF B2', 'DALF C1', 'DALF C2'],
  },
  {
    title: 'JLPT (Japanese)',
    items: ['N5 — Beginner', 'N4 — Elementary', 'N3 — Intermediate', 'N2 — Upper Int.', 'N1 — Advanced'],
  },
];

const methodologySteps = [
  { num: '01', title: 'Assessment', desc: 'Every learner begins with a language assessment to determine their current proficiency level.' },
  { num: '02', title: 'Personalized Learning Plan', desc: 'Based on the assessment, students receive a customized roadmap suited to their goals.' },
  { num: '03', title: 'Interactive Classes', desc: 'Our classes combine theory with practical speaking, listening, reading, and writing activities.' },
  { num: '04', title: 'Continuous Evaluation', desc: 'Regular assignments, quizzes, speaking assessments, and mock tests help monitor progress.' },
  { num: '05', title: 'Certification Preparation', desc: 'Students receive intensive exam-focused practice before official language proficiency examinations.' },
];

const whoCanJoin = [
  'School Students', 'College Students', 'Working Professionals', 'Business Owners',
  'Study Abroad Aspirants', 'Immigration Applicants', 'Job Seekers', 'Homemakers',
  'Children Living Abroad', 'Language Enthusiasts',
];

const benefits = [
  'Study at leading international universities',
  'Secure global career opportunities',
  'Improve communication skills',
  'Expand business opportunities',
  'Travel confidently around the world',
  'Increase earning potential',
  'Understand new cultures',
  'Build international networks',
  'Enhance cognitive abilities and memory',
  'Become a confident global citizen',
];

const WhyCard: React.FC<{ title: string; desc: string; index: number }> = ({ title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay: index * 0.07, ease }}
    className="flex flex-col gap-3 p-7 border border-brand-text/10 rounded-2xl bg-brand-bg hover:border-brand-text/25 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-400"
  >
    <div className="w-8 h-8 rounded-full bg-brand-text flex items-center justify-center shrink-0">
      <svg className="w-4 h-4 stroke-brand-bg fill-none stroke-[2]" viewBox="0 0 24 24">
        <path d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h3 className="font-heading text-lg font-medium text-brand-text tracking-tight leading-tight">{title}</h3>
    <p className="text-sm text-brand-muted font-sans leading-relaxed">{desc}</p>
  </motion.div>
);

const LanguageCard: React.FC<{ lang: typeof languages[0]; index: number }> = ({ lang, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.8, delay: index * 0.06, ease }}
    className="flex flex-col gap-5 p-8 md:p-10 border border-brand-text/10 rounded-2xl bg-brand-bg hover:border-brand-text/20 hover:shadow-[0_16px_48px_-16px_rgba(0,0,0,0.12)] transition-all duration-400 h-full"
  >
    <div className="flex items-center gap-3">
      <span className="text-4xl leading-none">{lang.flag}</span>
      <div>
        <h3 className="font-heading text-2xl md:text-3xl font-medium text-brand-text tracking-tight leading-tight">
          {lang.name}
        </h3>
        <p className="text-xs text-brand-muted font-semibold tracking-wider uppercase mt-0.5">{lang.tagline}</p>
      </div>
    </div>

    <p className="text-sm text-brand-muted font-sans leading-relaxed">{lang.desc}</p>

    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-text/40 mb-2">Programs / Levels</p>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
        {lang.programs.map((p) => (
          <li key={p} className="flex items-start gap-2 text-xs text-brand-text/70 font-sans">
            <span className="text-brand-accent mt-0.5 shrink-0">—</span>
            {p}
          </li>
        ))}
      </ul>
    </div>

    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-text/40 mb-2">Suitable For</p>
      <div className="flex flex-wrap gap-1.5">
        {lang.suitableFor.map((s) => (
          <span key={s} className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-brand-text/15 text-brand-text/60">
            {s}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const TestCard: React.FC<{ cat: typeof testCategories[0]; index: number }> = ({ cat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.7, delay: index * 0.08, ease }}
    className="flex flex-col gap-4 p-7 border border-white/10 rounded-2xl bg-white/5"
  >
    <h3 className="font-heading text-xl font-medium text-white tracking-tight">{cat.title}</h3>
    <ul className="flex flex-col gap-1.5">
      {cat.items.map((item) => (
        <li key={item} className="flex items-center gap-2.5 text-sm text-white/70 font-sans">
          <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

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

      {/* ── Hero ── */}
      <section id="hero" className="relative pt-40 pb-28 md:pt-52 md:pb-36 px-8 md:px-16 overflow-hidden bg-brand-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-text/[0.025] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease }}
            className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-6"
          >
            TCA Edu Hub — School of Languages
          </motion.p>
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.9, delay: 1.0, ease }}
              className="font-heading text-[clamp(52px,9vw,130px)] font-medium tracking-[-0.04em] leading-[0.88] uppercase text-brand-text"
            >
              School of
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.9, delay: 1.13, ease }}
              className="font-heading text-[clamp(52px,9vw,130px)] font-medium tracking-[-0.04em] leading-[0.88] uppercase text-brand-text"
            >
              Languages
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease }}
            className="text-base md:text-lg text-brand-muted font-sans leading-relaxed max-w-2xl mb-10"
          >
            Language is more than communication — it is the key to global education, international careers, cultural understanding, and limitless opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.45, ease }}
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
            <a
              href="#languages"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-brand-text/20 text-brand-text hover:border-brand-text/50 transition-all duration-300 text-xs font-semibold tracking-widest uppercase cursor-pointer"
              onMouseEnter={() => setCursorType('view')}
              onMouseLeave={() => setCursorType('default')}
            >
              Explore Languages
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="border-y border-brand-text/10 py-8 px-8 md:px-16 bg-brand-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '6+', label: 'Languages Taught' },
            { value: 'CEFR', label: 'Internationally Aligned' },
            { value: '10+', label: 'Certifications Covered' },
            { value: '5-Step', label: 'Teaching Methodology' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="flex flex-col gap-1"
            >
              <span className="font-heading text-3xl md:text-4xl font-medium text-brand-text tracking-tight">{stat.value}</span>
              <span className="text-xs text-brand-muted font-sans uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section id="why-choose-us" className="py-20 md:py-28 px-8 md:px-16 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="mb-12"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-4">Our Advantage</p>
            <h2 className="font-heading text-[clamp(32px,5vw,72px)] font-medium tracking-[-0.03em] leading-[0.92] uppercase text-brand-text max-w-2xl">
              Why Choose Our School of Languages?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyPoints.map((point, i) => (
              <WhyCard key={point.title} title={point.title} desc={point.desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Languages We Offer ── */}
      <section id="languages" className="py-20 md:py-28 px-8 md:px-16 bg-brand-bg border-t border-brand-text/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="mb-12"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-4">What We Teach</p>
            <h2 className="font-heading text-[clamp(32px,5vw,72px)] font-medium tracking-[-0.03em] leading-[0.92] uppercase text-brand-text max-w-2xl">
              Languages We Offer
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {languages.map((lang, i) => (
              <LanguageCard key={lang.name} lang={lang} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Test Preparation ── */}
      <section id="test-prep" className="py-20 md:py-28 px-8 md:px-16 bg-brand-text">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="mb-6"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-white/40 mb-4">Exam Coaching</p>
            <h2 className="font-heading text-[clamp(32px,5vw,72px)] font-medium tracking-[-0.03em] leading-[0.92] uppercase text-white max-w-2xl mb-4">
              International Language Test Preparation
            </h2>
            <p className="text-base text-white/60 font-sans leading-relaxed max-w-2xl">
              Achieving a high score requires more than language knowledge — it requires strategy, practice, and expert guidance. Our specialized coaching programs cover comprehensive classroom training, mock examinations, individual feedback, and proven test-taking strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {testCategories.map((cat, i) => (
              <TestCard key={cat.title} cat={cat} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-12 p-7 border border-white/10 rounded-2xl bg-white/5"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-4">Our Preparation Includes</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Complete syllabus coverage', 'Section-wise practice', 'Speaking sessions', 'Mock examinations', 'Time management techniques', 'Performance analysis', 'Individual mentoring', 'Proven test strategies'].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-white/70 font-sans">
                  <span className="text-white/40 shrink-0 mt-0.5">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Teaching Methodology ── */}
      <section id="methodology" className="py-20 md:py-28 px-8 md:px-16 bg-brand-bg border-t border-brand-text/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="mb-12"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-4">How We Teach</p>
            <h2 className="font-heading text-[clamp(32px,5vw,72px)] font-medium tracking-[-0.03em] leading-[0.92] uppercase text-brand-text max-w-2xl">
              Our Teaching Methodology
            </h2>
          </motion.div>

          <div className="flex flex-col gap-0">
            {methodologySteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                className="flex items-start gap-8 py-8 border-b border-brand-text/10 last:border-b-0 group"
              >
                <span className="font-heading text-[clamp(40px,5vw,60px)] font-medium text-brand-text/10 leading-none w-20 shrink-0 group-hover:text-brand-text/20 transition-colors duration-300">
                  {step.num}
                </span>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 py-2">
                  <h3 className="font-heading text-xl md:text-2xl font-medium text-brand-text tracking-tight leading-tight min-w-[240px]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-muted font-sans leading-relaxed max-w-xl">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Can Join + Benefits ── */}
      <section className="py-20 md:py-28 px-8 md:px-16 bg-brand-bg border-t border-brand-text/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-4">Eligibility</p>
            <h2 className="font-heading text-[clamp(28px,4vw,52px)] font-medium tracking-[-0.03em] leading-[0.92] uppercase text-brand-text mb-8">
              Who Can Join?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {whoCanJoin.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease }}
                  className="flex items-center gap-3 py-3 border-b border-brand-text/8"
                >
                  <span className="w-5 h-5 rounded-full bg-brand-text/8 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-text/50" />
                  </span>
                  <span className="text-sm text-brand-text/80 font-sans">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-4">Outcomes</p>
            <h2 className="font-heading text-[clamp(28px,4vw,52px)] font-medium tracking-[-0.03em] leading-[0.92] uppercase text-brand-text mb-8">
              Benefits of Learning a New Language
            </h2>
            <div className="flex flex-col gap-2">
              {benefits.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease }}
                  className="flex items-start gap-3 py-3 border-b border-brand-text/8"
                >
                  <span className="text-brand-accent mt-0.5 shrink-0 font-bold text-sm">→</span>
                  <span className="text-sm text-brand-text/80 font-sans">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── More Than a Language School ── */}
      <section className="py-20 md:py-28 px-8 md:px-16 bg-brand-text">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-[10px] tracking-[0.3em] uppercase font-semibold text-white/40 mb-6"
          >
            Our Mission
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-heading text-[clamp(32px,5vw,80px)] font-medium tracking-[-0.03em] leading-[0.92] uppercase text-white max-w-4xl mb-8"
          >
            More Than a Language School
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-base md:text-lg text-white/60 font-sans leading-relaxed max-w-3xl mb-4"
          >
            At The Career Advisors Edu Hub, we don't simply teach vocabulary and grammar — we build confidence, global competence, and lifelong communication skills.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="text-base text-white/50 font-sans leading-relaxed max-w-3xl"
          >
            Whether your dream is studying abroad, working internationally, achieving immigration goals, or reconnecting with your cultural heritage, we are committed to guiding you every step of the way.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="font-heading text-xl md:text-2xl font-medium text-white/80 uppercase tracking-wide mt-10 mb-10"
          >
            Learn. Communicate. Connect. Succeed.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => openModal()}
              className="flex items-center gap-3 px-7 py-4 rounded-full bg-brand-bg text-brand-text hover:bg-brand-hover hover:text-brand-bg transition-all duration-300 text-xs font-semibold tracking-widest uppercase group cursor-pointer"
              onMouseEnter={() => setCursorType('view')}
              onMouseLeave={() => setCursorType('default')}
            >
              Start Your Language Journey
              <span className="w-5 h-5 rounded-full bg-brand-text text-brand-bg flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-3 h-3" />
              </span>
            </button>
            <Link
              to="/services"
              className="flex items-center gap-2 px-7 py-4 rounded-full border border-white/20 text-white hover:border-white/50 transition-all duration-300 text-xs font-semibold tracking-widest uppercase cursor-pointer"
              onMouseEnter={() => setCursorType('view')}
              onMouseLeave={() => setCursorType('default')}
            >
              All Services
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

const LanguagesPage: React.FC = () => {
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

export default LanguagesPage;
