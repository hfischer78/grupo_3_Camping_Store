let express = require('express');
let router = express.Router();
let productsController = require('../controllers/productsController');

router.get("/products", productsController.detalle);


module.exports = router;
