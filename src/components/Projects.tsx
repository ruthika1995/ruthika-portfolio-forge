import { ExternalLink, Github, Heart, Leaf, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Heart Health Prediction",
      description: "Advanced machine learning model for predicting heart disease risk using patient data. Built with comprehensive data preprocessing and multiple ML algorithms for accurate predictions.",
      tech: ["Flask", "React", "Python", "Scikit-learn", "Pandas"],
      icon: Heart,
      gradient: "from-red-500 to-pink-500",
      features: ["Real-time prediction", "Data visualization", "Risk assessment"]
    },
    {
      title: "Crop Recommendation System", 
      description: "Intelligent agricultural solution that recommends optimal crops based on soil conditions, weather patterns, and environmental factors to maximize yield.",
      tech: ["Flask", "React", "Machine Learning", "Weather API"],
      icon: Leaf,
      gradient: "from-green-500 to-emerald-500",
      features: ["Weather integration", "Soil analysis", "Yield optimization"]
    },
    {
      title: "Chart Generator Bot",
      description: "Interactive web application that automatically generates beautiful, customizable charts and visualizations from user data with various chart types and export options.",
      tech: ["React", "Chart.js", "JavaScript", "CSS3"],
      icon: BarChart3,
      gradient: "from-blue-500 to-purple-500",
      features: ["Multiple chart types", "Data export", "Interactive UI"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured <span className="minimal-accent">Projects</span>
            </h2>
            <p className="text-xl text-portfolio-neutral max-w-2xl mx-auto">
              Showcasing my passion for creating innovative solutions through code
            </p>
            <div className="w-24 h-1 bg-portfolio-minimal mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="portfolio-card rounded-xl overflow-hidden hover-lift">
                {/* Project Header */}
                <div className={`p-6 bg-gradient-to-r ${project.gradient} text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
                  
                  <div className="relative z-10">
                    <project.icon className="w-12 h-12 mb-4" />
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-portfolio-neutral mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-portfolio-neutral flex items-center">
                          <div className="w-1.5 h-1.5 bg-portfolio-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-3 py-1 bg-portfolio-minimal/20 text-portfolio-neutral rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-portfolio-minimal hover:bg-gray-600"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-portfolio-minimal text-portfolio-minimal hover:bg-portfolio-minimal hover:text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="portfolio-card p-8 rounded-xl inline-block">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Want to see more projects?
              </h3>
              <p className="text-portfolio-neutral mb-4">
                Check out my GitHub for additional projects and contributions
              </p>
              <Button className="bg-portfolio-minimal hover:bg-gray-600">
                <Github className="w-4 h-4 mr-2" />
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;