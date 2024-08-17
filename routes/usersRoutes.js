import express from "express";
import { signUp, signIn, getUserUrlCount } from "../controllers/users.js";
import verifyToken from "../middleware/auth_jwt.js";

const userRouter = express.Router();

// User signUp Route...
userRouter.post("/signUp", signUp, function (req, res) {
    
});

// User signIn Route...
userRouter.post("/signIn", signIn, function (req, res) {

});

// Get user Url count Route...
userRouter.get("/getUserUrlCount", verifyToken, getUserUrlCount, function (req, res) {

});

export default userRouter