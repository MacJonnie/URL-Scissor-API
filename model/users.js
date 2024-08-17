import mongoose from "mongoose";

const userModel = new mongoose.Schema ({
    email: {
        type: String,
        unique: true,
        required: [true, "email already exist!"],
        lowercase: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: "{VALUE} is not a valid email!"
        }  
    },
    userName: {
        type: String
    },
    password: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
})

export default mongoose.model("User", userModel)