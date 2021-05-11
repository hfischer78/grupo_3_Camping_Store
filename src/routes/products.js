let express = require('express');
let router = express.Router();
let productController = require('../controllers/productsController');

router.get("/productDetail", productController.detalle);


module.exports = router;
