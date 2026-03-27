import { useAi } from "./aiServices.js";

export const generateTags = async (content) => {

 const prompt = `

Extract 5 topic tags from the text.

Rules:
- each tag must be 1 or 2 words
- focus on technologies, concepts, topics
- nouns only
- lowercase only
- no sentences
- no numbering
- no punctuation
- comma separated output only

Text:
${content}

`

 const raw = await useAi(prompt);

 const tags = raw
  .split(",")
  .map(t => t.trim())
  .filter(t => t.length > 2)
  .slice(0,5);

 return tags;

};