import { User, GraduationCap, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="minimal-accent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-portfolio-minimal mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-minimal to-gray-600 rounded-full p-1">
                  <div className="w-full h-full bg-portfolio-secondary rounded-full flex items-center justify-center">
                    <User className="w-32 h-32 text-portfolio-neutral" />
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-portfolio-minimal rounded-full flex items-center justify-center animate-pulse">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            
            {/* About Content */}
            <div className="space-y-6">
              <div className="portfolio-card p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Computer Science Student & Developer
                </h3>
                
                <p className="text-portfolio-neutral text-lg leading-relaxed mb-6">
                  I'm a passionate Computer Science student at BVRIT Hyderabad with a strong foundation in 
                  machine learning and full-stack development. I love creating innovative solutions and 
                  turning complex problems into elegant, user-friendly applications.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-5 h-5 minimal-accent" />
                    <span className="text-portfolio-neutral">
                      <strong>Education:</strong> B.Sc. Computer Science (2023-2027)
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 minimal-accent" />
                    <span className="text-portfolio-neutral">
                      <strong>Location:</strong> Nizamabad, Telangana, India
                    </span>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-portfolio-minimal/20 to-gray-600/10 rounded-lg">
                  <h4 className="font-semibold minimal-accent mb-2">Current Focus</h4>
                  <p className="text-portfolio-neutral">
                    Exploring advanced machine learning techniques and building scalable web applications 
                    with modern frameworks. Always eager to learn and collaborate on exciting projects!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;