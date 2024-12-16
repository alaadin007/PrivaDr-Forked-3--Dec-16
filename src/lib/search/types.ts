export interface SearchQuery {
  query: string;
  filters?: {
    category?: string;
    specialty?: string;
    language?: string;
  };
  context?: string;
}

export interface SearchResult {
  content: string;
  relevance: number;
  category: string;
  metadata: {
    source: string;
    lastUpdated: string;
    reviewedBy?: string;
  };
}

export interface SearchResponse {
  results: SearchResult[];
  totalResults: number;
  searchTime: number;
  suggestions?: string[];
}

export interface SearchError {
  code: string;
  message: string;
  details?: unknown;
}