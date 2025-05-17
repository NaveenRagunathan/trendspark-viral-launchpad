
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "I went from 1K to 47K followers in 8 weeks by using TrendSpark's trend alerts. The early access to emerging topics made all the difference.",
    author: "Megan Chen",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    quote: "As a finance creator, being early to trends is everything. TrendSpark gives me that edge—I'm now creating content my audience wants before they even search for it.",
    author: "David Okoye",
    role: "Financial Coach",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    quote: "I've tried every AI tool out there. TrendSpark is the only one that actually delivers on the promise of helping me create content that performs consistently well.",
    author: "Sarah Johnson",
    role: "Digital Marketer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section id="testimonials" className="section-padding bg-trendspark-elevated relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-[20%] w-[300px] h-[300px] bg-trendspark-mint/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-[20%] w-[250px] h-[250px] bg-trendspark-peach/5 rounded-full blur-[80px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Real Results from Creators
          </h2>
          <p className="text-trendspark-text-secondary max-w-2xl mx-auto text-lg">
            Join thousands of content creators who've transformed their reach
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Desktop Testimonial Cards */}
          <div className="hidden md:grid grid-cols-3 gap-6 w-full">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                avatar={testimonial.avatar}
                index={index}
              />
            ))}
          </div>
          
          {/* Mobile Testimonial Carousel */}
          <div className="md:hidden w-full">
            <div className="mb-6">
              <TestimonialCard 
                quote={testimonials[activeIndex].quote}
                author={testimonials[activeIndex].author}
                role={testimonials[activeIndex].role}
                avatar={testimonials[activeIndex].avatar}
                index={activeIndex}
              />
            </div>
            
            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index ? "bg-trendspark-mint" : "bg-trendspark-elevated"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ quote, author, role, avatar, index }: {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  index: number;
}) => {
  return (
    <div 
      className="glassmorphic rounded-xl p-6 opacity-0 animate-fade-in hover:border-white/20 transition-colors duration-300"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Quote */}
      <div className="mb-6">
        <span className="text-4xl text-trendspark-mint opacity-40">"</span>
        <p className="text-white">{quote}</p>
      </div>
      
      {/* Author Info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img 
            src={avatar} 
            alt={author}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-trendspark-text-secondary text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
