import { ChevronDown, BrainCircuit, Network, Infinity } from "lucide-react";
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
      {/* Enhanced background with richer gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-purple-900/20 z-0"></div>
      
      {/* Enhanced animated particle field */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-full h-full opacity-20">
          {/* Particle dots grid with more artistic pattern */}
          <div className="h-full w-full" style={{ 
            backgroundImage: 'radial-gradient(rgba(142, 220, 45, 0.6) 1px, transparent 1px), radial-gradient(rgba(111, 76, 255, 0.3) 1px, transparent 2px)', 
            backgroundSize: '30px 30px, 50px 50px',
            backgroundPosition: '0 0, 15px 15px'
          }}></div>
        </div>
      </div>
      
      {/* Enhanced abstract graphic elements with animation */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Larger glowing orbs with pulsation */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-purple-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-xl animate-pulse opacity-70"></div>
        
        {/* Digital circuit pattern overlay with more complex pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
          <path 
            d="M10,30 Q20,10 30,30 T50,30 T70,30 T90,30 M90,50 Q70,70 50,50 T30,50 T10,50 M10,70 Q30,90 50,70 T70,70 T90,70" 
            fill="none" 
            stroke="rgba(142, 220, 45, 0.6)" 
            strokeWidth="0.3"
            strokeDasharray="0.5,0.5"
            className={`${animate ? 'animate-dash' : ''}`}
          />
          <path 
            d="M30,10 Q50,30 30,50 T30,90 M50,10 Q70,30 50,50 T50,90 M70,10 Q90,30 70,50 T70,90" 
            fill="none" 
            stroke="rgba(111, 76, 255, 0.4)" 
            strokeWidth="0.2"
            strokeDasharray="0.8,0.8"
            className={`${animate ? 'animate-dash-reverse' : ''}`}
          />
          
          {/* Connection points */}
          {[10, 30, 50, 70, 90].map((x) => 
            [30, 50, 70].map((y) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="0.8" fill="rgba(142, 220, 45, 0.8)" className={`${animate ? 'animate-pulse' : ''}`} />
            ))
          )}
        </svg>
        
        {/* Animated floating tech icons */}
        <div className={`absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 opacity-20 transition-all duration-1000 ease-out ${animate ? 'opacity-20 scale-100' : 'opacity-0 scale-90'}`}>
          <BrainCircuit size={120} className="text-accent animate-float" />
        </div>
        <div className={`absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 opacity-20 transition-all duration-1000 ease-out ${animate ? 'opacity-20 scale-100' : 'opacity-0 scale-90'}`}>
          <Network size={100} className="text-purple-400 animate-float-reverse" />
        </div>
        <div className={`absolute top-2/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 opacity-20 transition-all duration-1000 ease-out ${animate ? 'opacity-20 scale-100' : 'opacity-0 scale-90'}`}>
          <Infinity size={80} className="text-blue-400 animate-float-slow" />
        </div>
        
        {/* Animated concentric circles with artistic gradient borders */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className={`w-[900px] h-[900px] border border-gradient-to-r from-accent/30 to-purple-500/30 rounded-full transition-all duration-1000 ease-out ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full transition-all duration-1000 delay-300 ease-out ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gradient-to-r from-blue-500/30 to-accent/30 rounded-full transition-all duration-1000 delay-500 ease-out ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-accent/30 rounded-full transition-all duration-1000 delay-700 ease-out ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
        </div>
      </div>
      
      {/* Content Container with enhanced animation */}
      <div className="container mx-auto px-4 relative z-10 pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`flex justify-center mb-6 transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground text-shadow-glow">
              the37lab
            </h1>
          </div>
          
          <h1 className={`font-bold mb-8 text-white transition-all duration-700 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="block text-accent text-shadow-glow">De-risk</span> and fast-track your <span className="relative inline-block">
              AI&nbsp;ambitions
              <span className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent to-purple-500 rounded-full"></span>
            </span>
          </h1>
          
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
