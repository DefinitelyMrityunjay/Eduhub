import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface Event {
  type: string;
  title: string;
  date: string;
  location: string;
  spots: string;
  image: string;
}

const events: Event[] = [
  {
    type: 'Education Fair',
    title: 'Global Study Abroad Expo 2025',
    date: 'Aug 15, 2025',
    location: 'Mumbai, India',
    spots: '500 seats',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop',
  },
  {
    type: 'Visa Workshop',
    title: 'UK Student Visa Masterclass',
    date: 'Jul 20, 2025',
    location: 'Online — Zoom',
    spots: '200 seats',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop',
  },
  {
    type: 'University Webinar',
    title: 'Meet the Admissions Team: University of Toronto',
    date: 'Jul 28, 2025',
    location: 'Online — Teams',
    spots: '100 seats',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop',
  },
  {
    type: 'Scholarship Session',
    title: 'Chevening & Fulbright Prep Workshop',
    date: 'Aug 5, 2025',
    location: 'Delhi & Online',
    spots: '150 seats',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop',
  },
];

export const Events: React.FC = () => {
  const { setCursorType } = useCursor();

  return (
    <section id="events" className="bg-brand-bg py-32 px-8 md:px-16 border-b border-brand-text/10">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-muted block mb-3">
              Upcoming
            </span>
            <h2 className="font-heading font-medium text-4xl md:text-6xl tracking-tight uppercase text-brand-text">
              Events & Workshops
            </h2>
          </div>
          <a
            href="#all-events"
            className="inline-flex items-center gap-2 border border-brand-text/20 px-6 py-3 text-[10px] font-semibold tracking-widest uppercase text-brand-text hover:bg-brand-text hover:text-brand-bg transition-all duration-300 cursor-pointer w-fit"
            onMouseEnter={() => setCursorType('view')}
            onMouseLeave={() => setCursorType('default')}
          >
            View All Events →
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className="group border border-brand-text/10 hover:border-brand-text/30 transition-colors duration-300 overflow-hidden cursor-pointer"
              onMouseEnter={() => setCursorType('view')}
              onMouseLeave={() => setCursorType('default')}
            >
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] tracking-widest uppercase font-semibold text-brand-muted border border-brand-text/15 px-3 py-1.5">
                    {event.type}
                  </span>
                  <span className="text-[10px] tracking-wider text-brand-muted font-semibold">{event.spots}</span>
                </div>

                <h3 className="font-heading font-medium text-xl md:text-2xl uppercase tracking-tight text-brand-text leading-tight mb-5 transition-transform duration-300 group-hover:translate-x-1">
                  {event.title}
                </h3>

                <div className="flex flex-col gap-1.5 border-t border-brand-text/10 pt-5">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-brand-muted uppercase tracking-wider">Date</span>
                    <span className="text-brand-text font-semibold">{event.date}</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-brand-muted uppercase tracking-wider">Location</span>
                    <span className="text-brand-text font-semibold">{event.location}</span>
                  </div>
                </div>

                <button
                  className="mt-6 w-full py-3 border border-brand-text/20 text-[10px] font-semibold tracking-widest uppercase text-brand-text hover:bg-brand-text hover:text-brand-bg transition-all duration-300 group-hover:border-brand-text cursor-pointer"
                  onMouseEnter={() => setCursorType('view')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  Register Now →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
