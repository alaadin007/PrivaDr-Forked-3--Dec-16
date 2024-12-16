export const PROJECT_CONFIG = {
  deployment: {
    provider: 'firebase',
    region: 'us-central1',
    hosting: {
      site: 'healthcare-platform',
      public: 'out',
      rewrites: [{ source: '**', destination: '/index.html' }]
    }
  },
  search: {
    openai: {
      model: 'gpt-4',
      temperature: 0.7,
      maxTokens: 500,
      systemPrompt: `You are a medical assistant for a healthcare platform. 
        Provide accurate, helpful information while encouraging consultation 
        with medical professionals for specific advice.`
    },
    n8n: {
      baseUrl: process.env.N8N_BASE_URL,
      workflowId: process.env.N8N_WORKFLOW_ID
    }
  },
  blog: {
    automation: {
      schedule: '0 9 * * *', // Daily at 9 AM
      topics: [
        'Preventive Healthcare',
        'Mental Wellness',
        'Chronic Disease Management',
        'Healthy Lifestyle',
        'Medical Technology'
      ],
      minWordCount: 800,
      maxWordCount: 1200,
      reviewProcess: ['medical-review', 'seo-optimization', 'compliance-check']
    }
  },
  portal: {
    patient: {
      features: [
        'appointment-booking',
        'medical-records',
        'payment-processing',
        'secure-messaging'
      ],
      auth: {
        providers: ['email', 'google'],
        mfa: true
      }
    },
    provider: {
      features: [
        'patient-management',
        'scheduling',
        'documentation',
        'billing'
      ],
      auth: {
        providers: ['email'],
        mfa: true,
        roleBasedAccess: true
      }
    }
  }
} as const;