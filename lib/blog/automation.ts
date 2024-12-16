import { OpenAIApi } from 'openai'
import { PROJECT_CONFIG } from '../config/project'

interface BlogPost {
  title: string
  content: string
  excerpt: string
  tags: string[]
  publishDate: Date
}

export async function generateBlogPost(topic: string): Promise<BlogPost> {
  const openai = new OpenAIApi({
    apiKey: process.env.OPENAI_API_KEY
  })

  const prompt = `Write a medical blog post about ${topic}. 
    Include a clear title, engaging introduction, main content with subheadings, 
    and a conclusion. Focus on providing valuable information while maintaining 
    medical accuracy. Word count: ${PROJECT_CONFIG.blog.automation.minWordCount}-${PROJECT_CONFIG.blog.automation.maxWordCount}.`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a medical content writer for PRIVA Dr.' },
      { role: 'user', content: prompt }
    ],
    temperature: 0.7
  })

  const content = completion.choices[0]?.message?.content || ''
  
  // Extract title from the generated content
  const titleMatch = content.match(/^#\s(.+)/)
  const title = titleMatch ? titleMatch[1] : topic

  return {
    title,
    content,
    excerpt: content.substring(0, 160),
    tags: [topic.toLowerCase(), 'medical', 'health', 'privadr'],
    publishDate: new Date()
  }
}

export async function scheduleBlogGeneration() {
  const cron = require('node-cron')
  
  cron.schedule(PROJECT_CONFIG.blog.automation.schedule, async () => {
    const randomTopic = PROJECT_CONFIG.blog.automation.topics[
      Math.floor(Math.random() * PROJECT_CONFIG.blog.automation.topics.length)
    ]
    
    try {
      const post = await generateBlogPost(randomTopic)
      await saveBlogPost(post)
    } catch (error) {
      console.error('Blog generation failed:', error)
    }
  })
}

async function saveBlogPost(post: BlogPost) {
  // Implementation for saving to your CMS/database
}