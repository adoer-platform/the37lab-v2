
import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const NextStepsSection = () => {
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
    <section id="contact" className="py-24 bg-secondary" ref={sectionRef}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`section-title text-white ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            Next Steps
          </h2>
          <p 
            className={`text-xl text-foreground/80 mb-10 ${isVisible ? "animate-slide-up" : "opacity-0"}`} 
            style={{ animationDelay: "0.2s" }}
          >
            Let's discuss your challenges and explore how AI can deliver pragmatic, engaging, and risk-reduced solutions for your business.
          </p>
          <div 
            className={`${isVisible ? "animate-scale-in" : "opacity-0"}`} 
            style={{ animationDelay: "0.4s" }}
          >
            <a 
              href="#"
              className="group inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground rounded-md px-8 py-4 font-medium transition-all active:scale-[0.98]"
            >
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;
