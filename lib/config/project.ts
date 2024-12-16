export const PROJECT_CONFIG = {
  deployment: {
    provider: 'firebase',
    region: 'us-central1',
    hosting: {
      public: 'out',
      ignore: ['firebase.json', '**/.*', '**/node_modules/**'],
      rewrites: [
        {
          source: '**',
          destination: '/index.html'
        }
      ]
    }
  },
  search: {
    openai: {
      model: 'gpt-4',
      temperature: 0.7,
      maxTokens: 500,
      systemPrompt: `You are a medical assistant for PRIVA Dr. Help patients understand our services
        and medical information. Be professional yet approachable. Focus responses on our specialties:
        ADHD Assessment, Weight Management, IV Therapy, Lifestyle Medicine, and Aesthetic Treatments.`
    },
    n8n: {
      baseUrl: process.env.N8N_BASE_URL,
      apiKey: process.env.N8N_API_KEY,
      workflowId: process.env.N8N_WORKFLOW_ID
    }
  },
  blog: {
    automation: {
      schedule: '0 */8 * * *', // Every 8 hours
      topics: [
        'ADHD Assessment and Management',
        'Weight Loss Treatments',
        'IV Therapy Benefits',
        'Lifestyle Medicine Approaches',
        'Aesthetic Medicine Updates'
      ],
      minWordCount: 800,
      maxWordCount: 1200
    }
  },
  portal: {
    patient: {
      features: [
        'appointment-booking',
        'medical-forms',
        'payment-processing',
        'communication'
      ]
    },
    doctor: {
      features: [
        'patient-management',
        'appointment-calendar',
        'medical-records',
        'communication'
      ]
    }
  }
}