
import React from 'react';
import { TrendingUp, ArrowRight, Clock, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Spot emerging trends before the crowd",
      description: "Get alerted to rising topics 48-72 hours before they saturate platforms"
    },
    {
      icon: ArrowRight,
      title: "Go viral faster with less effort",
      description: "Turn trends into hooks that match your voice and style in seconds"
    },
    {
      icon: Clock,
      title: "Post at the perfect moment",
      description: "Algorithm-optimized timing for maximum reach on each platform"
    },
    {
      icon: Check,
      title: "Learn what formats actually work",
      description: "Data-backed templates and formulas based on thousands of viral posts"
    }
  ];

  return (
    <section className="section-padding bg-trendspark-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Core Benefits
          </h2>
          <p className="text-trendspark-text-secondary max-w-2xl mx-auto text-lg">
            Created for serious content creators who want predictable results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ icon: Icon, title, description, index }: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div 
      className={cn(
        "flex gap-5 p-6 rounded-xl hover-highlight transition-all duration-300 opacity-0",
        index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"
      )}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="mt-1">
        <div className="w-12 h-12 rounded-full bg-trendspark-elevated border border-trendspark-mint/20 flex items-center justify-center text-trendspark-mint">
          <Icon className="w-6 h-6" />
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2">
          {title.split(' ').map((word, i) => {
            if (i === 2) {
              return (
                <span key={i} className="neon-text"> {word} </span>
              );
            }
            return <span key={i}> {word}</span>;
          })}
        </h3>
        <p className="text-trendspark-text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default Benefits;
