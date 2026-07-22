import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useCursor } from '../context/CursorContext';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface University {
  name: string;
  country: string;
  rank: string;
  image: string;
  speed: number;
  className: string;
}

const universities: University[] = [
  { name: 'George Brown College', country: 'Canada', rank: 'Top Partner', image: 'https://images.unsplash.com/photo-1569959220744-ff553533f492?q=80&w=800&auto=format&fit=crop', speed: 1.2, className: 'h-[260px] sm:h-[65vh]' },
  { name: 'London Metropolitan University', country: 'UK', rank: 'Top Partner', image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=800&auto=format&fit=crop', speed: 0.8, className: 'h-[220px] sm:h-[48vh] sm:mt-16' },
  { name: 'GISMA University of Applied Sciences', country: 'Germany', rank: 'Top Ranked', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop', speed: 1.5, className: 'h-[240px] sm:h-[55vh] sm:-mt-8' },
  { name: 'Texas State University', country: 'USA', rank: 'Top Partner', image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?q=80&w=800&auto=format&fit=crop', speed: 1.0, className: 'h-[240px] sm:h-[60vh] sm:mt-10' },
  { name: 'Seneca Polytechnic', country: 'Canada', rank: 'Top Partner', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop', speed: 1.3, className: 'h-[220px] sm:h-[50vh]' },
  { name: 'University of Hertfordshire', country: 'UK', rank: 'Top Ranked', image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=800&auto=format&fit=crop', speed: 0.9, className: 'h-[260px] sm:h-[62vh] sm:mt-20' },
  { name: 'SRH University', country: 'Germany', rank: 'Top Partner', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop', speed: 1.1, className: 'h-[240px] sm:h-[55vh] sm:-mt-4' },
  { name: 'San Francisco State University', country: 'USA', rank: 'Top Ranked', image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=800&auto=format&fit=crop', speed: 1.4, className: 'h-[220px] sm:h-[48vh] sm:mt-12' },
];

const marqueeNames = [
  // Canada
  'Laurentian University', 'Algoma University', 'NorQuest College', 'Centennial College', 'Flemming College',
  'Focus College', 'George Brown', 'St. Clair College', 'Sheridan College', 'Seneca Polytechnic',
  // USA
  'St. Cloud State University', 'Central Michigan University', 'Texas State University',
  'South Dakota State University', 'San Francisco State University',
  // UK
  'London Metropolitan University', 'Regent College London', 'Richmond American University London',
  'University of Brighton', 'University of Hertfordshire',
  // Germany
  'GISMA University of Applied Sciences', 'SRH University',
  // Other partners
  'Lancaster University', 'Alte University Georgia', 'Samarkand State Medical University', 'Tashkent Medical University',
];

interface GridItemProps extends University {
  index: number;
}

const GridItem: React.FC<GridItemProps> = ({ name, country, rank, image, speed, className, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setCursorType } = useCursor();
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const yOffset = (speed - 1.0) * 100;
  const y = useTransform(scrollYProgress, [0, 1], [yOffset, -yOffset]);

  const setRefs = (node: HTMLDivElement | null) => {
    (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    inViewRef(node);
  };

  return (
    <div
      ref={setRefs}
      className={`relative overflow-hidden group rounded-xl cursor-pointer ${className}`}
      onMouseEnter={() => setCursorType('view')}
      onMouseLeave={() => setCursorType('default')}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <motion.div className="w-full h-full" style={{ y }}>
        <motion.div
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={inView ? { clipPath: 'inset(0% 0 0 0)' } : {}}
          transition={{ duration: 1.2, delay: index * 0.08, ease }}
          className="relative w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent z-10" />
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05, filter: 'brightness(110%)' }}
            transition={{ duration: 0.8, ease }}
          />
          <div className="absolute bottom-5 left-5 right-5 text-white z-20">
            <span className="text-[11px] tracking-widest uppercase text-white/60 font-semibold block mb-1">
              {country} — {rank}
            </span>
            <h4 className="font-heading font-medium text-lg md:text-xl uppercase tracking-tight leading-none">
              {name}
            </h4>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export const UniversityShowcase: React.FC = () => {
  const repeatedNames = [...marqueeNames, ...marqueeNames, ...marqueeNames];

  return (
    <section id="showcase" className="bg-brand-bg py-32 px-8 md:px-16 border-b border-brand-text/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-muted block mb-3">
              Partner Universities
            </span>
            <h2 className="font-heading font-medium text-4xl md:text-6xl tracking-tight uppercase text-brand-text">
              World-Class Institutions
            </h2>
          </div>
          <p className="text-sm md:text-base text-brand-muted max-w-sm font-sans leading-relaxed">
            25+ university partners across 6 countries. We connect you with institutions that shape global leaders.
          </p>
        </motion.div>

        {/* Asymmetric 4-column masonry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 items-start mb-24">
          <div className="flex flex-col gap-6">
            <GridItem {...universities[0]} index={0} />
            <GridItem {...universities[4]} index={4} />
          </div>
          <div className="flex flex-col gap-6">
            <GridItem {...universities[1]} index={1} />
            <GridItem {...universities[5]} index={5} />
          </div>
          <div className="flex flex-col gap-6">
            <GridItem {...universities[2]} index={2} />
            <GridItem {...universities[6]} index={6} />
          </div>
          <div className="flex flex-col gap-6">
            <GridItem {...universities[3]} index={3} />
            <GridItem {...universities[7]} index={7} />
          </div>
        </div>
      </div>

      {/* Infinite marquee of university names */}
      <div className="relative flex overflow-x-hidden border-y border-brand-text/10 py-7 select-none group">
        <div className="whitespace-nowrap flex items-center gap-14 animate-marquee-left group-hover:[animation-play-state:paused]">
          {repeatedNames.map((name, idx) => (
            <span key={idx} className="font-heading font-medium text-3xl md:text-5xl uppercase tracking-tight text-brand-text flex items-center gap-14">
              <span>{name}</span>
              <span className="w-2 h-2 rounded-full bg-brand-text/30 inline-block" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
