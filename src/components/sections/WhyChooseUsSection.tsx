// src/components/sections/WhyChooseUsSection.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Zap, Users, ShieldCheck } from 'lucide-react'; // Example icons
import type { LucideIcon } from 'lucide-react';

interface USP {
  icon: LucideIcon;
  title: string;
  description: string;
}

const usps: USP[] = [
  {
    icon: DollarSign,
    title: 'Budget-Friendly Solutions',
    description: "We offer competitive pricing and transparent quotes, ensuring you get maximum value without breaking the bank. High-quality digital services shouldn't be a luxury.",
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: "Our streamlined processes allow for quick turnarounds on projects, getting your digital assets live and working for you faster.",
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: "We listen to your needs and tailor our solutions accordingly. Your success is our priority, and we work collaboratively to achieve your goals.",
  },
  {
    icon: ShieldCheck,
    title: 'Integrated Services',
    description: "From code to design to support, we provide a holistic suite of services, saving you the hassle of managing multiple vendors. One partner, many solutions.",
  },
];

interface WhyChooseUsSectionProps {
  id: string;
}

export default function WhyChooseUsSection({ id }: WhyChooseUsSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">
          Why Choose <span className="text-accent">Jertine Tech?</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          We understand the unique challenges faced by small and medium businesses. Here’s what sets us apart.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md hover:shadow-accent/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-4 bg-accent/10 rounded-full mb-4">
                <usp.icon className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-headline text-card-foreground">{usp.title}</h3>
              <p className="text-sm text-muted-foreground">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
