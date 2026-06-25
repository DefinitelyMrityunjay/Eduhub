import { useEffect } from 'react';
import Lenis from 'lenis';
import { CursorProvider } from './context/CursorContext';
import { ModalProvider } from './context/ModalContext';
import { CustomCursor } from './components/CustomCursor';
import { ConsultationModal } from './components/ConsultationModal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Countries } from './components/Countries';

import { Services } from './components/Services';
import { UniversityShowcase } from './components/UniversityShowcase';
import { Scholarships } from './components/Scholarships';
import { Statistics } from './components/Statistics';
import { UniversityFinder } from './components/UniversityFinder';
import { Testimonials } from './components/Testimonials';
import { Events } from './components/Events';
import { ConsultationCTA } from './components/ConsultationCTA';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => { lenis.destroy(); };
  }, []);

  return (
    <CursorProvider>
      <ModalProvider>
        <div className="relative min-h-screen bg-brand-bg text-brand-text overflow-hidden">
          <CustomCursor />
          <ConsultationModal />
          <Navbar />

        <main>
          {/* 1. Hero — Stacked typography + floating campus image reveals */}
          <Hero />

          {/* 2. Countries — 8 destination cards with alternating entrance */}
          <Countries />

          {/* 3. Statistics — Proof of scale */}
          <Statistics />

          {/* 4. Services — All 9 service offerings */}
          <Services />

          {/* 5. University Showcase — Elite institutions grid + marquee */}
          <UniversityShowcase />

          {/* 6. Scholarships — Programs and count-up metrics */}
          <Scholarships />

          {/* 7. University Finder — Premium interactive filters */}
          <UniversityFinder />

          {/* 8. Student Testimonials — Horizontal drag scroll */}
          <Testimonials />

          {/* 9. Events — Upcoming fairs/webinars/workshops */}
          <Events />

          {/* 10. Consultation CTA — Full-screen parallax banner */}
          <ConsultationCTA />
        </main>

        <Footer />
      </div>
    </ModalProvider>
  </CursorProvider>
  );
}

export default App;
