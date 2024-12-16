import { NextResponse } from 'next/server'
import { generateAIResponse } from '@/lib/services/anthropic'
import { marked } from 'marked'

export async function POST(req: Request) {
  try {
    const { query } = await req.json()
    
    if (!query?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Query is required' },
        { status: 400 }
      )
    }

    const result = await generateAIResponse(query)

    if (!result.success || !result.content) {
      throw new Error(result.error || 'Failed to generate response')
    }

    // Convert markdown to HTML for proper rendering
    const formattedResponse = marked.parse(result.content, {
      breaks: true,
      gfm: true,
      headerIds: true,
      mangle: false
    })

    return NextResponse.json({ 
      success: true, 
      response: formattedResponse 
    })
  } catch (error) {
    console.error('Error processing search query:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to process your query'
      },
      { status: 500 }
    )
  }
}