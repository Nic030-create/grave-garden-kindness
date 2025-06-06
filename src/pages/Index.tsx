
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ValueSection from '@/components/ValueSection';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ValueSection />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
