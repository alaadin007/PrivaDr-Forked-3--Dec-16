import { Card } from "@/components/ui/card"

const treatments = [
  ["Female Hormone Issues", "PCOS", "Menopause", "Fertility"],
  ["Children's Health", "Autoimmune", "Multiple Sclerosis", "Rheumatoid Arthritis"],
  ["SIBO", "IBS", "GERD", "Food Intolerances & Allergies"],
  ["Anxiety & Depression", "Chronic Fatigue", "Skin Conditions", "Eczema"],
  ["Male Fertility", "Coeliac Disease", "Diabetes", "Psoriasis"],
  ["Men's Health", "IBD", "Migraines", "More..."],
  ["Hypothyroid", "Ulcerative Colitis", "Low Immunity"]
]

export function LifestyleTreatments() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Treatments We Can Help With
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {treatments.flat().map((treatment, index) => (
            <Card 
              key={index}
              className="p-4 bg-[#0A0A0A] hover:bg-[#111111] transition-colors cursor-pointer"
            >
              <span className="text-gray-200">{treatment}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}