import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const Footer: React.FC = () => {
  const { setCursorType } = useCursor();
  const currentYear = new Date().getFullYear();

  const cols = [
    {
      heading: 'Destinations',
      links: ['Canada', 'USA', 'United Kingdom', 'Australia', 'Germany', 'France', 'New Zealand', 'Ireland', 'Italy', 'Poland', 'Denmark', 'Switzerland', 'Hungary', 'Malta', 'Latvia'],
    },
    {
      heading: 'Services',
      links: ['University Counselling', 'SOP Writing', 'Scholarship Guidance', 'Visa Processing', 'Pre-Departure Support'],
    },
    {
      heading: 'Company',
      links: ['About TCA Edu Hub', 'Our Team', 'Success Stories', 'Events', 'Careers', 'Contact Us'],
    },
  ];

  return (
    <footer className="bg-brand-bg border-t border-brand-text/10 pt-24 pb-12 px-8 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        {/* Top Row: Tagline + Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, ease }}
          className="flex flex-col md:flex-row justify-between gap-12 items-start border-b border-brand-text/10 pb-20"
        >
          <div className="flex flex-col gap-4 max-w-sm">
            <img src="/logo.png" alt="TCA Edu Hub" className="h-14 w-auto object-contain" />
            <p className="text-sm font-sans text-brand-muted leading-relaxed">
              Your path to success in global education. Personalised counselling, admissions support, scholarships and visa guidance for students worldwide.
            </p>
            <div className="flex flex-col gap-1.5 mt-2">
              <a href="mailto:hello@tcaeduhub.com" className="text-[11px] text-brand-text tracking-wide hover:text-brand-muted transition-colors cursor-none"
                onMouseEnter={() => setCursorType('view')} onMouseLeave={() => setCursorType('default')}>
                hello@tcaeduhub.com
              </a>
              <a href="tel:+911234567890" className="text-[11px] text-brand-text tracking-wide hover:text-brand-muted transition-colors cursor-none"
                onMouseEnter={() => setCursorType('view')} onMouseLeave={() => setCursorType('default')}>
                +91 12345 67890
              </a>
              <span className="text-[11px] text-brand-muted tracking-wide">Mumbai · Delhi · Bangalore · London</span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4 max-w-sm w-full">
            <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-muted">Newsletter</span>
            <p className="text-sm text-brand-muted font-sans leading-relaxed">
              Scholarship alerts, deadlines, and study abroad guides — direct to your inbox.
            </p>
            <div className="flex gap-0 border border-brand-text/20 hover:border-brand-text transition-colors duration-300">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-5 py-3.5 text-[12px] font-sans text-brand-text placeholder:text-brand-muted/50 outline-none tracking-wide"
              />
              <button
                className="px-5 py-3.5 bg-brand-accent text-brand-bg text-[10px] font-semibold tracking-widest uppercase hover:bg-brand-hover transition-colors duration-300 cursor-none"
                onMouseEnter={() => setCursorType('view')}
                onMouseLeave={() => setCursorType('default')}
              >
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Link Columns */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10"
        >
          {cols.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-muted mb-1">{col.heading}</span>
              {col.links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-sans text-brand-text hover:text-brand-muted transition-colors cursor-none w-fit"
                  onMouseEnter={() => setCursorType('view')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}

          {/* Social Column */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-muted mb-1">Follow Us</span>
            {['Instagram', 'LinkedIn', 'YouTube', 'Facebook', 'X / Twitter'].map((s) => (
              <a key={s} href="#" className="text-sm font-sans text-brand-text hover:text-brand-muted transition-colors cursor-none w-fit"
                onMouseEnter={() => setCursorType('view')} onMouseLeave={() => setCursorType('default')}>
                {s}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Massive Brand Mark */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="border-t border-brand-text/10 pt-12 flex flex-col gap-8 select-none"
        >
          <div className="flex justify-center">
            <img src="/logo.png" alt="TCA Edu Hub" className="h-24 md:h-32 w-auto object-contain opacity-10" />
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between text-[10px] tracking-wider uppercase font-semibold text-brand-muted gap-3">
            <span>© {currentYear} TCA Edu Hub. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-brand-text cursor-none" onMouseEnter={() => setCursorType('view')} onMouseLeave={() => setCursorType('default')}>Privacy Policy</a>
              <a href="#terms" className="hover:text-brand-text cursor-none" onMouseEnter={() => setCursorType('view')} onMouseLeave={() => setCursorType('default')}>Terms of Use</a>
              <span>Designed with Intention</span>
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};
