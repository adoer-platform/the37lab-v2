
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-destructive/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)', 
            backgroundSize: '30px 30px' 
          }}></div>
        </div>
      </div>
      
      <div className="text-center relative z-10 p-8 bg-background/20 backdrop-blur-sm rounded-xl border border-accent/10">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <AlertTriangle className="h-16 w-16 text-destructive/80" />
            <div className="absolute inset-0 animate-pulse opacity-50">
              <AlertTriangle className="h-16 w-16 text-destructive/30" />
            </div>
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4 text-white animate-slide-down">404</h1>
        <p className="text-xl text-foreground/80 mb-6 animate-slide-down" style={{ animationDelay: "0.1s" }}>
          Oops! Page not found
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 hover:bg-accent/30 transition-colors text-accent rounded-md animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <Home className="h-4 w-4" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
