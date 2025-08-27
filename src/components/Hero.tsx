import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import darkHeroBg from '@/assets/dark-hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={darkHeroBg} 
          alt="Dark minimalist hero background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="minimal-accent">S Ruthika</span> 👩‍💻
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/80 max-w-3xl mx-auto leading-relaxed">
            Computer Science student passionate about 
            <span className="minimal-accent font-semibold"> Machine Learning</span> & 
            <span className="minimal-accent font-semibold"> Full-Stack Development</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:ruthika7784@gmail.com" 
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover-lift"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover-lift"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover-lift"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;