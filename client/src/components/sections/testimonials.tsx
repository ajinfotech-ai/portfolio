import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    content: "TechStudio transformed our business with their AI automation solutions. We've seen a 40% increase in efficiency and significant cost savings. Their team is incredibly professional and delivers beyond expectations.",
    author: "Sarah Johnson",
    position: "CEO, InnovateTech Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&face=1"
  },
  {
    rating: 5,
    content: "The mobile app they developed for us exceeded all expectations. The user interface is intuitive, performance is outstanding, and our customer engagement has increased by 60%. Highly recommended!",
    author: "Michael Chen",
    position: "Founder, RetailMax",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&face=1"
  },
  {
    rating: 5,
    content: "Their trading algorithms have significantly improved our portfolio performance. The NISM certified team brings real expertise and the custom solutions are perfectly tailored to our strategy.",
    author: "Emma Rodriguez",
    position: "Portfolio Manager, WealthTech Capital",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&face=1"
  }
];

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Projects Delivered" },
  { value: "24/7", label: "Support Available" },
  { value: "5+", label: "Years Experience" }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" data-testid="text-testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-testimonials-description">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with TechStudio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 shadow-lg border border-border" data-testid={`card-testimonial-${index}`}>
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 text-xl">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic" data-testid={`text-testimonial-content-${index}`}>
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={`${testimonial.author} headshot`}
                    className="w-12 h-12 rounded-full mr-4"
                    data-testid={`img-testimonial-avatar-${index}`}
                  />
                  <div>
                    <div className="font-semibold text-card-foreground" data-testid={`text-testimonial-author-${index}`}>
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid={`text-testimonial-position-${index}`}>
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-3xl font-bold text-primary mb-2" data-testid={`text-stat-value-${index}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground" data-testid={`text-stat-label-${index}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
