import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./src/routes/notesRoutes.js"
import connectDB from "./src/config/db.js";
import rateLimiter from "./src/middleware/rateLimiter.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

//middleware
app.use(express.json());
app.use((req,res,next) =>{
    console.log(`request method is ${req.method} & url is ${req.url}`);
    next();
});
app.use(rateLimiter);
app.use(cors({
    origin: "http://localhost:5173",
}))


app.use("/api/notes",notesRoutes);



app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`);
})