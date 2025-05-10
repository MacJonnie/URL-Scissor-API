import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// MongoDb connection...
function connectToMongoDB(){
    const DB_Url = process.env.MONGODB_CONNECTION_URL
    if (!DB_Url){
        throw new Error("Please set the MONGODB_CONNECTION_URL environment variable")
    }
    mongoose.connect(DB_Url)

    // Set Event Handlers
    mongoose.connection.on("connected", () => {
        console.log("MongoDB connected successfully");
    });
    mongoose.connection.on("error", (err) => {
        console.log(err);
        console.log("An error occurred");
    });
    mongoose.connection.on("disconnected", () => {
        console.log("MongoDB has disconnected");
    })

};


export default connectToMongoDB