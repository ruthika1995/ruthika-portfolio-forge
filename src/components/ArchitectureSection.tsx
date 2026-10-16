import { Server, Cpu, Database, Globe, Shield, Zap, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const ArchitectureSection = () => {
  const tiers = [
    {
      name: 'Client Edge Layer',
      icon: Globe,
      platform: 'Vercel Edge Network',
      tech: 'React 19 • TypeScript • Vite • Impeccable UI',
      highlights: [
        'Zero API key leakage — all external calls routed through secure backend proxies',
        'Real-time streaming via Server-Sent Events (SSE) and WebSockets',
        'Sub-100ms global asset delivery via edge CDN caching',
      ],
      gradient: 'from-blue-500/10 to-transparent',
      borderColor: 'border-blue-500/20',
      badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    },
    {
      name: 'Backend Orchestrator Layer',
      icon: Server,
      platform: 'Render Cloud Web Service',
      tech: 'FastAPI • Python 3.12 • SQLAlchemy 2.0 • Pydantic v2',
      highlights: [
        'Asynchronous event-loop handling concurrent LLM streaming & RAG retrieval',
        'Integrated PyMuPDF (fitz) parser for in-memory PDF chunking and ingestion',
        'Automated offline heuristic fallback simulator for 100% demo uptime',
      ],
      gradient: 'from-emerald-500/10 to-transparent',
      borderColor: 'border-emerald-500/20',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      name: 'Decoupled AI Engine & Gateway',
      icon: Cpu,
      platform: 'OpenRouter Multi-Model Gateway',
      tech: 'Llama 3.3 70B • Gemini Flash • 384-Dim Local Embeddings',
      highlights: [
        'Zero token ingestion cost: 384-dim dense vectors computed locally',
        'Vendor agnostic: Swap models across 100+ providers with 1 environment variable',
        'Agentic ReAct loops with database tool-calling and human-in-the-loop safety',
      ],
      gradient: 'from-purple-500/10 to-transparent',
      borderColor: 'border-purple-500/20',
      badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    },
    {
      name: 'Storage & Vector Store Layer',
      icon: Database,
      platform: 'PostgreSQL + pgvector / Supabase',
      tech: 'pgvector • Cosine Distance • Relational Schema • SQLite Dev',
      highlights: [
        'Hybrid queries: Join transactional business metadata directly with dense vectors',
        'Eliminates standalone vector DB licensing costs and operational fragmentation',
        'Exact chunk-level citations ([Chunk X | Page Y]) persisted for legal auditing',
      ],
      gradient: 'from-amber-500/10 to-transparent',
      borderColor: 'border-amber-500/20',
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
  ];

  return (
    <section id="architecture" className="py-24 bg-background relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3 block font-mono">
              System Engineering
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Full-Stack <span className="text-white/40">Cloud Architecture</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mt-4 font-light">
              How the 3 deployed platforms are engineered: decoupled AI inference, zero token ingestion cost, and enterprise security guardrails.
            </p>
          </div>

          {/* 4-Tier Interactive Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {tiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.name}
                  className={`relative p-8 rounded-3xl border ${tier.borderColor} bg-gradient-to-br ${tier.gradient} bg-white/[0.01] backdrop-blur-sm hover:border-white/30 transition-all duration-300 group`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                          Tier 0{index + 1}
                        </span>
                        <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                      </div>
                    </div>
                    <span
                      className={`text-[11px] font-medium px-3 py-1 rounded-full border ${tier.badgeColor}`}
                    >
                      {tier.platform}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-white/70 mb-5 pb-3 border-b border-white/10 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-yellow-400" />
                    {tier.tech}
                  </div>

                  <ul className="space-y-2.5">
                    {tier.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Architecture Comparison / Talking Points Banner */}
          <div className="p-8 md:p-10 rounded-3xl border border-white/15 bg-gradient-to-r from-white/[0.03] via-white/[0.02] to-transparent backdrop-blur-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  <Shield className="w-4 h-4" />
                  Production Engineering Principles
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white">
                  Why Decoupled Architectures Win in Enterprise AI
                </h4>
                <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                  Most student AI projects rely on fragile frontend client SDKs that leak API keys, burn expensive LLM tokens on PDF indexing, or hallucinate dangerous database actions. Ruthi's systems are built with hardened backends, deterministic ReAct tools, local vector pipelines, and supervisor approval gates.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                <a href="#projects" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-white/90 transition-all flex items-center justify-center gap-2">
                    Inspect 3 Projects
                    <ArrowRight className="w-3.5 h-3.5" />
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

export default ArchitectureSection;
