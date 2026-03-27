import { pipeline } from "@xenova/transformers";

let extractor;

async function loadModel() {

 if (!extractor) {

  extractor = await pipeline(

   "feature-extraction",

   "Xenova/all-MiniLM-L6-v2"

  );

 }

 return extractor;

}

export const createEmbedding = async (text) => {

 if (!text) {

  throw new Error("Text required");

 }

 const model = await loadModel();

 const output = await model(

  text.slice(0,1500),

  {

   pooling: "mean",

   normalize: true

  }

 );

 return Array.from(output.data);

};