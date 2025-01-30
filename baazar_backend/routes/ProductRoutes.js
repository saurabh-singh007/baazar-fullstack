import express from "express"
import { findCategories, findSubCategories,addSubcategory } from "../controllers/store.js";

const router=express.Router();



router.get('/categories/',findCategories)
router.get('/categories/:id',findSubCategories)
router.put('/categories/add',addSubcategory)

export default router; 