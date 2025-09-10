import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Palette, 
  Video, 
  Scissors, 
  Code, 
  TrendingUp,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description: "Custom AI-powered automation solutions that streamline workflows, reduce manual tasks, and provide intelligent insights for better decision-making.",
    features: [
      "Intelligent Process Automation",
      "Custom AI Agent Development", 
      "Data Analysis & Insights"
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    icon: Palette,
    title: "Personal Branding",
    description: "Build a powerful personal brand that resonates with your audience through strategic design, content creation, and digital presence optimization.",
    features: [
      "Brand Strategy & Identity",
      "Logo & Visual Design",
      "Social Media Presence"
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    icon: Video,
    title: "UGC & Avatar Videos",
    description: "Create engaging user-generated content and custom avatar videos that boost engagement and provide authentic connection with your audience.",
    features: [
      "Custom Avatar Creation",
      "UGC Strategy & Production",
      "Social Media Content"
    ],
    color: "text-red-600",
    bgColor: "bg-red-100",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    icon: Scissors,
    title: "Graphics & Video Editing",
    description: "Professional graphics design and video editing services that transform your raw content into polished, engaging visual experiences.",
    features: [
      "Motion Graphics & Animation",
      "Video Post-Production",
      "Visual Effects & Color Grading"
    ],
    color: "text-green-600",
    bgColor: "bg-green-100",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    icon: Code,
    title: "Website & Mobile Development",
    description: "Full-stack development services creating responsive websites and mobile applications that deliver exceptional user experiences and drive business growth.",
    features: [
      "Custom Web Applications",
      "Mobile App Development",
      "E-commerce Solutions"
    ],
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    icon: TrendingUp,
    title: "Trading Algorithms",
    description: "Advanced trading algorithms developed by NISM certified experts with 5+ years experience. Custom and pre-built solutions for optimal trading performance.",
    features: [
      "NISM Certified Experts",
      "Custom Algorithm Development",
      "Pre-built Trading Solutions"
    ],
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" data-testid="text-services-title">
            Our Technology Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-description">
            Comprehensive solutions designed to accelerate your business growth and digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="service-card p-8 hover:shadow-2xl transition-all duration-300 border border-border" data-testid={`card-service-${index}`}>
              <CardContent className="p-0">
                <div className="mb-6">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-xl"
                    data-testid={`img-service-${index}`}
                  />
                </div>
                <div className={`${service.bgColor} p-3 rounded-lg inline-block mb-4`}>
                  <service.icon className={`${service.color} h-8 w-8`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground" data-testid={`text-service-feature-${index}-${featureIndex}`}>
                      <CheckCircle className="text-green-500 mr-3 h-4 w-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" data-testid={`button-learn-more-${index}`}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
