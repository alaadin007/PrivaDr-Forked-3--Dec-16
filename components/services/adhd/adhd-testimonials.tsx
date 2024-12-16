import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function ADHDTestimonials() {
  const testimonials = [
    {
      quote: "Dr. Haq's thoughtful approach changed our lives. His detailed assessment and personalized care plan gave us the tools we needed to help our son thrive. We are forever grateful!",
      author: "A Happy Parent"
    },
    {
      quote: "We felt truly heard and supported. Dr. Haq took the time to explain every step of the process, and his expertise is unmatched. Highly recommend!",
      author: "Satisfied Family"
    }
  ]

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col space-y-4">
                <Quote className="h-8 w-8 text-primary/60" />
                <p className="text-lg italic">{testimonial.quote}</p>
                <p className="text-sm text-muted-foreground">— {testimonial.author}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}