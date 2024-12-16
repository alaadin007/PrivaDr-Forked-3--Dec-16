"use client"

import { useReducer, useCallback } from 'react';
import { useToast } from '@/components/ui/use-toast';

interface SearchState {
  query: string;
  response: string | null;
  isLoading: boolean;
  error: string | null;
}

type SearchAction = 
  | { type: 'SET_QUERY'; payload: string }
  | { type: 'SET_RESPONSE'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'RESET' };

const initialState: SearchState = {
  query: '',
  response: null,
  isLoading: false,
  error: null
};

function searchReducer(state: SearchState, action: SearchAction): SearchState {
  switch (action.type) {
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    case 'SET_RESPONSE':
      return { ...state, response: action.payload, error: null };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, response: null };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export function useSearch() {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  const { toast } = useToast();

  const handleSearch = useCallback(async () => {
    if (!state.query.trim()) {
      toast({
        title: "Please enter a search query",
        description: "Type your medical question or concern to get started",
        variant: "destructive"
      });
      return;
    }

    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: state.query }),
      });

      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to process query');
      }

      dispatch({ type: 'SET_RESPONSE', payload: data.response });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, [state.query, toast]);

  return {
    state,
    dispatch,
    handleSearch
  };
}