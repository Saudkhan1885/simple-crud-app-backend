const express = require('express')
const Product=require('../model/product.model.js');
const router =express.Router();
const {getProducts,getProduct,productcreate,updateproduct,deleteproduct}= require('../controllers/product.controller.js')

router.get('/',getProducts);
router.get('/:id',getProduct);
router.post('/',productcreate);
router.put('/:id',updateproduct);
router.delete('/:id',deleteproduct);






module.exports= router;