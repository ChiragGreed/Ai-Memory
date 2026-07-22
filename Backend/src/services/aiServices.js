import "../config/dotenvConfig.js";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { MistralAIEmbeddings } from '@langchain/mistralai';


const GoogleGenAiModel = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash-lite"
});

const MistralAiModel = new MistralAIEmbeddings({
  model: "mistral-embed",
})

export const useGoogleGenAi = async (prompt) => {

  const res = await GoogleGenAiModel.invoke(prompt);

  return res.content;

};


export const useEmbeddingGeneration = async (chunks) => {
  const res = await MistralAiModel.embedDocuments(chunks);
  return res;
}

export const useMistralAi = async (prompt) => {

  const res = await MistralAiModel.embedQuery(prompt);
  return res.content;
};