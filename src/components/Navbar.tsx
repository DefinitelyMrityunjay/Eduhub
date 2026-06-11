import React from 'react';
import { Link } from 'react-router-dom';
import { useCursor } from '../context/CursorContext';
import { Search } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { setCursorType } = useCursor();

  const menuItems = [
    { name: 'Services', href: '#destinations', external: false },
    { name: 'About Us', href: '/about', external: true },
    { name: 'Training and Placement', href: '#scholarships', external: false },
    { name: 'Coaching', href: '#testimonials', external: false },
    { name: 'Study in India', href: '#events', external: false },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 px-8 md:px-16 py-6 bg-brand-bg/95 backdrop-blur-sm border-b border-brand-text/5 transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Left */}
        <a
          href="#"
          className="flex items-center select-none"
          onMouseEnter={() => setCursorType('view')}
          onMouseLeave={() => setCursorType('default')}
        >
          <img
            src="/logo.png"
            alt="TCA Edu Hub"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Menu Center/Right */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 text-xs font-semibold tracking-widest uppercase">
            {menuItems.map((item) =>
              item.external ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="relative text-brand-text hover:text-brand-hover transition-colors py-2 group cursor-none"
                  onMouseEnter={() => setCursorType('view')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-text transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-brand-text hover:text-brand-hover transition-colors py-2 group cursor-none"
                  onMouseEnter={() => setCursorType('view')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-text transition-all duration-300 group-hover:w-full" />
                </a>
              )
            )}
          </div>

          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button
              className="p-2.5 rounded-full hover:bg-brand-text/5 text-brand-text transition-colors flex items-center justify-center cursor-none"
              aria-label="Search"
              onClick={() => {
                const searchEl = document.getElementById('university-finder');
                if (searchEl) searchEl.scrollIntoView({ behavior: 'smooth' });
              }}
              onMouseEnter={() => setCursorType('view')}
              onMouseLeave={() => setCursorType('default')}
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Book Consultation CTA Pill */}
            <a
              href="#consultation"
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-brand-accent text-brand-bg hover:bg-brand-hover transition-all duration-300 text-xs font-semibold tracking-widest uppercase group cursor-none"
              onMouseEnter={() => setCursorType('view')}
              onMouseLeave={() => setCursorType('default')}
            >
              Book Consultation
              <span className="w-5 h-5 rounded-full bg-brand-bg text-brand-text flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-105">
                <svg
                  className="w-3 h-3 stroke-current fill-none stroke-[2]"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => {}}
          aria-label="Toggle Menu"
        >
          <span className="w-6 h-[2px] bg-brand-text" />
          <span className="w-6 h-[2px] bg-brand-text" />
        </button>
      </div>
    </nav>
  );
};
