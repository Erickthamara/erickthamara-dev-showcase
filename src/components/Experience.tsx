import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "AU Innovation",
      period: "September 2023 - Present",
      responsibilities: [
        "Developed mobile loan API handling 200+ daily requests with eligibility assessment",
        "Built Power BI dashboards for data-driven marketing optimization based on demographics",
        "Automated SMS notifications for salary payments with detailed deduction breakdowns",
        "Created RESTful API endpoints using C# and ASP.NET Core for third-party vendors",
        "Implemented job queue automation for Microsoft Business Central ERP operations"
      ]
    },
    {
      role: "Web Developer (Support)",
      company: "Gathers SACCO",
      period: "August 2021 - Present",
      responsibilities: [
        "Developed and launched initial website using WordPress",
        "Redesigned website to modern responsive platform using React",
        "Manage email system via cPanel for reliable communication",
        "Enhanced online presence and user experience through continuous improvements"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Work Experience</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card shadow-card hover:shadow-lg-custom transition-all duration-300 border-border"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
                  <p className="text-lg text-primary mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
