import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Harpreet Singh',
    role: 'Study Abroad Student',
    quote: 'The entire admission process was handled professionally from start to finish. The counselors guided me at every step, from choosing the right college to preparing my visa file. Their support made the whole journey stress-free.',
  },
  {
    name: 'Simran Kaur',
    role: 'Study Abroad Student',
    quote: 'I had many doubts about studying abroad, but the team at TCA explained everything clearly and honestly. They helped me choose the right program based on my profile instead of simply recommending random options. Highly recommended!',
  },
  {
    name: 'Gurleen Brar',
    role: 'Canada Student',
    quote: 'The staff was always available whenever I had questions. They helped with documentation, application filing, interview preparation, and every small detail. I\'m grateful for their constant guidance throughout the process.',
  },
  {
    name: 'Manpreet Singh',
    role: 'Study Abroad Student',
    quote: 'What impressed me the most was their transparency. There were no false promises — just genuine advice and professional guidance. I would definitely recommend TCA to anyone planning to study abroad.',
  },
  {
    name: 'Jasleen Kaur',
    role: 'Canada Student',
    quote: 'The counselors are knowledgeable, friendly, and genuinely care about students\' futures. Every process was explained in detail, and all deadlines were managed perfectly. Thank you for making my dream possible.',
  },
  {
    name: 'Arshdeep Singh',
    role: 'MBBS Abroad Student',
    quote: 'TCA made the entire medical admission process simple and easy to understand. They patiently answered all my questions and guided me through every stage of admission. Their support gave me complete confidence.',
  },
  {
    name: 'Navjot Kaur',
    role: 'MBBS Abroad Student',
    quote: 'Choosing the right university seemed overwhelming, but TCA helped me compare my options and complete every step smoothly. Their guidance and professionalism made the process much easier than I expected.',
  },
  {
    name: 'Karan Gill',
    role: 'Study Abroad Student',
    quote: 'Excellent experience from the first counseling session until my admission was finalized. The team is responsive, experienced, and always willing to help. I truly appreciate their dedication.',
  },
  {
    name: 'Amandeep Kaur',
    role: 'Canada Student',
    quote: 'I visited multiple consultants before choosing TCA, and it was the best decision I made. Their honest counseling and organized process gave me complete peace of mind throughout my application.',
  },
  {
    name: 'Ramanpreet Singh',
    role: 'Study Abroad Student',
    quote: 'The entire team was supportive, professional, and approachable. They kept me updated throughout the admission process and ensured every document was submitted correctly. I couldn\'t have asked for better guidance.',
  },
  {
    name: 'Navdeep Kaur',
    role: 'Canada Student',
    quote: 'From career counseling to visa guidance, every service was handled with professionalism. I always felt confident because I knew experienced people were managing my application.',
  },
  {
    name: 'Sukhman Singh',
    role: 'Study Abroad Student',
    quote: 'TCA exceeded my expectations. Their personalized guidance, quick responses, and attention to detail made the entire journey smooth and hassle-free. I highly recommend them to anyone planning to study abroad.',
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
            className="shrink-0 w-[320px] md:w-[400px] border border-brand-text/10 hover:border-brand-text/30 transition-colors duration-300 flex flex-col p-8 gap-6"
          >
            {/* Quote mark */}
            <span className="font-heading text-6xl leading-none text-brand-text/10 select-none">"</span>

            <blockquote className="font-sans text-base leading-relaxed text-brand-text/80 flex-1">
              {t.quote}
            </blockquote>

            <div className="border-t border-brand-text/10 pt-5 flex flex-col gap-1">
              <span className="font-heading font-medium text-base uppercase tracking-tight text-brand-text">{t.name}</span>
              <span className="text-[10px] tracking-widest uppercase text-brand-muted font-semibold">{t.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
