"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BMIResult } from "./bmi-result"

export function BMIForm() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBMI] = useState<number | null>(null)

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault()
    
    const heightInMeters = parseFloat(height) / 100
    const weightInKg = parseFloat(weight)
    
    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters)
      setBMI(parseFloat(bmiValue.toFixed(1)))
    }
  }

  return (
    <Card className="p-6">
      <form onSubmit={calculateBMI} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="height">Height (cm)</Label>
            <Input
              id="height"
              type="number"
              placeholder="e.g. 170"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              min="100"
              max="250"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              placeholder="e.g. 70"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              min="30"
              max="300"
              required
            />
          </div>
        </div>

        <Button type="submit" className="w-full">Calculate BMI</Button>

        {bmi !== null && <BMIResult bmi={bmi} />}
      </form>
    </Card>
  )
}