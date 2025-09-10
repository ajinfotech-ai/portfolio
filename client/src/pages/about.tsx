import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Logo } from "@/components/ui/logo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  TrendingUp,
  Calendar
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower businesses through innovative technology solutions that drive growth, efficiency, and digital transformation.",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the leading technology partner that transforms ideas into digital reality, creating lasting impact for businesses worldwide.",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    icon: Heart,
    title: "Values",
    description: "Excellence, Innovation, Integrity, and Client Success are at the core of everything we do.",
    color: "text-red-600",
    bgColor: "bg-red-100"
  }
];

const team = [
  {
    name: "Rahul Sharma",
    position: "Founder & CEO",
    expertise: "AI & Machine Learning",
    experience: "8+ years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&face=1"
  },
  {
    name: "Priya Patel",
    position: "Head of Development",
    expertise: "Full-Stack Development",
    experience: "6+ years",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&face=1"
  },
  {
    name: "Amit Kumar",
    position: "Trading Algorithm Specialist",
    expertise: "NISM Certified Expert",
    experience: "5+ years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&face=1"
  }
];

const achievements = [
  { icon: Award, label: "Industry Recognition", value: "5+ Awards" },
  { icon: Users, label: "Happy Clients", value: "100+" },
  { icon: TrendingUp, label: "Success Rate", value: "98%" },
  { icon: Target, label: "Projects Delivered", value: "150+" }
];

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-32 tech-gradient">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <Logo size="lg" className="justify-center mb-8 text-white" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" data-testid="text-about-hero-title">
              About TechStudio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed" data-testid="text-about-hero-description">
              We are a team of passionate technologists, creative minds, and certified experts 
              dedicated to transforming businesses through innovative digital solutions.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" data-testid="text-values-title">
                Our Foundation
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-values-description">
                The principles that guide our work and define our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={value.title} className="p-8 text-center shadow-lg border border-border" data-testid={`card-value-${index}`}>
                  <CardContent className="p-0">
                    <div className={`${value.bgColor} p-4 rounded-lg inline-block mb-6`}>
                      <value.icon className={`${value.color} h-8 w-8`} />
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-4" data-testid={`text-value-title-${index}`}>
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-value-description-${index}`}>
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" data-testid="text-team-title">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-team-description">
                Expert professionals with diverse backgrounds and a shared passion for technology excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={member.name} className="p-8 text-center shadow-lg border border-border" data-testid={`card-team-member-${index}`}>
                  <CardContent className="p-0">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.position}`}
                      className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                      data-testid={`img-team-member-${index}`}
                    />
                    <h3 className="text-xl font-bold text-card-foreground mb-2" data-testid={`text-team-name-${index}`}>
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-2" data-testid={`text-team-position-${index}`}>
                      {member.position}
                    </p>
                    <p className="text-muted-foreground mb-2" data-testid={`text-team-expertise-${index}`}>
                      {member.expertise}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-team-experience-${index}`}>
                      {member.experience}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" data-testid="text-achievements-title">
                Our Achievements
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-achievements-description">
                Recognition and milestones that reflect our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={achievement.label} className="text-center" data-testid={`achievement-${index}`}>
                  <div className="bg-primary/10 p-4 rounded-lg inline-block mb-4">
                    <achievement.icon className="text-primary h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2" data-testid={`text-achievement-value-${index}`}>
                    {achievement.value}
                  </div>
                  <div className="text-muted-foreground" data-testid={`text-achievement-label-${index}`}>
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" data-testid="text-cta-title">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-cta-description">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <Button 
              className="bg-primary text-primary-foreground px-8 py-4 text-lg hover:bg-primary/90 transition-colors"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              data-testid="button-get-started"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Get Started Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
