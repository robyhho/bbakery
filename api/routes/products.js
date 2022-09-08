import express from "express";
import Product from "../models/Product.js";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
  getFeatured,
} from "../controllers/product.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//Create
router.post("/", createProduct);

//Update
router.put("/:id", verifyAdmin, updateProduct);

//Delete
router.delete("/:id", verifyAdmin, deleteProduct);

//Get
router.get("/find/:id", getProduct);

//Get all
router.get("/find/", getAllProducts);

//Get Featured
router.get("/", getFeatured);

export default router;
