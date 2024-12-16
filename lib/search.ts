export interface SearchResponse {
  success: boolean
  response?: string
  error?: string
}

export async function performSearch(query: string): Promise<SearchResponse> {
  try {
    const response = await fetch('/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Failed to process query')
    }

    return data
  } catch (error) {
    console.error('Search error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to process your query'
    }
  }
}