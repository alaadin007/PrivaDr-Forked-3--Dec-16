import { SearchResponse } from '@/types/search'

export async function searchAPI(query: string): Promise<SearchResponse> {
  try {
    const response = await fetch('/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || 'Failed to process query')
    }

    return await response.json()
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}