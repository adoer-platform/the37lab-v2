
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
};

const BlogSection = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "AI Strategy for Enterprise: Beyond the Hype",
      excerpt: "How to develop a practical AI roadmap that delivers real business value instead of chasing trends.",
      category: "Strategy",
      date: "June 12, 2023",
      readTime: "8 min read",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Case Study: AI Implementation in Financial Services",
      excerpt: "How we helped a leading financial institution reduce operational costs by 35% with targeted AI solutions.",
      category: "Case Study",
      date: "May 28, 2023",
      readTime: "12 min read",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 3,
      title: "The Technical Debt of AI: Understanding Hidden Costs",
      excerpt: "Why many AI projects fail to scale and how to build architectures that grow with your business needs.",
      category: "Technical",
      date: "April 15, 2023",
      readTime: "10 min read",
      imageUrl: "/placeholder.svg"
    }
  ];

  return (
    <section id="the37blog" className="bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className={`fade-in-section ${animate ? 'is-visible' : ''}`}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h2 className="section-title">
                  the37<span className="text-accent">blog</span>
                </h2>
                <p className="section-subtitle max-w-2xl">
                  Insights and perspectives on AI strategy, implementation, and innovation from our team of experts.
                </p>
              </div>
              
              <a href="#" className="group flex items-center text-accent font-medium mt-4 md:mt-0 hover:underline">
                View all articles
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="card-highlight group flex flex-col h-full">
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
                      <div className="text-muted-foreground">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    
                    <a href="#" className="mt-auto group-hover:text-accent transition-colors flex items-center font-medium">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
