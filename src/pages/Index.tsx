import ParticlesBackground from '@/components/ParticlesBackground';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Leadership />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
