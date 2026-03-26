import itemModel from "../models/itemModel.js";
import { createEmbedding } from "../services/embeddingService.js"
import { generateTags } from "../services/tagsService.js";
import { RelatedItemService } from "../services/relatedItemsService.js"
import { semanticSearch } from "../services/semanticSearchService.js"


export const saveItem = async (req, res) => {

    const { content, url, title, collectionId } = req.body;

    const tags = await generateTags(content);

    const embedding = await createEmbedding(content);

    const item = await itemModel.create({
        title,
        content,
        url,
        embedding,
        tags,
        collectionId
    })

    res.status(200).json({
        message: "Item saved successfully",
        success: true,
        item
    })

}


export const getRelatedItems = async (req, res) => {
    try {
        const { itemId } = req.params

        const related = await RelatedItemService(itemId)

        res.json({
            success: true,
            related
        })
    }
    catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


export const semanticSearchItems = async (req, res) => {

 try{

  const { query } = req.query

  if(!query){

   return res.status(400).json({
    error: "Query is required"
   })

  }

  const results = await semanticSearch(query)

  res.json({

   total: results.length,

   items: results

  })

 }
 catch(err){

  console.error(err)

  res.status(500).json({
   error: err.message
  })

 }

}

