import { z } from 'zod'

export const portalConfigSchema = z.object({
  patient: z.object({
    features: z.array(z.string()),
    forms: z.array(z.object({
      id: z.string(),
      name: z.string(),
      fields: z.array(z.object({
        name: z.string(),
        type: z.string(),
        required: z.boolean()
      }))
    })),
    services: z.array(z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
      price: z.number()
    }))
  }),
  doctor: z.object({
    features: z.array(z.string()),
    permissions: z.array(z.string()),
    integrations: z.array(z.string())
  })
})

export const portalConfig = {
  patient: {
    features: [
      'appointment-booking',
      'medical-forms',
      'payment-processing',
      'secure-messaging',
      'document-upload'
    ],
    forms: [
      {
        id: 'medical-history',
        name: 'Medical History Form',
        fields: [
          { name: 'conditions', type: 'checkbox-group', required: true },
          { name: 'medications', type: 'text-array', required: true },
          { name: 'allergies', type: 'text-array', required: true }
        ]
      },
      {
        id: 'consent',
        name: 'Treatment Consent Form',
        fields: [
          { name: 'agreement', type: 'checkbox', required: true },
          { name: 'signature', type: 'signature', required: true },
          { name: 'date', type: 'date', required: true }
        ]
      }
    ],
    services: [
      {
        id: 'adhd-assessment',
        name: 'ADHD Assessment',
        description: 'Comprehensive ADHD evaluation and treatment planning',
        price: 550
      },
      {
        id: 'weight-loss',
        name: 'Weight Loss Program',
        description: 'Medically supervised weight management program',
        price: 299
      }
    ]
  },
  doctor: {
    features: [
      'patient-management',
      'appointment-scheduling',
      'medical-records',
      'prescription-management',
      'secure-communication'
    ],
    permissions: [
      'view-patient-records',
      'edit-patient-records',
      'prescribe-medications',
      'schedule-appointments',
      'send-messages'
    ],
    integrations: [
      'electronic-health-records',
      'prescription-system',
      'laboratory-results',
      'imaging-systems'
    ]
  }
} as const