import Anthropic from '@anthropic-ai/sdk';
import { ANTHROPIC_CONFIG } from '../config/anthropic';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

export interface AIResponse {
  success: boolean;
  content?: string;
  error?: string;
}

export async function generateAIResponse(query: string): Promise<AIResponse> {
  try {
    const message = await anthropic.messages.create({
      model: ANTHROPIC_CONFIG.model,
      max_tokens: ANTHROPIC_CONFIG.maxTokens,
      temperature: ANTHROPIC_CONFIG.temperature,
      system: ANTHROPIC_CONFIG.systemPrompt,
      messages: [
        {
          role: 'user',
          content: query
        }
      ]
    });

    if (!message.content[0]?.text) {
      throw new Error('No response received from AI');
    }

    return {
      success: true,
      content: message.content[0].text
    };
  } catch (error) {
    console.error('Anthropic API error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate response'
    };
  }
}