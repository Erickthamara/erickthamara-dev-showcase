import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["AL/CAL", "C#", "Python", "JavaScript", "TypeScript", "SQL"]
    },
    {
      title: "Frameworks",
      skills: ["Microsoft Dynamics 365 Business Central", ".NET Core", "ASP.NET Core", "React", "Next.js", "Flask"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Power BI", "Docker", "Git", "Postman", "cPanel", "VS Code"]
    },
    {
      title: "Databases & APIs",
      skills: ["PostgreSQL", "MS SQL Server", "MySQL", "REST APIs", "JWT Authentication"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Technical Skills</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card shadow-card hover:shadow-lg-custom transition-all duration-300 border-border"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="px-3 py-1 text-sm font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
