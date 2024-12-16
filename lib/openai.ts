import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID,
})

interface OpenAIResponse {
  success: boolean
  content?: string
  error?: string
}

export async function generateResponse(query: string): Promise<OpenAIResponse> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a medical assistant for PRIVA Dr., a prestigious medical practice on Harley Street. 
            Guide patients to our services and treatments, including ADHD assessments, weight management, IV therapy, 
            lifestyle medicine, and aesthetic treatments. Provide helpful, accurate medical information while 
            encouraging consultation with our specialists for specific medical advice.
            
            Format your responses in Markdown for better readability. Use headings, bullet points, and emphasis 
            where appropriate. Always include relevant service links at the end of your response.`
        },
        {
          role: "user",
          content: query
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    })

    const content = completion.choices[0]?.message?.content

    if (!content) {
      throw new Error('No response received from AI')
    }

    return {
      success: true,
      content
    }
  } catch (error) {
    console.error('OpenAI API error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate response'
    }
  }
}