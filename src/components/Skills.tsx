import { Code, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 75 },
        { name: "SQL", level: 80 },
        { name: "Machine Learning", level: 78 },
        { name: "C Programming", level: 70 },
        { name: "HTML/CSS", level: 85 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Google Colab", level: 90 },
        { name: "WEKA", level: 75 },
        { name: "VS Code", level: 88 },
        { name: "Git", level: 72 },
        { name: "React", level: 70 },
        { name: "Flask", level: 75 },
      ]
    },
    {
      title: "Soft Skills",
      icon: Brain,
      skills: [
        { name: "Communication", level: 90 },
        { name: "Leadership", level: 85 },
        { name: "Time Management", level: 88 },
        { name: "Problem Solving", level: 92 },
        { name: "Team Collaboration", level: 87 },
        { name: "Adaptability", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white/[0.01] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4 block">Expertise</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Skills & <span className="text-white/50">Abilities</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="group p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                    <category.icon className="w-6 h-6 text-white/70" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/70 text-sm group-hover/skill:text-white/90 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-white/40 text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-white/30 to-white/60 rounded-full transition-all duration-700 ease-out group-hover/skill:from-white/40 group-hover/skill:to-white/80"
                          style={{ 
                            width: `${skill.level}%`,
                            transitionDelay: `${index * 50}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
