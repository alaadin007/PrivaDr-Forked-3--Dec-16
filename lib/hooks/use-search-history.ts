"use client"

import { useState, useEffect } from "react"

const STORAGE_KEY = "search_history"
const MAX_HISTORY = 5

export function useSearchHistory() {
  const [history, setHistory] = useState<string[]>([])

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      setHistory(JSON.parse(stored))
    }
  }, [])

  const addToHistory = (query: string) => {
    setHistory(prev => {
      const newHistory = [query, ...prev.filter(q => q !== query)].slice(0, MAX_HISTORY)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory))
      return newHistory
    })
  }

  const removeFromHistory = (query: string) => {
    setHistory(prev => {
      const newHistory = prev.filter(q => q !== query)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory))
      return newHistory
    })
  }

  const clearHistory = () => {
    localStorage.removeItem(STORAGE_KEY)
    setHistory([])
  }

  return {
    history,
    addToHistory,
    removeFromHistory,
    clearHistory
  }
}