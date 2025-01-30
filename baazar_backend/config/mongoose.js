import dotenv from "dotenv"
import mongoose from "mongoose";
// import { createItems } from "../models/ProductModel.js";

dotenv.config();

const ConnectDb=async()=>{
    const dbURI =process.env.MONGO_URI
    
    try{

        await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
         console.log('Database connected successfully!')
    }catch(error){

        console.error('Database connection failed:', error.message)
        process.exit(1);
    }

}
// createItems()

export default ConnectDb;

