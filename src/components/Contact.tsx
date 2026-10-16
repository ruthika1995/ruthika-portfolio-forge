import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(label);
    toast.success(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(`Thank you, ${formData.name}! Your message has been sent. Ruthi will respond shortly.`);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  const contactDetails = [
    {
      icon: Mail,
      label: 'Email Address',
      value: 'ruthika7784@gmail.com',
      actionValue: 'ruthika7784@gmail.com',
      href: 'mailto:ruthika7784@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: '+91 7013481955',
      actionValue: '+917013481955',
      href: 'tel:+917013481955',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nizamabad / Hyderabad, Telangana',
      actionValue: 'Nizamabad, Telangana',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3 block font-mono">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Let's <span className="text-white/40">Connect</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mt-4 font-light">
              Interested in discussing software engineering opportunities, generative AI systems, or full-stack projects? Let's talk!
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Contact Information & Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-xl space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Direct Channels</h3>
                  <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                    Feel free to reach out via email or phone directly. I usually reply within 24 hours.
                  </p>
                </div>

                <div className="space-y-3">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;
                    const isCopied = copiedKey === item.label;
                    return (
                      <div
                        key={item.label}
                        className="group flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04] transition-all"
                      >
                        <a
                          href={item.href}
                          className="flex items-center gap-3.5 flex-1 min-w-0"
                        >
                          <div className="p-2.5 rounded-xl bg-white/5 text-white/70 group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="truncate">
                            <span className="text-[10px] uppercase font-mono tracking-wider text-white/40 block">
                              {item.label}
                            </span>
                            <span className="text-xs md:text-sm font-medium text-white/90 group-hover:text-white transition-colors truncate block">
                              {item.value}
                            </span>
                          </div>
                        </a>

                        {item.href.startsWith('mailto:') || item.href.startsWith('tel:') ? (
                          <button
                            type="button"
                            onClick={() => handleCopy(item.actionValue, item.label)}
                            className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors ml-2"
                            title={`Copy ${item.label}`}
                          >
                            {isCopied ? (
                              <Check className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        ) : null}
                      </div>
                    );
                  })}
                </div>

                {/* Social Profiles */}
                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs text-white/40 font-mono uppercase tracking-wider block mb-3">
                    Professional Profiles
                  </span>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/ruthika1995"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 p-3 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/5 text-xs text-white/80 hover:text-white flex items-center justify-center gap-2 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3 h-3 text-white/40" />
                    </a>
                    <a
                      href="https://linkedin.com/in/shakkarikonda-ruthika-bb037134b"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 p-3 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/5 text-xs text-white/80 hover:text-white flex items-center justify-center gap-2 transition-all"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                      <ArrowUpRight className="w-3 h-3 text-white/40" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Message Form (7 cols) */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-xl space-y-5"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Send a Direct Message</h3>
                  <p className="text-xs md:text-sm text-white/50">
                    Share job openings, collaboration inquiries, or technical feedback.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/50 mb-1.5 block font-medium">Your Name *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/50 mb-1.5 block font-medium">Email Address *</label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/50 mb-1.5 block font-medium">Subject</label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Full-Stack Engineer Role / Project Inquiry"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30 rounded-xl"
                  />
                </div>

                <div>
                  <label className="text-xs text-white/50 mb-1.5 block font-medium">Your Message *</label>
                  <Textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Ruthi, I came across your portfolio and would love to chat about..."
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30 rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black hover:bg-white/90 font-semibold py-6 text-sm rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>

          {/* Footer Strip */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>© {new Date().getFullYear()} S Ruthika. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>BVRIT Hyderabad</span>
              <span>•</span>
              <span>FastAPI & React 19</span>
              <span>•</span>
              <a href="#hero" className="hover:text-white transition-colors">
                Back to Top ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
