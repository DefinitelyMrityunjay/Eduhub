import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useCursor } from '../context/CursorContext';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface Step {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Dream',
    description: 'Every global journey starts with a dream. We help you clarify your vision — the right country, university, and career path for your unique aspirations.',
    image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=800&auto=format&fit=crop',
    alt: 'Student dreaming of studying abroad',
  },
  {
    number: '02',
    title: 'Choose Destination',
    description: 'Canada, USA, UK, Australia, Germany, France, Ireland and more — each destination offers a distinct lifestyle and academic experience. Our experts guide you to the perfect match.',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop',
    alt: 'World map with travel planning',
  },
  {
    number: '03',
    title: 'University Selection',
    description: 'We shortlist universities that align with your profile, budget, and ambitions — from Ivy League to innovative technical institutions worldwide.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop',
    alt: 'University campus buildings',
  },
  {
    number: '04',
    title: 'Application Process',
    description: 'From crafting your Statement of Purpose to sourcing letters of recommendation, we manage every detail of your application for maximum impact.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
    alt: 'Student working on application',
  },
  {
    number: '05',
    title: 'Scholarships',
    description: 'We identify and apply for scholarships worth millions across merit, need, and country-specific programs — making global education financially accessible.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
    alt: 'Scholarship documents and award',
  },
  {
    number: '06',
    title: 'Visa Approval',
    description: 'Our visa specialists maintain a 95%+ approval rate. We prepare your documentation, handle interviews, and track every step of the visa process.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop',
    alt: 'Passport and visa documents',
  },
  {
    number: '07',
    title: 'Departure',
    description: 'Pre-departure orientation, accommodation guidance, travel insurance, and arrival support — we ensure your transition is smooth and stress-free.',
    image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=800&auto=format&fit=crop',
    alt: 'Student at airport departing',
  },
  {
    number: '08',
    title: 'Success',
    description: 'Thousands of our students have graduated from top universities worldwide, launched global careers, and transformed their futures. You are next.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
    alt: 'Graduates celebrating success',
  },
];

interface StepItemProps extends Step {
  index: number;
}

const StepItem: React.FC<StepItemProps> = ({ number, title, description, image, alt, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { setCursorType } = useCursor();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`min-h-[90vh] flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-0 border-b border-brand-text/10 overflow-hidden`}
    >
      {/* Text Side */}
      <div className="w-full md:w-1/2 px-8 md:px-16 lg:px-24 py-20 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease }}
        >
          <span className="font-heading font-medium text-[80px] md:text-[120px] leading-none tracking-tight text-brand-text/5 select-none block mb-4">
            {number}
          </span>
          <h3 className="font-heading font-medium text-4xl md:text-6xl uppercase tracking-[-0.03em] leading-none text-brand-text mb-6">
            {title}
          </h3>
          <p className="text-base md:text-lg text-brand-muted leading-relaxed max-w-md font-sans">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Image Side */}
      <div
        className="w-full md:w-1/2 h-[50vh] md:h-[90vh] overflow-hidden relative cursor-none"
        onMouseEnter={() => setCursorType('view')}
        onMouseLeave={() => setCursorType('default')}
      >
        <motion.div
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={inView ? { clipPath: 'inset(0% 0 0 0)' } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease }}
          className="absolute inset-0"
        >
          <motion.img
            src={image}
            alt={alt}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.8, ease }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export const Storytelling: React.FC = () => {
  return (
    <section id="journey" className="bg-brand-bg border-b border-brand-text/10">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease }}
        className="px-8 md:px-16 py-24 border-b border-brand-text/10"
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-brand-muted block mb-3">
          Your Journey
        </span>
        <h2 className="font-heading font-medium text-4xl md:text-6xl tracking-tight uppercase text-brand-text">
          From Dream to Degree
        </h2>
      </motion.div>

      {steps.map((step, index) => (
        <StepItem key={step.number} {...step} index={index} />
      ))}
    </section>
  );
};
