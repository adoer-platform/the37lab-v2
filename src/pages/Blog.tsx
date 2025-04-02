
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "../components/ui/pagination";

// Use the same blog post type from BlogSection
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  path: string;
};

const Blog = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Update document title
    document.title = "the37blog | Articles on AI Strategy and Implementation";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Initialize animation
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Sample blog posts data - using the same data from BlogSection component
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "AI Strategy for Enterprise: Beyond the Hype",
      excerpt: "How to develop a practical AI roadmap that delivers real business value instead of chasing trends.",
      category: "Strategy",
      date: "June 12, 2023",
      readTime: "8 min read",
      imageUrl: "/placeholder.svg",
      path: "/blog/ai-strategy-enterprise"
    },
    {
      id: 2,
      title: "Case Study: AI Implementation in Financial Services",
      excerpt: "How we helped a leading financial institution reduce operational costs by 35% with targeted AI solutions.",
      category: "Case Study",
      date: "May 28, 2023",
      readTime: "12 min read",
      imageUrl: "/placeholder.svg",
      path: "/blog/case-study-financial-services"
    },
    {
      id: 3,
      title: "The Technical Debt of AI: Understanding Hidden Costs",
      excerpt: "Why many AI projects fail to scale and how to build architectures that grow with your business needs.",
      category: "Technical",
      date: "April 15, 2023",
      readTime: "10 min read",
      imageUrl: "/placeholder.svg",
      path: "/blog/technical-debt-ai"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header section */}
      <div className="relative bg-gradient-to-b from-background to-secondary/30 pt-24 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center text-accent hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Link>
          
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 tracking-tight ${animate ? 'animate-fade-in' : 'opacity-0'}`}>
            the37<span className="text-accent">blog</span>
          </h1>
          
          <p className={`text-xl text-muted-foreground max-w-xl ${animate ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
            Insights and perspectives on AI strategy, implementation, and innovation from our team of experts.
          </p>
        </div>
      </div>
      
      {/* Blog posts grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className={`card-highlight group flex flex-col h-full ${animate ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${post.id * 0.1}s` }}>
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-3 text-sm">
                  <span className="text-accent font-medium">{post.category}</span>
                  <div className="text-muted-foreground flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                    <Clock className="h-3 w-3 ml-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                
                <Link to={post.path} className="mt-auto group-hover:text-accent transition-colors flex items-center font-medium">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination - for future use when more blog posts are added */}
        <div className="mt-16">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationLink isActive>1</PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
