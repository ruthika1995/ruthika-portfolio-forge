import { Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-white/70 hover:border-white/20 transition-all duration-300 cursor-default">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight tracking-tight">
            Hi, I'm{' '}
            <span className="relative inline-block">
              <span className="text-white">S Ruthika</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white/50 to-transparent"></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
            Computer Science student crafting elegant solutions in{' '}
            <span className="text-white/90 font-medium">Machine Learning</span> &{' '}
            <span className="text-white/90 font-medium">Full-Stack Development</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="group relative bg-white text-black hover:bg-white/90 font-medium px-8 py-6 text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10 flex items-center">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="group border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-medium px-8 py-6 text-base backdrop-blur-sm transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Contact Me
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4 pt-8">
            {[
              { icon: Mail, href: "mailto:ruthika7784@gmail.com", label: "Email" },
              { icon: Github, href: "https://github.com/ruthika1995", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/shakkarikonda-ruthika-bb037134b", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a 
                key={label}
                href={href}
                aria-label={label}
                className="group relative p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <Icon className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="group flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
