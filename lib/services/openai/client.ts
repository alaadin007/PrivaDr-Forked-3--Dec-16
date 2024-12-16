import OpenAI from 'openai';
import { ENV } from '@/lib/config/env';

if (!ENV.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY is not set');
}

export const openai = new OpenAI({
  apiKey: ENV.OPENAI_API_KEY
});