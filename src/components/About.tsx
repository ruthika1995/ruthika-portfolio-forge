import { User, GraduationCap, MapPin, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.02] to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4 block">Introduction</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              About <span className="text-white/50">Me</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="relative group">
              <div className="w-72 h-72 md:w-80 md:h-80 mx-auto relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-white/10 rounded-3xl blur-2xl group-hover:bg-white/15 transition-all duration-500"></div>
                
                {/* Main container */}
                <div className="relative w-full h-full border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden group-hover:border-white/20 transition-all duration-500">
                  <User className="w-32 h-32 text-white/30 group-hover:text-white/50 transition-colors duration-500" />
                  
                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/20 rounded-tl-lg"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/20 rounded-br-lg"></div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <GraduationCap className="w-6 h-6 text-white/70" />
                </div>
              </div>
            </div>
            
            {/* About Content */}
            <div className="space-y-8">
              <div className="group p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-5 h-5 text-white/50" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Computer Science Student & Developer
                  </h3>
                </div>
                
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  I'm a passionate Computer Science student at BVRIT Hyderabad with a strong foundation in 
                  machine learning and full-stack development. I love creating innovative solutions and 
                  turning complex problems into elegant, user-friendly applications.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: GraduationCap, label: "Education", value: "B.Sc. Computer Science (2023-2027)" },
                    { icon: MapPin, label: "Location", value: "Nizamabad, Telangana, India" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-4 group/item">
                      <div className="p-2 rounded-lg bg-white/5 group-hover/item:bg-white/10 transition-colors">
                        <Icon className="w-4 h-4 text-white/50" />
                      </div>
                      <span className="text-white/40 text-sm">{label}:</span>
                      <span className="text-white/80">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-r from-white/[0.05] to-transparent border border-white/10">
                <h4 className="font-medium text-white/70 mb-2 text-sm uppercase tracking-wider">Current Focus</h4>
                <p className="text-white/50">
                  Exploring advanced machine learning techniques and building scalable web applications 
                  with modern frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
