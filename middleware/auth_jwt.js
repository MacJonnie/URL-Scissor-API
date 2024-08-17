import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// verification middleware...
const verifyToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const decoded = jwt.verify(token, process.env.API_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export default verifyToken;