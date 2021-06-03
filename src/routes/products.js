let express = require('express');
let routerProducts = express.Router();
let productsController = require('../controllers/productsController');


routerProducts.get("/productDetail", productsController.detalle);

//rutas para Crear productos
routerProducts.get("/productCreate", productsController.create); // Esta es para que muestre el formulario de creacion de prod
//routerProducts.post("/productCreate", productsController.store); //Esta es para ejecutar la logica de creacion de prod

//rutas para Editar productos
routerProducts.get("/productEdit", productsController.edit); //Esta es para que muestre el formulario de Editar Prod
//routerProducts.post("/productEdit", productsController.upload); // ESta es para que ejectue y guarde cambios de la edicion de prod



module.exports = routerProducts;
