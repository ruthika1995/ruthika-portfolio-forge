import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const certifications = [
    { title: "Intro to Machine Learning", provider: "Kaggle", year: "2025" },
    { title: "Feature Engineering", provider: "Kaggle", year: "2025" },
    { title: "Intro to Programming", provider: "Kaggle", year: "2025" },
    { title: "Data Visualization", provider: "Kaggle", year: "2025" },
    { title: "Intro to Machine Learning", provider: "NPTEL", year: "2025" }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Education & <span className="minimal-accent">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-portfolio-minimal mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="portfolio-card p-8 rounded-xl hover-lift">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-r from-portfolio-minimal to-gray-600 rounded-full mr-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-portfolio-minimal pl-6 pb-6">
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Bachelor of Science in Computer Science
                  </h4>
                  <p className="minimal-accent font-medium mb-2">
                    BVRIT Hyderabad College of Engineering for Women
                  </p>
                  
                  <div className="flex items-center space-x-4 text-portfolio-neutral mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>2023 - 2027</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Hyderabad</span>
                    </div>
                  </div>
                  
                  <div className="bg-portfolio-minimal/20 p-4 rounded-lg mb-4">
                    <p className="minimal-accent font-semibold">
                      Current GPA: 7.5/10
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Relevant Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Data Structures', 'Machine Learning', 'Database Management Systems', 'Algorithms', 'Software Engineering'].map((course, index) => (
                        <span key={index} className="px-3 py-1 bg-portfolio-minimal/20 text-portfolio-neutral rounded-full text-sm">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="portfolio-card p-8 rounded-xl hover-lift">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-r from-gray-600 to-portfolio-minimal rounded-full mr-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center p-4 bg-gradient-to-r from-portfolio-minimal/10 to-gray-600/5 rounded-lg hover:from-portfolio-minimal/20 hover:to-gray-600/10 transition-all duration-300">
                    <div className="w-2 h-2 bg-portfolio-minimal rounded-full mr-4 flex-shrink-0"></div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-foreground">{cert.title}</h4>
                      <div className="flex items-center justify-between">
                        <p className="text-portfolio-neutral">{cert.provider}</p>
                        <span className="minimal-accent font-medium">{cert.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-portfolio-minimal/10 to-gray-600/5 rounded-lg">
                <p className="text-portfolio-neutral text-sm">
                  <strong>Continuous Learning:</strong> Always exploring new technologies and methodologies 
                  to stay current with industry trends and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;