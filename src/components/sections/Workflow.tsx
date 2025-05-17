
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Workflow = () => {
  return (
    <section id="workflow" className="section-padding bg-trendspark-black relative">
      <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Your Daily Viral Content Workflow
          </h2>
          <p className="text-trendspark-text-secondary max-w-2xl mx-auto text-lg">
            From trend detection to viral posting in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {workflowSteps.map((step, index) => (
            <WorkflowStep 
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
              icon={step.icon}
              visual={step.visual}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="neon-button inline-flex items-center gap-2">
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

const WorkflowStep = ({ number, title, description, icon: Icon, visual, index }: {
  number: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  visual: React.ReactNode;
  index: number;
}) => {
  return (
    <div 
      className="relative perspective-card opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Step Number */}
      <div className="absolute -top-6 -left-2">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-trendspark-elevated border border-trendspark-mint/30 text-xl font-bold">
          {number}
        </div>
      </div>
      
      <div className="card-gradient rounded-xl p-6 pt-8">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <Icon className="w-5 h-5 text-trendspark-mint" />
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <p className="text-trendspark-text-secondary">{description}</p>
        </div>
        
        <div className="mt-6 transition-transform hover:translate-y-[-5px] duration-300">
          {visual}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
