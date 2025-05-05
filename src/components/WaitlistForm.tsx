
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This would typically connect to a backend API
    // For now we'll just simulate the submission
    setTimeout(() => {
      toast({
        title: "Erfolgreich angemeldet!",
        description: "Wir werden Sie informieren, sobald unser Service verfügbar ist.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="signup" className="py-20 bg-nature-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
            Melden Sie sich für die Warteliste an
          </h2>
          <p className="text-lg text-muted-foreground">
            Melden Sie sich jetzt an, um auf die Warteliste zu kommen und als Erste von unserem Service zu erfahren.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-sm p-8 border border-muted">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                E-Mail Adresse
              </label>
              <Input
                id="email"
                type="email"
                placeholder="ihre.email@beispiel.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-muted rounded-md focus:ring-nature-500 focus:border-nature-500"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-nature-500 hover:bg-nature-600 text-white py-5 rounded-md font-medium transition-all"
            >
              {isSubmitting ? "Wird angemeldet..." : "Jetzt anmelden und informiert bleiben"}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center pt-4">
              Ihre Daten werden vertraulich behandelt und nur für Informationen zu unserem Service verwendet.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
