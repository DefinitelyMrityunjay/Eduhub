import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useCursor } from '../context/CursorContext';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface Country {
  name: string;
  flag: string;
  image: string;
  tuition: string;
  workRights: string;
  postStudyVisa: string;
  tag: string;
}

const countries: Country[] = [
  {
    name: 'Canada',
    flag: '🇨🇦',
    image: 'https://images.unsplash.com/photo-1569959220744-ff553533f492?q=80&w=800&auto=format&fit=crop',
    tuition: 'CAD 19K–27K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'PGWP 3 Years',
    tag: 'PR Pathway',
  },
  {
    name: 'USA',
    flag: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800&auto=format&fit=crop',
    tuition: 'USD 20K–60K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'OPT 3 Years',
    tag: 'Top Destination',
  },
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop',
    tuition: '£12K–£30K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'Graduate Route 2 Yrs',
    tag: 'Prestigious',
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop',
    tuition: 'AUD 20K–45K/yr',
    workRights: '48 hrs/fortnight',
    postStudyVisa: 'TGV 2–4 Years',
    tag: 'Lifestyle & Quality',
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop',
    tuition: '€0–€1.5K/yr',
    workRights: '120 days/yr',
    postStudyVisa: '18 Months',
    tag: 'Tuition Free',
  },
  {
    name: 'France',
    flag: '🇫🇷',
    image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=800&auto=format&fit=crop',
    tuition: '€170–€4K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'Job Seeker Visa',
    tag: 'European Hub',
  },
  {
    name: 'New Zealand',
    flag: '🇳🇿',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=800&auto=format&fit=crop',
    tuition: 'NZD 22K–40K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'Open Work Visa',
    tag: 'Nature & Quality',
  },
  {
    name: 'Ireland',
    flag: '🇮🇪',
    image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?q=80&w=800&auto=format&fit=crop',
    tuition: '€10K–€25K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'Stay Back 2 Yrs',
    tag: 'Silicon Valley EU',
  },
  {
    name: 'Italy',
    flag: '🇮🇹',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop',
    tuition: '€1K–€6K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'EU Job Access',
    tag: 'Art & Culture',
  },
  {
    name: 'Poland',
    flag: '🇵🇱',
    image: 'https://images.unsplash.com/photo-1553422734-fd8dd260a116?q=80&w=800&auto=format&fit=crop',
    tuition: '€2K–€6K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'EU Job Access',
    tag: 'Affordable Europe',
  },
  {
    name: 'Denmark',
    flag: '🇩🇰',
    image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=800&auto=format&fit=crop',
    tuition: '€6K–€16K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'Job Seeker 6 Mo',
    tag: 'Innovation Hub',
  },
  {
    name: 'Switzerland',
    flag: '🇨🇭',
    image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=800&auto=format&fit=crop',
    tuition: 'CHF 1K–8K/yr',
    workRights: '15 hrs/week',
    postStudyVisa: 'Job Seeker 6 Mo',
    tag: 'World-Class',
  },
  {
    name: 'Hungary',
    flag: '🇭🇺',
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=800&auto=format&fit=crop',
    tuition: '€2.5K–€8K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'EU Job Access',
    tag: 'Affordable EU',
  },
  {
    name: 'Malta',
    flag: '🇲🇹',
    image: 'https://images.unsplash.com/photo-1611157228462-5a5e2eb9e314?q=80&w=800&auto=format&fit=crop',
    tuition: '€5K–€12K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'EU Job Access',
    tag: 'Mediterranean Life',
  },
  {
    name: 'Latvia',
    flag: '🇱🇻',
    image: 'https://images.unsplash.com/photo-1569744829292-d78b14e125ee?q=80&w=800&auto=format&fit=crop',
    tuition: '€2K–€6K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'EU Job Access',
    tag: 'Baltic Europe',
  },
];

interface CardProps extends Country {
  index: number;
}

const CountryCard: React.FC<CardProps> = ({ name, image, tuition, workRights, postStudyVisa, tag, index }) => {
  const { setCursorType } = useCursor();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: fromLeft ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, delay: (index % 4) * 0.1, ease }}
      className="relative overflow-hidden group cursor-pointer h-[56vw] min-h-[200px] sm:h-[60vh] sm:min-h-[380px]"
      onMouseEnter={() => setCursorType('view')}
      onMouseLeave={() => setCursorType('default')}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7, ease }}
        />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
        <div className="transform transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:-translate-y-2">
          <span className="text-[11px] tracking-widest uppercase text-white/50 mb-2 block">
            {tag}
          </span>
          <h3 className="font-heading font-medium text-3xl lg:text-4xl uppercase tracking-tight mb-4">
            {name}
          </h3>

          {/* Metrics — slide up on hover */}
          <div className="sm:overflow-hidden sm:max-h-0 sm:group-hover:max-h-40 transition-all duration-500 ease-[0.22,1,0.36,1]">
            <div className="flex flex-col gap-2 pt-2 border-t border-white/20">
              <div className="flex justify-between text-[11px]">
                <span className="text-white/50 uppercase tracking-wider">Avg. Tuition</span>
                <span className="font-semibold">{tuition}</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-white/50 uppercase tracking-wider">Work Rights</span>
                <span className="font-semibold">{workRights}</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-white/50 uppercase tracking-wider">Post-Study Visa</span>
                <span className="font-semibold">{postStudyVisa}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Countries: React.FC = () => {
  return (
    <section id="destinations" className="bg-brand-bg py-24 border-y border-brand-text/10">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease }}
      >
        <div className="px-8 md:px-16 mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-muted block mb-3">
            Global Destinations
          </span>
          <h2 className="font-heading font-medium text-4xl md:text-6xl tracking-tight uppercase text-brand-text">
            Where Will You Study?
          </h2>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full border-t border-brand-text/10">
          {countries.map((country, i) => (
            <CountryCard key={country.name} {...country} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
