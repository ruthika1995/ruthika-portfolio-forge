import { ExternalLink, Github, Heart, Sprout, BarChart3, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Heart Health Prediction",
      description: "ML-powered web application for predicting cardiovascular disease risk using patient health metrics.",
      techStack: ["Flask", "React", "Python", "Scikit-learn"],
      icon: Heart,
      gradient: "from-rose-500/20 to-transparent",
    },
    {
      title: "Crop Recommendation System",
      description: "Intelligent agricultural tool recommending optimal crops based on soil and environmental factors.",
      techStack: ["Flask", "React", "ML", "Pandas"],
      icon: Sprout,
      gradient: "from-emerald-500/20 to-transparent",
    },
    {
      title: "Chart Generator Bot",
      description: "Interactive web app for generating dynamic charts and data visualizations from user inputs.",
      techStack: ["React", "Chart.js", "TypeScript", "API"],
      icon: BarChart3,
      gradient: "from-blue-500/20 to-transparent",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white/[0.01] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Featured <span className="text-white/50">Projects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden hover:border-white/25 transition-all duration-500"
              >
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                      <project.icon className="w-6 h-6 text-white/60 group-hover:text-white/90 transition-colors" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white/70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/50 text-sm leading-relaxed mb-6 group-hover:text-white/70 transition-colors">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs bg-white/5 text-white/50 border border-white/10 group-hover:border-white/20 group-hover:text-white/70 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="flex-1 text-white/60 hover:text-white hover:bg-white/10 transition-all"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="flex-1 text-white/60 hover:text-white hover:bg-white/10 transition-all"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
