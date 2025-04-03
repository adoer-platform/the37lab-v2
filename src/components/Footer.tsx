
import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/5 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">the37lab</h3>
            <p className="text-muted-foreground mb-6">
              Pioneering AI solutions that deliver real business value through applied innovation and deep expertise.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#risks" className="text-muted-foreground hover:text-accent transition-colors">
                  AI Risks
                </a>
              </li>
              <li>
                <a href="#promise" className="text-muted-foreground hover:text-accent transition-colors">
                  Our Promise
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-3" />
                <a href="mailto:info@the37lab.com" className="text-muted-foreground hover:text-accent transition-colors">
                  info@the37lab.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} the37lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
