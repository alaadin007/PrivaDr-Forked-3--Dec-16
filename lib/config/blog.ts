import { z } from 'zod'

export const blogConfigSchema = z.object({
  automation: z.object({
    schedule: z.string(),
    topics: z.array(z.string()),
    contentGuidelines: z.object({
      minWords: z.number(),
      maxWords: z.number(),
      tone: z.string(),
      style: z.string()
    }),
    seoRequirements: z.object({
      titleLength: z.number(),
      descriptionLength: z.number(),
      keywordsCount: z.number()
    })
  }),
  quality: z.object({
    reviewProcess: z.array(z.string()),
    contentChecks: z.array(z.string()),
    publishingRules: z.array(z.string())
  })
})

export const blogConfig = {
  automation: {
    schedule: '0 */8 * * *', // Every 8 hours
    topics: [
      'ADHD Assessment and Management',
      'Weight Loss Treatments',
      'IV Therapy Benefits',
      'Lifestyle Medicine',
      'Aesthetic Treatments'
    ],
    contentGuidelines: {
      minWords: 800,
      maxWords: 1200,
      tone: 'professional yet approachable',
      style: 'informative and evidence-based'
    },
    seoRequirements: {
      titleLength: 60,
      descriptionLength: 160,
      keywordsCount: 5
    }
  },
  quality: {
    reviewProcess: [
      'medical-accuracy-check',
      'plagiarism-detection',
      'seo-optimization',
      'readability-analysis'
    ],
    contentChecks: [
      'factual-accuracy',
      'grammar-spelling',
      'formatting-structure',
      'link-validation'
    ],
    publishingRules: [
      'scheduled-distribution',
      'social-media-sharing',
      'newsletter-inclusion',
      'analytics-tracking'
    ]
  }
} as const