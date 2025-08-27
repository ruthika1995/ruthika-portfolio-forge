import { Code, Database, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 75 },
        { name: "Machine Learning", level: 80 },
        { name: "SQL", level: 70 },
        { name: "HTML/CSS", level: 85 },
        { name: "C Programming", level: 70 }
      ],
      color: "from-portfolio-primary to-portfolio-primary-dark"
    },
    {
      title: "Tools & Technologies", 
      icon: Wrench,
      skills: [
        { name: "Google Colab", level: 90 },
        { name: "WEKA", level: 75 },
        { name: "VS Code", level: 85 },
        { name: "Flask", level: 70 },
        { name: "React", level: 75 },
        { name: "Chart.js", level: 70 }
      ],
      color: "from-portfolio-minimal to-portfolio-accent"
    },
    {
      title: "Database Systems",
      icon: Database,
      skills: [
        { name: "MySQL", level: 75 },
        { name: "Database Design", level: 70 },
        { name: "Query Optimization", level: 65 },
        { name: "Data Modeling", level: 70 }
      ],
      color: "from-gray-600 to-portfolio-primary"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Communication", level: 90 },
        { name: "Leadership", level: 85 },
        { name: "Time Management", level: 80 },
        { name: "Problem Solving", level: 85 },
        { name: "Teamwork", level: 90 }
      ],
      color: "from-portfolio-minimal to-gray-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              My <span className="minimal-accent">Skills</span>
            </h2>
            <p className="text-xl text-portfolio-neutral max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and soft skills
            </p>
            <div className="w-24 h-1 bg-portfolio-minimal mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="portfolio-card p-8 rounded-xl hover-lift">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-portfolio-neutral font-medium">{skill.name}</span>
                        <span className="minimal-accent font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-portfolio-secondary rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
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