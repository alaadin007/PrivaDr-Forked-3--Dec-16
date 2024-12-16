import { cn } from "@/lib/utils"

interface BMIResultProps {
  bmi: number
}

interface BMICategory {
  range: string
  description: string
  color: string
}

const bmiCategories: Record<string, BMICategory> = {
  underweight: {
    range: "< 18.5",
    description: "Underweight",
    color: "text-blue-500"
  },
  normal: {
    range: "18.5 - 24.9",
    description: "Normal Weight",
    color: "text-green-500"
  },
  overweight: {
    range: "25 - 29.9",
    description: "Overweight",
    color: "text-yellow-500"
  },
  obese: {
    range: "≥ 30",
    description: "Obese",
    color: "text-red-500"
  }
}

function getBMICategory(bmi: number): BMICategory {
  if (bmi < 18.5) return bmiCategories.underweight
  if (bmi < 25) return bmiCategories.normal
  if (bmi < 30) return bmiCategories.overweight
  return bmiCategories.obese
}

export function BMIResult({ bmi }: BMIResultProps) {
  const category = getBMICategory(bmi)

  return (
    <div className="mt-6 space-y-4">
      <div className="text-center">
        <p className="text-lg font-medium mb-2">Your BMI is:</p>
        <p className={cn("text-4xl font-bold", category.color)}>{bmi}</p>
        <p className={cn("text-lg font-medium mt-2", category.color)}>
          {category.description}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {Object.values(bmiCategories).map((cat) => (
          <div 
            key={cat.description} 
            className={cn(
              "p-3 rounded-lg text-center",
              "border-2",
              category.description === cat.description 
                ? `border-${cat.color.split('-')[1]}-500 bg-${cat.color.split('-')[1]}-500/10` 
                : "border-transparent"
            )}
          >
            <p className="text-sm font-medium text-muted-foreground">{cat.range}</p>
            <p className={cn("text-sm font-semibold", cat.color)}>
              {cat.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-primary/10 rounded-lg">
        <p className="text-sm text-muted-foreground">
          BMI is a general guide. Other factors like muscle mass, age, and ethnicity 
          also matter. For personalized advice, consult our weight management specialists.
        </p>
      </div>
    </div>
  )
}