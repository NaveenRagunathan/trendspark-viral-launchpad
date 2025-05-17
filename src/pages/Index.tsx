
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import PainSpark from '@/components/sections/PainSpark';
import Solution from '@/components/sections/Solution';
import Workflow from '@/components/sections/Workflow';
import Benefits from '@/components/sections/Benefits';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FinalCTA from '@/components/sections/FinalCTA';
import FAQ from '@/components/sections/FAQ';

const Index = () => {
  // Update the title
  useEffect(() => {
    document.title = 'TrendSpark AI | Go Viral Without Guessing';
  }, []);
  
  return (
    <main className="bg-trendspark-black min-h-screen">
      <Navbar />
      
      {/* All Landing Page Sections */}
      <Hero />
      <PainSpark />
      <Solution />
      <Workflow />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <FAQ />
      
      <Footer />
    </main>
  );
};

export default Index;
