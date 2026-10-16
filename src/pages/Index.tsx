import Navbar from '@/components/Navbar';
import ParticlesBackground from '@/components/ParticlesBackground';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import ArchitectureSection from '@/components/ArchitectureSection';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-white/20 selection:text-white">
      {/* Background Ambient Particles */}
      <ParticlesBackground />

      {/* Fixed Glassmorphic Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <ArchitectureSection />
        <Skills />
        <Education />
        <Leadership />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
