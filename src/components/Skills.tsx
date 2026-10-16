import { useState } from 'react';
import { Cpu, Server, Layout, Terminal, Code2, CheckCircle2 } from 'lucide-react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const skillCategories = [
    {
      title: 'Generative AI & Agentic Systems',
      icon: Cpu,
      description: 'Production LLM gateway integration, agent orchestration, and grounded RAG.',
      skills: [
        { name: 'OpenRouter Multi-Model Gateway', level: 92, note: 'Llama 3.3, Gemini Flash, DeepSeek' },
        { name: 'Grounded RAG & Vector Retrieval', level: 90, note: 'Cosine distance, citation drawer' },
        { name: 'Decoupled 384-Dim Local Embeddings', level: 88, note: 'Zero-cost document chunking' },
        { name: 'ReAct Agentic Loops & Tool Calling', level: 85, note: 'Intent, tool execution, observation' },
        { name: 'Structured JSON Schema Extraction', level: 90, note: 'Pydantic v2 mode validation' },
        { name: 'PyMuPDF Native PDF Ingestion', level: 86, note: 'Fast in-memory text parsing' },
      ],
      tags: ['OpenRouter', 'pgvector', 'ReAct', 'PyMuPDF', 'Prompt Engineering', 'Human-in-the-Loop'],
    },
    {
      title: 'Backend & Cloud Infrastructure',
      icon: Server,
      description: 'High-throughput async Python backends and scalable relational/vector data layers.',
      skills: [
        { name: 'FastAPI (Python 3.12 Async)', level: 92, note: 'Uvicorn, REST, SSE Streaming' },
        { name: 'PostgreSQL + pgvector', level: 85, note: 'Hybrid relational & vector queries' },
        { name: 'SQLAlchemy 2.0 ORM & SQLite', level: 88, note: 'Clean schema migrations & seeders' },
        { name: 'WebSockets Bidirectional Streaming', level: 82, note: 'Real-time agent event broadcast' },
        { name: 'JWT Authentication & Security', level: 85, note: 'Bcrypt hashing, protected routes' },
        { name: 'Cloud Deployment (Render & Docker)', level: 84, note: 'Continuous delivery & healthchecks' },
      ],
      tags: ['FastAPI', 'Python 3.12', 'PostgreSQL', 'SQLAlchemy', 'WebSockets', 'Render', 'Docker'],
    },
    {
      title: 'Frontend & UI/UX Engineering',
      icon: Layout,
      description: 'Modern, high-performance interfaces built with the latest React standard.',
      skills: [
        { name: 'React 19 & TypeScript', level: 90, note: 'Strict typing, modern hooks' },
        { name: 'Vite & Edge Bundling', level: 88, note: 'Fast HMR, optimized production builds' },
        { name: 'Tailwind CSS & Impeccable Style', level: 92, note: 'Obsidian surfaces, zero AI slop' },
        { name: 'Responsive Layouts & Motion', level: 86, note: 'Fluid mobile, tablet, and desktop' },
        { name: 'State Management & API Clients', level: 88, note: 'Axios, TanStack Query, Sonner' },
        { name: 'Vercel Edge Deployment', level: 90, note: 'CI/CD, routing rewrites, CDN' },
      ],
      tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel', 'Impeccable UI', 'Sonner'],
    },
    {
      title: 'Core CS & Programming',
      icon: Terminal,
      description: 'Solid academic foundation in algorithms, system design, and computer science.',
      skills: [
        { name: 'Python Programming', level: 92, note: 'Asyncio, typing, clean architecture' },
        { name: 'Java Programming', level: 78, note: 'OOP, design patterns, collections' },
        { name: 'SQL & Database Architecture', level: 86, note: 'Indexing, joins, normalization' },
        { name: 'Data Structures & Algorithms', level: 82, note: 'Trees, graphs, dynamic programming' },
        { name: 'C Programming', level: 75, note: 'Pointers, memory management' },
        { name: 'Git & Version Control', level: 88, note: 'Branching, PRs, CI workflows' },
      ],
      tags: ['Python', 'Java', 'SQL', 'C', 'DSA', 'Git', 'Linux / Zsh'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-black/40 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3 block font-mono">
              Technical Competencies
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Skills & <span className="text-white/40">Tooling</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mt-4 font-light">
              Specialized in modern Generative AI engineering, asynchronous backend services, and clean React architecture.
            </p>

            {/* Category Selector Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                const isSelected = selectedCategory === index;
                return (
                  <button
                    key={category.title}
                    onClick={() => setSelectedCategory(index)}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-medium transition-all duration-300 flex items-center gap-2 ${
                      isSelected
                        ? 'bg-white text-black font-semibold shadow-[0_0_25px_rgba(255,255,255,0.2)]'
                        : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{category.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Category Display */}
          <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-xl transition-all duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
              <div>
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                  Active Domain
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {skillCategories[selectedCategory].title}
                </h3>
                <p className="text-white/50 text-sm mt-1">
                  {skillCategories[selectedCategory].description}
                </p>
              </div>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-1.5 max-w-md">
                {skillCategories[selectedCategory].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/5 text-white/70 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Skill Bars Grid */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-7">
              {skillCategories[selectedCategory].skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-400/80 via-cyan-400/80 to-white/90 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  {/* Context Note */}
                  <div className="text-[11px] text-white/40 mt-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-white/30" />
                    <span>{skill.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
