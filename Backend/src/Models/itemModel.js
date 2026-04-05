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
        type: String
    },

    previewTitle: {
        type: String
    },

    previewDescription: {
        type: String
    },

    previewImage: {
        type: String,
    },

    summary: {
        type: String,
        default: function () {

            if (!this.content) return "";

            const words = this.content.split(" ");

            return words.slice(0, 30).join(" ") + "...";

        }
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
        ref: "Collections",
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }

},
    { timestamps: true }
)

const itemModel = mongoose.model("item", itemSchema);


export default itemModel;