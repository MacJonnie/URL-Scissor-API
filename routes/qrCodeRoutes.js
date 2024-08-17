import express from "express"
import generateQrCode from "../controllers/qrCode.js"
import verifyToken from "../middleware/auth_jwt.js";
const qrRouter = express.Router();

// QrCodeGenerator Route...
qrRouter.post("/generateQr", verifyToken, generateQrCode, function (req, res) {

});


export default qrRouter