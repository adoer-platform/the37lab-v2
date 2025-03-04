
import { useState, useEffect, useRef } from "react";
import { AlertCircle, Layers, Clock } from "lucide-react";

const RiskSection = () => {
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

  const risks = [
    {
      icon: <AlertCircle className="h-10 w-10 text-accent" />,
      title: "Unclear Business Value",
      description: "Many AI initiatives fail because they aren't aligned with real business goals or don't address actual user needs.",
      delay: "0.1s",
    },
    {
      icon: <Layers className="h-10 w-10 text-accent" />,
      title: "Technology Choices",
      description: "Navigating the trade-offs between off-the-shelf solutions and custom development is complex and costly if done wrong.",
      delay: "0.3s",
    },
    {
      icon: <Clock className="h-10 w-10 text-accent" />,
      title: "Time & Money",
      description: "Shifting requirements, evolving technologies, and unexpected challenges can quickly drain resources without delivering value.",
      delay: "0.5s",
    },
  ];

  return (
    <section id="risks" className="py-24 bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Abstract background graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-accent/5 to-transparent opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-accent/10"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full border border-accent/5"></div>
        <div className="absolute top-1/3 right-10 w-20 h-20 rounded-full bg-accent/5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-accent/5"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'radial-gradient(rgba(142, 220, 45, 0.2) 1px, transparent 1px)', 
            backgroundSize: '30px 30px' 
          }}></div>
        </div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`section-title text-white ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            Three Types of Risks For Your AI Initiative
          </h2>
          <p className={`text-xl text-muted-foreground ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            Understanding these risks is the first step to developing successful AI solutions that deliver real business value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {risks.map((risk, index) => (
            <div
              key={index}
              className={`card-highlight group ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: risk.delay }}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6 bg-gradient-to-br from-accent/20 to-accent/5 p-4 rounded-full group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-300">
                  {risk.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{risk.title}</h3>
                <p className="text-foreground/80">{risk.description}</p>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full border border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full border border-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiskSection;
