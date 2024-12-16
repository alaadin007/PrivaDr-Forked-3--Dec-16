export interface N8NWorkflow {
  id: string
  name: string
  active: boolean
  nodes: any[]
}

export async function createSearchWorkflow() {
  const workflow: N8NWorkflow = {
    id: 'medical-search',
    name: 'Medical Search Workflow',
    active: true,
    nodes: [
      {
        type: 'n8n-nodes-base.httpTrigger',
        parameters: {
          path: '/search',
          responseMode: 'lastNode',
          options: {}
        }
      },
      {
        type: 'n8n-nodes-base.openAi',
        parameters: {
          authentication: 'apiKey',
          operation: 'completion',
          model: 'gpt-4',
          prompt: '={{$json.query}}',
          maxTokens: 500,
          temperature: 0.7
        }
      },
      {
        type: 'n8n-nodes-base.respond',
        parameters: {
          options: {}
        }
      }
    ]
  }

  return workflow
}