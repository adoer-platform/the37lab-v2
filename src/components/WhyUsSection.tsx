
import { useState, useEffect, useRef } from "react";
import { Code, Brain, Users, Search } from "lucide-react";

const WhyUsSection = () => {
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

  const reasons = [
    {
      icon: <Code className="h-10 w-10 text-accent" />,
      title: "Software Expertise",
      description: "Decades of experience building robust, scalable software solutions across various industries.",
      delay: "0.1s",
    },
    {
      icon: <Brain className="h-10 w-10 text-accent" />,
      title: "AI Understanding",
      description: "Deep knowledge of AI technologies and their applications since the early days of machine learning.",
      delay: "0.2s",
    },
    {
      icon: <Users className="h-10 w-10 text-accent" />,
      title: "Collaborative Approach",
      description: "Transparency and user collaboration are at the core of our development philosophy.",
      delay: "0.3s",
    },
    {
      icon: <Search className="h-10 w-10 text-accent" />,
      title: "Driven by Curiosity",
      description: "Passionate about exploring the frontiers of technology to solve complex business challenges.",
      delay: "0.4s",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`section-title ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            Why Engage With the37lab?
          </h2>
          <p className={`text-xl text-muted-foreground ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            We bring a unique combination of technical expertise, business acumen, and collaborative spirit to every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`flex items-start gap-6 p-6 rounded-xl bg-background border border-border hover:border-accent/20 transition-all hover:shadow-sm ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: reason.delay }}
            >
              <div className="bg-accent/10 rounded-full p-3 flex-shrink-0">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
