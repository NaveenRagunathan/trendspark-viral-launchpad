
import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  description: string;
  price: {
    monthly: string;
    yearly: string;
  };
  features: PlanFeature[];
  cta: string;
  popular?: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    name: "Free",
    description: "Test the waters with basic trend insights",
    price: {
      monthly: "$0",
      yearly: "$0"
    },
    features: [
      { text: "Daily trend digest (12hr delay)", included: true },
      { text: "5 AI hook suggestions per week", included: true },
      { text: "Basic trend analytics", included: true },
      { text: "Real-time trend alerts", included: false },
      { text: "Custom hook generation", included: false },
      { text: "Post performance predictions", included: false },
      { text: "Content calendar integration", included: false }
    ],
    cta: "Get Started",
    badge: "Free"
  },
  {
    name: "Creator",
    description: "Everything you need to grow consistently",
    price: {
      monthly: "$29",
      yearly: "$19"
    },
    features: [
      { text: "Real-time trend alerts", included: true },
      { text: "Unlimited AI hook generation", included: true },
      { text: "Post timing optimizer", included: true },
      { text: "Platform-specific formatting", included: true },
      { text: "Niche audience insights", included: true },
      { text: "Post performance predictions", included: false },
      { text: "Content calendar integration", included: false }
    ],
    cta: "Start 7-Day Trial",
    popular: true,
    badge: "Popular"
  },
  {
    name: "Pro",
    description: "Advanced features for serious growth",
    price: {
      monthly: "$79",
      yearly: "$59"
    },
    features: [
      { text: "Everything in Creator plan", included: true },
      { text: "Post performance predictions", included: true },
      { text: "Content calendar integration", included: true },
      { text: "API access for custom workflows", included: true },
      { text: "Early trend access (72hr advantage)", included: true },
      { text: "Dedicated trend analyst", included: true },
      { text: "Competitor trend monitoring", included: true }
    ],
    cta: "Get Pro Access",
    badge: "Pro"
  }
];

const Pricing = () => {
  const [annually, setAnnually] = useState(true);
  
  return (
    <section id="pricing" className="section-padding bg-trendspark-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Choose Your Plan
          </h2>
          <p className="text-trendspark-text-secondary max-w-2xl mx-auto text-lg">
            Start with a 7-day free trial. No credit card required.
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <span className={annually ? "text-trendspark-text-secondary" : "text-white"}>Monthly</span>
            <button 
              className="w-14 h-7 bg-trendspark-elevated rounded-full p-1 relative"
              onClick={() => setAnnually(!annually)}
            >
              <span 
                className={cn(
                  "block w-5 h-5 rounded-full bg-trendspark-mint transition-all",
                  annually ? "translate-x-7" : ""
                )}
              />
            </button>
            <span className={annually ? "text-white" : "text-trendspark-text-secondary"}>
              Annually <span className="text-trendspark-mint text-xs font-medium">(Save 35%)</span>
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index}
              plan={plan}
              annually={annually}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ plan, annually, index }: {
  plan: Plan;
  annually: boolean;
  index: number;
}) => {
  return (
    <div 
      className={cn(
        "card-gradient rounded-xl p-6 transition-all relative",
        plan.popular ? "border-trendspark-mint/30 md:scale-105 md:-translate-y-2" : "",
        "opacity-0 animate-fade-in"
      )}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Plan Badge */}
      {plan.badge && (
        <div className="absolute -top-3 -right-3">
          <div className={cn(
            "text-xs font-bold px-3 py-1 rounded-full",
            plan.popular ? "bg-trendspark-mint text-trendspark-black" : 
                          "bg-trendspark-elevated text-trendspark-text-secondary"
          )}>
            {plan.badge}
          </div>
        </div>
      )}
      
      {/* Plan Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-trendspark-text-secondary text-sm mb-4">{plan.description}</p>
        <div className="flex items-baseline">
          <span className="text-4xl font-bold">
            {annually ? plan.price.yearly : plan.price.monthly}
          </span>
          <span className="text-trendspark-text-secondary ml-2">
            /month
          </span>
        </div>
      </div>
      
      {/* Features List */}
      <div className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center",
              feature.included ? "bg-trendspark-mint/20 text-trendspark-mint" : "bg-trendspark-elevated text-trendspark-text-secondary"
            )}>
              <Check className="w-3 h-3" />
            </div>
            <span className={feature.included ? "text-white" : "text-trendspark-text-secondary"}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>
      
      {/* CTA Button */}
      <button 
        className={cn(
          "w-full py-3 rounded-md transition-all flex items-center justify-center gap-2",
          plan.popular ? "neon-button" : "ghost-button"
        )}
      >
        <span>{plan.cta}</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pricing;
