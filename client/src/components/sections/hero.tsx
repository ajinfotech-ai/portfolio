import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Rocket, Play, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden tech-gradient">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full floating-animation blur-xl"></div>
      <div className="absolute bottom-32 right-20 w-48 h-48 bg-purple-500/10 rounded-full floating-animation blur-xl" style={{ animationDelay: "-2s" }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full floating-animation blur-xl" style={{ animationDelay: "-4s" }}></div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="fade-in-up mb-8">
          <Logo size="xl" showText={false} className="justify-center mb-6" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 fade-in-up" style={{ animationDelay: "0.2s" }} data-testid="text-hero-title">
          Transforming Ideas Into{" "}
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Digital Reality
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed fade-in-up" style={{ animationDelay: "0.4s" }} data-testid="text-hero-description">
          We're a full-service technology studio specializing in AI automation, custom development, 
          creative content, and trading solutions. From concept to deployment, we bring your vision to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Button
            onClick={scrollToContact}
            className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            data-testid="button-start-project"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Start Your Project
          </Button>
          <Button
            onClick={scrollToServices}
            variant="outline"
            className="glass-effect text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 border-white/30 hover:border-white/50"
            data-testid="button-explore-services"
          >
            <Play className="mr-2 h-5 w-5" />
            Explore Services
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
