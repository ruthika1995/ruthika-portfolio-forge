import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "ruthika7784@gmail.com", href: "mailto:ruthika7784@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 7013481955", href: "tel:+917013481955" },
    { icon: MapPin, label: "Location", value: "Nizamabad, Telangana", href: "#" },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/ruthika1995" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/shakkarikonda-ruthika-bb037134b" },
    { icon: Mail, label: "Email", href: "mailto:ruthika7784@gmail.com" },
  ];

  return (
    <section id="contact" className="py-24 bg-white/[0.01] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Let's <span className="text-white/50">Connect</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <p className="text-lg text-white/60 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      <Icon className="w-5 h-5 text-white/60 group-hover:text-white/90 transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-white/40 uppercase tracking-wider">{label}</p>
                      <p className="text-white/80 group-hover:text-white transition-colors">{value}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-sm text-white/40 mb-4">Connect with me</p>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="group p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                      <Icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
              
              <div className="space-y-5">
                <div>
                  <label className="text-sm text-white/50 mb-2 block">Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30 focus:ring-white/10 transition-all"
                  />
                </div>
                
                <div>
                  <label className="text-sm text-white/50 mb-2 block">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30 focus:ring-white/10 transition-all"
                  />
                </div>
                
                <div>
                  <label className="text-sm text-white/50 mb-2 block">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30 focus:ring-white/10 resize-none transition-all"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-white text-black hover:bg-white/90 font-medium py-6 group transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-white/10 text-center">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} S Ruthika. Crafted with passion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
