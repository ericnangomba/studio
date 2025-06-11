// src/components/sections/SolutionsSection.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Palette, MonitorSmartphone, CheckCircle, Brain, FileCode } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Solution {
  icon: LucideIcon;
  title: string;
  problem: string;
  solution: string;
  features: string[];
}

const solutions: Solution[] = [
  {
    icon: Code2,
    title: 'Custom Web Development',
    problem: "Need a unique online presence or a specialized web application but don't know where to start?",
    solution: "We build responsive, high-performing websites and web applications tailored to your specific business needs, from simple landing pages to complex platforms.",
    features: ["Responsive Design", "SEO Optimization", "Scalable Architecture", "Content Management Systems"]
  },
  {
    icon: Palette,
    title: 'Graphic Design Services',
    problem: "Struggling to create a consistent and professional brand image that resonates with your audience?",
    solution: "Our creative graphic design services cover everything from logo design and branding to marketing materials, ensuring your business stands out.",
    features: ["Logo & Branding", "Marketing Collateral", "UI/UX Design", "Print & Digital Graphics"]
  },
  {
    icon: MonitorSmartphone,
    title: 'Desktop & IT Support',
    problem: "Facing IT challenges that disrupt your workflow and productivity, with no reliable support in sight?",
    solution: "We offer prompt and reliable desktop and IT support services to keep your systems running smoothly, minimizing downtime and maximizing efficiency.",
    features: ["Troubleshooting & Repair", "Software Installation", "Network Setup", "Remote & On-site Support"]
  },
  {
    icon: Brain,
    title: 'AI Web Applications',
    problem: "Want to leverage Artificial Intelligence in your web apps but find it too complex or costly?",
    solution: "We design and develop intelligent web applications using cutting-edge AI technologies, enhancing user experience and automating processes.",
    features: ["Custom AI Model Integration", "Natural Language Processing (NLP)", "Machine Learning Solutions", "AI-Powered Automation"]
  },
  {
    icon: FileCode,
    title: 'Python App Development',
    problem: "Need robust, scalable, and versatile applications for data science, web backends, or automation?",
    solution: "Our Python development services deliver high-quality applications for various needs, from backend APIs and web scraping to data analysis and machine learning.",
    features: ["Django/Flask Web Apps", "Data Science & ML", "Automation Scripts", "API Development"]
  },
];

interface SolutionsSectionProps {
  id: string;
}

export default function SolutionsSection({ id }: SolutionsSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">Our Integrated <span className="text-accent">Solutions</span></h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          We combine technology, design, and support to provide comprehensive digital solutions that address your key business challenges.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((service, index) => (
            <Card key={index} className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-accent/10 rounded-full mb-4">
                  <service.icon className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <CardDescription className="text-sm text-muted-foreground mb-2 italic">"{service.problem}"</CardDescription>
                <p className="text-sm text-card-foreground mb-4 flex-grow">{service.solution}</p>
                <div className="mt-auto">
                  <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-center text-xs text-muted-foreground">
                        <CheckCircle className="h-4 w-4 mr-2 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
