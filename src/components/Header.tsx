
import React from 'react';
import { Flower } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8 bg-background/95 backdrop-blur-sm fixed top-0 z-50 border-b border-muted">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flower className="h-6 w-6 text-nature-500" />
          <span className="text-lg font-medium text-foreground">GrabPflege</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#service" className="text-muted-foreground hover:text-foreground transition-soft">Service</a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-soft">Über uns</a>
          <a href="#signup" className="text-muted-foreground hover:text-foreground transition-soft">Anmelden</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
