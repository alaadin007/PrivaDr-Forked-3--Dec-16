"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ADHDFaq() {
  const faqs = [
    {
      question: "How do I know if my child has ADHD?",
      answer: "ADHD symptoms often include difficulty focusing, hyperactivity, and impulsivity. If you notice these behaviors affecting your child's daily life, an assessment can provide clarity."
    },
    {
      question: "What is the cost of an ADHD assessment?",
      answer: "Our comprehensive ADHD assessment, which includes consultations, diagnostic evaluations, and a detailed report, costs £550."
    },
    {
      question: "Will my child need medication?",
      answer: "Not all children with ADHD require medication. We explore a range of interventions, including behavioral strategies and educational support, and only recommend medication if it is deemed necessary and beneficial."
    },
    {
      question: "Can ADHD improve over time?",
      answer: "Yes, with the right support, many children develop strategies to manage their ADHD effectively. Early intervention can significantly improve outcomes."
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}