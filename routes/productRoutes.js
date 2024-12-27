import express from "express"
import { getProducts,getProductDetails } from "../controllers/productController.js"
const router = express.Router()

router.get('/products',getProducts)
router.get('/products/:id',getProductDetails)

export {
    router
}