
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    const firstSection = document.getElementById("risks");
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Starry sky background with deep space gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C] via-[#221F26] to-[#403E43]/60 z-0"></div>
      
      {/* Dynamic stars layer */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Small twinkling stars */}
        <div className="stars-small absolute inset-0"></div>
        
        {/* Medium twinkling stars */}
        <div className="stars-medium absolute inset-0"></div>
        
        {/* Large twinkling stars */}
        <div className="stars-large absolute inset-0"></div>
        
        {/* Occasional shooting stars */}
        <div className="shooting-stars absolute inset-0"></div>
        
        {/* Nebula-like clouds */}
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-[#1EAEDB]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-xl animate-pulse opacity-50"></div>
      </div>
      
      {/* Content Container with enhanced animation */}
      <div className="container mx-auto px-4 relative z-10 pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`flex justify-center mb-6 transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-white tracking-tighter animate-float">
              <span className="text-accent text-shadow-glow">the37lab</span>
            </h1>
          </div>
          
          <h2 className={`font-bold mb-8 text-white transition-all duration-700 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="block text-accent text-shadow-glow">De-risk</span> and fast-track your <span className="relative inline-block">
              AI&nbsp;ambitions
              <span className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent to-purple-500 rounded-full"></span>
            </span>
          </h2>
          
          <p className={`text-xl md:text-2xl text-muted-foreground mb-12 transition-all duration-700 delay-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            From ideation to AI-driven, scalable solutions — <br className="hidden md:block" />
            <span className="text-foreground">built for real users and business cases.</span>
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a href="#contact" className="accent-btn group relative overflow-hidden">
              <span className="relative z-10">Let's Talk</span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent/80 to-accent/60 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </a>
            <a href="#promise" className="secondary-btn group relative overflow-hidden">
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator with artistic glow effect */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group transition-all duration-1000 delay-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        onClick={scrollToContent}
      >
        <div className="relative">
          <ChevronDown className="h-8 w-8 text-accent animate-bounce" />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-purple-500/30 rounded-full blur-md -z-10 group-hover:bg-accent/30 transition-colors duration-300"></div>
        </div>
      </div>

      {/* Artistic glowing line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
