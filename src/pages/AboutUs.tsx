import { useEffect } from 'react';
import Lenis from 'lenis';
import { CursorProvider } from '../context/CursorContext';
import { CustomCursor } from '../components/CustomCursor';
import { Navbar } from '../components/Navbar';
import { Storytelling } from '../components/Storytelling';
import { Footer } from '../components/Footer';

function AboutUs() {
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
      <div className="relative min-h-screen bg-brand-bg text-brand-text overflow-hidden">
        <CustomCursor />
        <Navbar />
        <main className="pt-24">
          <Storytelling />
        </main>
        <Footer />
      </div>
    </CursorProvider>
  );
}

export default AboutUs;
