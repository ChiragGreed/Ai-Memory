import { index } from "../config/database.js";
import itemModel from "../Models/itemModel.js";
import { useQueryEmbedding } from "./aiServices.js";

export const RelatedItemService = async (userid, item) => {

    const QueryEmbedding = await useQueryEmbedding(item.content);

    const result = await index.query({
        topK: 5,
        vector: QueryEmbedding,
        filter: {
            $and: [
                { userid: { $eq: userid } },
                { id: { $ne: item._id } }
            ]
        },
        includeMetadata: true
    });


    const targetIds = result.matches
        .filter(match => match.score > 0.75 && match.id !== item._id.toString())
        .map(match => match.id);


    if (targetIds.length === 0) {
        return [];
    }

    const items = await itemModel.find({ _id: { $in: targetIds.slice(0, 5) } });
    console.log(items);
    return items;

}