import { useEmbeddingGeneration, useQueryEmbedding } from "./aiServices.js";

export const saveEmbedding = async (text) => {

    if (!text) {

        throw new Error("Text required");

    }

    const embeddings = await useEmbeddingGeneration([text]);

    return embeddings;

};

export const createQueryEmbedding = async (text) => {

    if (!text) {

        throw new Error("Text required");

    }
    return await useQueryEmbedding(text);
};
