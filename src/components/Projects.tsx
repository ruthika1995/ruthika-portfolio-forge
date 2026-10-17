import { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Cpu, Layers, Sparkles, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PROJECTS_DATA, Project } from '@/data/projectsData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Agentic AI & RAG', 'Enterprise Operations', 'Full-Stack SaaS'];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-black/40 relative overflow-hidden">
      {/* Background Glow Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-cyan-500/5 via-emerald-500/5 to-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-4 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Production Portfolio • 4 End-to-End Deployed Systems
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Featured <span className="text-white/40">AI Projects</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mt-4 font-light">
              Autonomous agentic systems, grounded RAG platforms, multi-weight AI matching engines, and real-time collaborative workspaces—fully deployed on Render and Vercel.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                      : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {cat}
                  {cat === 'All' && ` (${PROJECTS_DATA.length})`}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-xl p-7 hover:border-white/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              >
                {/* Dynamic Subtle Hover Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Card Header: Category & Deployment Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white/50">
                      0{index + 1} // {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-emerald-400/90 mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.overview}
                  </p>

                  {/* Metrics Strip */}
                  <div className="grid grid-cols-2 gap-2 mb-6 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="text-left">
                        <div className="text-xs font-bold text-white">{m.value}</div>
                        <div className="text-[10px] text-white/40">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Capabilities Preview */}
                  <div className="space-y-1.5 mb-6">
                    {project.keyCapabilities.slice(0, 3).map((cap) => (
                      <div key={cap.title} className="flex items-center gap-2 text-xs text-white/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white/30 group-hover:text-emerald-400 transition-colors shrink-0" />
                        <span className="truncate">{cap.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[11px] bg-white/5 text-white/60 border border-white/10 group-hover:border-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 6 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] bg-white/5 text-white/40 border border-white/10">
                        +{project.techStack.length - 6} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="relative z-10 pt-4 border-t border-white/10 space-y-2">
                  <Button
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-white text-black hover:bg-white/90 text-xs font-semibold py-2.5 rounded-xl shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-2"
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    Deep Dive & Architecture
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Button>

                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-white/15 text-white/70 hover:text-white hover:bg-white/10 text-xs font-medium rounded-xl"
                      >
                        <Github className="w-3.5 h-3.5 mr-1.5" />
                        Source Code
                      </Button>
                    </a>
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-white/15 text-emerald-300 hover:text-white hover:bg-white/10 text-xs font-medium rounded-xl"
                        >
                          <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
