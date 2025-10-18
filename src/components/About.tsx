import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Architecture",
      description: "Writing maintainable, scalable code with best practices"
    },
    {
      icon: Rocket,
      title: "Production-Ready",
      description: "Delivering reliable solutions with Docker and modern DevOps"
    },
    {
      icon: Users,
      title: "Remote Collaboration",
      description: "Experienced in distributed teams and agile workflows"
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
              I'm a Software Developer with expertise in building scalable web applications and robust APIs. 
              My experience spans backend development with .NET and Flask, modern frontend with React, 
              and containerized deployments using Docker and Coolify.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive in creating clean, efficient solutions and have a strong focus on code quality, 
              API integration, and deployment automation. As a detail-oriented professional, I'm passionate 
              about delivering production-grade software and excel in remote work environments.
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

          <div className="mt-12 p-6 bg-accent/10 rounded-lg border border-accent/20">
            <p className="text-center text-lg font-medium text-foreground">
              🌍 Open to Remote Opportunities Worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
