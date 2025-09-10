import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Users, Rocket, Calendar, Download } from "lucide-react";

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" data-testid="text-about-title">
              About TechStudio
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-about-description">
              We're a passionate team of technology experts, creative professionals, and certified specialists 
              dedicated to transforming businesses through innovative digital solutions.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Lightbulb className="text-blue-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2" data-testid="text-innovation-title">Innovation First</h3>
                  <p className="text-muted-foreground" data-testid="text-innovation-description">Leveraging cutting-edge technologies to create solutions that push boundaries and drive results.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Users className="text-green-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2" data-testid="text-team-title">Expert Team</h3>
                  <p className="text-muted-foreground" data-testid="text-team-description">NISM certified professionals with 5+ years experience and specialists across all technology domains.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Rocket className="text-purple-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2" data-testid="text-results-title">Results Driven</h3>
                  <p className="text-muted-foreground" data-testid="text-results-description">Every project is designed to deliver measurable impact and accelerate your business growth.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                data-testid="button-schedule-consultation"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button 
                variant="outline"
                className="border border-border text-card-foreground hover:bg-muted transition-colors"
                data-testid="button-view-automations"
              >
                <Download className="mr-2 h-5 w-5" />
                View Automations
              </Button>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Team collaboration in modern office environment"
              className="rounded-2xl shadow-2xl w-full"
              data-testid="img-about-team"
            />
            
            {/* Floating Stats Cards */}
            <Card className="absolute -bottom-6 -left-6 p-6 shadow-xl border border-border">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2" data-testid="text-stat-projects">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
            
            <Card className="absolute -top-6 -right-6 p-6 shadow-xl border border-border">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2" data-testid="text-stat-experience">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <AboutSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
