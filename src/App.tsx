import { useEffect } from 'react';
import Lenis from 'lenis';
import { CursorProvider } from './context/CursorContext';
import { ModalProvider } from './context/ModalContext';
import { ConsultationModal } from './components/ConsultationModal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Countries } from './components/Countries';

import { Services } from './components/Services';
import { UniversityShowcase } from './components/UniversityShowcase';
import { Scholarships } from './components/Scholarships';
import { Statistics } from './components/Statistics';
import { Testimonials } from './components/Testimonials';
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

          {/* 7. Student Testimonials — Horizontal drag scroll */}
          <Testimonials />

          {/* 9. Consultation CTA — Full-screen parallax banner */}
          <ConsultationCTA />
        </main>

        <Footer />
      </div>
    </ModalProvider>
  </CursorProvider>
  );
}

export default App;
