// src/components/sections/TeamSection.tsx
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string; // Placeholder for image source
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alexander R.',
    role: 'Lead Developer',
    image: '/images/team/placeholder-male.jpg', // Placeholder image
  },
  {
    name: 'Samantha B.',
    role: 'UI/UX Designer',
    image: '/images/team/placeholder-female.jpg', // Placeholder image
  },
  {
    name: 'Michael C.',
    role: 'Project Manager',
    image: '/images/team/placeholder-male.jpg', // Placeholder image
  },
  {
    name: 'Jessica L.',
    role: 'Marketing Specialist',
    image: '/images/team/placeholder-female.jpg', // Placeholder image
  },
];

interface TeamSectionProps {
  id: string;
}

export default function TeamSection({ id }: TeamSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-secondary text-secondary-foreground">
      {/* The recursive call <TeamSection id="team" /> was removed from here */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-headline">
          Meet Our <span className="text-primary">Team</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full h-64"> {/* Adjust height as needed */}
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint="person portrait"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1 font-headline">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
