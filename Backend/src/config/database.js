import "../config/dotenvConfig.js";
import mongoose from "mongoose";
import { Pinecone } from '@pinecone-database/pinecone';


const pc = new Pinecone({ apiKey: process.env.PINCONE_API });
export const index = pc.index('vexa-embeddings');

const connectDB = async () => {

    await mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("MongoDB Connected");
        }).catch((err) => {
            console.error("Error connecting to MongoDB:", err);
        });

}

export default connectDB;