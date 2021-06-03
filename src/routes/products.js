const express = require('express');
const routerProducts = express.Router();
const path = require('path')
const multer = require('multer');


//multer
const storage = multer.diskStorage({ 
	  destination: function (req, file, cb) { 
	     cb(null, './public/img/products'); 
	  }, 
	  filename: function (req, file, cb) { 
	     cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
	})
	
const uploadFile = multer({ storage });


let productsController = require('../controllers/productsController');


routerProducts.get("/Detail/:id", productsController.detalle);

routerProducts.get("/create", productsController.create); // vista para crear productos
routerProducts.post('/', uploadFile.single('producto'),productsController.store); // logica para crear




//HF - en desarrollo / 
//routerProducts.get("/productEdit", productsController.edit);

/*** EDIT ONE PRODUCT ***/ 
routerProducts.get('/:id/edit', productsController.edit); // vista para editar / ok
routerProducts.put('/:id', uploadFile.single('producto'), productsController.update); // logica de actualizar

/*** DELETE ONE PRODUCT***/ 
routerProducts.delete('/:id', productsController.destroy); //logica para borrar



module.exports = routerProducts;
