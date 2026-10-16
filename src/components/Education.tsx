import { GraduationCap, Award, Calendar, BookOpen, ExternalLink, CheckCircle2 } from 'lucide-react';

const Education = () => {
  const certifications = [
    {
      title: 'Intro to Machine Learning',
      platform: 'Kaggle',
      year: '2025',
      topics: 'Model validation, Decision Trees, Random Forests, Underfitting & Overfitting',
      badge: 'Verified Kaggle Certificate',
    },
    {
      title: 'Feature Engineering',
      platform: 'Kaggle',
      year: '2025',
      topics: 'Mutual information, creating features, clustering, PCA',
      badge: 'Verified Kaggle Certificate',
    },
    {
      title: 'Intro to Programming',
      platform: 'Kaggle',
      year: '2025',
      topics: 'Python functions, data types, arithmetic, conditional logic',
      badge: 'Verified Kaggle Certificate',
    },
    {
      title: 'Data Visualization',
      platform: 'Kaggle',
      year: '2025',
      topics: 'Seaborn, line charts, bar charts, heatmaps, scatter plots',
      badge: 'Verified Kaggle Certificate',
    },
    {
      title: 'Intro to Machine Learning',
      platform: 'NPTEL',
      year: '2025',
      topics: 'Supervised & unsupervised learning, regression, classification, clustering',
      badge: 'Elite Certification',
    },
  ];

  const coursework = [
    'Machine Learning',
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Operating Systems',
    'Object-Oriented Programming',
    'Computer Networks',
    'Web Development',
    'Software Engineering',
  ];

  return (
    <section id="education" className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3 block font-mono">
              Academic Background
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Education & <span className="text-white/40">Certifications</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mt-4 font-light">
              Formal computer science education combined with continuous professional specialization.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Degree Card (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                      Undergraduate Degree
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      B.Sc. Computer Science
                    </h3>
                    <p className="text-white/60 text-sm">BVRIT Hyderabad</p>
                  </div>
                </div>

                <div className="space-y-3.5 mb-8 text-xs md:text-sm">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-white/50 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-white/40" />
                      Duration
                    </span>
                    <span className="text-white font-mono font-medium">2023 — 2027</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-white/50 flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-400" />
                      Academic Grade
                    </span>
                    <span className="text-emerald-400 font-mono font-bold">GPA: 7.5 / 10</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-white/40" />
                    <h4 className="text-xs uppercase tracking-wider text-white/40 font-mono">
                      Core Academic Coursework
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-lg text-[11px] bg-white/5 text-white/70 border border-white/10"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/40 font-light">
                Affiliated with Jawaharlal Nehru Technological University (JNTUH), Hyderabad.
              </div>
            </div>

            {/* Certifications (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-mono">
                    Verified Industry Certifications (5)
                  </h3>
                </div>
                <span className="text-[11px] text-white/40 font-mono">2025 Editions</span>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="group p-4.5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4 mb-1.5">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {cert.title}
                        </h4>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white/5 text-white/60 border border-white/10 shrink-0">
                        {cert.platform} • {cert.year}
                      </span>
                    </div>

                    <p className="text-xs text-white/50 pl-6 leading-relaxed">
                      {cert.topics}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
