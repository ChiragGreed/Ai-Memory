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
                { itemId: { $ne: item._id } }
            ]
        },
        includeMetadata: true
    });

    // console.log(result);

    const items = await itemModel.find({ _id: { $in: result.matches.map((match) => { if (match.score > 0.75) { return match.metadata.itemId } }) } });

    return items;

}