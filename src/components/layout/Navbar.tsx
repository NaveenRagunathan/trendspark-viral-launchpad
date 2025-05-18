
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 lg:px-24",
        scrolled ? "bg-trendspark-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-display font-bold text-white">
            Trend<span className="text-trendspark-mint">Spark</span><span className="text-xs align-super ml-1">AI</span>
          </span>
        </div>
        
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#workflow">Workflow</NavLink>
          <NavLink href="#testimonials">Results</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
        </div>
        
        <div>
          <button className="ghost-button hover:text-white">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-trendspark-text-secondary hover:text-white transition-colors duration-300 underline-animation"
  >
    {children}
  </a>
);

export default Navbar;
