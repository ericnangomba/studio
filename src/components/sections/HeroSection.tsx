
// src/components/sections/HeroSection.tsx
"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface HeroSectionProps {
  id: string;
}

export default function HeroSection({ id }: HeroSectionProps) {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(210,67%,20%)] text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
         {/* You can add a subtle background pattern or image here if desired */}
      </div>
      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-headline leading-tight animate-fade-in-down">
            Jertine Tech: <br className="md:hidden" /> Your Digital Foundation. <span className="text-accent">Simplified.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up">
            We provide integrated digital solutions—coding, graphic design, and desktop support—tailored for small and medium-sized businesses in Cape Town and South Africa. Affordable, rapid, and reliable.
          </p>
          <div className="space-x-4 animate-fade-in-up animation-delay-300">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={handleScrollToContact}>
              Get a Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary bg-background hover:bg-primary-foreground hover:text-accent data-[state=open]:bg-primary-foreground data-[state=open]:text-[hsl(var(--primary))]"
              onClick={() => {
                const solutionsSection = document.getElementById('solutions');
                if (solutionsSection) {
                  solutionsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Our Solutions
            </Button>
          </div>
        </div>
      </div>
       {/* Decorative elements - optional */}
       <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full filter blur-3xl opacity-50 animate-pulse-slow"></div>
       <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/20 rounded-full filter blur-3xl opacity-50 animate-pulse-slower"></div>
    </section>
  );
}

// Add to globals.css if you want these animations:
/*
@keyframes fade-in-down {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
.animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
.animation-delay-300 { animation-delay: 0.3s; }

@keyframes pulse-slow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
}
@keyframes pulse-slower {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.03); }
}
.animate-pulse-slow { animation: pulse-slow 8s infinite ease-in-out; }
.animate-pulse-slower { animation: pulse-slower 10s infinite ease-in-out; }
*/

