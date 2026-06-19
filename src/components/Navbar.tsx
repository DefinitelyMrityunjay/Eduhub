import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCursor } from '../context/CursorContext';
import { useModal } from '../context/ModalContext';
import { Search, X, ChevronDown } from 'lucide-react';

interface SubItem {
  label: string;
  href: string;
}

interface MenuItem {
  name: string;
  href: string;
  external: boolean;
  subItems: SubItem[];
}

export const Navbar: React.FC = () => {
  const { setCursorType } = useCursor();
  const { openModal } = useModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileExpanded(null);
  };

  const menuItems: MenuItem[] = [
    {
      name: 'Home',
      href: '/',
      external: true,
      subItems: [
        { label: 'Welcome', href: '/' },
        { label: 'Why Choose Us', href: '#why-us' },
        { label: 'Testimonials', href: '#testimonials' },
      ],
    },
    {
      name: 'About Us',
      href: '/about',
      external: true,
      subItems: [
        { label: 'Our Story', href: '/about' },
        { label: 'Our Team', href: '/about#team' },
        { label: 'Mission & Vision', href: '/about#mission' },
        { label: 'Awards & Recognition', href: '/about#awards' },
      ],
    },
    {
      name: 'Services',
      href: '#services',
      external: false,
      subItems: [
        { label: 'Career Counseling', href: '#services' },
        { label: 'University Selection', href: '#services' },
        { label: 'Visa Document', href: '#services' },
        { label: 'Student Visa', href: '#services' },
        { label: 'SOP | Resume Preparation', href: '#services' },
        { label: 'Spouse Visa', href: '#services' },
        { label: 'Visitor Visa', href: '#services' },
        { label: 'PR | Immigration', href: '#services' },
        { label: 'Pre-Departure Guidance', href: '#services' },
      ],
    },
    {
      name: 'Study Abroad',
      href: '#study-abroad',
      external: false,
      subItems: [
        { label: 'Study in Canada', href: '/study/canada' },
        { label: 'Study in USA', href: '/study/usa' },
        { label: 'Study in UK', href: '/study/uk' },
        { label: 'Study in Australia', href: '/study/australia' },
        { label: 'Study in Germany', href: '/study/germany' },
        { label: 'Study in France', href: '/study/france' },
        { label: 'Study in New Zealand', href: '/study/new-zealand' },
        { label: 'Study in Ireland', href: '/study/ireland' },
        { label: 'Study in Italy', href: '/study/italy' },
        { label: 'Study in Poland', href: '/study/poland' },
        { label: 'Study in Denmark', href: '/study/denmark' },
        { label: 'Study in Switzerland', href: '/study/switzerland' },
        { label: 'Study in Hungary', href: '/study/hungary' },
        { label: 'Study in Malta', href: '/study/malta' },
        { label: 'Study in Latvia', href: '/study/latvia' },
      ],
    },
    {
      name: 'Medical',
      href: '#medical',
      external: false,
      subItems: [
        { label: 'MBBS Abroad', href: '#medical' },
        { label: 'MBBS in Russia', href: '#medical' },
        { label: 'MBBS in Philippines', href: '#medical' },
        { label: 'MBBS in Georgia', href: '#medical' },
        { label: 'MBBS in Kazakhstan', href: '#medical' },
        { label: 'MBBS in Bangladesh', href: '#medical' },
      ],
    },
    {
      name: 'Study in India',
      href: '#study-in-india',
      external: false,
      subItems: [
        { label: 'Engineering', href: '#study-in-india' },
        { label: 'Management (MBA)', href: '#study-in-india' },
        { label: 'Medical (MBBS / BDS)', href: '#study-in-india' },
        { label: 'Law', href: '#study-in-india' },
        { label: 'Design & Arts', href: '#study-in-india' },
      ],
    },
    {
      name: 'Training & Placement',
      href: '#training-placement',
      external: false,
      subItems: [
        { label: 'Interview Preparation', href: '#training-placement' },
        { label: 'Resume Building', href: '#training-placement' },
        { label: 'Soft Skills Training', href: '#training-placement' },
        { label: 'Campus Placement', href: '#training-placement' },
        { label: 'Corporate Training', href: '#training-placement' },
      ],
    },
    {
      name: 'School of Language',
      href: '#school-of-language',
      external: false,
      subItems: [
        { label: 'IELTS Coaching', href: '#school-of-language' },
        { label: 'TOEFL Preparation', href: '#school-of-language' },
        { label: 'PTE Coaching', href: '#school-of-language' },
        { label: 'German Language', href: '#school-of-language' },
        { label: 'French Language', href: '#school-of-language' },
        { label: 'Japanese Language', href: '#school-of-language' },
      ],
    },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 px-8 md:px-16 py-0 bg-brand-bg/95 backdrop-blur-sm border-b border-brand-text/5 transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Left */}
        <a
          href="#"
          className="flex items-center select-none py-4"
          onMouseEnter={() => setCursorType('view')}
          onMouseLeave={() => setCursorType('default')}
        >
          <img
            src="/logo.png"
            alt="TCA Edu Hub"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </a>

        {/* Menu Center/Right — Desktop */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <div className="flex items-center gap-1 xl:gap-2 text-[11px] xl:text-[13px] font-medium text-brand-text/90 tracking-wide whitespace-nowrap capitalize">
            {menuItems.map((item, index) => {
              const isRightEdge = index >= menuItems.length - 3;
              const hasSubItems = item.subItems.length > 0;
              // For items with many sub-items, use a 3-col grid; otherwise a simple list
              const useGrid = item.subItems.length > 4;

              return (
                <div key={item.name} className="relative group/menu">
                  {/* Top-level link */}
                  {item.external ? (
                    <Link
                      to={item.href}
                      className="relative flex items-center gap-1 text-brand-text hover:text-brand-hover transition-colors py-5 px-2 cursor-none"
                      onMouseEnter={() => setCursorType('view')}
                      onMouseLeave={() => setCursorType('default')}
                    >
                      {item.name}
                      {hasSubItems && (
                        <ChevronDown className="w-3 h-3 opacity-50 transition-transform duration-300 group-hover/menu:rotate-180" />
                      )}
                      <span className="absolute bottom-3 left-2 right-2 w-0 h-[1.5px] bg-brand-accent transition-all duration-300 group-hover/menu:w-[calc(100%-16px)]" />
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="relative flex items-center gap-1 text-brand-text hover:text-brand-hover transition-colors py-5 px-2 cursor-none"
                      onMouseEnter={() => setCursorType('view')}
                      onMouseLeave={() => setCursorType('default')}
                    >
                      {item.name}
                      {hasSubItems && (
                        <ChevronDown className="w-3 h-3 opacity-50 transition-transform duration-300 group-hover/menu:rotate-180" />
                      )}
                      <span className="absolute bottom-3 left-2 right-2 w-0 h-[1.5px] bg-brand-accent transition-all duration-300 group-hover/menu:w-[calc(100%-16px)]" />
                    </a>
                  )}

                  {/* Dropdown */}
                  {hasSubItems && (
                    <div
                      className={`absolute top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:translate-y-0 group-hover/menu:pointer-events-auto transition-all duration-300 ease-out z-50 ${
                        isRightEdge ? 'right-0' : 'left-0'
                      }`}
                    >
                      <div
                        className={`${
                          useGrid ? 'w-[600px]' : 'w-[240px]'
                        } bg-brand-bg/98 backdrop-blur-2xl border border-brand-text/10 rounded-xl shadow-[0_16px_48px_-12px_rgba(0,0,0,0.15)] p-5 relative overflow-hidden`}
                      >
                        {/* Decorative glow */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl pointer-events-none" />

                        {useGrid ? (
                          <div className="grid grid-cols-3 gap-x-6 gap-y-3 relative z-10">
                            {item.subItems.map((sub) =>
                              sub.href.startsWith('/') ? (
                                <Link
                                  key={sub.label}
                                  to={sub.href}
                                  className="text-[11px] uppercase font-semibold tracking-wider text-brand-text/80 hover:text-brand-hover hover:translate-x-1 transition-all duration-200 py-1"
                                >
                                  {sub.label}
                                </Link>
                              ) : (
                                <a
                                  key={sub.label}
                                  href={sub.href}
                                  className="text-[11px] uppercase font-semibold tracking-wider text-brand-text/80 hover:text-brand-hover hover:translate-x-1 transition-all duration-200 py-1"
                                >
                                  {sub.label}
                                </a>
                              )
                            )}
                          </div>
                        ) : (
                          <div className="flex flex-col gap-1 relative z-10">
                            {item.subItems.map((sub) => (
                              <a
                                key={sub.label}
                                href={sub.href}
                                className="text-[11px] uppercase font-semibold tracking-wider text-brand-text/80 hover:text-brand-hover hover:translate-x-1 transition-all duration-200 py-1.5 px-1"
                              >
                                {sub.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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
            <button
              onClick={(e) => { e.preventDefault(); openModal(); }}
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
            </button>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <span className="w-6 h-[2px] bg-brand-text" />
          <span className="w-6 h-[2px] bg-brand-text" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-brand-bg flex flex-col items-center justify-start pt-20 p-8 lg:hidden overflow-y-auto">
          <button
            className="absolute top-6 right-8 p-2"
            onClick={closeMenu}
            aria-label="Close Menu"
          >
            <X className="w-8 h-8 text-brand-text" />
          </button>
          <div className="flex flex-col items-center gap-2 text-base md:text-lg font-medium tracking-wide capitalize w-full max-w-sm">
            {menuItems.map((item) => (
              <div key={item.name} className="w-full text-center">
                <button
                  className="w-full flex items-center justify-center gap-2 py-3 text-brand-text hover:text-brand-hover transition-colors"
                  onClick={() => {
                    if (item.subItems.length > 0) {
                      setMobileExpanded(mobileExpanded === item.name ? null : item.name);
                    } else {
                      closeMenu();
                    }
                  }}
                >
                  {item.name}
                  {item.subItems.length > 0 && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        mobileExpanded === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>
                {/* Mobile sub-items */}
                {mobileExpanded === item.name && item.subItems.length > 0 && (
                  <div className="flex flex-col items-center gap-1 pb-3">
                    {item.subItems.map((sub) =>
                      sub.href.startsWith('/') ? (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          onClick={closeMenu}
                          className="text-sm text-brand-text/60 hover:text-brand-hover transition-colors py-1"
                        >
                          {sub.label}
                        </Link>
                      ) : (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={closeMenu}
                          className="text-sm text-brand-text/60 hover:text-brand-hover transition-colors py-1"
                        >
                          {sub.label}
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => { closeMenu(); openModal(); }}
              className="mt-4 px-6 py-3 rounded-full bg-brand-accent text-brand-bg hover:bg-brand-hover transition-all text-sm font-semibold tracking-widest uppercase cursor-none"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
