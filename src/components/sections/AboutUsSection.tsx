// src/components/sections/AboutUsSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, HeartPulse } from 'lucide-react'; // Example icons
import Image from 'next/image';

interface AboutUsSectionProps {
  id: string;
}

export default function AboutUsSection({ id }: AboutUsSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-card text-card-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">
              About <span className="text-accent">Jertine Tech</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Jertine Tech is dedicated to empowering small and medium-sized businesses across Cape Town and South Africa with integrated, affordable digital solutions. We believe that every business deserves a strong digital foundation to thrive in today's competitive landscape.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-1 font-headline">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To simplify technology and design, providing accessible and impactful digital tools that help businesses grow and succeed.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-1 font-headline">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the leading digital partner for SMEs in South Africa, recognized for our innovation, reliability, and client-centric approach.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                  <HeartPulse className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-1 font-headline">Core Values</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li><span className="font-medium text-accent">Client-Focus:</span> Understanding and prioritizing your needs.</li>
                    <li><span className="font-medium text-accent">Integrity:</span> Transparent and ethical in all our dealings.</li>
                    <li><span className="font-medium text-accent">Simplicity:</span> Making complex solutions easy to understand and use.</li>
                    <li><span className="font-medium text-accent">Innovation:</span> Continuously seeking better ways to serve you.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://placehold.co/600x800.png"
              alt="Jertine Tech Team or Office"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-500"
              data-ai-hint="team collaboration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
