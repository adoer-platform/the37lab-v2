
import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

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
              The AI Value Gap
            </h2>
            <p className={`text-xl mb-8 ${isVisible ? "animate-slide-right" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
              Generic AI solutions often fall short because they aren't tailored to specific business contexts and user needs.
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
              {/* Improved Value Gap Visualization */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full h-full relative">
                  {/* Gradient background for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-background/40 to-accent/5 opacity-40"></div>
                  
                  {/* Connecting lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    <path 
                      d="M100,100 L300,100 L300,300 L100,300 Z" 
                      fill="none" 
                      stroke="rgba(142, 70, 45, 0.2)" 
                      strokeWidth="1"
                      strokeDasharray="5,5"
                    />
                    <path 
                      d="M200,200 L100,100" 
                      fill="none" 
                      stroke="rgba(142, 70, 45, 0.4)" 
                      strokeWidth="2"
                    />
                    <path 
                      d="M200,200 L300,100" 
                      fill="none" 
                      stroke="rgba(142, 70, 45, 0.4)" 
                      strokeWidth="2"
                    />
                  </svg>
                  
                  {/* Generic AI circle */}
                  <div className="absolute left-1/4 -translate-x-1/2 top-1/4 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-32 h-32 bg-background rounded-full flex items-center justify-center shadow-lg border border-border z-10">
                      <span className="text-sm font-medium text-center px-4">Generic AI</span>
                    </div>
                  </div>
                  
                  {/* Business Value circle */}
                  <div className="absolute right-1/4 translate-x-1/2 top-1/4 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-32 h-32 bg-background rounded-full flex items-center justify-center shadow-lg border border-border z-10">
                      <span className="text-sm font-medium text-center px-4">Business Value</span>
                    </div>
                  </div>
                  
                  {/* Value Gap area */}
                  <div className="absolute top-1/2 left-0 right-0 h-20 bg-destructive/10 flex items-center justify-center">
                    <span className="text-destructive font-semibold">Value Gap</span>
                  </div>
                  
                  {/* the37lab Solution */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-12 flex flex-col items-center">
                    <div className="w-40 h-40 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center shadow-lg z-20 border border-accent/20">
                      <div className="text-center text-accent-foreground">
                        <div className="font-bold">the37lab</div>
                        <div className="text-sm mt-1">Bridging the Gap</div>
                      </div>
                    </div>
                    {/* Add connecting rays from the37lab circle */}
                    <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 400 400" style={{ zIndex: 0 }}>
                      <path 
                        d="M200,300 L100,100" 
                        fill="none" 
                        stroke="rgba(142, 220, 45, 0.3)" 
                        strokeWidth="2"
                      />
                      <path 
                        d="M200,300 L300,100" 
                        fill="none" 
                        stroke="rgba(142, 220, 45, 0.3)" 
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
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
