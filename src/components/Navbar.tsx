import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-3" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold tracking-tight text-white">
            the37lab
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#architectural-components" className="text-lg font-medium text-foreground hover:text-accent transition-colors">AI Building Blocks</a>
          <a href="#ai-value-gap" className="text-lg font-medium text-foreground hover:text-accent transition-colors">
            AI Value Gap
          </a>
          <a href="#promise" className="text-lg font-medium text-foreground hover:text-accent transition-colors">What we do</a>
          <a href="#contact" className="accent-btn text-lg">
            Get Started
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-accent/10 animate-slide-down">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#architectural-components" className="py-2 text-xl text-foreground hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Getting started with AI
            </a>
            <a href="#ai-value-gap" className="py-2 text-xl text-foreground hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              AI Value Gap
            </a>
            <a href="#promise" className="py-2 text-xl text-foreground hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Our Promise
            </a>
            <a href="#contact" className="accent-btn inline-block text-center text-xl" onClick={() => setIsMobileMenuOpen(false)}>
              Get Started
            </a>
          </div>
        </div>}
    </nav>;
};
export default Navbar;