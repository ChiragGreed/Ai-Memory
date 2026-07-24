import Item from "../Models/itemModel.js"
import { cosineSimilarity } from "./similarityService.js"
import { index } from "../config/database.js"

const SIMILARITY_THRESHOLD = 0.76;


export const buildKnowledgeGraph =
    async (userid) => {

        const items = await Item.find({ userId: userid })
            .select("_id title tags collectionId");

        if (!items || items.length === 0) {
            return { nodes: [], edges: [] };
        }

        const itemIds = items.map(item => String(item._id)).filter(id => id && id !== "undefined");

        if (itemIds.length === 0) {
            return { nodes: [], edges: [] };
        }

        const pineconeFetchRes = await index.fetch({ ids: itemIds });
        const vectorsRecords = pineconeFetchRes.records || {};

        const nodes = items.map(item => ({

            id: item._id,

            label: item.title,

            tags: item.tags,

            collectionId:
                item.collectionId

        }));

        const edges = [];

        for (let i = 0; i < items.length; i++) {
            const vecA = vectorsRecords[String(items[i]._id)]?.values;
            if (!vecA) continue;

            for (let j = i + 1; j < items.length; j++) {
                const vecB = vectorsRecords[String(items[j]._id)]?.values;
                if (!vecB) continue;

                const similarity =
                    cosineSimilarity(vecA, vecB);

                if (similarity > SIMILARITY_THRESHOLD) {

                    edges.push({

                        source: items[i]._id,

                        target: items[j]._id,

                        weight: similarity

                    });
                }
            }
        }

        return {
            nodes,
            edges
        }

    }
