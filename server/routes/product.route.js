import express from "express";
import {
  getProducts,
  getProduct,
  getSimilarProducts,
  getFilteredProducts,
  getFilters,
  searchedProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/:gender/:page", getProducts);
router.get("/:productId", getProduct);
router.get("/similarProducts/:gender/:product_type", getSimilarProducts);
router.get("/filteredProducts/:gender/:page", getFilteredProducts);
router.get("/filters", getFilters);
router.get("/searchProducts", searchedProducts);





export default router;
