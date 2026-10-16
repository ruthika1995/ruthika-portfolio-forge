import React, { useState } from 'react';
import { Project } from '@/data/projectsData';
import {
  X,
  Github,
  ExternalLink,
  Cpu,
  Server,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  HelpCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'decisions' | 'talkingPoints'>('overview');

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0e14] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-6 md:p-8 border-b border-white/10 bg-gradient-to-r from-white/[0.04] to-transparent relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {project.badge}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/60 border border-white/10">
              {project.category}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {project.title}
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-2xl">
            {project.tagline}
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/10">
            {[
              { id: 'overview', label: 'Overview & Highlights', icon: Layers },
              { id: 'architecture', label: 'Architecture & Flow', icon: Cpu },
              { id: 'decisions', label: 'Engineering Decisions', icon: HelpCircle },
              { id: 'talkingPoints', label: 'Interview Talking Points', icon: ShieldCheck },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-2 ${
                  activeTab === id
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1 text-white/80">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Overview Pitch */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">System Overview</h3>
                <p className="text-sm md:text-base leading-relaxed text-white/80">
                  {project.overview}
                </p>
              </div>

              {/* Metrics Grid */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-white/40 mb-3">Key Metrics & Capabilities</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-center"
                    >
                      <div className="text-base md:text-lg font-bold text-white mb-0.5">{m.value}</div>
                      <div className="text-[11px] text-white/50">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deployment Details */}
              <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] space-y-2.5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 mb-1">
                  <Server className="w-3.5 h-3.5" />
                  Live Production Deployment
                </div>
                <div className="grid sm:grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-white/40">Backend: </span>
                    <span className="text-white/90 font-mono">{project.deployment.backend}</span>
                  </div>
                  <div>
                    <span className="text-white/40">Frontend: </span>
                    <span className="text-white/90 font-mono">{project.deployment.frontend}</span>
                  </div>
                  <div>
                    <span className="text-white/40">Database: </span>
                    <span className="text-white/90 font-mono">{project.deployment.database}</span>
                  </div>
                  <div>
                    <span className="text-white/40">AI Gateway: </span>
                    <span className="text-white/90 font-mono">{project.deployment.aiGateway}</span>
                  </div>
                </div>
              </div>

              {/* Core Capabilities */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-white/40 mb-3">5 Core Features</h3>
                <div className="space-y-3">
                  {project.keyCapabilities.map((cap, i) => (
                    <div
                      key={cap.title}
                      className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/15 transition-all flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-md bg-white/10 text-white/70 text-xs font-mono flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">{cap.title}</h4>
                        <p className="text-xs text-white/60 leading-relaxed">{cap.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs bg-white/5 text-white/70 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-xs uppercase tracking-widest text-white/40">System Architecture Topology</h3>
                </div>
                <pre className="p-4 rounded-xl border border-white/10 bg-black/60 font-mono text-xs md:text-sm text-emerald-300/90 overflow-x-auto leading-relaxed">
                  {project.architectureDiagram}
                </pre>
              </div>

              <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] space-y-3">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-white/70" />
                  Architectural Highlights
                </h4>
                <ul className="space-y-2 text-xs md:text-sm text-white/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Strict Separation of Concerns:</strong> Frontend only communicates with the FastAPI service; all external LLM provider credentials remain safe on the backend.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Deterministic Heuristic Simulation:</strong> Includes automated offline simulator modes to guarantee demo functionality during connection hiccups or API outages.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Production-Ready Deployment:</strong> Pre-configured with Dockerfile, Render build scripts, and Vercel edge rewrite configurations.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'decisions' && (
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-white/40 mb-3">Key Design Decisions & Rationale</h3>
              {project.keyDesignDecisions.map((dec, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] space-y-2"
                >
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-white/60" />
                    {dec.question}
                  </h4>
                  <p className="text-xs md:text-sm text-white/70 leading-relaxed pl-6">
                    {dec.answer}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'talkingPoints' && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Key Takeaways for Technical Interviews
                </h3>
                <p className="text-xs text-white/50 mb-4">
                  How Ruthi presents the design, performance metrics, and architectural decisions of {project.title}:
                </p>
                <div className="space-y-3">
                  {project.interviewTalkingPoints.map((point, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-xs md:text-sm text-white/80 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-black/40 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-white/40">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Repository: <span className="font-mono text-white/70">ruthika1995/{project.id}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="border-white/20 text-white hover:bg-white/10 text-xs font-medium"
              >
                <Github className="w-3.5 h-3.5 mr-1.5" />
                View GitHub Code
              </Button>
            </a>
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size="sm"
                  className="bg-white text-black hover:bg-white/90 text-xs font-semibold"
                >
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                  Live Platform Demo
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
