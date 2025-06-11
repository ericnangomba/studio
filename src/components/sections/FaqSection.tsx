// src/components/sections/FaqSection.tsx
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { aiFAQ, type AiFAQInput, type AiFAQOutput } from '@/ai/flows/ai-faq';
import { Bot, Send, Loader2, AlertTriangle } from 'lucide-react';

const faqFormSchema = z.object({
  question: z.string().min(5, { message: "Question must be at least 5 characters." }).max(200, { message: "Question must be less than 200 characters." }),
});
type FaqFormValues = z.infer<typeof faqFormSchema>;

interface FaqSectionProps {
  id: string;
}

export default function FaqSection({ id }: FaqSectionProps) {
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FaqFormValues>({
    resolver: zodResolver(faqFormSchema),
    defaultValues: {
      question: "",
    },
  });

  const onSubmit: SubmitHandler<FaqFormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setAnswer(null);
    try {
      const input: AiFAQInput = { question: data.question };
      const result: AiFAQOutput = await aiFAQ(input);
      setAnswer(result.answer);
    } catch (e) {
      console.error("FAQ Error:", e);
      setError("Sorry, I couldn't answer that question. Please try rephrasing or contact us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">
          Frequently Asked <span className="text-accent">Questions</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Have questions about our services or how we work? Ask our AI assistant or check out some common queries below.
        </p>
        
        <Card className="max-w-2xl mx-auto bg-card shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bot className="h-7 w-7 mr-2 text-accent" />
              AI-Powered FAQ Assistant
            </CardTitle>
            <CardDescription>
              Ask a question about Jertine Tech's services, process, or pricing.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="question"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Question</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input placeholder="e.g., What are your graphic design rates?" {...field} className="pr-12" />
                          <Button type="submit" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8" disabled={isLoading}>
                            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                            <span className="sr-only">Ask</span>
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>
          {(isLoading || answer || error) && (
            <CardFooter className="flex flex-col items-start space-y-4">
              {isLoading && (
                <div className="flex items-center text-muted-foreground">
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  <span>Thinking...</span>
                </div>
              )}
              {error && (
                <Alert variant="destructive" className="w-full">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              {answer && !error && (
                <Alert className="w-full bg-primary/5 border-primary/20">
                   <Bot className="h-4 w-4 text-primary" />
                  <AlertTitle className="text-primary">Answer</AlertTitle>
                  <AlertDescription className="text-foreground/90">{answer}</AlertDescription>
                </Alert>
              )}
            </CardFooter>
          )}
        </Card>
      </div>
    </section>
  );
}
