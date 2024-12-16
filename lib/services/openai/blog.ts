import { openai } from './client';
import type { OpenAIResponse } from './types';

export async function generateBlogPost(topic: string): Promise<OpenAIResponse> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a medical content writer for PRIVA Dr. Create informative and engaging content about ${topic}.`
        },
        {
          role: "user",
          content: `Write a comprehensive blog post about ${topic}. Include relevant medical information, research, and practical advice.`
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    const content = completion.choices[0]?.message?.content;

    if (!content) {
      throw new Error('No response received from AI');
    }

    return {
      success: true,
      content
    };
  } catch (error) {
    console.error('OpenAI API error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate blog post'
    };
  }
}