
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-warmth-50 pt-16">
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=2070&q=80" 
          alt="Blumen auf einem Grab" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warmth-50 via-warmth-50/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 z-10 animate-fade-in-slow">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-foreground">
            Würdevolle Grabpflege mit sozialer Wirkung
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Ein flexibler, monatlich kündbarer Abo-Service für die Pflege der letzten Ruhestätte Ihrer Lieben.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              size="lg"
              className="bg-nature-500 hover:bg-nature-600 text-white font-medium px-8 py-6 rounded-full"
              onClick={scrollToSignup}
            >
              Zur Warteliste
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent hover:bg-muted border-nature-400 text-foreground font-medium px-8 py-6 rounded-full"
              onClick={() => document.getElementById('service')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Mehr erfahren
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-12 w-12 bg-background/50 hover:bg-background/80"
            onClick={() => document.getElementById('service')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown className="h-6 w-6 text-nature-500" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
