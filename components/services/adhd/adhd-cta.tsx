"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function AssessmentCTA() {
  const router = useRouter()

  return (
    <div className="mt-12 text-center">
      <div className="inline-flex flex-col items-center bg-primary/10 rounded-xl p-8">
        <p className="text-2xl font-bold mb-2">£550</p>
        <p className="text-muted-foreground mb-6">Comprehensive ADHD Assessment</p>
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white px-8"
          onClick={() => router.push('/contact')}
        >
          Start Your Child's Assessment Now
        </Button>
      </div>
    </div>
  )
}