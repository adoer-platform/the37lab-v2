
import { useState, useEffect, useRef } from "react";
import { Code, Brain, GitMerge } from "lucide-react";

const SoftwareComponents = () => {
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
      icon: <Code className="h-12 w-12 text-accent" />,
      name: "ADoer",
      description: "Intelligent automation platform that streamlines workflows and enhances productivity",
      delay: "0ms",
    },
    {
      icon: <Brain className="h-12 w-12 text-accent" />,
      name: "AMPA",
      description: "Advanced modeling and predictive analytics solution for data-driven decision making",
      delay: "100ms",
    },
    {
      icon: <GitMerge className="h-12 w-12 text-accent" />,
      name: "Citeloop",
      description: "Collaborative research platform that connects insights across disciplines",
      delay: "200ms",
    },
  ];

  return (
    <section className="py-16 bg-background relative overflow-hidden" id="software-components" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {components.map((component, index) => (
            <div
              key={index}
              className={`card-highlight group ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ 
                animationDelay: component.delay,
                transitionDelay: component.delay
              }}
            >
              <div className="bg-gradient-to-br from-background to-secondary p-6 rounded-xl border border-accent/10 h-full transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-lg relative overflow-hidden">
                {/* Glowing accent in corner */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon container with glowing effect */}
                <div className="bg-accent/10 p-4 rounded-xl w-fit mb-6 relative overflow-hidden group-hover:bg-accent/20 transition-colors duration-300">
                  <div className="relative z-10">{component.icon}</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors duration-300">
                  {component.name}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {component.description}
                </p>
                
                {/* Interactive element */}
                <div className="mt-6 pt-4 border-t border-accent/10">
                  <a 
                    href="#" 
                    className="text-sm inline-flex items-center text-accent opacity-80 hover:opacity-100 transition-opacity"
                  >
                    Learn more
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Artistic glowing line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
    </section>
  );
};

export default SoftwareComponents;
