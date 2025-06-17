// src/components/sections/TeamSection.tsx
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

// Import your team member images from the src directory
// Adjust the paths based on the exact location within src/images
import johannesVenterImage from '../../images/johannesventer.jpg';
import ericImage from '../../images/eric.jpg';
import xolisilePicImage from '../../images/xolisilepic.png';
import welfordKulisewaImage from '../../images/welford.jpeg'; // Assuming this is in a 'team' subfolder
import unathiDoboImage from '../../images/unathi dobo.png';


interface TeamMember {
  name: string;
  role: string;
  // The type of the imported image might be different than 'string'
  // Using 'any' is a quick fix, or you can try to infer the correct type
  image: any;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Johennes Venter.',
    role: 'UI/UX Designer',
    image: johannesVenterImage, // Use the imported variable
  },
  {
    name: 'Eric Nangomba.',
    role: 'Lead Developer',
    image: ericImage, // Use the imported variable
  },
  {
    name: 'Xolisile Gwebityala.',
    role: 'Lead Developer',
    image: xolisilePicImage, // Use the imported variable
  },
  {
    name: 'Welford Kulisewa.',
    role: 'Project Manager',
    image: welfordKulisewaImage, // Use the imported variable
  },
  {
    name: 'Unathi Dobo.',
    role: 'Marketing Specialist',
    image: unathiDoboImage, // Use the imported variable
  },
];

interface TeamSectionProps {
  id: string;
}

export default function TeamSection({ id }: TeamSectionProps) {
  return (
    <section
      id={id}
      className="py-16 md:py-24 bg-primary text-primary-foreground" // Changed bg-secondary to bg-primary and text-secondary-foreground to text-primary-foreground
    >
      {/* The recursive call <TeamSection id="team" /> was removed from here */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-headline">
          Meet Our <span className="text-accent">Team</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full h-64">
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
