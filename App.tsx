import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundEffect from './components/BackgroundEffect';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full text-slate-100 selection:bg-cyan-500 selection:text-white bg-slate-950 overflow-x-hidden">
      <CustomCursor />
      <BackgroundEffect />
      
      <Navbar />
      
      <main className="relative z-10">
        <section id="hero" className="scroll-mt-0">
          <Hero />
        </section>
        
        <div className="space-y-0">
          <section id="about" className="scroll-mt-24">
            <About />
          </section>
          
          <Skills />
          
          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>
          
          <section id="experience" className="scroll-mt-24">
            <Experience />
          </section>
          
          <section id="contact" className="scroll-mt-24">
            <Contact />
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;