
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Quote, Star, CircleUser } from "lucide-react";

const testimonials = [
  {
    quote: "I went from 1K to 47K followers in 8 weeks by using TrendSpark's trend alerts. The early access to emerging topics made all the difference.",
    author: "Megan Chen",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 5,
    stats: {
      followers: "47K+",
      growth: "46x",
      timeframe: "8 weeks"
    }
  },
  {
    quote: "As a finance creator, being early to trends is everything. TrendSpark gives me that edge—I'm now creating content my audience wants before they even search for it.",
    author: "David Okoye",
    role: "Financial Coach",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 5,
    stats: {
      followers: "112K+",
      growth: "3.2x",
      timeframe: "3 months"
    }
  },
  {
    quote: "I've tried every AI tool out there. TrendSpark is the only one that actually delivers on the promise of helping me create content that performs consistently well.",
    author: "Sarah Johnson",
    role: "Digital Marketer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 5,
    stats: {
      followers: "84K+",
      growth: "5.6x",
      timeframe: "4 months"
    }
  }
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById('testimonials');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  return (
    <section 
      id="testimonials" 
      className="relative py-24 overflow-hidden bg-gradient-to-b from-trendspark-black via-trendspark-black/95 to-trendspark-black"
    >
      {/* Visual elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div aria-hidden="true" className="absolute left-[15%] top-0 h-[500px] w-[500px] rounded-full bg-trendspark-mint/5 blur-[120px]"></div>
        <div aria-hidden="true" className="absolute right-[20%] bottom-0 h-[400px] w-[400px] rounded-full bg-trendspark-peach/5 blur-[100px]"></div>
        <div aria-hidden="true" className="absolute w-full h-full opacity-[0.015] grid-pattern"></div>
        <div aria-hidden="true" className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent top-0"></div>
        <div aria-hidden="true" className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent bottom-0"></div>
      </div>

      <div className="container relative px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div 
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: "100ms" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Real <span className="text-gradient">Results</span> from Creators
          </h2>
          <p className="text-trendspark-text-secondary text-lg max-w-2xl mx-auto">
            Join thousands of content creators who've transformed their reach
          </p>
        </div>

        {/* Featured testimonials - Desktop */}
        <div className="hidden md:block">
          <div 
            className="grid grid-cols-3 gap-6"
            style={{ perspective: "1000px" }}
          >
            {testimonials.map((testimonial, index) => (
              <FeaturedTestimonialCard
                key={index}
                testimonial={testimonial}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <FeaturedTestimonialCard
                      testimonial={testimonial}
                      index={index}
                      isVisible={isVisible}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-trendspark-mint/20 text-trendspark-mint hover:bg-trendspark-mint/10 -left-2" />
            <CarouselNext className="border-trendspark-mint/20 text-trendspark-mint hover:bg-trendspark-mint/10 -right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const FeaturedTestimonialCard = ({ 
  testimonial, 
  index,
  isVisible 
}: {
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
    rating: number;
    stats: {
      followers: string;
      growth: string;
      timeframe: string;
    }
  };
  index: number;
  isVisible: boolean;
}) => {
  return (
    <div 
      className={cn(
        "rounded-2xl overflow-hidden relative group h-full opacity-0",
        isVisible && "animate-fade-in"
      )}
      style={{ 
        animationDelay: `${200 + index * 200}ms`,
        transform: `rotateY(${index % 2 === 0 ? '2deg' : '-2deg'}) rotateX(${index === 1 ? '1deg' : '-1deg'})`
      }}
    >
      {/* Card wrapper with hover effects */}
      <div className="h-full transition duration-500 ease-out group-hover:scale-[1.02] group-hover:-translate-y-1">
        {/* Card background */}
        <div className="absolute inset-0 bg-gradient-to-br from-trendspark-elevated/90 to-trendspark-black border border-white/5 rounded-2xl">
          {/* Accent lighting effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className={`absolute ${index === 0 ? 'top-0 right-0' : index === 1 ? 'bottom-0 left-0' : 'top-0 left-0'} w-40 h-40 bg-trendspark-mint/20 rounded-full blur-[60px]`}></div>
            <div className={`absolute ${index === 0 ? 'bottom-0 left-0' : index === 1 ? 'top-0 right-0' : 'bottom-0 right-0'} w-40 h-40 bg-trendspark-peach/20 rounded-full blur-[60px]`}></div>
          </div>
        </div>

        {/* Card content */}
        <div className="glassmorphic h-full relative z-10 p-8 flex flex-col">
          {/* Quote icon */}
          <Quote className="text-trendspark-mint/20 absolute top-6 right-6 w-12 h-12" />
          
          {/* Rating */}
          <div className="flex mb-5">
            {Array(testimonial.rating).fill(null).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-trendspark-mint fill-trendspark-mint" />
            ))}
          </div>
          
          {/* Quote */}
          <blockquote className="mb-6 flex-grow">
            <p className="text-lg text-white leading-relaxed">{testimonial.quote}</p>
          </blockquote>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 my-6 py-4 border-y border-white/10">
            <div className="text-center">
              <p className="text-2xl font-bold text-trendspark-mint">{testimonial.stats.followers}</p>
              <p className="text-xs text-trendspark-text-secondary">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-trendspark-peach">{testimonial.stats.growth}</p>
              <p className="text-xs text-trendspark-text-secondary">Growth</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">{testimonial.stats.timeframe}</p>
              <p className="text-xs text-trendspark-text-secondary">Timeline</p>
            </div>
          </div>
          
          {/* Author */}
          <div className="flex items-center mt-auto">
            <HoverCard>
              <HoverCardTrigger>
                <div className="flex items-center gap-3 cursor-pointer group/avatar">
                  <Avatar className="h-12 w-12 border-2 border-transparent group-hover/avatar:border-trendspark-mint transition-all duration-300">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>
                      <CircleUser className="text-trendspark-mint" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.author}</h3>
                    <p className="text-sm text-trendspark-text-secondary">{testimonial.role}</p>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="glassmorphic border-trendspark-mint/20 text-white text-center p-4 w-80">
                <Avatar className="h-20 w-20 mx-auto mb-3 border-2 border-trendspark-mint/50">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>
                    <CircleUser className="text-trendspark-mint" />
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-lg">{testimonial.author}</h3>
                <p className="text-trendspark-mint">{testimonial.role}</p>
                <p className="mt-2 text-sm text-trendspark-text-secondary">
                  Achieved {testimonial.stats.growth} growth in just {testimonial.stats.timeframe}.
                  Now at {testimonial.stats.followers} followers.
                </p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
