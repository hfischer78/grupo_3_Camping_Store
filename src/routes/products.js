let express = require('express');
let routerProducts = express.Router();
let productsController = require('../controllers/productsController');


routerProducts.get("/productDetail", productsController.detalle);


routerProducts.get("/productCreate", productsController.create);


module.exports = routerProducts;
