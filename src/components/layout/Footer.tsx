
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-trendspark-black py-12 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <span className="text-xl font-display font-bold text-white">
                Trend<span className="text-trendspark-mint">Spark</span><span className="text-xs align-super ml-1">AI</span>
              </span>
            </div>
            <p className="text-trendspark-text-secondary text-sm mb-4">
              The AI trend detection tool for content creators who want to post viral content early.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-trendspark-text-secondary hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Product</h3>
            <ul className="space-y-3 text-trendspark-text-secondary">
              {['Features', 'Pricing', 'Testimonials', 'FAQ', 'Updates'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-3 text-trendspark-text-secondary">
              {['About Us', 'Careers', 'Blog', 'Privacy', 'Terms'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-4">Stay Updated</h3>
            <p className="text-trendspark-text-secondary text-sm mb-4">
              Get weekly trends and tips directly to your inbox.
            </p>
            <form className="flex">
              <input 
                type="email"
                placeholder="Your email"
                className="bg-trendspark-elevated border border-white/10 rounded-l-md px-4 py-2 text-sm w-full focus:outline-none focus:border-trendspark-mint/50"
              />
              <button 
                type="submit"
                className="bg-trendspark-mint text-trendspark-black px-4 py-2 rounded-r-md text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-trendspark-text-secondary text-sm">
            © 2025 TrendSpark AI. All rights reserved.
          </p>
          <p className="text-trendspark-text-secondary text-sm mt-4 md:mt-0 group relative">
            Built with caffeine and code
            <span className="invisible group-hover:visible absolute bottom-full left-1/2 transform -translate-x-1/2 bg-trendspark-elevated text-xs px-2 py-1 rounded whitespace-nowrap">
              Yes, real caffeine! ☕️
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
