import { Configuration, OpenAIApi } from 'openai'
import { searchConfig } from '../config/search'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export async function generateSearchResponse(query: string, context?: string) {
  try {
    const prompt = context 
      ? `${searchConfig.openai.prompts.general}\n\nContext: ${context}\n\nQuery: ${query}`
      : `${searchConfig.openai.prompts.general}\n\nQuery: ${query}`

    const completion = await openai.chat.completions.create({
      model: searchConfig.openai.model,
      messages: [
        { role: 'system', content: searchConfig.openai.prompts.general },
        { role: 'user', content: prompt }
      ],
      temperature: searchConfig.openai.temperature,
      max_tokens: searchConfig.openai.maxTokens
    })

    return {
      success: true,
      content: completion.choices[0]?.message?.content || ''
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate response'
    }
  }
}