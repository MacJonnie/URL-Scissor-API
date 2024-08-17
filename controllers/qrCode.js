import urlModel from "../model/url.js";
import qrcode from "qrcode"

//Generate a qrCode...
const generateQrCode = async (req, res) => {
  const { shortUrl, customUrl } = req.body;
  let url;

  try{
    if (shortUrl) {
      url = await urlModel.findOne({ shortUrl });
    } else if (customUrl) {
      url = await urlModel.findOne({ customUrl });
    }

    if (!url) {
      return res.status(404).json({ error: "URL not found" });
    }

    const originalUrl = url.origUrl;
    const qrCode = await qrcode.toDataURL(originalUrl, {
      errorCorrectionLevel: "H",
      type: "image/png",
      quality: 0.95,
      margin: 1,
      color: {
        dark: "#000000",
        light: "#ffffff",
      },
    });
    const base64QrCode = qrCode.split(",")[1];
    res.json({ qrCode: base64QrCode });
    console.log("QrCode Successfully Generated");
  } catch (error) {
    console.error(error);
    res.status(500).json("Server Error");
  }
};

export default generateQrCode;