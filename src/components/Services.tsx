import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { useCursor } from '../context/CursorContext';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const ServiceCard: React.FC<{
  slug: string;
  title: string;
  tagline: string;
  index: number;
}> = ({ slug, title, tagline, index }) => {
  const { setCursorType } = useCursor();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease }}
    >
      <Link
        to={`/services/${slug}`}
        className="group flex flex-col gap-5 p-7 border border-brand-text/10 rounded-2xl bg-brand-bg hover:border-brand-text/30 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)] transition-all duration-400 h-full cursor-pointer"
        onMouseEnter={() => setCursorType('view')}
        onMouseLeave={() => setCursorType('default')}
      >
        {/* Title */}
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="font-heading text-xl font-medium text-brand-text tracking-tight leading-snug group-hover:text-brand-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-brand-muted font-sans leading-relaxed line-clamp-3">
            {tagline}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-semibold text-brand-text/50 group-hover:text-brand-accent transition-colors duration-300 mt-2">
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 -translate-x-1 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>
      </Link>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  const { setCursorType } = useCursor();
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="services"
      className="relative py-28 md:py-40 px-8 md:px-16 bg-brand-bg"
    >

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headingRef} className="mb-16 md:mb-20 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-5"
          >
            What We Offer
          </motion.p>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '110%' }}
              animate={headingInView ? { y: '0%' } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="font-heading text-[clamp(40px,6vw,80px)] font-medium tracking-[-0.04em] leading-[0.9] uppercase text-brand-text"
            >
              Our Services
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="mt-6 text-base md:text-lg text-brand-muted font-sans leading-relaxed max-w-2xl"
          >
            From career counselling and university selection to visa assistance and post-arrival support — we guide you through every step of your international education journey.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {servicesData.map((service, i) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              title={service.title}
              tagline={service.tagline}
              index={i}
            />
          ))}
        </div>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-14 flex items-center justify-between flex-wrap gap-6 border-t border-brand-text/10 pt-10"
        >
          <p className="text-sm text-brand-muted font-sans max-w-md leading-relaxed">
            Not sure which service is right for you? Book a free consultation and our experts will guide you to the best path.
          </p>
          <Link
            to="/services"
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-brand-text/20 text-brand-text hover:bg-brand-text hover:text-brand-bg transition-all duration-300 text-xs font-semibold tracking-widest uppercase group cursor-pointer"
            onMouseEnter={() => setCursorType('view')}
            onMouseLeave={() => setCursorType('default')}
          >
            View All Services
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
