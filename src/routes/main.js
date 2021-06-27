let express = require('express');
let router = express.Router();
let mainController = require('../controllers/mainController');


// Ruta de redireccionamiento a Home
router.get("/", mainController.home);

// Ruta de redireccionamiento a Carrito
router.get("/productCart", mainController.carrito);


module.exports = router;