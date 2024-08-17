import express from "express";
import verifyToken from "../middleware/auth_jwt.js";
import { shortUrl, redirectUrl, customUrl, updateShortUrl, updateCustomUrl, deleteUrl } from "../controllers/url.js"

const urlRouter = express.Router();

// ShortUrl Route...
urlRouter.post("/shortUrl", verifyToken, shortUrl, function (req, res) {
    
});

// CustomUrl Route...
urlRouter.post("/customUrl", verifyToken, customUrl, function (req, res) {

});

// Redirecting customUrl Route...
urlRouter.get("/customUrl/:customId", redirectUrl, function (req, res){

});

// Redirecting shortUrl Route...
urlRouter.get("/shortUrl/:urlId", redirectUrl, function (req, res){

});

// Updating a short Url Route...
urlRouter.put("/updateShortUrl", updateShortUrl, function (req, res){

});

// Updating a custom Url Route...
urlRouter.put("/updateCustomUrl", updateCustomUrl, function (req, res){

});

// Delete a Url Route...
urlRouter.delete("/deleteUrl", deleteUrl, function (req, res){

});

export default urlRouter