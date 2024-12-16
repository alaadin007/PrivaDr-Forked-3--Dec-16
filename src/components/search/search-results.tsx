"use client";

import { Card } from '@/components/ui/card';
import { SearchResponse } from '@/lib/search/types';

interface SearchResultsProps {
  results: SearchResponse;
}

export function SearchResults({ results }: SearchResultsProps) {
  if (!results.results.length) {
    return (
      <Card className="p-6 text-center text-muted-foreground">
        No results found. Try adjusting your search terms.
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {results.results.map((result, index) => (
        <Card key={index} className="p-6">
          <div className="prose dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: result.content }} />
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Category: {result.category}</p>
            <p>Last updated: {new Date(result.metadata.lastUpdated).toLocaleDateString()}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}