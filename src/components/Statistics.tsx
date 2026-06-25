import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface StatProps {
  prefix?: string;
  target: number;
  suffix: string;
  label: string;
  description: string;
}

const StatItem: React.FC<StatProps> = ({ prefix = '', target, suffix, label, description }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (ts: number) => {
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };
    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <div ref={ref} className="flex flex-col border-t border-brand-text/10 pt-10">
      <span className="font-heading font-medium text-5xl sm:text-6xl md:text-8xl tracking-tight leading-none text-brand-text mb-3">
        {prefix}{count}{suffix}
      </span>
      <span className="text-sm font-semibold tracking-widest uppercase text-brand-text mb-2">{label}</span>
      <span className="text-[12px] text-brand-muted leading-relaxed max-w-[200px] font-sans">{description}</span>
    </div>
  );
};

const stats: StatProps[] = [
  { target: 1000, suffix: '+', label: 'Students Assisted', description: 'Across 20+ countries, every year' },
  { target: 100, suffix: '+', label: 'University Partners', description: 'Top ranked institutions worldwide' },
  { target: 20, suffix: '+', label: 'Countries', description: 'Global destinations we actively counsel' },
  { target: 95, suffix: '%', label: 'Visa Success Rate', description: 'Industry-leading approval record' },
];

export const Statistics: React.FC = () => {
  return (
    <section className="bg-brand-bg py-32 px-8 md:px-16 border-b border-brand-text/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-muted block mb-3">
            By the Numbers
          </span>
          <h2 className="font-heading font-medium text-4xl md:text-6xl tracking-tight uppercase text-brand-text">
            Proven Track Record
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
