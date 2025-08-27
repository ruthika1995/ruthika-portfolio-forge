import { Users, Lightbulb, Award } from 'lucide-react';

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Leadership & <span className="text-portfolio-primary">Impact</span>
            </h2>
            <div className="w-24 h-1 bg-portfolio-primary mx-auto"></div>
          </div>

          <div className="portfolio-card p-12 rounded-xl hover-lift">
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-gradient-to-r from-portfolio-secondary to-portfolio-accent rounded-full">
                <Users className="w-12 h-12 text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4">
              Hackathon Mentor - TechFest 2023
            </h3>

            <p className="text-lg text-portfolio-neutral mb-8 leading-relaxed max-w-2xl mx-auto">
              Guided and mentored over 50+ students during TechFest 2023, helping them develop 
              innovative solutions and navigate technical challenges. Focused on fostering 
              creativity and collaborative problem-solving skills.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="p-4 bg-portfolio-primary/10 rounded-lg mb-4 inline-block">
                  <Users className="w-8 h-8 text-portfolio-primary" />
                </div>
                <h4 className="font-semibold text-foreground">50+ Students</h4>
                <p className="text-portfolio-neutral">Mentored</p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-portfolio-secondary/10 rounded-lg mb-4 inline-block">
                  <Lightbulb className="w-8 h-8 text-portfolio-secondary" />
                </div>
                <h4 className="font-semibold text-foreground">Innovation</h4>
                <p className="text-portfolio-neutral">Focused</p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-portfolio-accent/10 rounded-lg mb-4 inline-block">
                  <Award className="w-8 h-8 text-portfolio-accent" />
                </div>
                <h4 className="font-semibold text-foreground">Leadership</h4>
                <p className="text-portfolio-neutral">Skills</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-portfolio-primary/5 to-portfolio-accent/5 rounded-lg">
              <p className="text-portfolio-neutral italic">
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