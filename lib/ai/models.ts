import { groq } from '@ai-sdk/groq';
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';

export const DEFAULT_CHAT_MODEL: string = 'chat-model-tutor';

export const myProvider = customProvider({
  languageModels: {
    'chat-model-tutor': groq('deepseek-r1-distill-llama-70b'),
  },
});

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model-tutor',
    name: 'Tutor model',
    description: 'DeepSeek model optimized for interactive tutoring',
  },
];
