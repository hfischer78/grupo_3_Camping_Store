let express = require('express');
let routerProducts = express.Router();
let productsController = require('../controllers/productsController');


routerProducts.get("/productDetail", productsController.detalle);


routerProducts.get("/productCreate", productsController.create);

routerProducts.get("/productEdit", productsController.edit);


module.exports = routerProducts;
