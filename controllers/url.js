import { nanoid } from "nanoid";
import urlModel from "../model/url.js";
import validateUrl from "../utils/validator.js";
import dotenv from "dotenv";
dotenv.config();

// Create a short URL...
const shortUrl = async (req, res) =>{
    const { origUrl} = req.body;
    const base = process.env.BASE;
    const urlId = nanoid(8);
    
    if(validateUrl(origUrl)){
        try {
            const url = await urlModel.findOne({origUrl})
            if(url){
                res.json({
                    "url": url.shortUrl,
                    "message": "URL already exists"
                })
                console.log("Url already exist");
            } else {
                const shortUrl = `${base}/${urlId}`

                const url = new urlModel({
                    origUrl,
                    shortUrl,
                    urlId,
                    date: new Date(),
                });

                await url.save();
                console.log(url)
                res.json({"shortUrl": url});
            }
        } catch (error) {
            console.log(error);
            res.status(500).json("Server Error")
        }
    }
};

// Create a custom URL...
const customUrl = async (req, res) =>{
    const { origUrl, customId } = req.body;
    const base = process.env.BASE;

    if(validateUrl(origUrl)){
        try {
            const url = await urlModel.findOne({customId})
            if(url){
                res.json({
                    message: "Url already exist"
                });
            }
            else {
                if(!url || !url.customUrl){
                    const customUrl = `${base}/${customId}`
                    const url = new urlModel({
                    origUrl,
                    customUrl,
                    customId,
                    date: new Date(),
                });

                await url.save();
                console.log(url)
                res.json({"customUrl": url})
                }
                else {
                    if (url.customUrl){
                        url.customUrl = `${base}/${customId}`;
                        await url.save();
                        res.json({
                            "customUrl": url.customUrl,
                            "message": "Custom URL updated"
                            })
                    }} 
            }
        } catch (error) {
            console.log(error);
            res.status(500).json("Server Error");
        }
    }
};

// Redirect short and custom URLs to the original URL...
const redirectUrl = async (req, res) => {
    const { urlId, customId } = req.params;
  
    try {
      let url;
      if (urlId) {
        url = await urlModel.findOneAndUpdate(
          { urlId },
          { $inc: { clicks: 1 } },
          { new: true }
        );
      } else if (customId) {
        url = await urlModel.findOneAndUpdate(
          { customId },
          { $inc: { clicks: 1 } },
          { new: true }
        );
      }
  
      if (url) {
        return res.redirect(url.origUrl);
      } else {
        res.status(404).json({ error: "Url Not Found" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server Error" });
    }
};

// Update an existing shortUrl...
const updateShortUrl = async (req, res) => {
    const base = process.env.BASE;

    try {
      const { shortUrl } = req.body;
      if (!shortUrl) {
        return res.status(400).json({ error: 'Short URL is required' });
      }
  
      const url = await urlModel.findOne({ shortUrl });
      if (!url) {
        return res.status(404).json({ error: 'Short URL not found' });
      }
  
      const newUrlId = nanoid(8);
      const newShortUrl = `${base}/${newUrlId}`;
  
      url.urlId = newUrlId;
      url.shortUrl = newShortUrl;
      await url.save();
  
      res.json({ message: 'URL updated successfully', newShortUrl });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update an existing customUrl...
const updateCustomUrl = async (req, res) => {
    const base = process.env.BASE;

    try {
      const { customId, newCustomId } = req.body;
      if (!customId || !newCustomId) {
        return res.status(400).json({ error: 'Custom ID and new Custom ID are required' });
      }
  
      const url = await urlModel.findOne({ customId });
      if (!url) {
        return res.status(404).json({ error: 'Custom URL not found' });
      }
  
      const newCustomUrl = `${base}/${newCustomId}`;
      url.customId = newCustomId;
      url.customUrl = newCustomUrl;
      await url.save();
  
      res.json({ message: 'Custom URL updated successfully', newCustomUrl });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete a Url...
const deleteUrl = async (req, res) => {
    try {
      const { shortUrl, customUrl } = req.body;
      if (!shortUrl && !customUrl) {
        return res.status(400).json({ error: 'Short URL is required' });
      }

      const url = await urlModel.findOneAndDelete({ shortUrl, customUrl});
      if (!url) {
        return res.status(404).json({ error: 'Short URL not found' });
      }
  
      res.json({ message: 'URL deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

export { shortUrl, redirectUrl, customUrl, updateShortUrl, updateCustomUrl, deleteUrl}