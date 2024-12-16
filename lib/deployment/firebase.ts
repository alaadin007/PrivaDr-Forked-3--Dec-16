import { initializeApp } from 'firebase/app'
import { getHosting } from 'firebase/hosting'
import { PROJECT_CONFIG } from '../config/project'

export async function initializeFirebase() {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  }

  const app = initializeApp(firebaseConfig)
  const hosting = getHosting(app)

  return {
    app,
    hosting
  }
}

export async function deployToFirebase() {
  const { hosting } = await initializeFirebase()
  
  try {
    await hosting.deploy({
      ...PROJECT_CONFIG.deployment.hosting,
      message: `Deployment at ${new Date().toISOString()}`
    })
    
    return {
      success: true,
      url: `https://${process.env.FIREBASE_PROJECT_ID}.web.app`
    }
  } catch (error) {
    console.error('Firebase deployment failed:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }
  }
}