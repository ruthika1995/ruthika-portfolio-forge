import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  const certifications = [
    { title: "Intro to Machine Learning", platform: "Kaggle", year: "2025" },
    { title: "Feature Engineering", platform: "Kaggle", year: "2025" },
    { title: "Intro to Programming", platform: "Kaggle", year: "2025" },
    { title: "Data Visualization", platform: "Kaggle", year: "2025" },
    { title: "Intro to Machine Learning", platform: "NPTEL", year: "2025" },
  ];

  return (
    <section id="education" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4 block">Background</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Education & <span className="text-white/50">Certifications</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                  <GraduationCap className="w-8 h-8 text-white/70" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">B.Sc. Computer Science</h3>
                  <p className="text-white/50">BVRIT Hyderabad</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-white/60">
                  <Calendar className="w-4 h-4" />
                  <span>2023 - 2027</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-sm bg-white/10 text-white/70">GPA: 7.5/10</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-white/50" />
                  <h4 className="text-sm uppercase tracking-wider text-white/50">Relevant Coursework</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Data Structures", "Machine Learning", "DBMS", "Algorithms", "Web Development"].map((course) => (
                    <span 
                      key={course}
                      className="px-3 py-1.5 rounded-lg text-xs bg-white/5 text-white/60 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-default"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-5 h-5 text-white/50" />
                <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
              </div>
              
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group/cert flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-white/30 group-hover/cert:bg-white/60 transition-colors"></div>
                    <div>
                      <h4 className="text-white/80 font-medium group-hover/cert:text-white transition-colors">{cert.title}</h4>
                      <p className="text-white/40 text-sm">{cert.platform}</p>
                    </div>
                  </div>
                  <span className="text-white/30 text-sm">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
