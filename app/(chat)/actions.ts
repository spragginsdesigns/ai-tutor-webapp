'use server';

import { generateText, Message } from 'ai';
import { cookies } from 'next/headers';

import {
  deleteMessagesByChatIdAfterTimestamp,
  getMessageById,
  updateChatVisiblityById,
} from '@/lib/db/queries';
import { VisibilityType } from '@/components/visibility-selector';
import { myProvider } from '@/lib/ai/models';

export async function saveChatModelAsCookie(model: string) {
  const cookieStore = await cookies();
  cookieStore.set('chat-model', model);
}

export async function generateTitleFromUserMessage({
  message,
}: {
  message: Message;
}) {
  const { text: title } = await generateText({
    model: myProvider.languageModel('chat-model-tutor'),
    system: `You are creating fun, engaging titles for a children's learning chat. Follow these rules:
    - Create a short, exciting title based on the user's message
    - Use child-friendly language and occasional emojis
    - Keep it under 40 characters
    - Make it descriptive but fun
    - Add a relevant emoji at the start
    - Focus on the learning topic or question
    - Don't use quotes or colons

    Examples:
    - 🧮 Fun with Multiplication!
    - 🌙 Exploring Moon Phases
    - 🍪 Cookie Sharing Adventure
    - 🔢 Number Pattern Detective
    - 🌟 Space Facts Explorer
    - 💰 Money Math Challenge`,
    prompt: JSON.stringify(message),
  });

  return title;
}

export async function deleteTrailingMessages({ id }: { id: string }) {
  const [message] = await getMessageById({ id });

  await deleteMessagesByChatIdAfterTimestamp({
    chatId: message.chatId,
    timestamp: message.createdAt,
  });
}

export async function updateChatVisibility({
  chatId,
  visibility,
}: {
  chatId: string;
  visibility: VisibilityType;
}) {
  await updateChatVisiblityById({ chatId, visibility });
}
