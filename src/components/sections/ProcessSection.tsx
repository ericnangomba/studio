// src/components/sections/ProcessSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Lightbulb, Settings, Rocket, CheckCircle } from 'lucide-react'; // Example icons for process
import type { LucideIcon } from 'lucide-react';

interface ProcessStep {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    step: 1,
    icon: Search,
    title: 'Discovery & Consultation',
    description: "We start by understanding your business, goals, and challenges through an in-depth consultation. This helps us define the project scope and objectives clearly.",
  },
  {
    step: 2,
    icon: Lightbulb,
    title: 'Strategy & Design',
    description: "Based on the discovery phase, we develop a tailored strategy and design mockups. We focus on user experience and aligning the solution with your brand identity.",
  },
  {
    step: 3,
    icon: Settings,
    title: 'Development & Implementation',
    description: "Our skilled team brings the designs to life, building your website or application with clean code and robust functionality. We keep you updated throughout this phase.",
  },
  {
    step: 4,
    icon: Rocket,
    title: 'Launch & Ongoing Support',
    description: "After rigorous testing, we launch your project. We also offer ongoing support and maintenance to ensure your digital assets continue to perform optimally.",
  },
];

interface ProcessSectionProps {
  id: string;
}

export default function ProcessSection({ id }: ProcessSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-card text-card-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">
          Our Streamlined <span className="text-accent">Process</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          We follow a clear, four-step process to ensure transparency, efficiency, and successful outcomes for every project.
        </p>
        <div className="relative">
          {/* Desktop timeline line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 transform -translate-y-1/2 -z-10"></div>
          
          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            {processSteps.map((item, index) => (
              <div key={item.step} className="flex flex-col items-center text-center relative md:pt-8">
                {/* Mobile connector line */}
                {index < processSteps.length -1 && <div className="md:hidden absolute top-12 left-1/2 w-1 h-16 bg-primary/20 -translate-x-1/2"></div>}
                
                <div className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-primary text-primary-foreground mb-4 border-4 border-card shadow-lg">
                  <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground text-xs font-bold rounded-full h-8 w-8 flex items-center justify-center border-2 border-card">
                    {item.step}
                  </div>
                  <item.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-headline text-card-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground px-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
