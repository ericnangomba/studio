// src/ai/flows/ai-faq.ts
'use server';
/**
 * @fileOverview An AI-powered FAQ tool for Jertine Tech.
 *
 * - aiFAQ - A function that answers questions about Jertine Tech's services and offerings.
 * - AiFAQInput - The input type for the aiFAQ function.
 * - AiFAQOutput - The return type for the aiFAQ function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiFAQInputSchema = z.object({
  question: z.string().describe('The question to be answered.'),
});
export type AiFAQInput = z.infer<typeof AiFAQInputSchema>;

const AiFAQOutputSchema = z.object({
  answer: z.string().describe('The answer to the question.'),
});
export type AiFAQOutput = z.infer<typeof AiFAQOutputSchema>;

export async function aiFAQ(input: AiFAQInput): Promise<AiFAQOutput> {
  return aiFAQFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiFAQPrompt',
  input: {schema: AiFAQInputSchema},
  output: {schema: AiFAQOutputSchema},
  prompt: `You are an AI assistant providing information about Jertine Tech, a company offering integrated digital solutions to small and medium-sized businesses in Cape Town and South Africa. Answer the following question about Jertine Tech:\n\nQuestion: {{{question}}}`,
});

const aiFAQFlow = ai.defineFlow(
  {
    name: 'aiFAQFlow',
    inputSchema: AiFAQInputSchema,
    outputSchema: AiFAQOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
