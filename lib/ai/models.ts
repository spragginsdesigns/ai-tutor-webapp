import { createOpenAI } from "@ai-sdk/openai";
import {
	customProvider,
	extractReasoningMiddleware,
	wrapLanguageModel
} from "ai";

if (typeof window === "undefined" && !process.env.OPENAI_API_KEY) {
	throw new Error("OPENAI_API_KEY environment variable is not set");
}

// Create custom OpenAI provider with configuration
const openai = createOpenAI({
	apiKey: process.env.OPENAI_API_KEY,
	compatibility: "strict" // strict mode for OpenAI API
});

export const DEFAULT_CHAT_MODEL: string = "chat-model-tutor";

// This is the fine tuned model DO NOT CHANGE
export const myProvider = customProvider({
	languageModels: {
		"chat-model-tutor": openai(
			"ft:gpt-4o-2024-08-06:spraggins-designs:ai-tutor-studybuddy-finetunemodel:AzoFqhh5"
		)
	}
});

interface ChatModel {
	id: string;
	name: string;
	description: string;
}

export const chatModels: Array<ChatModel> = [
	{
		id: "chat-model-tutor",
		name: "Tutor model",
		description: "Fine-tuned GPT-4 model optimized for interactive tutoring"
	}
];
