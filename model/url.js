import mongoose from "mongoose";

const urlModel = new mongoose.Schema ({
    urlId: {
        type: String,
    },
    origUrl: {
        type: String,
        required: true
    },

    shortUrl: {
        type: String
    },

    customUrl: {
        type: String
    },

    customId: {
        type: String,
        required: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    },

    timestamp: {
        type: Date,
        default: Date.now
    },
})

export default mongoose.model("Url", urlModel)