import * as z from "zod"

export const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  requestCallback: z.boolean().default(false),
  preferredTime: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  service: z.enum(["ADHD Assessment", "General Practice", "IV Therapy", "Weight Loss", "MedSpa", "Other"]).default("Other")
})

export type ContactFormData = z.infer<typeof contactFormSchema>