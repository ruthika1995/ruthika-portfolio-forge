import { Download, Mail, Github, Linkedin, ChevronDown, ArrowUpRight, Sparkles, Cpu, Layers, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 pb-16">
      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] pointer-events-none animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in space-y-7">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md text-xs text-emerald-300 hover:border-emerald-500/50 transition-all duration-300">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            <span>Open to Software Engineering & Generative AI Roles</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.08] tracking-tight">
            Hi, I'm{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                S Ruthika
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400/80 via-cyan-400/60 to-transparent rounded-full" />
            </span>
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
            Computer Science Engineer building <span className="text-white font-medium">Production Agentic AI</span>,{' '}
            <span className="text-white font-medium">Grounded RAG Systems</span>, and{' '}
            <span className="text-white font-medium">Full-Stack Cloud Architectures</span> (FastAPI + React 19).
          </p>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-2">
            {[
              { value: '4', label: 'Production AI Apps Deployed', highlight: 'Render & Vercel' },
              { value: '384-Dim', label: 'Dense Semantic Vector Search', highlight: 'Zero Token Cost' },
              { value: 'FastAPI + React', label: 'Full-Stack Modern Stack', highlight: 'Python 3.12 & TS' },
              { value: '7.5 GPA', label: 'B.Sc. Computer Science', highlight: 'BVRIT Hyderabad' },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-white/20 transition-all text-center"
              >
                <div className="text-lg md:text-xl font-bold text-white mb-0.5">{stat.value}</div>
                <div className="text-[11px] text-white/50 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a href="#projects">
              <Button
                size="lg"
                className="group relative bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 text-sm md:text-base rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-emerald-600" />
                Explore 4 Deployed Projects
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </a>

            <a href="#architecture">
              <Button
                size="lg"
                variant="outline"
                className="group border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-medium px-8 py-6 text-sm md:text-base rounded-xl backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                System Architecture
              </Button>
            </a>

            <a href="#contact">
              <Button
                size="lg"
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/5 font-medium px-6 py-6 text-sm md:text-base rounded-xl transition-all"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-3 pt-4">
            {[
              { icon: Github, href: 'https://github.com/ruthika1995', label: 'GitHub Profile' },
              { icon: Linkedin, href: 'https://linkedin.com/in/shakkarikonda-ruthika-bb037134b', label: 'LinkedIn Profile' },
              { icon: Mail, href: 'mailto:ruthika7784@gmail.com', label: 'Direct Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-110"
              >
                <Icon className="h-4 w-4 text-white/70 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <a
          href="#about"
          className="group flex flex-col items-center gap-1.5 text-white/40 hover:text-white/80 transition-colors"
          aria-label="Scroll to About section"
        >
          <span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce text-white/50" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
