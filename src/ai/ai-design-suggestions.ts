// This file implements the AI-powered design suggestions flow.
'use server';

/**
 * @fileOverview Provides AI-driven design suggestions based on user-uploaded photos.
 *
 * - aiDesignSuggestions - A function that generates design suggestions.
 * - AiDesignSuggestionsInput - The input type for the aiDesignSuggestions function.
 * - AiDesignSuggestionsOutput - The return type for the aiDesignSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiDesignSuggestionsInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the space to be remodeled, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  description: z.string().describe('A description of the space and desired changes.'),
});
export type AiDesignSuggestionsInput = z.infer<typeof AiDesignSuggestionsInputSchema>;

const AiDesignSuggestionsOutputSchema = z.object({
  designSuggestions: z.string().describe('AI-driven design suggestions for the space.'),
});
export type AiDesignSuggestionsOutput = z.infer<typeof AiDesignSuggestionsOutputSchema>;

export async function aiDesignSuggestions(input: AiDesignSuggestionsInput): Promise<AiDesignSuggestionsOutput> {
  return aiDesignSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiDesignSuggestionsPrompt',
  input: {schema: AiDesignSuggestionsInputSchema},
  output: {schema: AiDesignSuggestionsOutputSchema},
  prompt: `You are an AI design assistant. Provide remodeling suggestions based on the user's space.

Description: {{{description}}}
Photo: {{media url=photoDataUri}}

Provide detailed and creative design ideas.`,
});

const aiDesignSuggestionsFlow = ai.defineFlow(
  {
    name: 'aiDesignSuggestionsFlow',
    inputSchema: AiDesignSuggestionsInputSchema,
    outputSchema: AiDesignSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
