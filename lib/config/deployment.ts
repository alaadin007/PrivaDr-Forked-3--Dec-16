import { z } from 'zod'

export const deploymentConfigSchema = z.object({
  firebase: z.object({
    projectId: z.string(),
    region: z.string(),
    hosting: z.object({
      site: z.string().optional(),
      public: z.string(),
      rewrites: z.array(z.object({
        source: z.string(),
        destination: z.string()
      }))
    })
  }),
  contentRefresh: z.object({
    imageOptimization: z.object({
      quality: z.number().min(1).max(100),
      formats: z.array(z.enum(['webp', 'avif'])),
      sizes: z.array(z.number())
    }),
    blogAudit: z.object({
      minWordCount: z.number(),
      requiredSections: z.array(z.string()),
      seoChecks: z.array(z.string())
    })
  })
})

export const deploymentConfig = {
  firebase: {
    projectId: process.env.FIREBASE_PROJECT_ID || 'privadr-web',
    region: 'us-central1',
    hosting: {
      public: 'out',
      rewrites: [
        {
          source: '**',
          destination: '/index.html'
        }
      ]
    }
  },
  contentRefresh: {
    imageOptimization: {
      quality: 85,
      formats: ['webp', 'avif'],
      sizes: [640, 750, 828, 1080, 1200]
    },
    blogAudit: {
      minWordCount: 800,
      requiredSections: [
        'introduction',
        'main-content',
        'expert-insights',
        'conclusion',
        'call-to-action'
      ],
      seoChecks: [
        'meta-title',
        'meta-description',
        'keywords',
        'headings-hierarchy',
        'image-alt-texts'
      ]
    }
  }
} as const