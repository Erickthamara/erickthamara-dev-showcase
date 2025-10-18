import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  language: string;
  topics: string[];
}

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Erickthamara/repos?sort=updated&per_page=6");
        if (!response.ok) throw new Error("Failed to fetch repositories");
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repos:", error);
        toast({
          title: "Error",
          description: "Failed to load projects. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [toast]);

  const getTechBadges = (repo: Repository) => {
    const techs = [...repo.topics];
    if (repo.language) techs.unshift(repo.language);
    return techs.slice(0, 5);
  };

  if (loading) {
    return (
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="p-6 animate-pulse">
                <div className="h-6 bg-muted rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-muted rounded w-full mb-2"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {repos.map((repo) => (
            <Card 
              key={repo.id} 
              className="p-6 bg-gradient-card shadow-card hover:shadow-lg-custom transition-all duration-300 border-border flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold line-clamp-1">{repo.name}</h3>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Star className="h-4 w-4" />
                  <span className="text-sm">{repo.stargazers_count}</span>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
                {repo.description || "No description available"}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {getTechBadges(repo).map((tech) => (
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
                  onClick={() => window.open(repo.html_url, "_blank")}
                >
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </Button>
                {repo.homepage && (
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(repo.homepage, "_blank")}
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
            onClick={() => window.open("https://github.com/Erickthamara", "_blank")}
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
