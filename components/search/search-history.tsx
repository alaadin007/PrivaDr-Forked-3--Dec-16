"use client"

import { Button } from "@/components/ui/button"
import { Clock, X } from "lucide-react"

interface SearchHistoryProps {
  queries: string[]
  onSelect: (query: string) => void
  onClear: (query: string) => void
}

export function SearchHistory({ queries, onSelect, onClear }: SearchHistoryProps) {
  if (queries.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2">
      {queries.map((query, index) => (
        <div key={`${query}-${index}`} className="flex items-center">
          <Button
            variant="outline"
            size="sm"
            className="group flex items-center gap-2"
            onClick={() => onSelect(query)}
          >
            <Clock className="h-3 w-3 text-muted-foreground" />
            <span className="truncate max-w-[150px]">{query}</span>
            <X
              className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => {
                e.stopPropagation()
                onClear(query)
              }}
            />
          </Button>
        </div>
      ))}
    </div>
  )
}