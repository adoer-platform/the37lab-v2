
import { useState, useEffect, useRef } from "react";
import { Database, Package, Cog, CheckCircle } from "lucide-react";

const ArchitectureSection = () => {
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

  const components = [
    {
      icon: <Database className="h-10 w-10 text-accent" />,
      title: "Off-the-shelf Solutions",
      items: ["Databases", "Large Language Models", "Low-code frameworks", "Cloud infrastructure"],
      delay: "0.1s",
    },
    {
      icon: <Package className="h-10 w-10 text-accent" />,
      title: "Market-Ready Software",
      items: ["Ready-to-integrate components", "Pre-built user interfaces", "Workflow templates", "Analytics dashboards"],
      delay: "0.3s",
    },
    {
      icon: <Cog className="h-10 w-10 text-accent" />,
      title: "Tailored Solutions",
      items: ["Custom integrations", "Specialized workflows", "Domain-specific models", "Unique user experiences"],
      delay: "0.5s",
    },
  ];

  return (
    <section id="architectural-components" className="py-24 bg-secondary/50" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`section-title ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            Strategic AI Building Blocks
          </h2>
          <p className={`text-xl text-muted-foreground ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            We integrate the best technological building blocks to create solutions tailored to your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {components.map((component, index) => (
            <div
              key={index}
              className={`bg-background rounded-xl p-8 border border-border hover:border-accent/20 transition-all hover:shadow-md ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: component.delay }}
            >
              <div className="flex flex-col">
                <div className="bg-accent/10 rounded-full p-4 w-fit mb-6">{component.icon}</div>
                <h3 className="text-xl font-semibold mb-6">{component.title}</h3>
                <ul className="space-y-3">
                  {component.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
