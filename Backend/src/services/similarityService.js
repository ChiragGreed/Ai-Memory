export const cosineSimilarity = (vecA, vecB) => {

 if(vecA.length !== vecB.length) return 0

 let dotProduct = 0
 let magA = 0
 let magB = 0

 for(let i = 0; i < vecA.length; i++){

  dotProduct += vecA[i] * vecB[i]

  magA += vecA[i] * vecA[i]

  magB += vecB[i] * vecB[i]

 }

 magA = Math.sqrt(magA)
 magB = Math.sqrt(magB)

 return dotProduct / (magA * magB)

}

// Score meaning

// 1 = very similar
// 0.8 = related
// 0.5 = somewhat related
// 0 = unrelated