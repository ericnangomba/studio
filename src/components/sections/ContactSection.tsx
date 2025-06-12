// src/components/sections/ContactSection.tsx
"use client";

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must be less than 500 characters." }),
});
type ContactFormValues = z.infer<typeof contactFormSchema>;

// Mock server action - replace with actual implementation
async function submitInquiryAction(data: ContactFormValues): Promise<{ success: boolean; message: string }> {
  console.log("Submitting inquiry:", data);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  // Simulate random success/failure
  // if (Math.random() > 0.2) {
    return { success: true, message: "Your inquiry has been sent successfully! We'll get back to you soon." };
  // } else {
  //   return { success: false, message: "Failed to send inquiry. Please try again later." };
  // }
}


interface ContactSectionProps {
  id: string;
}

export default function ContactSection({ id }: ContactSectionProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsSubmitting(true);
    try {
      const result = await submitInquiryAction(data); // Use the server action
      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
          variant: "default",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <p className="text-lg text-primary-foreground/80 text-center mb-12 max-w-2xl mx-auto">
          Ready to start your digital transformation? Have a question? We'd love to hear from you. Fill out the form below or reach out via our contact details.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-card text-card-foreground shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
              <CardDescription>We typically respond within 24 business hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-background/80 text-foreground placeholder:text-muted-foreground" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john.doe@example.com" {...field} className="bg-background/80 text-foreground placeholder:text-muted-foreground" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Inquiry about Web Development" {...field} className="bg-background/80 text-foreground placeholder:text-muted-foreground" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us more about your project or question..." {...field} rows={5} className="bg-background/80 text-foreground placeholder:text-muted-foreground" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Inquiry
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-8 text-primary-foreground">
            <div>
              <h3 className="text-2xl font-semibold mb-4 font-headline text-accent">Contact Information</h3>
              <p className="text-primary-foreground/80 mb-6">
                Feel free to reach out to us directly through any of the channels below. We're here to help!
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-accent flex-shrink-0" />
                <a href="mailto:info@jertinetech.co.za" className="hover:text-accent transition-colors">info@jertinetech.co.za</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-accent flex-shrink-0" />
                <a href="tel:+27123456789" className="hover:text-accent transition-colors">+27 (+27 82 325 6700) </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p>21 Helenic Avenue, Green Point</p>
                  <p>Cape Town, South Africa, 7925 </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-2 font-headline text-accent">Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
