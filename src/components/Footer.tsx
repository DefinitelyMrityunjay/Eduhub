import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const Footer: React.FC = () => {
  const { setCursorType } = useCursor();
  const currentYear = new Date().getFullYear();

  const destinations = [
    { label: 'Canada', href: '/study/canada' },
    { label: 'USA', href: '/study/usa' },
    { label: 'United Kingdom', href: '/study/uk' },
    { label: 'Australia', href: '/study/australia' },
    { label: 'Germany', href: '/study/germany' },
    { label: 'France', href: '/study/france' },
    { label: 'New Zealand', href: '/study/new-zealand' },
    { label: 'Ireland', href: '/study/ireland' },
    { label: 'Italy', href: '/study/italy' },
    { label: 'Poland', href: '/study/poland' },
    { label: 'Denmark', href: '/study/denmark' },
    { label: 'Switzerland', href: '/study/switzerland' },
    { label: 'Hungary', href: '/study/hungary' },
    { label: 'Malta', href: '/study/malta' },
    { label: 'Latvia', href: '/study/latvia' },
  ];

  const services = [
    { label: 'Career Counselling', href: '/services/career-counselling' },
    { label: 'University Selection', href: '/services/university-selection' },
    { label: 'Visa Documentation', href: '/services/visa-documentation' },
    { label: 'Student Visa', href: '/services/student-visa' },
    { label: 'SOP & Resume', href: '/services/sop-resume' },
    { label: 'Spouse Visa', href: '/services/spouse-visa' },
    { label: 'Visitor Visa', href: '/services/visitor-visa' },
    { label: 'PR & Immigration', href: '/services/pr-immigration' },
    { label: 'Onshore Services', href: '/services/onshore-services' },
  ];

  const company = [
    { label: 'About TCA Edu Hub', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Mission & Vision', href: '/about#mission' },
    { label: 'Medical Admissions', href: '/medical' },
    { label: 'School of Languages', href: '/languages' },
    { label: 'MBBS Seat Matrix', href: '/seat-matrix' },
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
              <a href="mailto:hello@tcaeduhub.com" className="text-[11px] text-brand-text tracking-wide hover:text-brand-muted transition-colors cursor-pointer"
                onMouseEnter={() => setCursorType('view')} onMouseLeave={() => setCursorType('default')}>
                hello@tcaeduhub.com
              </a>
              <a href="tel:+911234567890" className="text-[11px] text-brand-text tracking-wide hover:text-brand-muted transition-colors cursor-pointer"
                onMouseEnter={() => setCursorType('view')} onMouseLeave={() => setCursorType('default')}>
                +91 12345 67890
              </a>
              <span className="text-[11px] text-brand-muted tracking-wide">Mumbai · Delhi · Bangalore · London</span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4 max-w-sm w-full">
            <span className="text-[11px] tracking-widest uppercase font-semibold text-brand-muted">Newsletter</span>
            <p className="text-sm text-brand-muted font-sans leading-relaxed">
              Scholarship alerts, deadlines, and study abroad guides — direct to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row border border-brand-text/20 hover:border-brand-text transition-colors duration-300">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-5 py-3.5 text-[12px] font-sans text-brand-text placeholder:text-brand-muted/50 outline-none tracking-wide"
              />
              <button
                className="px-5 py-3.5 bg-brand-accent text-brand-bg text-[11px] font-semibold tracking-widest uppercase hover:bg-brand-hover transition-colors duration-300 cursor-pointer border-t border-brand-text/20 sm:border-t-0 sm:border-l"
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
          <div className="flex flex-col gap-4">
            <span className="text-[11px] tracking-widest uppercase font-semibold text-brand-muted mb-1">Destinations</span>
            {destinations.map((item) => (
              <Link key={item.href} to={item.href} className="text-sm font-sans text-brand-text hover:text-brand-muted transition-colors cursor-pointer w-fit" onMouseEnter={() => setCursorType('view')} onMouseLeave={() => setCursorType('default')}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[11px] tracking-widest uppercase font-semibold text-brand-muted mb-1">Services</span>
            {services.map((item) => (
              <Link key={item.href} to={item.href} className="text-sm font-sans text-brand-text hover:text-brand-muted transition-colors cursor-pointer w-fit" onMouseEnter={() => setCursorType('view')} onMouseLeave={() => setCursorType('default')}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[11px] tracking-widest uppercase font-semibold text-brand-muted mb-1">Company</span>
            {company.map((item) => (
              <Link key={item.href} to={item.href} className="text-sm font-sans text-brand-text hover:text-brand-muted transition-colors cursor-pointer w-fit" onMouseEnter={() => setCursorType('view')} onMouseLeave={() => setCursorType('default')}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[11px] tracking-widest uppercase font-semibold text-brand-muted mb-1">Follow Us</span>
            {['Instagram', 'LinkedIn', 'YouTube', 'Facebook'].map((s) => (
              <span key={s} className="text-sm font-sans text-brand-muted w-fit">{s}</span>
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
            <span>Designed with Intention</span>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};
