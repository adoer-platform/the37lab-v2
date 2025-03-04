
import { useState, useEffect, useRef } from "react";
import { MessageSquare, Lightbulb, Code, BarChart4, Share2 } from "lucide-react";

const ProcessSection = () => {
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

  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      number: "01",
      title: "Discussion & Ideation",
      description: "Joint discovery of challenges and user needs to identify high-impact opportunities.",
      delay: "0.1s",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-accent" />,
      number: "02",
      title: "Pitch → Go/No-Go",
      description: "Iterate ideas and refine the pitch until we have a solid concept worth pursuing.",
      delay: "0.2s",
    },
    {
      icon: <Code className="h-8 w-8 text-accent" />,
      number: "03",
      title: "Proof-of-Concept (PoC)",
      description: "Develop initial workflows and test core assumptions with minimal investment.",
      delay: "0.3s",
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-accent" />,
      number: "04",
      title: "Business Value Delivery",
      description: "Implement all necessary software and workflows to create tangible business outcomes.",
      delay: "0.4s",
    },
    {
      icon: <Share2 className="h-8 w-8 text-accent" />,
      number: "05",
      title: "Commercialization",
      description: "Transition from version 1 to full market rollout with scaling support.",
      delay: "0.5s",
    },
  ];

  return (
    <section className="py-24" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`section-title ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            How We Do It: Step-by-Step
          </h2>
          <p className={`text-xl text-muted-foreground ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            Our systematic approach ensures we deliver value at every stage while minimizing risk.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-start gap-6 ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: step.delay }}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-semibold text-accent mr-2">{step.number}</span>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
