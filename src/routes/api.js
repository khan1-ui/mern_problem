const express = require('express')
const router =express.Router()
const ProductController = require('../controller/ProductsController')
//C=Create
router.post("/createProduct",ProductController.createProduct)
//R=Read
router.post("/readProduct",ProductController.readProduct)
//U=Update
router.put("/updateProduct/:id",ProductController.updateProduct)
//D=Delete
router.delete("/deleteProduct/:id",ProductController.deleteProduct)



module.exports = router
