import { createQueryEmbedding } from "./embeddingService.js"
import itemModel from "../Models/itemModel.js";
import { index } from "../config/database.js";

export const semanticSearch = async (userid, query) => {
    const QueryEmbedding = await createQueryEmbedding(query);

    const result = await index.query({
        topK: 8,
        vector: QueryEmbedding,
        filter: { userid: { $eq: userid } },
        includeMetadata: true
    });

    const items = await itemModel.find({ _id: { $in: result.matches.map(match => { if (match.score > 0.71) { return match.id } }) } });

    return items;

}