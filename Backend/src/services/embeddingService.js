import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import { useEmbeddingGeneration, useQueryEmbedding } from "./aiServices.js";

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
    return await useQueryEmbedding(text);
};
