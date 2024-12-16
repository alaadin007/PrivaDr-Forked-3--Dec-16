"use client";

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { SearchQuery, SearchResponse } from '@/lib/search/types';

interface SearchBarProps {
  onSearch: (results: SearchResponse) => void;
  category?: string;
}

export function SearchBar({ onSearch, category }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSearch = async () => {
    if (!query.trim()) {
      toast({
        title: "Search query required",
        description: "Please enter a search term",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const searchQuery: SearchQuery = {
        query,
        filters: category ? { category } : undefined
      };

      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(searchQuery)
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error);
      }

      onSearch(data);
    } catch (error) {
      toast({
        title: "Search failed",
        description: error instanceof Error ? error.message : 'Failed to perform search',
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search for medical information..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          className="pl-10"
          disabled={isLoading}
        />
      </div>
      <Button 
        onClick={handleSearch}
        disabled={isLoading || !query.trim()}
      >
        {isLoading ? "Searching..." : "Search"}
      </Button>
    </div>
  );
}