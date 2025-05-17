
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
import { 
  Card, 
  CardContent,
} from "@/components/ui/card";
import { Quote, Star, CircleUser, ChevronRight } from "lucide-react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  
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
      className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(78,225,193,0.15),_transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(255,156,125,0.15),_transparent_70%)]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div 
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
            isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
          )}
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Success <span className="bg-gradient-to-r from-trendspark-mint to-trendspark-peach bg-clip-text text-transparent">Stories</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-trendspark-mint to-trendspark-peach mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Join thousands of creators who've transformed their reach with TrendSpark
          </p>
        </div>

        {/* Desktop view - Staggered layout */}
        <div className="hidden lg:block">
          <div className="relative grid grid-cols-3 gap-6 min-h-[500px]">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={cn(
                  "transition-all duration-1000 transform",
                  isVisible ? "opacity-100" : "opacity-0",
                  index === 0 ? "translate-y-12" : index === 1 ? "translate-y-0" : "translate-y-24"
                )}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <TestimonialCard testimonial={testimonial} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Tablet/Mobile view - Interactive carousel */}
        <div className="lg:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 pl-4 pr-4">
                  <div 
                    className={cn(
                      "transition-all duration-700 transform",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <TestimonialCard testimonial={testimonial} index={index} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-trendspark-mint/20 text-trendspark-mint hover:bg-trendspark-mint/10 -left-2 lg:-left-12" />
            <CarouselNext className="border-trendspark-mint/20 text-trendspark-mint hover:bg-trendspark-mint/10 -right-2 lg:-right-12" />
          </Carousel>
        </div>

        {/* Social proof counter */}
        <div 
          className={cn(
            "mt-16 text-center transition-all duration-1000",
            isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
          )}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full py-2 px-6 space-x-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">1,500+</span>
              <span className="text-xs text-gray-400">Creators</span>
            </div>
            <div className="h-10 w-px bg-white/10"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">27M+</span>
              <span className="text-xs text-gray-400">Followers Gained</span>
            </div>
            <div className="h-10 w-px bg-white/10"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-trendspark-mint">4.9/5</span>
              <span className="text-xs text-gray-400">Average Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className={cn(
        "h-full relative rounded-2xl overflow-hidden transition-all duration-500",
        "border-0 shadow-xl"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0"></div>
      
      {/* Animated border */}
      <div className={cn(
        "absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br opacity-40 transition-opacity duration-500",
        index === 0 ? "from-trendspark-mint to-trendspark-mint/30" : 
        index === 1 ? "from-trendspark-peach to-trendspark-peach/30" : 
        "from-purple-500 to-blue-500/30",
        isHovered ? "opacity-100" : "opacity-40"
      )}></div>
      
      {/* Glow effect */}
      <div className={cn(
        "absolute -inset-0.5 rounded-2xl blur-sm transition-opacity duration-500",
        index === 0 ? "bg-trendspark-mint/20" : 
        index === 1 ? "bg-trendspark-peach/20" : 
        "bg-purple-500/20",
        isHovered ? "opacity-70" : "opacity-0"
      )}></div>
      
      <CardContent className="relative z-10 p-8 h-full flex flex-col">
        {/* Quote icon */}
        <Quote 
          className={cn(
            "absolute top-6 right-6 w-12 h-12 transition-colors duration-500",
            index === 0 ? "text-trendspark-mint/20" : 
            index === 1 ? "text-trendspark-peach/20" : 
            "text-purple-500/20"
          )}
        />
        
        {/* Rating */}
        <div className="flex mb-5">
          {Array(testimonial.rating).fill(null).map((_, i) => (
            <Star 
              key={i} 
              className={cn(
                "w-5 h-5 fill-current",
                index === 0 ? "text-trendspark-mint" : 
                index === 1 ? "text-trendspark-peach" : 
                "text-purple-500"
              )} 
            />
          ))}
        </div>
        
        {/* Quote */}
        <blockquote className="mb-8 flex-grow">
          <p className="text-white text-lg leading-relaxed">{testimonial.quote}</p>
        </blockquote>
        
        {/* Author info */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Avatar className={cn(
              "h-14 w-14 border-2 transition-all duration-500 shadow-lg",
              index === 0 ? "border-trendspark-mint" : 
              index === 1 ? "border-trendspark-peach" : 
              "border-purple-500",
              isHovered ? "scale-110" : ""
            )}>
              <AvatarImage src={testimonial.avatar} alt={testimonial.author} className="object-cover" />
              <AvatarFallback>
                <CircleUser className="text-white" />
              </AvatarFallback>
            </Avatar>
            <div className={cn(
              "absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500",
              index === 0 ? "bg-trendspark-mint" : 
              index === 1 ? "bg-trendspark-peach" : 
              "bg-purple-500",
              isHovered ? "scale-110" : ""
            )}>
              <ChevronRight className="w-4 h-4 text-black" />
            </div>
          </div>
          <div>
            <h3 className={cn(
              "font-bold text-lg transition-colors duration-500",
              index === 0 ? "text-trendspark-mint" : 
              index === 1 ? "text-trendspark-peach" : 
              "text-purple-500"
            )}>
              {testimonial.author}
            </h3>
            <p className="text-gray-300 text-sm">{testimonial.role}</p>
          </div>
        </div>
        
        {/* Stats display */}
        <div className={cn(
          "grid grid-cols-3 gap-3 mt-6 pt-6 border-t transition-all duration-500",
          index === 0 ? "border-trendspark-mint/20" : 
          index === 1 ? "border-trendspark-peach/20" : 
          "border-purple-500/20",
          isHovered ? "opacity-100" : "opacity-80"
        )}>
          <div className="text-center">
            <p className={cn(
              "text-xl font-bold",
              index === 0 ? "text-trendspark-mint" : 
              index === 1 ? "text-trendspark-peach" : 
              "text-purple-500"
            )}>
              {testimonial.stats.followers}
            </p>
            <p className="text-xs text-gray-400">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-white">
              {testimonial.stats.growth}
            </p>
            <p className="text-xs text-gray-400">Growth</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-white">
              {testimonial.stats.timeframe}
            </p>
            <p className="text-xs text-gray-400">Timeline</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonials;
