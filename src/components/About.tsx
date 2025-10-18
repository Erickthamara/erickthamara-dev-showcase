import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "ERP Customization",
      description: "Business Central development with AL/CAL expertise"
    },
    {
      icon: Rocket,
      title: "Production-Ready",
      description: "APIs serving 200+ daily requests with proven reliability"
    },
    {
      icon: Users,
      title: "Full-Stack Development",
      description: "React, .NET, Python, and RESTful APIs"
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="prose prose-lg max-w-none mb-12 text-foreground">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a dedicated software developer specializing in Microsoft Dynamics 365 Business Central customizations 
              using AL and CAL. With expertise in full-stack web development, I build efficient and scalable solutions 
              using React for frontend and .NET/Python for backend services.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently employed at AU Innovation, I develop RESTful APIs, automate business processes, and create 
              data-driven solutions that enhance business operations. My work includes building mobile loan APIs, 
              Power BI dashboards, and automated notification systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 bg-gradient-card shadow-card hover:shadow-lg-custom transition-all duration-300 border-border"
              >
                <item.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
