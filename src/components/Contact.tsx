import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
        <p className="text-center text-lg text-muted-foreground mb-12">
          Open to Remote Opportunities — Let's Build Something Great Together
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-card shadow-card border-border">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background resize-none"
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8 bg-gradient-card shadow-card border-border">
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a 
                  href="https://github.com/Erickthamara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-accent/10 transition-colors group"
                >
                  <Github className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">@Erickthamara</p>
                  </div>
                </a>
                
                <a 
                  href="https://linkedin.com/in/erickthamara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-accent/10 transition-colors group"
                >
                  <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Erick Thamara</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:erick.thamara@example.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-accent/10 transition-colors group"
                >
                  <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">erick.thamara@example.com</p>
                  </div>
                </a>
              </div>
            </Card>

            <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-center font-medium">
                💼 Available for remote positions worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
