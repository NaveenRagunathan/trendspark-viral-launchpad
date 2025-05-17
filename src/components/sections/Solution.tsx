
import React, { useEffect, useState } from 'react';
import { TrendingUp, MessageSquare, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Solution = () => {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById('solution-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  return (
    <section id="solution-section" className="section-padding bg-trendspark-black relative">
      {/* Dynamic background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[15%] w-[600px] h-[600px] bg-trendspark-mint/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[5%] left-[10%] w-[500px] h-[500px] bg-trendspark-peach/5 rounded-full blur-[120px]"></div>
        
        {/* Animated gradient line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-trendspark-mint/30 to-transparent"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-[0.03]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* Main heading */}
        <div className={cn(
          "text-center mb-20 opacity-0",
          isInView && "animate-fade-in"
        )}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Your AI Trend <span className="bg-gradient-to-r from-trendspark-mint to-trendspark-peach bg-clip-text text-transparent">Copilot</span>
          </h2>
          <p className="text-trendspark-text-secondary max-w-3xl mx-auto text-xl leading-relaxed">
            TrendSpark scans platforms in real-time, identifying patterns before they trend, and transforms them into engaging hooks that captivate your audience.
          </p>
        </div>
        
        {/* Solution Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutionCards.map((card, index) => (
            <SolutionCard 
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              gradient={card.gradient}
              preview={card.preview}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const solutionCards = [
  {
    title: "Trend Finder",
    description: "24/7 scanning across platforms to detect emerging trends before they reach mainstream attention",
    icon: TrendingUp,
    gradient: "from-blue-500/20 to-purple-500/20",
    preview: "Trend Alert: 'Silent walking' +245% growth in last 4 hours"
  },
  {
    title: "Hook Generator",
    description: "AI crafts scroll-stopping hooks perfectly tailored to your niche and authentic voice",
    icon: MessageSquare,
    gradient: "from-trendspark-mint/20 to-green-500/20",
    preview: "I tried 'silent walking' for 7 days and discovered something unexpected..."
  },
  {
    title: "Format Optimizer",
    description: "Platform-specific templates and hashtag strategies optimized for each algorithm's preferences",
    icon: ArrowRight,
    gradient: "from-trendspark-peach/20 to-red-500/20",
    preview: "#silentwalking #mentalhealthtips #mindfulness [See 6 more...]"
  }
];

const SolutionCard = ({ title, description, icon: Icon, gradient, preview, index, isInView }: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  preview: string;
  index: number;
  isInView: boolean;
}) => {
  return (
    <div 
      className={cn(
        "card-gradient rounded-xl p-8 perspective-card card-highlight opacity-0 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-2 border border-white/5 group relative overflow-hidden",
        isInView && "animate-fade-in"
      )}
      style={{ animationDelay: `${600 + index * 200}ms` }}
    >
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out"></div>
      
      <div className="mb-6">
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-trendspark-text-secondary text-lg">{description}</p>
      </div>
      
      <div 
        className="mt-8 p-4 rounded-lg bg-trendspark-elevated/50 border border-white/5 text-lg hover:bg-trendspark-elevated hover:border-trendspark-mint/20 transition-all cursor-pointer group/preview relative overflow-hidden"
      >
        <div className="flex justify-between items-center text-sm mb-2 text-trendspark-text-secondary">
          <span className="font-medium">PREVIEW</span>
          <span className="opacity-0 group-hover/preview:opacity-100 transition-opacity text-trendspark-mint flex items-center gap-1">
            <span>Try it</span>
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
        <div className="text-white relative z-10">{preview}</div>
        
        {/* Gradient background that appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-trendspark-mint/5 to-transparent opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default Solution;
