
import { useState, useEffect, useRef } from "react";
import { Sparkles, Users, Rocket } from "lucide-react";

const PromiseSection = () => {
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

  const services = [
    {
      icon: <Sparkles className="h-8 w-8 text-accent" />,
      title: "Ideation",
      description: "Free ideation and proof-of-concept with no strings attached. We help you explore possibilities before committing resources.",
      delay: "0.1s",
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Collaborative Design & Build",
      description: "We co-create solutions with your team, ensuring alignment with business goals and user needs throughout the development process.",
      delay: "0.3s",
    },
    {
      icon: <Rocket className="h-8 w-8 text-accent" />,
      title: "Incubation/Collaboration",
      description: "Choose between fully supported market-ready software or co-development options to match your team's capabilities and goals.",
      delay: "0.5s",
    },
  ];

  return (
    <section id="promise" className="py-24 bg-primary text-primary-foreground" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`section-title ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            the37lab Promise
          </h2>
          <p className={`text-xl text-primary-foreground/80 ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            Real user value through applied AI, that you and your business can trust.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/10 hover:border-accent/30 transition-colors ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: service.delay }}
            >
              <div className="flex flex-col h-full">
                <div className="bg-accent/10 rounded-full p-3 w-fit mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-primary-foreground/70 flex-grow">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
