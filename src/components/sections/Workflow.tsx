
import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowRight, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const Workflow = () => {
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
    
    const section = document.getElementById('workflow');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  return (
    <section id="workflow" className="section-padding bg-trendspark-black relative">
      {/* Background patterns */}
      <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-trendspark-mint/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className={cn(
          "text-center mb-16 opacity-0",
          isInView && "animate-fade-in"
        )}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Your Daily Viral Content Workflow
          </h2>
          <p className="text-trendspark-text-secondary max-w-2xl mx-auto text-xl">
            From trend detection to viral posting in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {workflowSteps.map((step, index) => (
            <WorkflowStep 
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
              icon={step.icon}
              visual={step.visual}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
        
        <div className={cn(
          "mt-16 text-center opacity-0",
          isInView && "animate-fade-in"
        )}
          style={{ animationDelay: '1200ms' }}
        >
          <button className="neon-button inline-flex items-center gap-2 text-lg px-10 py-4 rounded-lg hover:scale-105 transition-transform">
            Start Your Workflow
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

const workflowSteps = [
  {
    title: "Daily Trend Digest",
    description: "Receive personalized trend alerts from your industry before they go mainstream",
    icon: Calendar,
    visual: (
      <div className="bg-trendspark-elevated rounded-lg p-4">
        <div className="flex justify-between items-center mb-3 text-xs">
          <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded">MORNING DIGEST</span>
          <span className="text-trendspark-text-secondary">May 17, 2025</span>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <span className="text-sm">AI personal finance +186%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
            <span className="text-sm">Sustainable fashion +142%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-sm">Digital minimalism +118%</span>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Personalized Hook Drop",
    description: "Get 5+ AI-generated hooks tailored to your voice and content style",
    icon: MessageSquare,
    visual: (
      <div className="bg-trendspark-elevated rounded-lg p-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium">Hook Generator</span>
          <span className="text-xs bg-trendspark-mint/20 text-trendspark-mint px-2 py-1 rounded">Optimized</span>
        </div>
        <div className="space-y-1">
          <div className="text-sm bg-trendspark-black/50 p-2 rounded border-l-2 border-trendspark-mint">
            I tried AI budgeting for 30 days and saved $2,467 without feeling restricted...
          </div>
          <div className="text-xs text-trendspark-text-secondary mt-1 flex justify-between">
            <span>Predicted: High Engagement</span>
            <button className="text-trendspark-mint hover:underline">Copy</button>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Post Before It Peaks",
    description: "Schedule your content at the optimal time to catch the algorithm wave",
    icon: Clock,
    visual: (
      <div className="bg-trendspark-elevated rounded-lg p-4">
        <div className="mb-3 text-sm font-medium">Optimal Posting Time</div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-trendspark-mint">10:45 AM</span>
            <span className="text-xs text-trendspark-text-secondary">Thursday, May 18</span>
          </div>
          <div className="bg-green-500/20 px-3 py-1 rounded text-green-400 text-xs">
            +237% Reach
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-trendspark-mint/30 hover:bg-trendspark-mint/40 text-trendspark-mint text-xs px-3 py-2 rounded transition-colors">
            Schedule Post
          </button>
        </div>
      </div>
    )
  }
];

const WorkflowStep = ({ number, title, description, icon: Icon, visual, index, isInView }: {
  number: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  visual: React.ReactNode;
  index: number;
  isInView: boolean;
}) => {
  return (
    <div 
      className={cn(
        "relative perspective-card opacity-0",
        isInView && "animate-fade-in"
      )}
      style={{ animationDelay: `${800 + index * 200}ms` }}
    >
      {/* Step Number */}
      <div className="absolute -top-6 -left-2 z-10">
        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-trendspark-elevated border border-trendspark-mint/30 text-2xl font-bold shadow-lg shadow-trendspark-mint/10">
          {number}
        </div>
      </div>
      
      <div className="card-gradient rounded-xl p-8 pt-10 border border-white/5 hover:border-trendspark-mint/20 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Icon className="w-6 h-6 text-trendspark-mint" />
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
          <p className="text-trendspark-text-secondary text-lg">{description}</p>
        </div>
        
        <div className="mt-8 transition-transform hover:translate-y-[-5px] duration-500 relative">
          {/* Overlay glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-trendspark-mint/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          
          {/* Content */}
          {visual}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
