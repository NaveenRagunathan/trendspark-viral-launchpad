
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "How does TrendSpark detect emerging trends?",
    answer: "TrendSpark uses a combination of AI analysis and real-time data monitoring across major social platforms. Our algorithm identifies unusual engagement patterns and semantic clusters that indicate an emerging trend—typically 48-72 hours before it hits mainstream awareness."
  },
  {
    question: "Will my hooks sound AI-generated or generic?",
    answer: "No. During onboarding, TrendSpark analyzes your past content and voice patterns. All generated hooks are customized to match your unique style, tone, and niche—they'll sound authentically like you, just more optimized for algorithm performance."
  },
  {
    question: "Can I use this for multiple platforms?",
    answer: "Absolutely! TrendSpark supports optimization for Instagram, TikTok, Twitter/X, LinkedIn, YouTube, and Facebook. Each platform has different algorithm patterns, so we provide format-specific recommendations for each."
  },
  {
    question: "How much time will this save me?",
    answer: "Our users report saving 5-7 hours per week on content research, brainstorming, and performance analysis. The average hook generation takes under 30 seconds, compared to the typical 45+ minutes of manual brainstorming."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time with no questions asked. If you cancel, you'll continue to have access until the end of your billing period."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-trendspark-elevated relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-trendspark-text-secondary">
            Everything you need to know about TrendSpark AI
          </p>
        </div>
        
        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-trendspark-text-secondary">
            Have more questions? <a href="#" className="text-trendspark-mint hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer, index }: {
  question: string;
  answer: string;
  index: number;
}) => {
  return (
    <AccordionItem 
      value={`item-${index}`}
      className={cn(
        "border border-transparent data-[state=open]:border-trendspark-mint/20 rounded-lg bg-trendspark-black mb-4 overflow-hidden opacity-0 animate-fade-in",
      )}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <AccordionTrigger className="px-6 py-4 hover:no-underline">
        <div className="flex items-center gap-3 text-left">
          <HelpCircle className="w-5 h-5 text-trendspark-mint opacity-70" />
          <span className="text-lg font-medium">{question}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-4 pt-0 text-trendspark-text-secondary data-[state=open]:animate-fade-in">
        <div className="pl-8">
          {answer}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQ;
