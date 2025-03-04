
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToContent = () => {
    const firstSection = document.getElementById("risks");
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10 z-0"></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-6 rounded-full bg-accent/20 text-accent text-sm font-medium animate-fade-in">
            AI Strategy & Implementation
          </span>
          
          <h1 className="font-bold mb-6 animate-slide-up text-white" style={{ animationDelay: "0.2s" }}>
            De-risk and fast-track your AI&nbsp;ambitions
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            From ideation to AI-driven, scalable solutions — built for real users and business cases.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <a href="#contact" className="accent-btn">
              Let's Talk
            </a>
            <a href="#promise" className="secondary-btn">
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToContent}
      >
        <ChevronDown className="h-8 w-8 text-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;
