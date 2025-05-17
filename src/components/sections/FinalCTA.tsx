
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    const onScroll = () => {
      const sectionElement = document.getElementById('final-cta');
      if (!sectionElement) return;
      
      const rect = sectionElement.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8 && !isAnimated) {
        setIsAnimated(true);
      }
    };
    
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isAnimated]);
  
  return (
    <section id="final-cta" className="py-20 bg-trendspark-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-trendspark-mint/30 to-transparent"></div>
        <div className="absolute inset-0 grid-pattern opacity-[0.03]"></div>
        <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] bg-trendspark-mint/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[250px] h-[250px] bg-trendspark-peach/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Stop guessing. <br />
          <span className={`text-gradient ${isAnimated ? 'animate-glow-pulse' : ''}`}>
            Start trending.
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-trendspark-text-secondary max-w-2xl mx-auto mb-8">
          Join thousands of creators who post viral content consistently by catching trends early.
        </p>
        
        <div className="relative inline-block">
          <button className="neon-button text-lg px-10 py-4 flex items-center gap-2">
            Get My Viral Hook Today
            <ArrowRight className="w-5 h-5" />
          </button>
          
          {/* Sparkle Animation */}
          {isAnimated && (
            <div className="absolute -right-4 -top-4 opacity-0 animate-fade-in" style={{ animationDelay: '500ms' }}>
              <div className="w-8 h-8 rotate-12">
                <span className="block w-full h-full text-trendspark-mint text-2xl">✨</span>
              </div>
            </div>
          )}
        </div>
        
        {/* User Activity Ticker */}
        <div className="mt-16 opacity-60 text-sm">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-trendspark-text-secondary">
              <span className="text-white">Alex</span> just generated a viral hook about minimalism
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
