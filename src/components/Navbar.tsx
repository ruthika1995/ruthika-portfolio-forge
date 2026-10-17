import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['about', 'projects', 'architecture', 'skills', 'education', 'leadership', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects (4 Deployed)', href: '#projects', badge: '4' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 text-white transition-transform duration-300 hover:scale-105"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/20 via-white/10 to-transparent border border-white/20 flex items-center justify-center font-bold tracking-tight text-white group-hover:border-white/40 transition-colors">
              SR
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-tight text-sm text-white group-hover:text-white/90">
                S Ruthika
              </span>
              <span className="text-[10px] text-white/50 tracking-wider uppercase font-mono">
                AI & Full-Stack
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-white text-black font-semibold shadow-sm'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isActive
                          ? 'bg-black text-white'
                          : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com/ruthika1995"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-white/30 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/shakkarikonda-ruthika-bb037134b"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-white/30 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#contact">
              <Button
                size="sm"
                className="bg-white text-black hover:bg-white/90 text-xs font-semibold px-4 h-8 rounded-lg shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all"
              >
                Hire Me
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-white/10 bg-white/5 text-white/80 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-2xl animate-fade-in space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {link.badge} Deployed
                  </span>
                )}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1"
              >
                <Button className="w-full bg-white text-black hover:bg-white/90 text-xs py-2">
                  Contact Ruthi
                </Button>
              </a>
              <a
                href="https://github.com/ruthika1995"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-white"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
