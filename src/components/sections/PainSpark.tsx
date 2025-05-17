
import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const PainSpark = () => {
  return (
    <section className="section-padding bg-trendspark-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Pain Points */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Struggling to breakthrough <br />while others go viral?
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  emoji: '🤨',
                  title: 'Great content, ZERO traction',
                  description: 'Your best work gets buried while mediocre posts from others somehow take off'
                },
                {
                  emoji: '👀',
                  title: 'Others winning with easy content',
                  description: 'Some creators post basic content and yet get 100K+ views consistently'
                },
                {
                  emoji: '⏰',
                  title: 'Content strategy feels random',
                  description: 'You're posting regularly but can't predict which posts will actually perform'
                }
              ].map((point, i) => (
                <PainPoint 
                  key={i} 
                  emoji={point.emoji} 
                  title={point.title}
                  description={point.description}
                  index={i}
                />
              ))}
            </div>
          </div>
          
          {/* Right Column - Spark */}
          <div 
            className="relative opacity-0 animate-slide-in-right"
            style={{ animationDelay: '300ms' }}
          >
            <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] bg-trendspark-mint/10 rounded-full blur-[80px] -z-10"></div>
            <div className="card-gradient rounded-xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4">
                <div className="w-24 h-24 bg-trendspark-peach/30 rounded-full blur-[30px]"></div>
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-trendspark-peach/20 w-12 h-12 rounded-full flex items-center justify-center text-trendspark-peach text-2xl">
                  ✨
                </div>
                <h3 className="text-xl font-bold">The Viral Spark</h3>
              </div>
              
              <p className="text-lg mb-6 text-white">
                Here's the secret: It's not about luck—
                <span className="underline decoration-trendspark-mint decoration-2 underline-offset-4 font-medium ml-1">
                  it's about timing.
                </span>
              </p>
              
              <div className="text-trendspark-text-secondary">
                <p className="mb-4">
                  Trend algorithms reward <span className="text-white">early adopters</span> who post about emerging topics <span className="text-white">before they peak</span>.
                </p>
                <p className="mb-4">
                  Most creators post after a trend saturates. By then, the opportunity is gone.
                </p>
                <p className="font-medium text-white">
                  They're not lucky. They're early.
                </p>
              </div>
              
              <div className="mt-6 flex justify-end">
                <a 
                  href="#workflow" 
                  className="flex items-center text-trendspark-mint hover:underline gap-1 group"
                >
                  <span>See how it works</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PainPoint = ({ emoji, title, description, index }: { 
  emoji: string; 
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div 
      className={cn(
        "bg-trendspark-elevated rounded-lg p-5 border border-red-500/20 relative opacity-0",
        index === 0 ? "animate-fade-in" : "animate-slide-in-left"
      )}
      style={{ 
        animationDelay: `${index * 150}ms`,
        animationFillMode: 'forwards' 
      }}
    >
      <div className="flex items-start gap-4">
        <div className="min-w-[40px] h-10 flex items-center justify-center rounded-full border border-red-500/30 text-xl">
          {emoji}
        </div>
        <div>
          <h3 className="font-medium text-lg flex items-center gap-2">
            {title}
            <X className="w-4 h-4 text-red-500" />
          </h3>
          <p className="text-trendspark-text-secondary mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PainSpark;
