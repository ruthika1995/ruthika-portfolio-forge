import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ruthika7784@gmail.com",
      href: "mailto:ruthika7784@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7013481955",
      href: "tel:+917013481955"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nizamabad, Telangana, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In <span className="text-portfolio-primary">Touch</span>
            </h2>
            <p className="text-xl text-portfolio-neutral max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects
            </p>
            <div className="w-24 h-1 bg-portfolio-primary mx-auto mt-4"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="portfolio-card p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Let's Connect
                </h3>
                
                <p className="text-portfolio-neutral mb-8 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. Feel free to reach out through any of the channels below.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-portfolio-primary/5 transition-colors duration-300 group"
                    >
                      <div className="p-3 bg-gradient-to-r from-portfolio-primary to-portfolio-accent rounded-lg">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-portfolio-neutral">{item.label}</p>
                        <p className="text-foreground group-hover:text-portfolio-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Media Links */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="p-3 bg-gradient-to-r from-portfolio-primary to-portfolio-primary-dark rounded-lg text-white hover:scale-110 transition-transform duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white hover:scale-110 transition-transform duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="portfolio-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send a Message
              </h3>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-portfolio-neutral mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="Your first name"
                      className="border-portfolio-primary/20 focus:border-portfolio-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-portfolio-neutral mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Your last name"
                      className="border-portfolio-primary/20 focus:border-portfolio-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-portfolio-neutral mb-2">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-portfolio-primary/20 focus:border-portfolio-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-portfolio-neutral mb-2">
                    Subject
                  </label>
                  <Input 
                    placeholder="What's this about?"
                    className="border-portfolio-primary/20 focus:border-portfolio-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-portfolio-neutral mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project or just say hello..."
                    rows={5}
                    className="border-portfolio-primary/20 focus:border-portfolio-primary"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-portfolio-primary hover:bg-portfolio-primary-dark"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;