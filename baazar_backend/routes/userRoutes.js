import { addUser } from "../controllers/store.js";
import express from "express"

const router=express.Router()

router.post("/register",addUser)
export default router