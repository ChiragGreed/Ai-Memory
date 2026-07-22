import { pipeline } from "@xenova/transformers";
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import { useEmbeddingGeneration } from "./aiServices.js";

// let extractor;

// async function loadModel() {

//  if (!extractor) {

//   extractor = await pipeline(

//    "feature-extraction",

//    "Xenova/all-MiniLM-L6-v2"

//   );

//  }

//  return extractor;

// }

export const createEmbedding = async (text) => {

    if (!text) {

        throw new Error("Text required");

    }

    const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 300, chunkOverlap: 0 });
    
    const chunks = await splitter.splitText(text);

    const embeddings = await useEmbeddingGeneration(chunks);

    return embeddings;

};