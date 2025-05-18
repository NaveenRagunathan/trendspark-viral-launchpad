
import React, { useState } from 'react';
import { Check, Badge, BadgeDollarSign, BadgePlus, BadgeCheck, Rocket, LifeBuoy, HardDrive, CompareArrows } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

interface PlanFeature {
  text: string;
  included: boolean;
  icon?: React.ReactNode;
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
  icon: React.ReactNode;
  stageNumber: number;
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
      { text: "Daily trend digest (12hr delay)", included: true, icon: <LifeBuoy size={16} /> },
      { text: "5 AI hook suggestions per week", included: true, icon: <BadgePlus size={16} /> },
      { text: "Basic trend analytics", included: true, icon: <HardDrive size={16} /> },
      { text: "Real-time trend alerts", included: false },
      { text: "Custom hook generation", included: false },
      { text: "Post performance predictions", included: false },
      { text: "Content calendar integration", included: false }
    ],
    cta: "Start Free",
    badge: "Starter",
    icon: <BadgePlus className="w-6 h-6" />,
    stageNumber: 1
  },
  {
    name: "Creator",
    description: "Everything you need to grow consistently",
    price: {
      monthly: "$29",
      yearly: "$19"
    },
    features: [
      { text: "Real-time trend alerts", included: true, icon: <LifeBuoy size={16} /> },
      { text: "Unlimited AI hook generation", included: true, icon: <BadgePlus size={16} /> },
      { text: "Post timing optimizer", included: true, icon: <CompareArrows size={16} /> },
      { text: "Platform-specific formatting", included: true, icon: <HardDrive size={16} /> },
      { text: "Niche audience insights", included: true, icon: <BadgeCheck size={16} /> },
      { text: "Post performance predictions", included: false },
      { text: "Content calendar integration", included: false }
    ],
    cta: "Start 7-Day Trial",
    popular: true,
    badge: "Popular",
    icon: <BadgeDollarSign className="w-6 h-6" />,
    stageNumber: 2
  },
  {
    name: "Pro",
    description: "Advanced features for serious growth",
    price: {
      monthly: "$79",
      yearly: "$59"
    },
    features: [
      { text: "Everything in Creator plan", included: true, icon: <BadgeCheck size={16} /> },
      { text: "Post performance predictions", included: true, icon: <CompareArrows size={16} /> },
      { text: "Content calendar integration", included: true, icon: <HardDrive size={16} /> },
      { text: "API access for custom workflows", included: true, icon: <BadgeCheck size={16} /> },
      { text: "Early trend access (72hr advantage)", included: true, icon: <LifeBuoy size={16} /> },
      { text: "Dedicated trend analyst", included: true, icon: <BadgeCheck size={16} /> },
      { text: "Competitor trend monitoring", included: true, icon: <Rocket size={16} /> }
    ],
    cta: "Get Pro Access",
    badge: "Pro",
    icon: <Rocket className="w-6 h-6" />,
    stageNumber: 3
  }
];

const Pricing = () => {
  const [annually, setAnnually] = useState(true);
  const [expandedPlanIndex, setExpandedPlanIndex] = useState<number | null>(null);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  
  const handleCompareClick = () => {
    // Scroll to full comparison table or open modal
    console.log("Compare plans clicked");
  };
  
  return (
    <section id="pricing" className="section-padding bg-trendspark-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-trendspark-black via-trendspark-black/95 to-trendspark-black"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Journey Pricing Map
          </h2>
          <p className="text-trendspark-text-secondary max-w-2xl mx-auto text-lg">
            Choose your path to success with our flexible plans
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <span className={annually ? "text-trendspark-text-secondary" : "text-white"}>Monthly</span>
            <button 
              className="w-14 h-7 bg-trendspark-elevated rounded-full p-1 relative"
              onClick={() => setAnnually(!annually)}
            >
              <motion.span 
                className="block w-5 h-5 rounded-full bg-trendspark-mint"
                animate={{ x: annually ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={annually ? "text-white" : "text-trendspark-text-secondary"}>
              Annually <span className="text-trendspark-mint text-xs font-medium">(Save 35%)</span>
            </span>
          </div>
        </div>

        {/* Compare Plans Button */}
        <div className="flex justify-center mb-8">
          <button 
            onClick={handleCompareClick}
            className="flex items-center gap-2 bg-trendspark-elevated border border-trendspark-mint/30 text-white px-6 py-2 rounded-full hover:bg-trendspark-mint/10 transition-all"
          >
            <CompareArrows className="w-4 h-4" />
            <span>Compare All Plans</span>
          </button>
        </div>
        
        {/* Pricing Journey Map */}
        <div className="relative mb-16">
          {/* Progress Path */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-trendspark-elevated via-trendspark-mint/30 to-trendspark-mint/60">
            <Progress value={100} className="h-full bg-transparent" />
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center relative">
            {plans.map((plan, index) => (
              <PricingStage
                key={index}
                plan={plan}
                annually={annually}
                index={index}
                isExpanded={expandedPlanIndex === index}
                isHovered={hoveredPlan === index}
                onHover={(isHovered) => setHoveredPlan(isHovered ? index : null)}
                onExpand={() => setExpandedPlanIndex(index === expandedPlanIndex ? null : index)}
                totalStages={plans.length}
              />
            ))}
          </div>
        </div>
        
        {/* Final CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <button className="neon-button flex items-center gap-2 mx-auto px-8 py-4 text-lg font-bold">
            <span>Start Your Journey</span>
            <Rocket className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const PricingStage = ({ 
  plan, 
  annually, 
  index, 
  isExpanded, 
  isHovered, 
  onHover, 
  onExpand,
  totalStages 
}: { 
  plan: Plan; 
  annually: boolean; 
  index: number; 
  isExpanded: boolean;
  isHovered: boolean;
  onHover: (isHovered: boolean) => void;
  onExpand: () => void;
  totalStages: number;
}) => {
  return (
    <motion.div 
      className={cn(
        "w-full md:w-1/3 p-4 relative",
        index === 0 ? "md:text-left" : index === totalStages-1 ? "md:text-right" : "md:text-center"
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      {/* Stage Marker */}
      <div
        className="relative mx-auto md:mx-0 md:ml-auto md:mr-auto"
        style={{ 
          margin: index === 0 ? "0 auto 0 0" : 
                  index === totalStages - 1 ? "0 0 0 auto" : 
                  "0 auto" 
        }}
      >
        <HoverCard openDelay={200} closeDelay={100}>
          <HoverCardTrigger asChild>
            <motion.button
              className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center",
                "border-2 border-trendspark-mint relative z-10",
                isHovered || isExpanded ? "bg-trendspark-mint text-trendspark-black" : 
                "bg-trendspark-elevated text-trendspark-mint"
              )}
              onClick={onExpand}
              onMouseEnter={() => onHover(true)}
              onMouseLeave={() => onHover(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="absolute -inset-2 rounded-full bg-trendspark-mint/20"
                animate={{ scale: isHovered || isExpanded ? [1, 1.1, 1] : 1 }}
                transition={{ repeat: isHovered || isExpanded ? Infinity : 0, duration: 1.5 }}
              />
              <span className="text-sm font-bold">{plan.stageNumber}</span>
            </motion.button>
          </HoverCardTrigger>
          <HoverCardContent className="w-60 p-0 bg-trendspark-elevated border border-trendspark-mint/30">
            <div className="p-4">
              <div className="flex items-center gap-2">
                {plan.icon}
                <h4 className="text-lg font-bold text-white">{plan.name}</h4>
                {plan.badge && (
                  <span className={cn(
                    "text-xs font-bold px-2 py-0.5 rounded-full",
                    plan.popular ? "bg-trendspark-mint text-trendspark-black" : 
                                "bg-trendspark-elevated/70 text-trendspark-mint border border-trendspark-mint/40"
                  )}>
                    {plan.badge}
                  </span>
                )}
              </div>
              <p className="text-trendspark-text-secondary text-sm mt-1">{plan.description}</p>
              <div className="mt-2 font-bold text-xl text-white">
                {annually ? plan.price.yearly : plan.price.monthly}
                <span className="text-trendspark-text-secondary text-sm ml-1">/mo</span>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      
      {/* Plan Name */}
      <motion.h3 
        className={cn(
          "text-xl font-bold mt-4 mx-auto md:mx-0",
          isHovered || isExpanded ? "text-trendspark-mint" : "text-white",
          index === 0 ? "md:text-left" : index === totalStages-1 ? "md:text-right" : "md:text-center"
        )}
        animate={{ 
          scale: isHovered || isExpanded ? [1, 1.05, 1] : 1 
        }}
        transition={{ duration: 0.5 }}
        style={{ 
          maxWidth: "80%",
          margin: index === 0 ? "1rem auto 1rem 0" : 
                  index === totalStages - 1 ? "1rem 0 1rem auto" : 
                  "1rem auto" 
        }}
      >
        {plan.name}
      </motion.h3>
      
      {/* Expanded Card */}
      <Popover open={isExpanded}>
        <PopoverContent 
          className="w-80 p-0 bg-trendspark-elevated border border-trendspark-mint/30"
          align={index === 0 ? "start" : index === totalStages-1 ? "end" : "center"}
        >
          <Card className="bg-transparent border-0 shadow-none">
            <CardContent className="pt-6 px-6">
              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">
                    {annually ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-trendspark-text-secondary ml-2">
                    /month
                  </span>
                </div>
                <p className="text-sm text-trendspark-text-secondary mt-1">
                  {plan.description}
                </p>
              </div>
              
              {/* Features */}
              <div className="space-y-2 my-6">
                {plan.features.map((feature, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center",
                      feature.included ? "bg-trendspark-mint/20 text-trendspark-mint" : 
                                        "bg-trendspark-elevated text-trendspark-text-secondary"
                    )}>
                      <Check className="w-3 h-3" />
                    </div>
                    <div className="flex items-center gap-1">
                      {feature.icon && feature.included && (
                        <span className="text-trendspark-mint">{feature.icon}</span>
                      )}
                      <span className={feature.included ? "text-white" : "text-trendspark-text-secondary"}>
                        {feature.text}
                      </span>
                    </div>
                  </motion.div>
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
                <Rocket className="w-4 h-4" />
              </button>
            </CardContent>
          </Card>
        </PopoverContent>
      </Popover>
    </motion.div>
  );
};

export default Pricing;

