import express from "express";
import { signUp, signIn, getUserUrlCount } from "../controllers/users.js";
import verifyToken from "../middleware/auth_jwt.js";

const userRouter = express.Router();

/**
 * @swagger
 * /users/signUp:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
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
 *     tags: [Users]
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
 * /users/me/url-count:
 *   get:
 *     summary: Get total number of URLs created by the logged-in user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved URL count
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User has created 5 URLs
 *                 count:
 *                   type: integer
 *                   example: 5
 *       401:
 *         description: Unauthorized (invalid or missing token)
 *       500:
 *         description: Internal server error
 */
// Get user Url count Route...
userRouter.get("/me/getUserUrlCount", verifyToken, getUserUrlCount, function (req, res) {

});

export default userRouter
