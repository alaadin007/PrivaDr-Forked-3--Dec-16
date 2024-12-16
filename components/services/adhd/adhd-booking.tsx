"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  parentName: z.string().min(2, "Parent name is required"),
  childName: z.string().min(2, "Child name is required"),
  childAge: z.string().min(1, "Child age is required"),
  phone: z.string().min(6, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().optional()
})

export function ADHDBooking() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentName: "",
      childName: "",
      childAge: "",
      phone: "",
      email: "",
      message: ""
    }
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "Booking request sent",
        description: "We'll contact you shortly to confirm your appointment.",
      })

      form.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Book an ADHD Assessment
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Complete the form below to schedule an assessment. Our team will contact you
            to confirm your appointment.
          </p>
          
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="parentName" className="text-sm font-medium">
                Parent's Full Name
              </label>
              <Input
                id="parentName"
                {...form.register("parentName")}
                className="mt-1"
              />
            </div>
            
            <div>
              <label htmlFor="childName" className="text-sm font-medium">
                Child's Full Name
              </label>
              <Input
                id="childName"
                {...form.register("childName")}
                className="mt-1"
              />
            </div>
            
            <div>
              <label htmlFor="childAge" className="text-sm font-medium">
                Child's Age
              </label>
              <Input
                id="childAge"
                {...form.register("childAge")}
                className="mt-1"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="text-sm font-medium">
                Contact Number
              </label>
              <Input
                id="phone"
                {...form.register("phone")}
                className="mt-1"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
                className="mt-1"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Additional Information
              </label>
              <Textarea
                id="message"
                {...form.register("message")}
                className="mt-1"
                rows={4}
              />
            </div>
            
            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Book Assessment"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}