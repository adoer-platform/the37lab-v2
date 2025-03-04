
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
    <section id="risks" className="py-24 bg-background" ref={sectionRef}>
      <div className="section-container">
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
              className={`card-highlight ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: risk.delay }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">{risk.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{risk.title}</h3>
                <p className="text-foreground/80">{risk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiskSection;
