import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const filterOptions = {
  country: ['Any Country', 'Canada', 'USA', 'UK', 'Australia', 'Germany', 'France', 'New Zealand', 'Ireland', 'Italy', 'Poland', 'Denmark', 'Switzerland', 'Hungary', 'Malta', 'Latvia'],
  course: ['Any Course', 'Computer Science', 'Business', 'Engineering', 'Medicine', 'Law', 'Arts & Design'],
  budget: ['Any Budget', 'Under $15K', '$15K–$30K', '$30K–$50K', '$50K+'],
  intake: ['Any Intake', 'Sep 2026', 'Jan 2027', 'May 2027', 'Sep 2027'],
  degree: ['Any Level', 'Bachelor\'s', 'Master\'s', 'PhD', 'Diploma'],
};

interface UniversityResult {
  name: string;
  country: string;
  course: string;
  tuition: string;
  intake: string;
  image: string;
}

const allResults: UniversityResult[] = [
  { name: 'McGill University', country: 'Canada', course: 'Business', tuition: 'CAD $28,000/yr', intake: 'Sep 2026', image: 'https://images.unsplash.com/photo-1569959220744-ff553533f492?q=80&w=400&auto=format&fit=crop' },
  { name: 'University of Oxford', country: 'UK', course: 'Law', tuition: '£28,000/yr', intake: 'Oct 2026', image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=400&auto=format&fit=crop' },
  { name: 'University of Melbourne', country: 'Australia', course: 'Engineering', tuition: 'AUD $36,000/yr', intake: 'Feb 2027', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=400&auto=format&fit=crop' },
  { name: 'TU Munich', country: 'Germany', course: 'Engineering', tuition: '€0/yr', intake: 'Oct 2026', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=400&auto=format&fit=crop' },
  { name: 'Trinity College Dublin', country: 'Ireland', course: 'Computer Science', tuition: '€18,000/yr', intake: 'Sep 2026', image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?q=80&w=400&auto=format&fit=crop' },
  { name: 'Sorbonne University', country: 'France', course: 'Business', tuition: '€3,500/yr', intake: 'Sep 2026', image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=400&auto=format&fit=crop' },
];

type FilterKey = keyof typeof filterOptions;

export const UniversityFinder: React.FC = () => {
  const { setCursorType } = useCursor();
  const [filters, setFilters] = useState<Record<FilterKey, string>>({
    country: 'Any Country',
    course: 'Any Course',
    budget: 'Any Budget',
    intake: 'Any Intake',
    degree: 'Any Level',
  });
  const [activeFilter, setActiveFilter] = useState<FilterKey | null>(null);

  const handleFilter = (key: FilterKey, val: string) => {
    setFilters(f => ({ ...f, [key]: val }));
    setActiveFilter(null);
  };

  const filterLabels: Record<FilterKey, string> = {
    country: 'Country',
    course: 'Course',
    budget: 'Budget',
    intake: 'Intake',
    degree: 'Degree',
  };

  return (
    <section id="university-finder" className="bg-brand-bg py-32 px-8 md:px-16 border-b border-brand-text/10">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-muted block mb-3">
            Find Your Path
          </span>
          <h2 className="font-heading font-medium text-4xl md:text-6xl tracking-tight uppercase text-brand-text">
            University Finder
          </h2>
        </motion.div>

        {/* Floating Filters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="flex flex-wrap gap-3 mb-14"
        >
          {(Object.keys(filterOptions) as FilterKey[]).map((key) => (
            <div key={key} className="relative">
              <button
                className={`px-5 py-2.5 text-[11px] font-semibold tracking-widest uppercase border transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  activeFilter === key
                    ? 'bg-brand-text text-brand-bg border-brand-text'
                    : filters[key] !== filterOptions[key][0]
                    ? 'bg-brand-text/5 text-brand-text border-brand-text'
                    : 'text-brand-muted border-brand-text/20 hover:border-brand-text hover:text-brand-text'
                }`}
                onClick={() => setActiveFilter(activeFilter === key ? null : key)}
                onMouseEnter={() => setCursorType('view')}
                onMouseLeave={() => setCursorType('default')}
              >
                {filterLabels[key]}: {filters[key]}
                <span className={`transition-transform duration-200 ${activeFilter === key ? 'rotate-180' : ''}`}>▾</span>
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {activeFilter === key && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 left-0 z-50 bg-brand-bg border border-brand-text/20 min-w-[180px] shadow-lg"
                  >
                    {filterOptions[key].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleFilter(key, opt)}
                        className="w-full text-left px-5 py-3 text-[11px] font-semibold tracking-widest uppercase hover:bg-brand-text hover:text-brand-bg transition-colors duration-200 cursor-pointer"
                        onMouseEnter={() => setCursorType('view')}
                        onMouseLeave={() => setCursorType('default')}
                      >
                        {opt}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Reset */}
          <button
            className="px-5 py-2.5 text-[11px] font-semibold tracking-widest uppercase text-brand-muted hover:text-brand-text transition-colors duration-200 cursor-pointer"
            onClick={() => setFilters({ country: 'Any Country', course: 'Any Course', budget: 'Any Budget', intake: 'Any Intake', degree: 'Any Level' })}
            onMouseEnter={() => setCursorType('view')}
            onMouseLeave={() => setCursorType('default')}
          >
            Clear All
          </button>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {allResults.map((uni, i) => (
              <motion.div
                key={uni.name}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease }}
                className="group border border-brand-text/10 hover:border-brand-text/30 transition-colors duration-300 cursor-pointer overflow-hidden"
                onMouseEnter={() => setCursorType('view')}
                onMouseLeave={() => setCursorType('default')}
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[9px] tracking-widest uppercase text-brand-muted font-semibold block mb-2">{uni.country}</span>
                  <h4 className="font-heading font-medium text-lg uppercase tracking-tight text-brand-text mb-4 leading-tight">{uni.name}</h4>
                  <div className="flex flex-col gap-1.5 border-t border-brand-text/10 pt-4">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-brand-muted uppercase tracking-wider">Course</span>
                      <span className="text-brand-text font-semibold">{uni.course}</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-brand-muted uppercase tracking-wider">Tuition</span>
                      <span className="text-brand-text font-semibold">{uni.tuition}</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-brand-muted uppercase tracking-wider">Intake</span>
                      <span className="text-brand-text font-semibold">{uni.intake}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
