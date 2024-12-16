import { z } from 'zod'

export const searchConfigSchema = z.object({
  openai: z.object({
    model: z.string(),
    temperature: z.number(),
    maxTokens: z.number(),
    prompts: z.record(z.string())
  }),
  n8n: z.object({
    baseUrl: z.string().url(),
    workflowId: z.string(),
    timeout: z.number()
  })
})

export const searchConfig = {
  openai: {
    model: 'gpt-4',
    temperature: 0.7,
    maxTokens: 500,
    prompts: {
      general: `As a PRIVA Dr. medical assistant, provide accurate, helpful information about our services.
        Focus on ADHD Assessment, Weight Management, IV Therapy, Lifestyle Medicine, and Aesthetic Treatments.`,
      adhd: `Provide information about ADHD assessment and treatment at PRIVA Dr., focusing on our
        comprehensive evaluation process and support services for children and families.`,
      weightLoss: `Explain our medical weight loss programs, including Mounjaro, Wegovy, and Ozempic treatments,
        along with lifestyle support and monitoring.`,
      ivTherapy: `Detail our IV therapy options, benefits, and treatment process, emphasizing our
        medical-grade formulations and experienced healthcare team.`
    }
  },
  n8n: {
    baseUrl: process.env.N8N_BASE_URL || 'http://localhost:5678',
    workflowId: process.env.N8N_WORKFLOW_ID || '',
    timeout: 30000
  }
} as const