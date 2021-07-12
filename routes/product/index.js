const express = require('express');

const { ValidateAddProduct } = absoluteRequire('validator/product');

const { AddProduct } = absoluteRequire('controller/product');
const router = express.Router();

/* GET users listing. */
router.post('/', ValidateAddProduct, AddProduct);

module.exports = router;
