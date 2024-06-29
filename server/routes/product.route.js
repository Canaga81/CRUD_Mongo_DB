const express = require('express');
const router = express.Router();
const Product = require('../models/product.model.js');
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');

//^ Get All Products
router.get('/', getProducts);

//^ Get 1 Product
router.get('/:id', getProduct);

//^ Create 1 Product
router.post('/', createProduct);

//^ Update Product
router.put('/:id', updateProduct);

//^ Delete Product
router.delete('/:id', deleteProduct);

module.exports = router;