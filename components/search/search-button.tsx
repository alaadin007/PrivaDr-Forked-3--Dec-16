import { Loader2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SearchButtonProps {
  isLoading: boolean
  onClick: () => void
  disabled?: boolean
}

export function SearchButton({ isLoading, onClick, disabled }: SearchButtonProps) {
  return (
    <Button 
      onClick={onClick}
      disabled={disabled || isLoading}
      className="w-24"
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Search className="h-4 w-4" />
      )}
      <span className="ml-2">Search</span>
    </Button>
  )
}