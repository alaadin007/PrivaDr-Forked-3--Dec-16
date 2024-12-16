import { NextResponse } from 'next/server';
import { generateAIResponse } from '@/lib/services/anthropic';
import { SearchQuery } from '@/lib/search/types';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { query, filters } = body as SearchQuery;

    if (!query?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Query is required' },
        { status: 400 }
      );
    }

    const result = await generateAIResponse(query);

    if (!result.success || !result.content) {
      throw new Error(result.error || 'Failed to generate response');
    }

    return NextResponse.json({
      success: true,
      results: [{
        content: result.content,
        relevance: 1,
        category: filters?.category || 'general',
        metadata: {
          source: 'ai-generated',
          lastUpdated: new Date().toISOString()
        }
      }],
      totalResults: 1,
      searchTime: 0
    });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to process search'
      },
      { status: 500 }
    );
  }
}