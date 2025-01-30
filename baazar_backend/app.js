import express from "express"; 
import dotenv from "dotenv"
import cors from "cors";
import ConnectDb from "./config/mongoose.js";
import categoryRouter from "./routes/ProductRoutes.js";
import userRouter from "./routes/userRoutes.js"

const app=express();
dotenv.config()
ConnectDb()
app.use(cors());
app.use(express.json());



app.use('/api',categoryRouter);
app.use('/user',userRouter)
// app.use('/api/',categoryRouter);


const port=process.env.PORT;
app.listen(port,(req,res)=>{
console.log(`app is listening on port ${port}`)
})