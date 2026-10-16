import { GraduationCap, MapPin, Sparkles, Terminal, Code2, ShieldCheck, ArrowUpRight, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3 block font-mono">
              Profile
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              About <span className="text-white/40">S Ruthika</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mt-4 font-light">
              Bridging academic rigor in Computer Science with practical, production-deployed Generative AI engineering.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Visual Persona & Metric Card (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500" />

                {/* Avatar Badge */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-transparent border border-white/20 flex items-center justify-center mb-6">
                  <span className="text-3xl font-extrabold text-white">SR</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">S Ruthika</h3>
                <p className="text-xs font-mono text-emerald-400 mb-6">
                  Computer Science Undergrad • BVRIT Hyderabad
                </p>

                <div className="space-y-3.5 text-xs text-white/70">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-4 h-4 text-white/40" />
                    <span>B.Sc. Computer Science (2023 - 2027)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-white/40" />
                    <span>Nizamabad & Hyderabad, Telangana, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Cpu className="w-4 h-4 text-white/40" />
                    <span>Specialization: Generative AI, RAG & FastAPI</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-white/80 font-medium">Ready for SWE & AI Roles</span>
                  </div>
                  <a
                    href="https://github.com/ruthika1995"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-white/40 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    GitHub
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Quick Stat Pill */}
              <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] flex items-center justify-between text-xs">
                <span className="text-white/50">Production AI Systems:</span>
                <span className="font-mono font-bold text-white">3 Deployed to Cloud</span>
              </div>
            </div>

            {/* Narrative Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                  Engineering Philosophy
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                  Moving Beyond Simple Wrappers to Resilient Agentic Systems
                </h3>

                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  I am a Computer Science student at <strong>BVRIT Hyderabad</strong> passionate about turning theoretical machine learning into bulletproof, production-deployed software. Rather than building shallow LLM wrappers, I focus on end-to-end system reliability:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] space-y-1.5">
                    <div className="text-xs font-semibold text-white flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      Zero-Cost Vector Ingestion
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Decoupled 384-dimensional dense semantic vector engines that index documents locally without consuming external LLM API token quotas.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] space-y-1.5">
                    <div className="text-xs font-semibold text-white flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Human-in-the-Loop Safety
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Deterministic supervisor authorization gates that inspect ReAct tool mutations before high-risk database writes are executed.
                    </p>
                  </div>
                </div>

                <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                  My recent projects include <strong>DocMind AI</strong> (an enterprise IDP & RAG platform with clause diffing), <strong>SupportFlow AI</strong> (an autonomous ReAct customer ops desk with WebSockets), and <strong>AI Career Copilot</strong> (a 5-dimensional candidate match assessment platform).
                </p>
              </div>

              {/* Current Focus Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/5 to-transparent border border-white/10 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block mb-1">
                    Current Focus
                  </span>
                  <p className="text-xs md:text-sm text-white/80 font-medium">
                    Advancing grounded retrieval architectures with pgvector, multi-agent orchestrations, and full-stack cloud scalability.
                  </p>
                </div>
                <a href="#projects" className="shrink-0">
                  <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-white/90 transition-all flex items-center gap-1.5">
                    Projects
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
