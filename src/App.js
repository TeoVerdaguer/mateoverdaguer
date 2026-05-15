import { useState } from 'react';
import { useScroll, motion } from 'framer-motion';
import Nav from './components/Nav';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Footer from './pages/Footer';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Preloader from './components/Preloader';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  const { scrollYProgress } = useScroll();
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <main>
      <AnimatedBackground />

      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      {/* Scroll progress bar — below preloader, above all else */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-[#B8FF3C]"
        style={{ scaleX: scrollYProgress, zIndex: 9998 }}
      />

      {/* Page content in its own stacking layer above the gradient orbs */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Nav />
        <Hero />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
