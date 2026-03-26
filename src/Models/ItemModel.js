import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({

 title: {
  type: String,
  required: true,
 },

 url: {
  type: String,
  required: true,
 },

 content: {
  type: String,
  required: true,
 },

 tags: {
  type: [String],
  required: true,
 },

 embedding: {
  type: [Number],   // vector stored here
  default: [],
 },

 collectionId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "collection",
 },

},
{ timestamps: true }
)

const itemModel =
 mongoose.models.item ||
 mongoose.model("item", itemSchema)

export default itemModel;