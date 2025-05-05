
import React from 'react';
import { Flower } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warmth-50 py-12 border-t border-warmth-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Flower className="h-6 w-6 text-nature-500" />
            <span className="text-lg font-medium text-foreground">Friedhofsfreund</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-soft">
              Datenschutz
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-soft">
              Impressum
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-soft">
              Kontakt
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-warmth-100">
          <p className="text-sm text-center text-muted-foreground">
            © {currentYear} Friedhofsfreund Service. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
