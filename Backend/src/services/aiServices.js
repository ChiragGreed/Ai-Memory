import "../config/dotenvConfig.js";
import { ChatGroq } from "@langchain/groq";
import { MistralAIEmbeddings } from '@langchain/mistralai';


const GroqModel = new ChatGroq({
  model: "llama-3.1-8b-instant"
});

const MistralAiModel = new MistralAIEmbeddings({
  model: "mistral-embed",
})

export const useGroqModel = async (prompt) => {
  const res = await GroqModel.invoke(prompt);
  return res.content;
};


export const useEmbeddingGeneration = async (chunks) => {
  const res = await MistralAiModel.embedDocuments(chunks);
  return res;
}

export const useQueryEmbedding = async (prompt) => {

  const res = await MistralAiModel.embedQuery(prompt);
  console.log(res);
  return res;
};