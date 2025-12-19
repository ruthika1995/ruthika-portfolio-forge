import { Users, Lightbulb, Award, Quote } from 'lucide-react';

const Leadership = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Students Mentored" },
    { icon: Lightbulb, value: "10+", label: "Projects Guided" },
    { icon: Award, value: "2023", label: "TechFest Edition" },
  ];

  return (
    <section id="leadership" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4 block">Experience</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Leadership & <span className="text-white/50">Impact</span>
            </h2>
          </div>

          <div className="group p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-white/20 transition-all duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
              <div className="p-5 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300 w-fit">
                <Users className="w-10 h-10 text-white/70" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Hackathon Mentor
                </h3>
                <p className="text-white/50">TechFest 2023 • BVRIT Hyderabad</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-white/60 leading-relaxed mb-10">
              Guided and mentored over 50+ students during TechFest 2023, helping them develop 
              innovative solutions and navigate technical challenges. Focused on fostering 
              creativity and collaborative problem-solving skills.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 hover:bg-white/[0.05] transition-all duration-300">
                  <Icon className="w-5 h-5 text-white/40 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
                  <div className="text-xs text-white/40">{label}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="relative p-6 rounded-xl bg-gradient-to-r from-white/[0.03] to-transparent border-l-2 border-white/20">
              <Quote className="w-6 h-6 text-white/20 absolute -top-3 left-4" />
              <p className="text-white/50 italic pl-4">
                "Passionate about empowering the next generation of developers and fostering 
                a collaborative learning environment where innovation thrives."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
