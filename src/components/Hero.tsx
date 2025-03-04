
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
      {/* Enhanced background with dynamic gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-accent/20 z-0"></div>
      
      {/* Animated particle field */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-full h-full opacity-20">
          {/* Particle dots grid */}
          <div className="h-full w-full" style={{ 
            backgroundImage: 'radial-gradient(rgba(142, 220, 45, 0.4) 1px, transparent 1px)', 
            backgroundSize: '30px 30px' 
          }}></div>
        </div>
      </div>
      
      {/* Enhanced abstract graphic elements with animation */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Larger glowing orbs with pulsation */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-accent/15 rounded-full blur-3xl"></div>
        
        {/* Digital circuit pattern overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
          <path 
            d="M10,30 L30,30 L30,10 L50,10 L50,30 L70,30 L70,50 L90,50 L90,70 L70,70 L70,90 L50,90 L50,70 L30,70 L30,50 L10,50 Z" 
            fill="none" 
            stroke="rgba(142, 220, 45, 0.6)" 
            strokeWidth="0.2"
            strokeDasharray="1,1"
          />
          <circle cx="10" cy="30" r="0.8" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="30" cy="30" r="0.8" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="30" cy="10" r="0.8" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="50" cy="10" r="0.8" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="50" cy="30" r="0.8" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="70" cy="30" r="0.8" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="70" cy="50" r="0.8" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="90" cy="50" r="0.8" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="90" cy="70" r="0.8" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="70" cy="70" r="0.8" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="70" cy="90" r="0.8" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="50" cy="90" r="0.8" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="50" cy="70" r="0.8" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="30" cy="70" r="0.8" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="30" cy="50" r="0.8" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="10" cy="50" r="0.8" fill="rgba(142, 220, 45, 0.8)" />
        </svg>
        
        {/* Animated concentric circles */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className={`w-[900px] h-[900px] border border-accent/10 rounded-full transition-all duration-1000 ease-out ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-accent/15 rounded-full transition-all duration-1000 delay-300 ease-out ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-accent/20 rounded-full transition-all duration-1000 delay-500 ease-out ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-accent/30 rounded-full transition-all duration-1000 delay-700 ease-out ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
        </div>
      </div>
      
      {/* Content Container with enhanced animation */}
      <div className="container mx-auto px-4 relative z-10 pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          <span className={`inline-block px-3 py-1 mb-6 rounded-full bg-accent/20 text-accent text-sm font-medium transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            AI Strategy & Implementation
          </span>
          
          <h1 className={`font-bold mb-8 text-white transition-all duration-700 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="block text-accent">De-risk</span> and fast-track your <span className="relative inline-block">
              AI&nbsp;ambitions
              <span className="absolute bottom-0 left-0 w-full h-1 bg-accent/50 rounded-full"></span>
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-muted-foreground mb-12 transition-all duration-700 delay-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            From ideation to AI-driven, scalable solutions — <br className="hidden md:block" />
            <span className="text-foreground">built for real users and business cases.</span>
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a href="#contact" className="accent-btn group relative overflow-hidden">
              <span className="relative z-10">Let's Talk</span>
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </a>
            <a href="#promise" className="secondary-btn group relative overflow-hidden">
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator with glow effect */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group transition-all duration-1000 delay-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        onClick={scrollToContent}
      >
        <div className="relative">
          <ChevronDown className="h-8 w-8 text-accent animate-bounce" />
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-md -z-10 group-hover:bg-accent/30 transition-colors duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
