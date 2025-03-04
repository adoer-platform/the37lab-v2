
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
    <section id="promise" className="py-24 bg-secondary relative overflow-hidden" ref={sectionRef}>
      {/* Abstract background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glowing orbs */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl"></div>
        
        {/* Circuit-like patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600">
          <path 
            d="M100,100 L200,100 L200,200 L300,200 L300,300 L400,300 L400,400 L500,400 L500,500 L600,500 L600,300 L700,300" 
            fill="none" 
            stroke="rgba(142, 220, 45, 0.8)" 
            strokeWidth="2"
            strokeDasharray="10,5"
          />
          <path 
            d="M100,500 L200,500 L200,400 L300,400 L300,300 L400,300 L400,200 L500,200 L500,100" 
            fill="none" 
            stroke="rgba(142, 220, 45, 0.6)" 
            strokeWidth="2"
            strokeDasharray="10,5"
          />
          <circle cx="100" cy="100" r="5" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="200" cy="100" r="5" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="200" cy="200" r="5" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="300" cy="200" r="5" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="300" cy="300" r="5" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="400" cy="300" r="5" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="400" cy="400" r="5" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="500" cy="400" r="5" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="500" cy="500" r="5" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="600" cy="500" r="5" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="600" cy="300" r="5" fill="rgba(142, 220, 45, 0.8)" />
          <circle cx="700" cy="300" r="5" fill="rgba(142, 220, 45, 0.8)" />
          
          <circle cx="100" cy="500" r="5" fill="rgba(142, 220, 45, 0.6)" />
          <circle cx="200" cy="500" r="5" fill="rgba(142, 220, 45, 0.6)" />
          <circle cx="200" cy="400" r="5" fill="rgba(142, 220, 45, 0.6)" />
          <circle cx="300" cy="400" r="5" fill="rgba(142, 220, 45, 0.6)" />
          <circle cx="300" cy="300" r="5" fill="rgba(142, 220, 45, 0.6)" />
          <circle cx="400" cy="300" r="5" fill="rgba(142, 220, 45, 0.6)" />
          <circle cx="400" cy="200" r="5" fill="rgba(142, 220, 45, 0.6)" />
          <circle cx="500" cy="200" r="5" fill="rgba(142, 220, 45, 0.6)" />
          <circle cx="500" cy="100" r="5" fill="rgba(142, 220, 45, 0.6)" />
        </svg>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`section-title text-white ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            the37lab Promise
          </h2>
          <p className={`text-xl text-foreground/80 ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            Real user value through applied AI, that you and your business can trust.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group bg-background/40 backdrop-blur-sm rounded-xl p-8 border border-accent/10 hover:border-accent/30 transition-colors ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: service.delay }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              <div className="flex flex-col h-full relative z-10">
                <div className="bg-accent/20 rounded-full p-3 w-fit mb-6 group-hover:bg-accent/30 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-foreground/80 flex-grow">{service.description}</p>
                
                {/* Decorative corner accent */}
                <div className="absolute -bottom-1 -right-1 w-16 h-16 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-accent/40 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
