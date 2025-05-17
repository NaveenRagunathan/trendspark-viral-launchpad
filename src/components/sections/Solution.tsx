
import React from 'react';
import { TrendingUp, MessageSquare, ArrowRight } from 'lucide-react';

const Solution = () => {
  return (
    <section id="features" className="section-padding bg-trendspark-black relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-trendspark-mint/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] bg-trendspark-peach/5 rounded-full blur-[80px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Your AI Trend Copilot
        </h2>
        <p className="text-trendspark-text-secondary max-w-2xl mx-auto text-lg">
          TrendSpark scans platforms in real-time, spotting patterns before they trend, and transforms them into engaging hooks that perform.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {solutionCards.map((card, index) => (
          <SolutionCard 
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            gradient={card.gradient}
            preview={card.preview}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

const solutionCards = [
  {
    title: "Trend Finder",
    description: "24/7 scanning across platforms to detect emerging trends before they peak",
    icon: TrendingUp,
    gradient: "from-blue-500/20 to-purple-500/20",
    preview: "Trend Alert: 'Silent walking' +245% growth in last 4 hours"
  },
  {
    title: "Hook Generator",
    description: "AI crafts scroll-stopping hooks tailored to your niche and voice",
    icon: MessageSquare,
    gradient: "from-trendspark-mint/20 to-green-500/20",
    preview: "I tried 'silent walking' for 7 days and discovered something unexpected..."
  },
  {
    title: "Format Optimizer",
    description: "Templates and hashtags optimized for each platform's algorithm",
    icon: ArrowRight,
    gradient: "from-trendspark-peach/20 to-red-500/20",
    preview: "#silentwalking #mentalhealthtips #mindfulness [See 6 more...]"
  }
];

const SolutionCard = ({ title, description, icon: Icon, gradient, preview, index }: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  preview: string;
  index: number;
}) => {
  return (
    <div 
      className="card-gradient rounded-xl p-6 perspective-card card-highlight opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 150 + 300}ms` }}
    >
      <div className="mb-5">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-trendspark-text-secondary text-sm">{description}</p>
      </div>
      
      <div 
        className="mt-8 p-3 rounded-lg bg-trendspark-elevated/50 border border-white/5 text-sm hover:bg-trendspark-elevated hover:border-trendspark-mint/20 transition-all cursor-pointer group"
      >
        <div className="flex justify-between items-center text-xs mb-2 text-trendspark-text-secondary">
          <span>PREVIEW</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-trendspark-mint flex items-center gap-1">
            <span>Try it</span>
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
        <div className="text-white">{preview}</div>
      </div>
    </div>
  );
};

export default Solution;
