
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPost2 = () => {
  useEffect(() => {
    // Update document title
    document.title = "Case Study: AI Implementation in Financial Services | the37lab";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header section with gradient background */}
        <div className="relative bg-gradient-to-b from-background to-secondary/30 py-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/#the37blog" className="inline-flex items-center text-accent hover:underline mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all articles
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Case Study: AI Implementation in Financial Services
            </h1>
            
            <div className="flex flex-wrap items-center text-muted-foreground gap-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>May 28, 2023</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>12 min read</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                <span className="text-accent">Case Study</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Article content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto prose prose-lg prose-accent">
            <p className="lead">
              How we helped a leading financial institution reduce operational costs by 35% with targeted AI solutions.
            </p>
            
            <h2>Client Background</h2>
            
            <p>
              Our client, a mid-sized financial services company with over $50 billion in assets under management, 
              was struggling with inefficiencies in their back-office operations. Manual processes were leading 
              to high error rates, customer service delays, and escalating operational costs.
            </p>
            
            <h2>The Challenge</h2>
            
            <p>
              The company was facing several specific challenges:
            </p>
            
            <ul>
              <li>Document processing operations required 200+ full-time employees</li>
              <li>Customer service representatives spent 40% of their time searching for information</li>
              <li>Compliance reviews were time-consuming and inconsistent</li>
              <li>Legacy systems were difficult to integrate with modern tools</li>
            </ul>
            
            <p>
              The company had attempted several technology initiatives in the past, but these had delivered 
              limited value due to siloed implementations and poor user adoption.
            </p>
            
            <h2>Our Approach</h2>
            
            <p>
              Rather than pursuing a single, monolithic AI solution, we worked with the client to develop 
              a portfolio of targeted interventions:
            </p>
            
            <h3>1. Document Intelligence System</h3>
            
            <p>
              We deployed a custom document processing solution that combined OCR, NLP, and machine learning 
              to automatically extract, validate, and categorize information from diverse document types. 
              The system was trained on the client's specific document formats and business rules.
            </p>
            
            <h3>2. Knowledge Assistant</h3>
            
            <p>
              We built an AI-powered search and recommendation tool that enabled customer service representatives 
              to find relevant information across multiple systems through natural language queries. The system 
              continuously improved based on user feedback and usage patterns.
            </p>
            
            <h3>3. Compliance Monitoring</h3>
            
            <p>
              We implemented an AI-based compliance review system that could scan communications, transactions, 
              and documents for potential compliance issues, significantly reducing the manual review workload 
              while improving consistency and coverage.
            </p>
            
            <h2>Implementation Strategy</h2>
            
            <p>
              Our implementation followed a phased approach:
            </p>
            
            <ol>
              <li>Pilot deployments in targeted business areas to demonstrate value</li>
              <li>Iterative refinement based on user feedback and performance metrics</li>
              <li>Integration with existing workflows and systems</li>
              <li>Knowledge transfer and capability building for the client's team</li>
              <li>Controlled scaling across the organization</li>
            </ol>
            
            <h2>Results</h2>
            
            <p>
              Within 12 months of full deployment, the client achieved:
            </p>
            
            <ul>
              <li>35% reduction in operational costs across targeted functions</li>
              <li>73% decrease in document processing time</li>
              <li>41% improvement in customer service response times</li>
              <li>68% reduction in compliance review effort with improved accuracy</li>
              <li>$14.2 million in annual savings</li>
            </ul>
            
            <h2>Key Success Factors</h2>
            
            <p>
              Several factors contributed to the success of this implementation:
            </p>
            
            <ul>
              <li>Focus on specific business problems rather than technology for its own sake</li>
              <li>Deep collaboration between our technical team and the client's domain experts</li>
              <li>Iterative development approach that delivered value incrementally</li>
              <li>Comprehensive change management and training program</li>
              <li>Robust feedback loops to continuously improve the solutions</li>
            </ul>
            
            <h2>Conclusion</h2>
            
            <p>
              This case demonstrates that successful AI implementation in financial services requires more than 
              just advanced technology. It demands a careful assessment of business needs, thoughtful solution 
              design, and a disciplined implementation approach. By focusing on these elements, we were able 
              to help our client achieve substantial operational improvements and cost savings.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost2;
