"use client"

import { useSearch } from "@/lib/hooks/use-search"
import { SearchInput } from "./search-input"
import { SearchButton } from "./search-button"
import { SearchResults } from "./search-results"
import { SearchHistory } from "./search-history"
import { SearchError } from "./search-error"
import { useSearchHistory } from "@/lib/hooks/use-search-history"
import { Card } from "@/components/ui/card"

export function SearchContainer() {
  const { state, dispatch, handleSearch } = useSearch()
  const { history, addToHistory, removeFromHistory } = useSearchHistory()

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !state.isLoading) {
      handleSearch().then(() => {
        if (state.query.trim()) {
          addToHistory(state.query)
        }
      })
    }
  }

  const handleHistorySelect = (selectedQuery: string) => {
    dispatch({ type: 'SET_QUERY', payload: selectedQuery })
  }

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <Card className="p-6">
        <div className="flex gap-2">
          <SearchInput
            query={state.query}
            onChange={(value) => dispatch({ type: 'SET_QUERY', payload: value })}
            onKeyPress={handleKeyPress}
            disabled={state.isLoading}
          />
          <SearchButton
            isLoading={state.isLoading}
            onClick={() => {
              handleSearch().then(() => {
                if (state.query.trim()) {
                  addToHistory(state.query)
                }
              })
            }}
            disabled={!state.query.trim()}
          />
        </div>

        <SearchHistory
          queries={history}
          onSelect={handleHistorySelect}
          onClear={removeFromHistory}
        />
      </Card>

      {state.error && (
        <SearchError 
          title="Search Error" 
          description={state.error} 
        />
      )}

      {state.response && <SearchResults response={state.response} />}
    </div>
  )
}