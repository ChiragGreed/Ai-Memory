import "../config/dotenvConfig.js";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash-lite",
  apiKey: process.env.GOOGLE_API_KEY
});

export const useAi = async (prompt) => {

  const res = await model.invoke(prompt);

  return res.content; 

};