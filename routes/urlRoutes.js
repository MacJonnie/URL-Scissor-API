import express from "express";
import verifyToken from "../middleware/auth_jwt.js";
import { shortUrl, redirectUrl, customUrl, updateShortUrl, updateCustomUrl, deleteUrl } from "../controllers/url.js"

const urlRouter = express.Router();


/**
 * @swagger
 * /shortUrl:
 *   post:
 *     summary: Create a short URL
 *     description: Create a short URL for a given long URL
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               longUrl:
 *                 type: string
 *                 description: The long URL to be shortened
 *     responses:
 *       201:
 *         description: Short URL created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 shortUrl:
 *                   type: string
 *                   description: The shortened URL
 *       400:
 *         description: Invalid request
 *       401:
 *         description: Unauthorized
 */
// ShortUrl Route...
urlRouter.post("/shortUrl", verifyToken, shortUrl, function (req, res) {
    
});

/**
 * @swagger
 * /customUrl:
 *   post:
 *     summary: Create a custom URL
 *     description: Create a custom URL for a given long URL
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               longUrl:
 *                 type: string
 *                 description: The long URL to be shortened
 *               customUrl:
 *                 type: string
 *                 description: The custom URL
 *     responses:
 *       201:
 *         description: Custom URL created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 customUrl:
 *                   type: string
 *                   description: The custom URL
 *       400:
 *         description: Invalid request
 *       401:
 *         description: Unauthorized
 */
// CustomUrl Route...
urlRouter.post("/customUrl", verifyToken, customUrl, function (req, res) {

});

/**
 * @swagger
 * /customUrl/{customId}:
 *   get:
 *     summary: Redirect to the original URL
 *     description: Redirect to the original URL for a given custom URL
 *     parameters:
 *       - in: path
 *         name: customId
 *         required: true
 *         schema:
 *           type: string
 *           description: The custom URL ID
 *     responses:
 *       302:
 *         description: Redirected to the original URL
 *       404:
 *         description: Custom URL not found
 */
// Redirecting customUrl Route...
urlRouter.get("/customUrl/:customId", redirectUrl, function (req, res){

});

/**
 * @swagger
 * /shortUrl/{urlId}:
 *   get:
 *     summary: Redirect to the original URL
 *     description: Redirect to the original URL for a given short URL
 *     parameters:
 *       - in: path
 *         name: urlId
 *         required: true
 *         schema:
 *           type: string
 *           description: The short URL ID
 *     responses:
 *       302:
 *         description: Redirected to the original URL
 *       404:
 *         description: Short URL not found
 */
// Redirecting shortUrl Route...
urlRouter.get("/shortUrl/:urlId", redirectUrl, function (req, res){

});

/**
 * @swagger
 * /updateShortUrl:
 *   put:
 *     summary: Update a short URL
 *     description: Update a short URL
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               shortUrl:
 *                 type: string
 *                 description: The short URL to be updated
 *               longUrl:
 *                 type: string
 *                 description: The new long URL
 *     responses:
 *       200:
 *         description: Short URL updated successfully
 *       400:
 *         description: Invalid request
 *       401:
 *         description: Unauthorized
 */
// Updating a short Url Route...
urlRouter.put("/updateShortUrl", updateShortUrl, function (req, res){

});

/**
 * @swagger
 * /updateCustomUrl:
 *   put:
 *     summary: Update a custom URL
 *     description: Update a custom URL
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customUrl:
 *                 type: string
 *                 description: The custom URL to be updated
 *               longUrl:
 *                 type: string
 *                 description: The new long URL
 *     responses:
 *       200:
 *         description: Custom URL updated successfully
 *       400:
 *         description: Invalid request
 *       401:
 *         description: Unauthorized
 */
// Updating a custom Url Route...
urlRouter.put("/updateCustomUrl", updateCustomUrl, function (req, res){

});

/**
 * @swagger
 * /deleteUrl:
 *   delete:
 *     summary: Delete a URL
 *     description: Delete a URL
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               urlId:
 *                 type: string
 *                 description: The ID of the URL to be deleted
 *     responses:
 *       200:
 *         description: URL deleted successfully
 *       400:
 *         description: Invalid request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: URL not found
 */
// Delete a Url Route...
urlRouter.delete("/deleteUrl", deleteUrl, function (req, res){

});

export default urlRouter
