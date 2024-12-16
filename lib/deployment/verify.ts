import { initializeFirebase } from './firebase'
import { optimizeImage } from './image-optimization'
import { deploymentConfig } from '../config/deployment'
import { validateBlogContent } from '../blog/content-validator'

interface VerificationResult {
  success: boolean
  steps: {
    name: string
    status: 'success' | 'failed'
    error?: string
  }[]
}

export async function verifyDeployment(): Promise<VerificationResult> {
  const steps = []
  
  try {
    // Initialize Firebase
    const { app } = await initializeFirebase()
    steps.push({
      name: 'Firebase Initialization',
      status: 'success'
    })

    // Verify image optimization
    const testImageResult = await optimizeImage(
      'public/test-image.jpg',
      'public/optimized/test-image'
    )
    steps.push({
      name: 'Image Optimization',
      status: testImageResult.success ? 'success' : 'failed',
      error: testImageResult.error
    })

    // Verify blog content validation
    const testBlogResult = await validateBlogContent({
      title: 'Test Blog Post',
      content: 'Test content...',
      excerpt: 'Test excerpt',
      keywords: ['test', 'medical', 'health'],
      sections: [{ heading: 'Test Section', content: 'Test section content' }]
    })
    steps.push({
      name: 'Blog Content Validation',
      status: testBlogResult.success ? 'success' : 'failed',
      error: testBlogResult.error
    })

    return {
      success: steps.every(step => step.status === 'success'),
      steps
    }
  } catch (error) {
    return {
      success: false,
      steps: [
        ...steps,
        {
          name: 'Deployment Verification',
          status: 'failed',
          error: error instanceof Error ? error.message : 'Unknown error occurred'
        }
      ]
    }
  }
}