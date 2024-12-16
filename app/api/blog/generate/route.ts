import { NextResponse } from 'next/server';
import { generateBlogPost } from '@/lib/services/openai/blog';
import { validateEnv } from '@/lib/config/env';

export async function POST(req: Request) {
  try {
    // Validate environment variables
    validateEnv();

    const { topic } = await req.json();
    
    if (!topic?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Topic is required' },
        { status: 400 }
      );
    }

    const result = await generateBlogPost(topic);
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to generate blog post');
    }

    return NextResponse.json({ 
      success: true, 
      content: result.content 
    });
  } catch (error) {
    console.error('Error generating blog post:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to generate blog post' 
      },
      { status: 500 }
    );
  }
}