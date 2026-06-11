import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface Testimonial {
  name: string;
  university: string;
  country: string;
  program: string;
  quote: string;
  image: string;
  year: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Arjun Mehta',
    university: 'University of Toronto',
    country: 'Canada',
    program: 'MSc Computer Science',
    quote: 'TCA Edu Hub made the impossible feel effortless. From shortlisting universities to getting my study permit, every step was handled with precision.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    year: 'Class of 2024',
  },
  {
    name: 'Priya Sharma',
    university: 'University of Manchester',
    country: 'UK',
    program: 'MBA International',
    quote: 'I was terrified of the process, but my counsellor knew every detail. I got accepted with a £12,000 scholarship. Life-changing.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    year: 'Class of 2024',
  },
  {
    name: 'Ravi Krishnan',
    university: 'TU Munich',
    country: 'Germany',
    program: 'MSc Mechanical Engineering',
    quote: 'Tuition-free education in Germany sounded too good to be true. TCA Edu Hub not only proved it was real — they got me there in 8 months.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    year: 'Class of 2023',
  },
  {
    name: 'Sana Fatima',
    university: 'University of Melbourne',
    country: 'Australia',
    program: 'Bachelor of Law',
    quote: 'The visa process was my biggest fear. They handled everything. I landed in Melbourne with zero stress. Now I\'m graduating next month.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
    year: 'Class of 2025',
  },
  {
    name: 'Kabir Nair',
    university: 'Columbia University',
    country: 'USA',
    program: 'MSc Data Science',
    quote: 'My SOP was transformed completely by the team. I applied to 6 schools and got into all 6. Columbia was my dream and I made it.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    year: 'Class of 2024',
  },
];

export const Testimonials: React.FC = () => {
  const { setCursorType } = useCursor();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (trackRef.current?.offsetLeft ?? 0));
    setScrollLeft(trackRef.current?.scrollLeft ?? 0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => setIsDragging(false);

  return (
    <section id="testimonials" className="bg-brand-bg py-32 border-b border-brand-text/10 overflow-hidden">
      <div className="px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-muted block mb-3">
              Student Stories
            </span>
            <h2 className="font-heading font-medium text-4xl md:text-6xl tracking-tight uppercase text-brand-text">
              They Made It. You're Next.
            </h2>
          </div>
          <p className="text-sm text-brand-muted max-w-xs font-sans leading-relaxed">
            Real students. Real journeys. Real results from 50,000+ students we've helped worldwide.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Drag Track */}
      <div
        ref={trackRef}
        className={`flex gap-6 overflow-x-auto scrollbar-hide pl-8 md:pl-16 pr-8 md:pr-16 pb-4 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ scrollbarWidth: 'none' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onMouseEnter={() => setCursorType('view')}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.1, ease }}
            className="shrink-0 w-[340px] md:w-[420px] border border-brand-text/10 hover:border-brand-text/30 transition-colors duration-300 flex flex-col"
          >
            {/* Portrait */}
            <div className="h-64 overflow-hidden">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                draggable={false}
              />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col gap-5 flex-1">
              <blockquote className="font-heading font-medium text-xl md:text-2xl leading-tight text-brand-text tracking-tight">
                "{t.quote}"
              </blockquote>

              <div className="mt-auto border-t border-brand-text/10 pt-5 flex flex-col gap-1">
                <span className="font-heading font-medium text-base uppercase tracking-tight text-brand-text">{t.name}</span>
                <span className="text-[10px] tracking-widest uppercase text-brand-muted font-semibold">{t.program}</span>
                <span className="text-[10px] tracking-widest uppercase text-brand-muted font-semibold">{t.university}, {t.country} · {t.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
