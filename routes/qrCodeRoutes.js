import express from "express"
import generateQrCode from "../controllers/qrCode.js"
import verifyToken from "../middleware/auth_jwt.js";
const qrRouter = express.Router();

/**
 * @swagger
 * /generateQr:
 *   post:
 *     summary: Generate a QR code
 *     description: Generate a QR code for a given URL or text
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 description: The URL or text to be encoded in the QR code
 *               size:
 *                 type: integer
 *                 description: The size of the QR code (optional)
 *               color:
 *                 type: string
 *                 description: The color of the QR code (optional)
 *     responses:
 *       200:
 *         description: QR code generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 qrCode:
 *                   type: string
 *                   description: The generated QR code as a base64-encoded string
 *       400:
 *         description: Invalid request
 *       401:
 *         description: Unauthorized
 */
// QrCodeGenerator Route...
qrRouter.post("/generateQr", verifyToken, generateQrCode, function (req, res) {

});


export default qrRouter
