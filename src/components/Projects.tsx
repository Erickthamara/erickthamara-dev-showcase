import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    name: "Custom Identity Auth",
    description:
      "ASP.NET Core Web API that plugs a custom user and role store into .NET Identity, backed by Supabase instead of Entity Framework.",
    tech: ["C#", ".NET 9", "ASP.NET Identity", "Supabase", "Swagger"],
    github: "https://github.com/Erickthamara/Custom-Identity-Auth",
  },
  {
    name: "Maji Mazuri App",
    description:
      "Water ordering mobile app with customer and seller views, checkout with M-Pesa payments, and sales reports.",
    tech: ["Python", "Kivy", "KivyMD", "MySQL", "M-Pesa"],
    github: "https://github.com/Erickthamara/MAJI-MAZURI-APP",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.github}
              className="p-6 bg-gradient-card shadow-card hover:shadow-lg-custom transition-all duration-300 border-border flex flex-col"
            >
              <h3 className="text-xl font-semibold line-clamp-1 mb-3">
                {project.name}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 mt-auto">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </Button>
                {project.demo && (
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              window.open("https://github.com/Erickthamara", "_blank")
            }
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
