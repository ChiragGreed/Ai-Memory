import { pipeline } from "@xenova/transformers";
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import { useEmbeddingGeneration, useQueryEmbedding } from "./aiServices.js";

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

export const saveEmbedding = async (text) => {

    if (!text) {

        throw new Error("Text required");

    }

    const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 100, chunkOverlap: 0 });

    const chunks = await splitter.splitText(text);

    let records = [];

    chunks.forEach(async (chunk) => {
        records.push({ text: chunk, embeddings: await useEmbeddingGeneration([chunk]) });
    });

    return records;

};

export const createQueryEmbedding = async (text) => {

    if (!text) {

        throw new Error("Text required");

    }

    const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 100, chunkOverlap: 0 });

    const chunks = await splitter.splitText(text);

    let records = [];

    chunks.forEach(async (chunk) => {
        records.push({ text: chunk, embeddings: await useQueryEmbedding(chunk) });
    });

    return records;

};