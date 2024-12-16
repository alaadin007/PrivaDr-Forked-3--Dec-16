export const SITE_CONFIG = {
  name: 'Healthcare Platform',
  description: 'Modern healthcare solutions for patients and providers',
  url: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || '/api'
} as const;

export const API_CONFIG = {
  anthropic: {
    apiKey: process.env.ANTHROPIC_API_KEY,
    model: 'claude-3-opus-20240229',
    maxTokens: 1000
  },
  search: {
    maxResults: 10,
    minQueryLength: 3
  }
} as const;

export const PORTAL_CONFIG = {
  auth: {
    providers: ['email'],
    mfa: {
      enabled: true,
      methods: ['authenticator', 'sms']
    }
  },
  features: {
    appointments: true,
    messaging: true,
    payments: true,
    documents: true
  }
} as const;