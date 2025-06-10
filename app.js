import express  from "express";
import connectToMongoDB from "./DB_Connection/MongoDb.js";
import urlRouter from "./routes/urlRoutes.js";
import userRouter from "./routes/usersRoutes.js";
import qrRouter from "./routes/qrCodeRoutes.js";
import limiter from "./utils/limiter.js";
import dotenv from "dotenv";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './documentation/swaggerUi.js';

const app = express()

// SwagwgerUi Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    authorizations: {
        bearerAuth: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header'
        }
      }
}));

dotenv.config();
connectToMongoDB();


app.use(express.json());
app.use(express.urlencoded({
    extended:true}));
    app.use(limiter);
    
    
app.use("/urlApi", urlRouter);
app.use("/urlApi/users", userRouter);
app.use("/urlApi/qrcode", qrRouter);


app.get("/urlApi", (req, res) => {
    res.send("Welcome to John.E URL Scissor");
});

app.all("*", (req, res) => {
    res.status(404).jsonp({ message: "Page not found" });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Sever is running on port ${PORT}...`)
});
