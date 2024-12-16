"use client";

import { useState } from 'react';
import { SearchBar } from '@/components/search/search-bar';
import { SearchResults } from '@/components/search/search-results';
import { SearchResponse } from '@/lib/search/types';

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState<SearchResponse | null>(null);

  return (
    <main className="min-h-screen py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            Medical Information Search
          </h1>
          <p className="text-muted-foreground text-center mb-8">
            Search our knowledge base for medical information and services
          </p>
          
          <div className="space-y-8">
            <SearchBar onSearch={setSearchResults} />
            {searchResults && <SearchResults results={searchResults} />}
          </div>
        </div>
      </div>
    </main>
  );
}