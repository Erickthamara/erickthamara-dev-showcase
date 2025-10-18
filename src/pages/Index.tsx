import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Erick Thamara. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
