import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useCursor } from '../context/CursorContext';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const curtainEase = [0.76, 0, 0.24, 1] as [number, number, number, number];

// ── Hero ──────────────────────────────────────────────────────────────────────
const AboutHero: React.FC = () => (
  <section className="relative min-h-[55vh] flex items-end justify-start overflow-hidden bg-brand-text">
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
        The Career Advisors — Edu Hub
      </motion.p>
      <div className="overflow-hidden mb-3">
        <motion.h1
          initial={{ y: '110%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 0.9, delay: 1.05, ease }}
          className="font-heading text-[clamp(44px,7vw,110px)] font-medium tracking-[-0.04em] leading-[0.88] uppercase text-white"
        >
          About
          <br />
          Us
        </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease }}
        className="text-base md:text-lg text-white/55 max-w-2xl font-sans leading-relaxed mt-5"
      >
        A premier education and career consulting organization dedicated to empowering students with world-class guidance, strategic planning, and comprehensive admission solutions.
      </motion.p>
    </div>
  </section>
);

// ── About Overview ────────────────────────────────────────────────────────────
const AboutOverview: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <section ref={ref} className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="md:w-1/3 shrink-0"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-4">Who We Are</p>
          <h2 className="font-heading text-[clamp(28px,3.5vw,48px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text">
            Bridging Ambition & Opportunity
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="flex flex-col gap-5 text-base text-brand-muted font-sans leading-relaxed"
        >
          <p>
            The Career Advisors Edu Hub is a premier education and career consulting organization dedicated to empowering students with world-class guidance, strategic planning, and comprehensive admission solutions. We bridge the gap between ambition and opportunity by helping students gain access to leading educational institutions in India and across the globe.
          </p>
          <p>
            Driven by excellence, integrity, and a student-centric philosophy, we provide personalized consultation that enables students to make informed academic and career decisions with confidence. Our experienced team works closely with every student to understand their aspirations, evaluate their potential, and design a tailored pathway toward long-term success.
          </p>
          <p>
            We believe that education is more than securing an admission — it is about building a future. Through our expertise, global network, and commitment to quality service, we strive to transform aspirations into achievements while ensuring a seamless and transparent experience at every stage of the journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// ── Team ──────────────────────────────────────────────────────────────────────
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Prof. Gurinder Singh',
    role: 'President, TCA Edu Hub',
    initials: 'GS',
    bio: 'Prof. Gurinder Singh brings over 18 years of valuable experience in the education sector. Under his leadership, TCA Edu Hub provides expert counseling for professional courses such as MBBS, BDS, BAMS, BVSc & AH, BHMS, and engineering programs including JEE Main and JEE Advanced counseling. With a transparent, ethical, and student-focused approach, he ensures students receive reliable guidance at every stage of their academic journey.',
  },
  {
    name: 'Er. Tarwinder Pal Singh Notra',
    role: 'CEO, TCA Edu Hub',
    initials: 'TN',
    bio: 'Er. Tarwinder Pal Singh is a distinguished educationist with over 10 years of expertise in MBBS consultancy. A graduate of PEC, Chandigarh with a prestigious Master of Engineering degree, he brings strong academic and professional excellence. His dynamic approach effectively manages business operations, leads marketing initiatives, and guides NEET aspirants, graduates, postgraduates, and superspecialty candidates toward successful careers.',
  },
  {
    name: 'Waqar Abdullah',
    role: 'Managing Director, TCA Srinagar',
    initials: 'WA',
    bio: 'At The Career Advisors, Waqar Abdullah has been a trusted partner for medical admissions since 2016. With years of experience, the consultancy specializes in guiding aspiring medical professionals toward fulfilling their dreams of studying MBBS both abroad and in India. The team collaborates with universities following the latest NMC guidelines and recognized globally by bodies like ECFMG, ensuring medical degrees hold value worldwide.',
  },
];

const TeamCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
      className="flex flex-col gap-5 p-7 border border-brand-text/10 rounded-2xl bg-brand-bg hover:border-brand-text/25 hover:shadow-sm transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-full bg-brand-text flex items-center justify-center">
        <span className="font-heading text-lg font-medium text-brand-bg">{member.initials}</span>
      </div>
      <div>
        <h3 className="font-heading text-xl font-medium text-brand-text tracking-tight mb-1">{member.name}</h3>
        <p className="text-[10px] tracking-widest uppercase font-semibold text-brand-muted">{member.role}</p>
      </div>
      <p className="text-sm text-brand-muted font-sans leading-relaxed">{member.bio}</p>
    </motion.div>
  );
};

const Team: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="team" className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mb-14"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">Leadership</p>
          <h2 className="font-heading text-[clamp(28px,4vw,52px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text">
            Our Team
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Expertise ─────────────────────────────────────────────────────────────────
interface ExpertiseItem {
  title: string;
  description: string;
  icon: string;
}

const expertiseItems: ExpertiseItem[] = [
  {
    icon: '🎓',
    title: 'Career Counseling',
    description: 'Professional career guidance based on individual interests, academic strengths, aptitude, and long-term career objectives, helping students make well-informed educational decisions.',
  },
  {
    icon: '✈️',
    title: 'Study Abroad Services',
    description: 'Complete overseas education solutions including university selection, course planning, application management, documentation, scholarship guidance, student visa assistance, and pre-departure support.',
  },
  {
    icon: '🏥',
    title: 'Medical Admissions',
    description: 'Specialized counseling and admission assistance for MBBS, BDS, Nursing, Pharmacy, Allied Health Sciences, and other healthcare programs in India and internationally.',
  },
  {
    icon: '🏛️',
    title: 'University & College Admissions',
    description: 'Expert admission guidance for undergraduate, postgraduate, diploma, and professional programs across a diverse range of disciplines and institutions.',
  },
  {
    icon: '📝',
    title: 'Application & Documentation Support',
    description: 'End-to-end assistance in preparing high-quality applications, SOPs, LORs, resumes, academic documentation, and all other admission requirements.',
  },
  {
    icon: '🛂',
    title: 'Visa & Immigration Assistance',
    description: 'Professional support throughout the student visa process, ensuring compliance with international requirements and maximizing application success.',
  },
  {
    icon: '💰',
    title: 'Scholarships & Education Loan Guidance',
    description: 'Assistance in identifying scholarship opportunities and facilitating education loan processes to make quality education financially accessible.',
  },
  {
    icon: '🤝',
    title: 'Post-Admission Support',
    description: 'Continued support with accommodation guidance, travel planning, pre-departure orientation, and settlement assistance to ensure a smooth transition into student life.',
  },
];

const ExpertiseCard: React.FC<{ item: ExpertiseItem; index: number }> = ({ item, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06, ease }}
      className="flex flex-col gap-4 p-6 border border-brand-text/10 rounded-2xl hover:border-brand-text/25 hover:shadow-sm transition-all duration-300"
    >
      <span className="text-3xl leading-none">{item.icon}</span>
      <h3 className="font-heading text-base font-medium text-brand-text tracking-tight">{item.title}</h3>
      <p className="text-sm text-brand-muted font-sans leading-relaxed">{item.description}</p>
    </motion.div>
  );
};

const Expertise: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mb-14"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">What We Do</p>
          <h2 className="font-heading text-[clamp(28px,4vw,52px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text">
            Our Expertise
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {expertiseItems.map((item, i) => (
            <ExpertiseCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Why Choose ────────────────────────────────────────────────────────────────
const whyChoosePoints = [
  'Personalized, student-focused counseling and mentoring',
  'Experienced education consultants with industry expertise',
  'Ethical, transparent, and professional consulting practices',
  'Comprehensive end-to-end admission solutions under one roof',
  'Strong network of reputed universities and educational institutions',
  'Dedicated support throughout the admission, visa, and enrollment process',
  'Commitment to excellence, quality service, and student success',
];

const WhyChoosePoint: React.FC<{ point: string; index: number }> = ({ point, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease }}
      className="flex items-start gap-5 py-5"
    >
      <span className="font-heading text-3xl font-medium text-white/15 leading-none shrink-0 w-10 text-right">
        {String(index + 1).padStart(2, '0')}
      </span>
      <p className="text-base text-white/80 font-sans leading-relaxed">{point}</p>
    </motion.div>
  );
};

const WhyChoose: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section className="py-20 md:py-28 px-8 md:px-16 bg-brand-text border-b border-white/8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="md:w-1/3 shrink-0"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-white/40 mb-4">Why Us</p>
          <h2 className="font-heading text-[clamp(28px,3.5vw,48px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-white">
            Why Choose TCA Edu Hub?
          </h2>
        </motion.div>
        <div className="flex flex-col gap-0 divide-y divide-white/10">
          {whyChoosePoints.map((point, i) => (
            <WhyChoosePoint key={i} point={point} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Mission / Vision / Commitment ─────────────────────────────────────────────
interface MVItem { label: string; text: string; }

const MVCard: React.FC<{ item: MVItem; index: number }> = ({ item, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      className="bg-brand-bg p-8 flex flex-col gap-4"
    >
      <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted">{item.label}</p>
      <p className="text-base text-brand-text font-sans leading-relaxed">{item.text}</p>
    </motion.div>
  );
};

const mvItems: MVItem[] = [
  {
    label: 'Our Mission',
    text: 'To empower aspiring students by delivering trusted educational consultancy, personalized career guidance, and globally recognized admission solutions that inspire confidence, unlock opportunities, and create lifelong success.',
  },
  {
    label: 'Our Vision',
    text: 'To be recognized as one of the most trusted and respected education consulting organizations, delivering innovative, ethical, and student-centric solutions that shape future leaders and enable global educational excellence.',
  },
  {
    label: 'Our Commitment',
    text: 'At The Career Advisors Edu Hub, every student\'s dream matters. We are committed to delivering exceptional guidance, maintaining the highest standards of professionalism, and building lasting relationships founded on trust, transparency, and measurable results.',
  },
];

const MissionVision: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="mission" className="py-20 md:py-28 px-8 md:px-16 border-b border-brand-text/8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mb-14"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">Foundation</p>
          <h2 className="font-heading text-[clamp(28px,4vw,52px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text">
            Mission, Vision & Commitment
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-text/10 rounded-2xl overflow-hidden">
          {mvItems.map((item, i) => (
            <MVCard key={item.label} item={item} index={i} />
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mt-12 text-center font-heading text-lg md:text-xl text-brand-text/40 tracking-tight"
        >
          Your Future. Our Expertise. Together, We Build Success.
        </motion.p>
      </div>
    </section>
  );
};

// ── Page Export ───────────────────────────────────────────────────────────────
export const Storytelling: React.FC = () => {
  const { setCursorType } = useCursor();
  return (
    <div onMouseLeave={() => setCursorType('default')}>
      <AboutHero />
      <AboutOverview />
      <Team />
      <Expertise />
      <WhyChoose />
      <MissionVision />
    </div>
  );
};
