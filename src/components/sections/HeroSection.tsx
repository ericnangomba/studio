// src/components/sections/HeroSection.tsx
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; // Make sure Image is imported

// Import your hero background image
import HeroBackgroundImage from '../../images/hero-bg.jpg'; // ADJUST THIS PATH

interface HeroSectionProps {
  id: string;
}

export default function HeroSection({ id }: HeroSectionProps) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center text-primary-foreground overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0"> {/* Use z-0 to place it behind content */}
        <Image
          src={HeroBackgroundImage}
          alt="Background image for hero section" // Descriptive alt text
          layout="fill" // Image will fill the parent div
          objectFit="cover" // Cover the area, crop if necessary
          quality={100} // Adjust quality as needed
          className="pointer-events-none" // Prevents image from interfering with mouse events
        />
      </div>

      {/* Overlay (adjust color and opacity as needed) */}
      <div className="absolute inset-0 z-10 bg-black opacity-50"> {/* Adjust opacity and color */}
      </div>

      {/* Content (Text, Buttons, etc.) */}
      <div className="container mx-auto px-4 text-center relative z-20"> {/* Use z-20 to place it above the overlay */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-headline leading-tight">
          Your Digital Partner in <span className="text-accent">Cape Town</span>
        </h1>
        <p className="text-xl mb-10 max-w-3xl mx-auto text-primary-foreground/90">
          Empowering SMEs with integrated, affordable digital solutions to thrive in today's competitive landscape.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg"  variant="customMagenta" asChild className="font-button">
            <Link href="#solutions">
              Our Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild className="font-button">
            <Link href="#contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </div>
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

