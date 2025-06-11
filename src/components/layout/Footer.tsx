// src/components/layout/Footer.tsx
import { Zap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card text-card-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="h-7 w-7 text-accent" />
            <span className="text-xl font-bold font-headline">Jertine<span className="text-accent">Tech</span></span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Jertine Tech. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          Your Digital Foundation. Simplified.
        </p>
      </div>
    </footer>
  );
}
