import { BMIForm } from "./bmi-form"

export function BMICalculator() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">BMI Calculator</h2>
            <p className="text-lg text-muted-foreground">
              Calculate your Body Mass Index (BMI) to get a general indication of whether 
              you're at a healthy weight for your height.
            </p>
          </div>
          
          <BMIForm />
        </div>
      </div>
    </section>
  )
}