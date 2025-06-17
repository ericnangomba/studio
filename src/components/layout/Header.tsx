// src/components/layout/Header.tsx
"use client";

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react'; // No need for Zap anymore if replacing
import { cn } from '@/lib/utils';
import Image from 'next/image'; // Import Image component

// Import your logo image here
import YourCompanyLogo from '../../images/jertinetechlogo.png'; // ADJUST THIS PATH IF NECESSARY

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About Us', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('#hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 50);

    let currentSection = '';
    navItems.forEach(item => {
      const section = document.querySelector(item.href) as HTMLElement;
      if (section) {
        const sectionTop = section.offsetTop - 100; // Adjusted for sticky header
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = item.href;
        }
      }
    });

    if (currentSection && currentSection !== activeSection) {
      setActiveSection(currentSection);
    } else if (!currentSection && scrollPosition < window.innerHeight / 2) {
      // Default to hero if at the top and no other section matches
      setActiveSection('#hero');
    }
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNavLinkClick = (href: string) => {
    setActiveSection(href);
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <Link href="/" passHref>
          {/* Replace Zap icon and text with the Image component */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavLinkClick('#hero')}>
             <Image
               src={YourCompanyLogo} // Use the imported logo variable
               alt="JertineTech Company Logo" // Provide descriptive alt text
               width={160} // !!! Adjust default desktop width as needed !!!
               height={50} // !!! Adjust default desktop height as needed !!!
               // Add responsive classes here if you want the size to change on different screen sizes
               // className="w-[160px] h-[50px] md:w-[180px] md:h-[55px] lg:w-[200px] lg:h-[60px]" // Example responsive classes
             />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navItems.map(item => (
            <Button
              key={item.label}
              variant="ghost"
              asChild
              className={cn(
                "text-foreground hover:bg-primary/10 hover:text-accent",
                activeSection === item.href && "text-accent font-semibold border-b-2 border-accent rounded-none"
              )}
            >
              <a onClick={(e) => { e.preventDefault(); handleNavLinkClick(item.href); }} href={item.href}>
                {item.label}
              </a>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card text-card-foreground p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                   <Link href="/" passHref>
                    {/* Replace Zap icon and text with the Image component in mobile menu */}
                    <div className="flex items-center cursor-pointer" onClick={() => handleNavLinkClick('#hero')}>
                       <Image
                         src={YourCompanyLogo} // Use the imported logo variable
                         alt="JertineTech Company Logo" // Provide descriptive alt text
                         width={140} // !!! Adjust mobile width as needed !!!
                         height={45} // !!! Adjust mobile height as needed !!!
                         // Add responsive classes here if further adjustments are needed
                       />
                    </div>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex-grow p-4 space-y-2">
                  {navItems.map(item => (
                    <Button
                      key={item.label}
                      variant="ghost"
                      asChild
                      className={cn(
                        "w-full justify-start text-lg py-3",
                        activeSection === item.href ? "text-accent bg-accent/10" : "text-foreground hover:bg-primary/10 hover:text-accent"
                      )}
                    >
                      <a onClick={(e) => { e.preventDefault(); handleNavLinkClick(item.href); }} href={item.href}>
                        {item.label}
                      </a>
                    </Button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
