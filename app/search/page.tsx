"use client"

import { SearchContainer } from "@/components/search/search-container"

export default function SearchPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Medical Assistant
            </h1>
            <p className="text-xl text-muted-foreground">
              Get instant answers to your healthcare questions and discover our services
            </p>
          </div>
          <SearchContainer />
        </div>
      </section>
    </main>
  )
}