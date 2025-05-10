import express from "express";
import { signUp, signIn, getUserUrlCount } from "../controllers/users.js";
import verifyToken from "../middleware/auth_jwt.js";

const userRouter = express.Router();

/**
 * @swagger
 * /users/signUp:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user with email, password, and username
 *     requestBody:
 *       description: User credentials
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - userName
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               userName:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
// User signUp Route...
userRouter.post("/signUp", signUp, function (req, res) {
    
});

/**
 * @swagger
 * /users/signIn:
 *   post:
 *     summary: Sign in a user
 *     description: Sign in a user with email and password
 *     requestBody:
 *       description: User credentials
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User signed in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 accessToken:
 *                   type: string
 */
// User signIn Route...
userRouter.post("/signIn", signIn, function (req, res) {

});

/**
 * @swagger
 * /users/getUserUrlCount:
 *   get:
 *     summary: Get the number of URLs created by a user
 *     description: Get the number of URLs created by a user
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User URL count
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
// Get user Url count Route...
userRouter.get("/getUserUrlCount", verifyToken, getUserUrlCount, function (req, res) {

});

export default userRouter
