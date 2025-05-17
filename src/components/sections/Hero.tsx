
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="min-h-screen grid grid-pattern relative pt-28 pb-20 px-6 md:px-12 lg:px-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-trendspark-black/0 via-trendspark-mint/3 to-trendspark-black/0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-trendspark-mint/5 rounded-full blur-[120px] opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-trendspark-peach/5 rounded-full blur-[100px] opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text & CTA */}
        <div className="space-y-8">
          <div className="space-y-4">
            {isVisible && (
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <AnimatedText text="Go Viral Without Guessing." delay={100} />
              </h1>
            )}
            <p className="text-trendspark-text-secondary text-lg md:text-xl max-w-lg opacity-0 animate-fade-in-delay">
              <span className="text-white">Detect trends early</span>, generate AI-crafted hooks, and post 
              <span className="text-white"> before trends peak</span> – while everyone else is still catching up.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in-delay">
            <button className="neon-button flex items-center justify-center gap-2 animate-bounce-subtle hover:scale-[1.02] transition-all">
              Get My Viral Hook
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="ghost-button flex items-center justify-center gap-2">
              Try It Free
            </button>
          </div>
          
          <div className="text-trendspark-text-secondary flex items-center text-sm gap-2 opacity-0 animate-fade-in-delay">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-trendspark-elevated border border-trendspark-black flex items-center justify-center">
                  <span className="text-xs">{i}</span>
                </div>
              ))}
            </div>
            <span>+2,500 creators already using TrendSpark AI</span>
          </div>
        </div>
        
        {/* Right Column: Mock Dashboard */}
        <div className="relative">
          <div className="relative glassmorphic rounded-2xl p-6 shadow-[0_0_30px_rgba(78,225,193,0.15)] opacity-0 animate-scale-in">
            <div className="absolute -top-3 -left-3">
              <div className="bg-trendspark-mint text-xs font-bold text-trendspark-black px-3 py-1 rounded-full">
                LIVE TRENDS
              </div>
            </div>
            
            <div className="mockup-window">
              {/* Dashboard Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Today's Emerging Trends</h3>
                <div className="bg-trendspark-elevated/50 rounded-full px-3 py-1 text-xs">Refreshes in 4:32</div>
              </div>
              
              {/* Trend Cards */}
              <div className="space-y-4">
                {[
                  { topic: 'AI diet plans', growth: '+325%', hook: 'I tried ChatGPT\'s meal plan for a week...' },
                  { topic: 'Financial minimalism', growth: '+215%', hook: '3 expenses you can cut today for passive income' },
                  { topic: 'Phone-free mornings', growth: '+187%', hook: 'My phone-free morning routine tripled my productivity' }
                ].map((trend, i) => (
                  <TrendCard 
                    key={i} 
                    topic={trend.topic} 
                    growth={trend.growth} 
                    hook={trend.hook} 
                    delay={i * 300}
                    isActive={i === 0}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Floating Bubble Notification */}
          <div className="absolute -right-4 md:-right-10 bottom-20 glassmorphic rounded-full py-2 px-4 flex items-center gap-2 text-sm animate-float">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>New trend detected</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrendCard = ({ topic, growth, hook, delay, isActive }: { 
  topic: string; 
  growth: string; 
  hook: string;
  delay: number;
  isActive: boolean;
}) => {
  return (
    <div 
      className={`card-gradient rounded-lg p-4 transition-all hover-highlight ${
        isActive ? 'border-trendspark-mint/30' : ''
      }`}
      style={{ 
        opacity: 0,
        animation: 'fade-in 0.5s ease-out forwards',
        animationDelay: `${delay}ms` 
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-medium text-white">{topic}</h4>
        <span className="text-green-400 text-sm">{growth}</span>
      </div>
      <div className="bg-trendspark-elevated/50 rounded p-2 mb-2">
        <p className="text-sm text-white">{hook}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <span className="text-xs bg-trendspark-elevated px-2 py-1 rounded">#ai</span>
          <span className="text-xs bg-trendspark-elevated px-2 py-1 rounded">#productivity</span>
        </div>
        <button className="text-xs bg-trendspark-mint/20 hover:bg-trendspark-mint/30 text-trendspark-mint px-3 py-1 rounded transition-colors">
          Copy Hook
        </button>
      </div>
    </div>
  );
};

const AnimatedText = ({ text, delay }: { text: string; delay: number }) => {
  return (
    <div className="inline">
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className="inline-block opacity-0 animate-fade-in"
              style={{ 
                animationDelay: `${delay + ((wordIndex * 3 + charIndex) * 50)}ms`,
                animationFillMode: 'forwards' 
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default Hero;
