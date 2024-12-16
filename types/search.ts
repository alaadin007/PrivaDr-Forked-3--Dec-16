export interface SearchResponse {
  success: boolean
  response?: string
  error?: string
}

export interface SearchState {
  query: string
  response: string | null
  isLoading: boolean
  error: string | null
}

export type SearchAction = 
  | { type: 'SET_QUERY'; payload: string }
  | { type: 'SET_RESPONSE'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'RESET' }