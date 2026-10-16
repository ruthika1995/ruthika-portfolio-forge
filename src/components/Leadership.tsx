import { Users, Lightbulb, Award, Quote, Sparkles } from 'lucide-react';

const Leadership = () => {
  const stats = [
    { icon: Users, value: '50+', label: 'Students Mentored', sub: 'TechFest Hackathon' },
    { icon: Lightbulb, value: '10+', label: 'Projects Guided', sub: 'End-to-End Demos' },
    { icon: Award, value: '2023', label: 'TechFest Edition', sub: 'BVRIT Hyderabad' },
  ];

  return (
    <section id="leadership" className="py-24 bg-black/40 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3 block font-mono">
              Experience & Impact
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Leadership & <span className="text-white/40">Mentorship</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mt-4 font-light">
              Empowering peers, facilitating collaborative problem solving, and driving engineering initiatives.
            </p>
          </div>

          <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-xl hover:border-white/20 transition-all duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 w-fit">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                  Engineering Leadership
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mt-0.5">
                  Hackathon Mentor
                </h3>
                <p className="text-white/50 text-sm">TechFest 2023 • BVRIT Hyderabad</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-base text-white/70 leading-relaxed mb-10">
              Served as an active technical mentor during <strong>TechFest 2023</strong>, guiding over 50+ students in ideating, designing software architectures, debugging APIs, and deploying functional prototypes. Focused on breaking down complex machine learning concepts into approachable building blocks.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {stats.map(({ icon: Icon, value, label, sub }) => (
                <div
                  key={label}
                  className="text-center p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-extrabold text-white mb-0.5">{value}</div>
                  <div className="text-xs text-white/80 font-medium">{label}</div>
                  <div className="text-[10px] text-white/40 mt-0.5">{sub}</div>
                </div>
              ))}
            </div>

            {/* Quote Block */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-r from-white/[0.03] to-transparent border-l-2 border-emerald-400/80">
              <Quote className="w-5 h-5 text-emerald-400/40 absolute -top-2.5 left-4" />
              <p className="text-white/60 italic text-sm pl-4 leading-relaxed">
                "The best engineering environments are those where technical knowledge is shared openly. Helping junior developers unblock their first APIs and deploy working demos is one of the most rewarding aspects of software engineering."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
