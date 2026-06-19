import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface StatProps { prefix?: string; target: number; suffix: string; label: string; }

const CountUp: React.FC<StatProps> = ({ prefix = '', target, suffix, label }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

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
      <span className="font-heading font-medium text-5xl md:text-7xl tracking-tight leading-none text-brand-text mb-3">
        {prefix}{count}{suffix}
      </span>
      <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-muted max-w-[200px] leading-relaxed">
        {label}
      </span>
    </div>
  );
};

const scholarshipPrograms = [
  { name: 'Chevening Scholarship', country: 'UK', amount: 'Full Funding', deadline: 'Nov 2026' },
  { name: 'Eiffel Excellence Scholarship', country: 'France', amount: 'Full Funding', deadline: 'Jan 2027' },
  { name: 'Fulbright Program', country: 'USA', amount: 'Up to $50,000', deadline: 'Sep 2026' },
  { name: 'Australia Awards', country: 'Australia', amount: 'Full Funding', deadline: 'Jul 2026' },
  { name: 'DAAD Scholarship', country: 'Germany', amount: '€750–€1,200/mo', deadline: 'Oct 2026' },
  { name: 'Stipendium Hungaricum', country: 'Hungary', amount: 'Full Funding', deadline: 'Jan 2027' },
];

export const Scholarships: React.FC = () => {
  return (
    <section id="scholarships" className="bg-brand-bg py-32 px-8 md:px-16 border-b border-brand-text/10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease }}
          className="mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-muted block mb-3">
            Financial Support
          </span>
          <h2 className="font-heading font-medium text-4xl md:text-[5rem] tracking-tight uppercase text-brand-text leading-none mb-6">
            Scholarships That Open Doors
          </h2>
          <p className="text-base md:text-lg text-brand-muted max-w-xl font-sans leading-relaxed">
            We identify and apply for scholarships worth millions — making your global education financially accessible regardless of your budget.
          </p>
        </motion.div>

        {/* Count-up Stats */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-24"
        >
          <CountUp prefix="$" target={50} suffix="M+" label="Total Scholarships Secured" />
          <CountUp target={1000} suffix="+" label="Scholarship Programs We Track" />
          <CountUp target={95} suffix="%" label="Application Success Rate" />
        </motion.div>

        {/* Featured Scholarships */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-muted block mb-10">
            Featured Programs
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-brand-text/10">
            {scholarshipPrograms.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                className="border-r border-b border-brand-text/10 p-8 group hover:bg-brand-text/[0.02] transition-colors duration-300"
              >
                <div className="flex flex-col gap-4">
                  <span className="text-[9px] tracking-widest uppercase font-semibold text-brand-muted">{s.country}</span>
                  <h4 className="font-heading font-medium text-lg md:text-xl uppercase tracking-tight text-brand-text leading-tight">
                    {s.name}
                  </h4>
                  <div className="flex flex-col gap-1.5 border-t border-brand-text/10 pt-4 mt-auto">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-brand-muted uppercase tracking-wider">Award</span>
                      <span className="font-semibold text-brand-text">{s.amount}</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-brand-muted uppercase tracking-wider">Deadline</span>
                      <span className="font-semibold text-brand-text">{s.deadline}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
