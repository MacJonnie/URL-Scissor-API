import rateLimit from 'express-rate-limit';

// Rate Limiting
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100, // limit each IP to 100 requests per windowMs
  delayMs: 0, // disable delaying - full speed until the max limit is reached
  slidingWindow: true // enable sliding window
});


export default limiter