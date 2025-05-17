
import React, { useEffect, useState } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const PainSpark = () => {
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
    
    const section = document.getElementById('pain-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="pain-section" className="section-padding bg-trendspark-black relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-trendspark-mint/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-trendspark-peach/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute w-full h-full grid-pattern opacity-[0.02]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Pain Points */}
          <div className="space-y-8">
            <h2 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight opacity-0",
              isInView && "animate-fade-in"
            )}
              style={{ animationDelay: '100ms' }}
            >
              Tired of Posting <span className="text-red-500">Into the Void?</span>
            </h2>
            
            <div className="space-y-5 mt-10">
              {[
                {
                  emoji: '😩',
                  title: 'Exceptional Content, Zero Visibility',
                  description: 'Your best work vanishes while mediocre content somehow captures all the attention'
                },
                {
                  emoji: '📉',
                  title: 'Others Succeed with Basic Content',
                  description: 'Watch in frustration as simple posts from others consistently reach 100K+ views'
                },
                {
                  emoji: '⏰',
                  title: 'Algorithms Feel Like a Mystery',
                  description: 'No matter how consistent your posting schedule, you can\'t predict which content will perform'
                }
              ].map((point, i) => (
                <PainPoint 
                  key={i} 
                  emoji={point.emoji} 
                  title={point.title}
                  description={point.description}
                  index={i}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>
          
          {/* Right Column - Spark */}
          <div 
            className={cn(
              "relative opacity-0",
              isInView && "animate-slide-in-right"
            )}
            style={{ animationDelay: '400ms' }}
          >
            {/* Background glow */}
            <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] bg-trendspark-mint/10 rounded-full blur-[80px] -z-10"></div>
            
            {/* Card */}
            <div className="card-gradient rounded-xl p-8 relative overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(78,225,193,0.2)] group">
              {/* Top right glow */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4">
                <div className="w-24 h-24 bg-trendspark-peach/30 rounded-full blur-[30px]"></div>
              </div>
              
              {/* Card header with icon */}
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-trendspark-peach/20 w-14 h-14 rounded-full flex items-center justify-center text-trendspark-peach text-2xl group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold">The Viral Spark</h3>
              </div>
              
              {/* Main headline */}
              <p className="text-2xl mb-8 text-white leading-snug">
                Here's the secret: It's not about luck—
                <span className="bg-gradient-to-r from-trendspark-mint to-trendspark-peach bg-clip-text text-transparent font-medium ml-1">
                  it's about timing.
                </span>
              </p>
              
              {/* Supporting text */}
              <div className="text-trendspark-text-secondary text-lg space-y-4">
                <p>
                  Trend algorithms reward <span className="text-white font-medium">early adopters</span> who post about emerging topics <span className="text-white font-medium">before they peak</span>.
                </p>
                <p>
                  Most creators post after a trend saturates. By then, the opportunity is gone.
                </p>
                <p className="font-medium text-white text-xl">
                  They're not lucky. They're early.
                </p>
              </div>
              
              {/* CTA Link */}
              <div className="mt-8 flex justify-end">
                <a 
                  href="#workflow" 
                  className="flex items-center text-trendspark-mint hover:text-trendspark-mint/80 gap-2 group/link text-lg"
                >
                  <span>See how it works</span>
                  <div className="relative overflow-hidden rounded-full bg-trendspark-mint/20 w-8 h-8 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-5 group-hover/link:opacity-0 transition-all duration-300" />
                    <ArrowRight className="w-5 h-5 absolute -left-8 group-hover/link:left-[10px] transition-all duration-300" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PainPoint = ({ emoji, title, description, index, isInView }: { 
  emoji: string; 
  title: string;
  description: string;
  index: number;
  isInView: boolean;
}) => {
  return (
    <div 
      className={cn(
        "bg-trendspark-elevated rounded-lg p-6 border border-red-500/20 relative opacity-0 hover:scale-[1.02] transition-all shadow-lg",
        isInView && (index === 0 ? "animate-fade-in" : "animate-slide-in-left")
      )}
      style={{ 
        animationDelay: `${500 + index * 200}ms`,
        animationFillMode: 'forwards' 
      }}
    >
      {/* Red glow effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="flex items-start gap-4">
        <div className="min-w-[48px] h-12 flex items-center justify-center rounded-full border border-red-500/30 text-2xl hover:scale-110 transition-transform duration-300 shadow-md">
          {emoji}
        </div>
        <div>
          <h3 className="font-medium text-xl flex items-center gap-3 text-white mb-2">
            {title}
            <X className="w-5 h-5 text-red-500" />
          </h3>
          <p className="text-trendspark-text-secondary">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PainSpark;
