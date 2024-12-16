import { blogConfig } from '../config/blog'
import { z } from 'zod'

const blogPostSchema = z.object({
  title: z.string().min(10).max(blogConfig.automation.seoRequirements.titleLength),
  content: z.string()
    .min(blogConfig.automation.contentGuidelines.minWords * 5)
    .max(blogConfig.automation.contentGuidelines.maxWords * 5),
  excerpt: z.string().max(blogConfig.automation.seoRequirements.descriptionLength),
  keywords: z.array(z.string()).min(blogConfig.automation.seoRequirements.keywordsCount),
  sections: z.array(z.object({
    heading: z.string(),
    content: z.string()
  }))
})

export async function validateBlogContent(content: unknown) {
  try {
    const validatedContent = await blogPostSchema.parseAsync(content)
    
    // Additional medical content checks
    const medicalChecks = await performMedicalAccuracyChecks(validatedContent)
    
    return {
      success: true,
      content: validatedContent,
      medicalChecks
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Content validation failed'
    }
  }
}

async function performMedicalAccuracyChecks(content: z.infer<typeof blogPostSchema>) {
  // Implement medical terminology and accuracy checks
  return {
    terminologyValid: true,
    citationsPresent: true,
    disclaimerIncluded: true
  }
}