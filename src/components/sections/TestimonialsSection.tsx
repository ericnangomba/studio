// src/components/sections/TestimonialsSection.tsx
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react'; // For ratings

interface Testimonial {
  name: string;
  company: string;
  avatarUrl?: string;
  avatarFallback: string;
  testimonial: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Miller',
    company: 'Miller\'s Boutique Bakery',
    avatarUrl: 'https://placehold.co/100x100.png?text=SM',
    avatarFallback: 'SM',
    testimonial: "Jertine Tech revolutionized our online presence! Their team was professional, creative, and delivered exactly what we needed on time and budget. Our sales have increased significantly since the new website launch.",
    rating: 5,
  },
  {
    name: 'John B. Good',
    company: 'GoodBuild Construction',
    avatarUrl: 'https://placehold.co/100x100.png?text=JB',
    avatarFallback: 'JB',
    testimonial: "The graphic design work Jertine Tech provided for our rebranding was exceptional. They truly understood our vision and translated it into a powerful visual identity. Highly recommended!",
    rating: 5,
  },
  {
    name: 'Ayanda Khumalo',
    company: 'AK Consulting Services',
    avatarUrl: 'https://placehold.co/100x100.png?text=AK',
    avatarFallback: 'AK',
    testimonial: "Whenever we have IT issues, Jertine Tech is our go-to. Their support is prompt, reliable, and they always find a solution. They've saved us countless hours of downtime.",
    rating: 5,
  },
];

const renderStars = (rating: number) => {
  return Array(5).fill(null).map((_, i) => (
    <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-accent fill-accent' : 'text-muted-foreground/50'}`} />
  ));
};

interface TestimonialsSectionProps {
  id: string;
}

export default function TestimonialsSection({ id }: TestimonialsSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">
          What Our <span className="text-accent">Clients Say</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          We pride ourselves on building strong relationships and delivering results. Here's what some of our valued clients have to share.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Card key={index} className="bg-card text-card-foreground shadow-lg flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={item.avatarUrl} alt={item.name} data-ai-hint="person portrait" />
                    <AvatarFallback>{item.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-card-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">{renderStars(item.rating)}</div>
                <blockquote className="text-sm text-muted-foreground italic border-l-4 border-accent pl-4 py-2 flex-grow">
                  "{item.testimonial}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
