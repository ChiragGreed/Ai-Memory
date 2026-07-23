import { createQueryEmbedding } from "./embeddingService.js"
import { vectorSearch } from "../utils/vector.util.js"

export const semanticSearch = async (userid, query) => {

    const embedding = await createQueryEmbedding(query);
// Query se result bhi aayega kya
    return vectorSearch({ userid: userid, embedding })

}