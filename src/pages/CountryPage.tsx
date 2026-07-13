import { useEffect, useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Lenis from 'lenis';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CursorProvider } from '../context/CursorContext';
import { ModalProvider } from '../context/ModalContext';
import { ConsultationModal } from '../components/ConsultationModal';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useCursor } from '../context/CursorContext';
import { useModal } from '../context/ModalContext';
import { countriesData, type CountryData } from '../data/countriesData';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const curtainEase = [0.76, 0, 0.24, 1] as [number, number, number, number];

const tcaServices = [
  'Personalized Career Counseling',
  'University & Course Selection',
  'Application Preparation & Submission',
  'Statement of Purpose (SOP) Writing',
  'Letter of Recommendation (LOR) Assistance',
  'Student Visa Documentation & Guidance',
  'IELTS / PTE / TOEFL Preparation',
  'Scholarship Identification & Application',
  'Pre-Departure Orientation',
  'Post-Arrival Settlement Support',
];

// ── Hero ─────────────────────────────────────────────────────────────────────
const Hero: React.FC<{ country: CountryData }> = ({ country }) => {
  const { setCursorType } = useCursor();
  const { openModal } = useModal();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-end justify-start overflow-hidden bg-black">
      {/* Curtain */}
      <motion.div
        className="absolute inset-0 z-50 bg-brand-text origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.1, delay: 0.1, ease: curtainEase }}
      />

      {/* Background */}
      <motion.div className="absolute inset-0" style={{ scale }} initial={{ opacity: 0, scale: 1.15 }} animate={{ opacity: 1, scale: 1.08 }} transition={{ duration: 1.6, delay: 0.8, ease }}>
        <img src={country.heroImage} alt={`Study in ${country.name}`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity: scrollOpacity }} className="relative z-10 w-full px-8 md:px-16 pb-16 md:pb-24 pt-40 max-w-7xl mx-auto">
        {/* Eyebrow */}
        <motion.p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-white/50 mb-6" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0, ease }}>
          The Career Advisors (TCA) — Study Abroad Guide
        </motion.p>

        <div className="overflow-hidden mb-2">
          <motion.div initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 0.9, delay: 1.1, ease }}>
            <h1 className="font-heading font-medium text-[clamp(56px,9vw,130px)] leading-[0.88] tracking-[-0.04em] uppercase text-white">
              Study in {country.name}
            </h1>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.p className="text-base md:text-lg text-white/60 max-w-2xl font-sans leading-relaxed mt-6 mb-10" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.35, ease }}>
          {country.tagline}
        </motion.p>

        {/* Stat Chips */}
        <motion.div className="flex flex-wrap gap-3 mb-12" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.5, ease }}>
          {[
            { label: 'Avg. Tuition', value: country.tuition },
            { label: 'Work Rights', value: country.workRights },
            { label: 'Post-Study Visa', value: country.postStudyVisa },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col border border-white/20 px-5 py-3 backdrop-blur-sm bg-white/5">
              <span className="text-[9px] tracking-widest uppercase text-white/40 font-semibold mb-0.5">{stat.label}</span>
              <span className="text-sm font-semibold text-white tracking-wide">{stat.value}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div className="flex flex-col sm:flex-row gap-4" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.65, ease }}>
          <button
            onClick={(e) => { e.preventDefault(); openModal(); }}
            className="px-8 py-4 bg-white text-brand-text text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-brand-bg cursor-pointer w-fit"
            onMouseEnter={() => setCursorType('view')}
            onMouseLeave={() => setCursorType('default')}
          >
            Book a Free Consultation
          </button>
          <a href="tel:+911234567890" className="flex items-center gap-3 px-8 py-4 border border-white/30 text-white text-xs font-semibold tracking-widest uppercase hover:border-white transition-all duration-300 cursor-pointer w-fit"
            onMouseEnter={() => setCursorType('view')} onMouseLeave={() => setCursorType('default')}>
            Call Us: +91 12345 67890
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

// ── Why Study Section ─────────────────────────────────────────────────────────
const WhyStudy: React.FC<{ country: CountryData }> = ({ country }) => (
  <section className="bg-brand-bg py-24 px-8 md:px-16 border-b border-brand-text/10">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease }} className="mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-brand-muted block mb-3">Why Choose {country.name}</span>
        <h2 className="font-heading font-medium text-4xl md:text-6xl tracking-tight uppercase text-brand-text">
          Reasons to Study Here
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-brand-text/10">
        {country.whyStudy.map((reason, i) => (
          <motion.div key={reason.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1, ease }} className="border-r border-b border-brand-text/10 p-8 md:p-10">
            <span className="font-heading font-medium text-[72px] leading-none tracking-tight text-brand-text/5 select-none block mb-3">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="font-heading font-medium text-xl md:text-2xl uppercase tracking-tight text-brand-text mb-5">{reason.title}</h3>
            <ul className="flex flex-col gap-2">
              {reason.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[13px] text-brand-muted font-sans leading-relaxed">
                  <span className="w-1 h-1 rounded-full bg-brand-text/30 shrink-0 mt-2" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Universities ──────────────────────────────────────────────────────────────
const Universities: React.FC<{ country: CountryData }> = ({ country }) => (
  <section className="bg-brand-bg py-24 px-8 md:px-16 border-b border-brand-text/10">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease }} className="mb-14">
        <span className="text-xs font-semibold tracking-widest uppercase text-brand-muted block mb-3">Institutions</span>
        <h2 className="font-heading font-medium text-4xl md:text-6xl tracking-tight uppercase text-brand-text">
          Top Universities
        </h2>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} className="flex flex-wrap gap-3">
        {country.universities.map((uni, i) => (
          <motion.span key={uni} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04, ease }} className="border border-brand-text/15 px-5 py-2.5 text-[11px] font-semibold tracking-widest uppercase text-brand-text hover:bg-brand-text hover:text-brand-bg transition-all duration-300 cursor-default">
            {uni}
          </motion.span>
        ))}
      </motion.div>
    </div>
  </section>
);

// ── Popular Courses ───────────────────────────────────────────────────────────
const PopularCourses: React.FC<{ country: CountryData }> = ({ country }) => (
  <section className="bg-brand-bg py-24 px-8 md:px-16 border-b border-brand-text/10">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease }} className="mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-brand-muted block mb-3">Fields of Study</span>
        <h2 className="font-heading font-medium text-4xl md:text-6xl tracking-tight uppercase text-brand-text">
          Popular Courses
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-brand-text/10">
        {country.courses.map((field, i) => (
          <motion.div key={field.field} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08, ease }} className="border-r border-b border-brand-text/10 p-8">
            <h4 className="font-heading font-medium text-sm uppercase tracking-widest text-brand-text mb-5">{field.field}</h4>
            <div className="flex flex-wrap gap-2">
              {field.courses.map((course) => (
                <span key={course} className="text-[10px] tracking-wider uppercase font-semibold text-brand-muted bg-brand-text/[0.04] px-3 py-1.5 border border-brand-text/8">
                  {course}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Fees & Living ─────────────────────────────────────────────────────────────
const FeesAndCosts: React.FC<{ country: CountryData }> = ({ country }) => (
  <section className="bg-brand-bg py-24 px-8 md:px-16 border-b border-brand-text/10">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease }} className="mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-brand-muted block mb-3">Finances</span>
        <h2 className="font-heading font-medium text-4xl md:text-6xl tracking-tight uppercase text-brand-text">
          Tuition & Living Costs
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Tuition Table */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}>
          <span className="text-[10px] font-semibold tracking-widest uppercase text-brand-muted block mb-6">Tuition Fees</span>
          <div className="border border-brand-text/10">
            {country.tuitionTable.map((row, i) => (
              <div key={row.program} className={`flex justify-between items-center px-6 py-4 text-[12px] ${i < country.tuitionTable.length - 1 ? 'border-b border-brand-text/10' : ''}`}>
                <span className="text-brand-muted uppercase tracking-wider font-semibold">{row.program}</span>
                <span className="text-brand-text font-semibold">{row.fee}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Living Costs */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}>
          <div className="flex items-end justify-between mb-6">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-brand-muted">Monthly Living Cost</span>
            <span className="font-heading font-medium text-2xl md:text-3xl tracking-tight text-brand-text">{country.livingCost.monthly}</span>
          </div>
          <div className="border border-brand-text/10">
            {country.livingCost.items.map((item, i) => (
              <div key={item.label} className={`flex justify-between items-center px-6 py-4 text-[12px] ${i < country.livingCost.items.length - 1 ? 'border-b border-brand-text/10' : ''}`}>
                <span className="text-brand-muted uppercase tracking-wider font-semibold">{item.label}</span>
                <span className="text-brand-text font-semibold">{item.cost}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Intakes */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="mt-16 pt-16 border-t border-brand-text/10">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-brand-muted block mb-6">Major Intake Seasons</span>
        <div className="flex flex-col sm:flex-row gap-4">
          {country.intakes.map((intake, i) => (
            <div key={i} className="flex items-start gap-3 border border-brand-text/10 px-6 py-4 flex-1">
              <span className="text-[10px] font-semibold text-brand-text/30 mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-muted leading-relaxed">{intake}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// ── Scholarships ──────────────────────────────────────────────────────────────
const Scholarships: React.FC<{ country: CountryData }> = ({ country }) => (
  <section className="bg-brand-text py-24 px-8 md:px-16">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease }} className="mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-white/40 block mb-3">Financial Aid</span>
        <h2 className="font-heading font-medium text-4xl md:text-6xl tracking-tight uppercase text-white">
          Available Scholarships
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {country.scholarships.map((scholarship, i) => (
          <motion.div key={scholarship} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08, ease }} className="flex items-start gap-4 border border-white/10 px-6 py-5 hover:border-white/25 transition-colors duration-300">
            <span className="text-white/30 font-semibold text-[10px] mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
            <span className="text-[12px] font-semibold uppercase tracking-wider text-white/80 leading-relaxed">{scholarship}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── TCA Services ──────────────────────────────────────────────────────────────
const TCAServices: React.FC<{ country: CountryData }> = ({ country }) => (
  <section className="bg-brand-bg py-24 px-8 md:px-16 border-b border-brand-text/10">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease }} className="mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-brand-muted block mb-3">End-to-End Support</span>
        <h2 className="font-heading font-medium text-4xl md:text-6xl tracking-tight uppercase text-brand-text">
          Our Services for {country.name}
        </h2>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-brand-text/10">
        {tcaServices.map((service) => (
          <div key={service} className="border-r border-b border-brand-text/10 px-8 py-5 flex items-center gap-4">
            <span className="w-1 h-1 rounded-full bg-brand-text/40 shrink-0" />
            <span className="text-[12px] font-semibold uppercase tracking-wider text-brand-muted">{service}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

// ── CTA ───────────────────────────────────────────────────────────────────────
const CTA: React.FC<{ country: CountryData }> = ({ country }) => {
  const { setCursorType } = useCursor();
  const { openModal } = useModal();

  return (
    <section className="bg-brand-bg py-32 px-8 md:px-16 border-b border-brand-text/10">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}>
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted block mb-8">
            The Career Advisors (TCA) — Free Expert Consultation
          </span>
          <h2 className="font-heading font-medium text-[clamp(48px,7vw,100px)] leading-[0.92] tracking-[-0.04em] uppercase text-brand-text mb-8">
            Your {country.name}<br />Journey Starts Here
          </h2>
          <p className="text-base md:text-lg text-brand-muted max-w-xl mx-auto font-sans leading-relaxed mb-12">
            Book a free 1-on-1 session with our expert counsellors — no obligation, just honest guidance on your options.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={(e) => { e.preventDefault(); openModal(); }}
              className="px-8 py-4 bg-brand-text text-brand-bg text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-brand-hover cursor-pointer"
              onMouseEnter={() => setCursorType('view')}
              onMouseLeave={() => setCursorType('default')}
            >
              Book a Free Consultation
            </button>
            <a href="tel:+911234567890"
              className="flex items-center gap-3 px-8 py-4 border border-brand-text/30 text-brand-text text-xs font-semibold tracking-widest uppercase hover:border-brand-text transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setCursorType('view')} onMouseLeave={() => setCursorType('default')}>
              Call Us: +91 12345 67890
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ── Page Shell ────────────────────────────────────────────────────────────────
function CountryPageContent() {
  const { slug } = useParams<{ slug: string }>();
  const country = countriesData.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [slug]);

  if (!country) return <Navigate to="/" replace />;

  return (
    <main>
      <Hero country={country} />
      <WhyStudy country={country} />
      <Universities country={country} />
      <PopularCourses country={country} />
      <FeesAndCosts country={country} />
      <Scholarships country={country} />
      <TCAServices country={country} />
      <CTA country={country} />
    </main>
  );
}

export default function CountryPage() {
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
          <CountryPageContent />
          <Footer />
        </div>
      </ModalProvider>
    </CursorProvider>
  );
}
