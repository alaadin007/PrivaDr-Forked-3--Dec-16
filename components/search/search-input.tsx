"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface SearchInputProps {
  query: string
  onChange: (value: string) => void
  onKeyPress: (e: React.KeyboardEvent) => void
  disabled?: boolean
}

export function SearchInput({ query, onChange, onKeyPress, disabled }: SearchInputProps) {
  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={onKeyPress}
        placeholder="Ask about our medical services, treatments, or health advice..."
        className="pl-10"
        disabled={disabled}
      />
    </div>
  )
}