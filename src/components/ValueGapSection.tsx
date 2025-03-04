
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
            <div className="aspect-square bg-accent/10 rounded-2xl overflow-hidden relative">
              {/* Value Gap Illustration */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full">
                  {/* Generic AI circle */}
                  <div className="bg-white rounded-full h-32 w-32 flex items-center justify-center absolute left-1/4 -translate-x-1/2 top-1/4 -translate-y-1/2 shadow-lg border border-border z-10">
                    <span className="text-sm font-medium">Generic AI</span>
                  </div>
                  
                  {/* Business Value circle */}
                  <div className="bg-white rounded-full h-32 w-32 flex items-center justify-center absolute right-1/4 translate-x-1/2 top-1/4 -translate-y-1/2 shadow-lg border border-border z-10">
                    <span className="text-sm font-medium">Business Value</span>
                  </div>
                  
                  {/* Value Gap area */}
                  <div className="absolute top-1/2 left-0 right-0 h-20 bg-destructive/10 flex items-center justify-center">
                    <span className="text-destructive font-semibold">Value Gap</span>
                  </div>
                  
                  {/* the37lab Solution */}
                  <div className="bg-accent rounded-full h-40 w-40 flex items-center justify-center absolute left-1/2 -translate-x-1/2 bottom-6 shadow-lg border border-accent/20 z-20">
                    <div className="text-center text-accent-foreground">
                      <div className="font-bold">the37lab</div>
                      <div className="text-sm">Bridging the Gap</div>
                    </div>
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
