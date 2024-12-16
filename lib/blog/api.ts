import { OpenAIResponse } from '../services/openai'

export async function generateBlogPost(topic: string): Promise<OpenAIResponse> {
  try {
    const response = await fetch('/api/blog/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topic }),
    })

    if (!response.ok) {
      throw new Error('Failed to generate blog post')
    }

    return await response.json()
  } catch (error) {
    console.error('Blog generation error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate blog post'
    }
  }
}