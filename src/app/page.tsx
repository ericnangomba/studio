// src/app/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import AboutUsSection from '@/components/sections/AboutUsSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/sections/ContactSection';
import TeamSection from '@/components/sections/TeamSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection id="hero" />
        <SolutionsSection id="solutions" />
        <AboutUsSection id="about" />
        <WhyChooseUsSection id="why-us" />
        <ProcessSection id="process" />
        <TestimonialsSection id="testimonials" />
        <TeamSection id="team" />
        <FaqSection id="faq" />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
}
