import React, { useEffect, useMemo, useState } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { CursorProvider } from '../context/CursorContext';
import { ModalProvider } from '../context/ModalContext';
import { ConsultationModal } from '../components/ConsultationModal';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useCursor } from '../context/CursorContext';
import { seatMatrixData } from '../data/seatMatrixData';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const curtainEase = [0.76, 0, 0.24, 1] as [number, number, number, number];

const Hero: React.FC = () => (
  <section className="relative min-h-[55vh] flex items-end justify-start overflow-hidden bg-brand-text pt-28">
    <motion.div
      className="absolute inset-0 z-50 bg-brand-text origin-top"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 1.0, delay: 0.05, ease: curtainEase }}
    />
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-brand-text" />
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle at 25% 50%, #ffffff 0%, transparent 60%), radial-gradient(circle at 75% 20%, #ffffff 0%, transparent 50%)' }}
      />
    </div>
    <div className="relative z-10 w-full px-8 md:px-16 pb-16 md:pb-24 max-w-7xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0, ease }}
        className="text-[10px] tracking-[0.3em] uppercase font-semibold text-white/40 mb-5"
      >
        TCA Edu Hub — NEET UG Counselling
      </motion.p>
      <div className="overflow-hidden mb-2">
        <motion.h1
          initial={{ y: '110%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 0.9, delay: 1.05, ease }}
          className="font-heading text-[clamp(40px,7vw,100px)] font-medium tracking-[-0.04em] leading-[0.88] uppercase text-white"
        >
          MBBS Seat
          <br />
          Matrix
        </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease }}
        className="text-base md:text-lg text-white/55 max-w-2xl font-sans leading-relaxed mt-5"
      >
        Tentative MBBS seat allocation for A.Y. 2026-27 across government and private medical colleges in India. Data sourced from Aone Medics.
      </motion.p>
    </div>
  </section>
);

const StatsStrip: React.FC<{ totalColleges: number; totalSeats: number; stateCount: number }> = ({ totalColleges, totalSeats, stateCount }) => {
  const stats = [
    { value: stateCount.toString(), label: 'States Covered' },
    { value: totalColleges.toString() + '+', label: 'Medical Colleges' },
    { value: totalSeats.toLocaleString() + '+', label: 'Total MBBS Seats' },
    { value: 'A.Y. 2026-27', label: 'Academic Year' },
  ];
  return (
    <section className="py-14 px-8 md:px-16 bg-brand-text">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08, ease }}
            className="flex flex-col gap-2"
          >
            <span className="font-heading text-[clamp(28px,3.5vw,52px)] font-medium tracking-[-0.04em] leading-none text-white">
              {stat.value}
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-white/40">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const SeatMatrixTable: React.FC = () => {
  const { setCursorType } = useCursor();
  const [search, setSearch] = useState('');
  const [activeState, setActiveState] = useState<string | null>(null);
  const [expandedStates, setExpandedStates] = useState<Set<string>>(new Set());
  const [typeFilter, setTypeFilter] = useState<'ALL' | 'GOVT' | 'PVT'>('ALL');

  const filteredData = useMemo(() => {
    const q = search.toLowerCase().trim();
    return seatMatrixData
      .filter((s) => activeState === null || s.state === activeState)
      .map((s) => ({
        ...s,
        colleges: s.colleges.filter((c) => {
          const matchesType = typeFilter === 'ALL' || c.type === typeFilter;
          const matchesSearch = !q || c.name.toLowerCase().includes(q) || s.state.toLowerCase().includes(q);
          return matchesType && matchesSearch;
        }),
      }))
      .filter((s) => s.colleges.length > 0);
  }, [search, activeState, typeFilter]);

  const toggleState = (state: string) => {
    setExpandedStates((prev) => {
      const next = new Set(prev);
      if (next.has(state)) next.delete(state);
      else next.add(state);
      return next;
    });
  };

  useEffect(() => {
    if (search.trim() || typeFilter !== 'ALL') {
      setExpandedStates(new Set(seatMatrixData.map((s) => s.state)));
    }
  }, [search, typeFilter]);

  const totalSeatsForFiltered = filteredData.reduce(
    (sum, s) => sum + s.colleges.reduce((cs, c) => cs + c.seats, 0),
    0,
  );

  return (
    <section className="py-20 md:py-28 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-10"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand-muted mb-3">Tentative Data</p>
          <h2 className="font-heading text-[clamp(28px,4vw,52px)] font-medium tracking-[-0.03em] leading-[0.95] uppercase text-brand-text">
            State-Wise Seat Allocation
          </h2>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted" />
            <input
              type="text"
              placeholder="Search college or state..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-brand-text/15 bg-brand-bg text-brand-text placeholder-brand-muted text-sm font-sans focus:outline-none focus:border-brand-text/40 transition-colors"
              onFocus={() => setCursorType('default')}
            />
          </div>

          {/* Type filter */}
          <div className="flex gap-2">
            {(['ALL', 'GOVT', 'PVT'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`px-5 py-3 rounded-xl text-xs font-semibold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                  typeFilter === t
                    ? 'bg-brand-text text-brand-bg'
                    : 'border border-brand-text/15 text-brand-muted hover:border-brand-text/30 hover:text-brand-text'
                }`}
                onMouseEnter={() => setCursorType('view')}
                onMouseLeave={() => setCursorType('default')}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* State filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveState(null)}
            className={`px-4 py-2 rounded-full text-[11px] font-semibold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
              activeState === null
                ? 'bg-brand-text text-brand-bg'
                : 'border border-brand-text/15 text-brand-muted hover:border-brand-text/30 hover:text-brand-text'
            }`}
            onMouseEnter={() => setCursorType('view')}
            onMouseLeave={() => setCursorType('default')}
          >
            All States
          </button>
          {seatMatrixData.map((s) => (
            <button
              key={s.state}
              onClick={() => setActiveState(s.state === activeState ? null : s.state)}
              className={`px-4 py-2 rounded-full text-[11px] font-semibold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                activeState === s.state
                  ? 'bg-brand-text text-brand-bg'
                  : 'border border-brand-text/15 text-brand-muted hover:border-brand-text/30 hover:text-brand-text'
              }`}
              onMouseEnter={() => setCursorType('view')}
              onMouseLeave={() => setCursorType('default')}
            >
              {s.state}
            </button>
          ))}
        </div>

        {/* Results summary */}
        {(search || typeFilter !== 'ALL' || activeState) && (
          <p className="text-xs text-brand-muted font-sans mb-6">
            Showing {filteredData.reduce((n, s) => n + s.colleges.length, 0)} colleges
            {totalSeatsForFiltered > 0 && ` · ${totalSeatsForFiltered.toLocaleString()} seats`}
          </p>
        )}

        {/* State accordion tables */}
        <div className="flex flex-col divide-y divide-brand-text/8">
          {filteredData.map((stateData, si) => {
            const isExpanded = expandedStates.has(stateData.state);
            const govtCount = stateData.colleges.filter((c) => c.type === 'GOVT').length;
            const pvtCount = stateData.colleges.filter((c) => c.type === 'PVT').length;
            const totalStateSeats = stateData.colleges.reduce((s, c) => s + c.seats, 0);

            return (
              <motion.div
                key={stateData.state}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: si * 0.04, ease }}
              >
                {/* State header */}
                <button
                  className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
                  onClick={() => toggleState(stateData.state)}
                  onMouseEnter={() => setCursorType('view')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <div className="flex items-center gap-6">
                    <h3 className="font-heading text-xl md:text-2xl font-medium uppercase tracking-tight text-brand-text group-hover:text-brand-accent transition-colors duration-300">
                      {stateData.state}
                    </h3>
                    <div className="hidden md:flex items-center gap-3">
                      <span className="text-[10px] tracking-widest uppercase font-semibold text-white bg-blue-600 px-2.5 py-1 rounded-full">
                        {govtCount} Govt
                      </span>
                      <span className="text-[10px] tracking-widest uppercase font-semibold text-white bg-orange-500 px-2.5 py-1 rounded-full">
                        {pvtCount} Pvt
                      </span>
                      <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-muted">
                        {totalStateSeats.toLocaleString()} seats
                      </span>
                    </div>
                  </div>
                  <span className="text-brand-muted group-hover:text-brand-text transition-colors duration-300">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {/* Mobile stats */}
                <div className="flex md:hidden items-center gap-3 pb-4 -mt-2">
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-white bg-blue-600 px-2.5 py-1 rounded-full">
                    {govtCount} Govt
                  </span>
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-white bg-orange-500 px-2.5 py-1 rounded-full">
                    {pvtCount} Pvt
                  </span>
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-muted">
                    {totalStateSeats.toLocaleString()} seats
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 overflow-x-auto">
                        <table className="w-full text-sm font-sans">
                          <thead>
                            <tr className="border-b border-brand-text/10">
                              <th className="text-left py-3 pr-4 text-[10px] tracking-widest uppercase font-semibold text-brand-muted w-12">S.No.</th>
                              <th className="text-left py-3 pr-4 text-[10px] tracking-widest uppercase font-semibold text-brand-muted w-20">Type</th>
                              <th className="text-left py-3 pr-4 text-[10px] tracking-widest uppercase font-semibold text-brand-muted">Name of Medical College</th>
                              <th className="text-right py-3 text-[10px] tracking-widest uppercase font-semibold text-brand-muted w-20">Seats</th>
                            </tr>
                          </thead>
                          <tbody>
                            {stateData.colleges.map((college, ci) => (
                              <tr
                                key={ci}
                                className="border-b border-brand-text/5 hover:bg-brand-text/[0.02] transition-colors duration-150"
                              >
                                <td className="py-3.5 pr-4 text-brand-muted text-xs">{college.sno}</td>
                                <td className="py-3.5 pr-4">
                                  <span
                                    className={`text-[10px] tracking-widest uppercase font-semibold px-2.5 py-1 rounded-full text-white ${
                                      college.type === 'GOVT' ? 'bg-blue-600' : 'bg-orange-500'
                                    }`}
                                  >
                                    {college.type}
                                  </span>
                                </td>
                                <td className="py-3.5 pr-4 text-brand-text leading-snug">{college.name}</td>
                                <td className="py-3.5 text-right font-semibold text-brand-text">{college.seats}</td>
                              </tr>
                            ))}
                          </tbody>
                          <tfoot>
                            <tr className="border-t border-brand-text/15">
                              <td colSpan={3} className="pt-4 text-xs font-semibold text-brand-muted uppercase tracking-widest">
                                Total ({stateData.colleges.length} colleges)
                              </td>
                              <td className="pt-4 text-right font-heading text-lg font-medium text-brand-text">
                                {totalStateSeats.toLocaleString()}
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {filteredData.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-brand-muted font-sans">No colleges found matching your search.</p>
            </div>
          )}
        </div>

        <p className="mt-10 text-xs text-brand-muted font-sans border-t border-brand-text/8 pt-6">
          Note: Seat matrix is tentative and subject to change. Please refer to official NMC / MCC notifications for confirmation. Data sourced from Aone Medics for A.Y. 2026-27.
        </p>
      </div>
    </section>
  );
};

const SeatMatrixPage: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });
    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => { lenis.destroy(); };
  }, []);

  const totalColleges = seatMatrixData.reduce((n, s) => n + s.colleges.length, 0);
  const totalSeats = seatMatrixData.reduce(
    (n, s) => n + s.colleges.reduce((cs, c) => cs + c.seats, 0),
    0,
  );

  return (
    <CursorProvider>
      <ModalProvider>
        <div className="relative min-h-screen bg-brand-bg text-brand-text overflow-hidden">

          <ConsultationModal />
          <Navbar />
          <main>
            <Hero />
            <StatsStrip totalColleges={totalColleges} totalSeats={totalSeats} stateCount={seatMatrixData.length} />
            <SeatMatrixTable />
          </main>
          <Footer />
        </div>
      </ModalProvider>
    </CursorProvider>
  );
};

export default SeatMatrixPage;
