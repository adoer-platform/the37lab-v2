
import { useState, useEffect, useRef } from "react";
import { ArrowRight, BrainCircuit, AtomIcon, Network } from "lucide-react";

const ValueGapSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="ai-value-gap" className="py-24" ref={sectionRef}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className={`section-title ${isVisible ? "animate-slide-right" : "opacity-0"}`}>
              From Concept to Reality
            </h2>
            <p className={`text-xl mb-8 ${isVisible ? "animate-slide-right" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
              Building effective AI solutions requires bridging the gap between technical capabilities and real-world applications.
            </p>
            <div className={`bg-secondary/50 rounded-lg p-6 border border-border ${isVisible ? "animate-slide-right" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
              <h3 className="text-xl font-semibold mb-3">Coding is Easy, Software is Hard</h3>
              <p className="text-muted-foreground mb-6">
                The difference between a prototype and a production-ready solution is vast. We bridge this gap by focusing on what matters most: delivering real user value.
              </p>
              <a href="#promise" className="group inline-flex items-center text-accent font-medium">
                Learn how we bridge the gap 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className={`relative ${isVisible ? "animate-slide-left" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            <div className="aspect-square bg-gradient-to-br from-accent/5 to-background rounded-2xl overflow-hidden relative border border-accent/10">
              {/* Artistic tech visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Radial gradient background */}
                <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-background/50 to-background"></div>
                
                {/* Animated nodes and connections */}
                <div className="relative w-full h-full">
                  {/* Central node */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-40 h-40 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center z-20 border border-accent/30 shadow-[0_0_30px_rgba(142,220,45,0.3)]">
                      <BrainCircuit size={60} className="text-accent-foreground" />
                    </div>
                  </div>
                  
                  {/* Orbital paths */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-accent/20 opacity-80"></div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-accent/10 opacity-60 
                                  border-dashed"></div>
                  
                  {/* Surrounding nodes */}
                  <div className="absolute left-1/2 top-[15%] -translate-x-1/2 flex flex-col items-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-600/70 to-purple-800/70 rounded-full flex items-center justify-center z-10 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                      <AtomIcon size={32} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute left-[15%] top-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-28 h-28 bg-gradient-to-br from-blue-500/70 to-blue-700/70 rounded-full flex items-center justify-center z-10 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                      <Network size={36} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute right-[15%] top-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-28 h-28 bg-gradient-to-br from-accent/70 to-green-700/70 rounded-full flex items-center justify-center z-10 border border-accent/30 shadow-[0_0_15px_rgba(142,220,45,0.3)]">
                      <BrainCircuit size={36} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 bottom-[15%] -translate-x-1/2 flex flex-col items-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-teal-500/70 to-teal-700/70 rounded-full flex items-center justify-center z-10 border border-teal-500/30 shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                      <AtomIcon size={32} className="text-white" />
                    </div>
                  </div>
                  
                  {/* Connecting lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(142, 220, 45, 0.7)" />
                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0.7)" />
                      </linearGradient>
                      <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(142, 220, 45, 0.7)" />
                        <stop offset="100%" stopColor="rgba(168, 85, 247, 0.7)" />
                      </linearGradient>
                      <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(142, 220, 45, 0.7)" />
                        <stop offset="100%" stopColor="rgba(20, 184, 166, 0.7)" />
                      </linearGradient>
                      <linearGradient id="lineGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(142, 220, 45, 0.7)" />
                        <stop offset="100%" stopColor="rgba(16, 185, 129, 0.7)" />
                      </linearGradient>
                    </defs>
                    
                    {/* Pulse animation for lines */}
                    <path d="M50,50 L50,15" stroke="url(#lineGradient2)" strokeWidth="0.5" fill="none">
                      <animate attributeName="stroke-dasharray" from="0,150" to="150,0" dur="4s" repeatCount="indefinite" />
                    </path>
                    <path d="M50,50 L15,50" stroke="url(#lineGradient1)" strokeWidth="0.5" fill="none">
                      <animate attributeName="stroke-dasharray" from="0,150" to="150,0" dur="3s" repeatCount="indefinite" />
                    </path>
                    <path d="M50,50 L85,50" stroke="url(#lineGradient4)" strokeWidth="0.5" fill="none">
                      <animate attributeName="stroke-dasharray" from="0,150" to="150,0" dur="3.5s" repeatCount="indefinite" />
                    </path>
                    <path d="M50,50 L50,85" stroke="url(#lineGradient3)" strokeWidth="0.5" fill="none">
                      <animate attributeName="stroke-dasharray" from="0,150" to="150,0" dur="4.5s" repeatCount="indefinite" />
                    </path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueGapSection;
