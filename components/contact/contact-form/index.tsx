"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { FormFields } from "./form-fields"
import { contactFormSchema, type ContactFormData } from "./form-schema"
import { Card } from "@/components/ui/card"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      requestCallback: false,
      message: "",
      service: "Other"
    }
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      // In a real application, you would send this data to your API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "Message sent successfully",
        description: data.requestCallback 
          ? "We'll call you back at your preferred time."
          : "We'll get back to you via email soon.",
      })

      form.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="p-6">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormFields form={form} />
        
        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Card>
  )
}