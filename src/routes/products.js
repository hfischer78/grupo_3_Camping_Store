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


routerProducts.get("/productDetail", productsController.detalle);

routerProducts.get("/productCreate", productsController.create);

routerProducts.get("/productEdit", productsController.edit);

//HF - en desarrollo / implementando logica para editar

/*** EDIT ONE PRODUCT ***/ 
routerProducts.get('/:id/edit', productsController.edit); // vista para editar
//routerProducts.put('/:id', uploadFile.single('producto'), productsController.update); // logica de actualizar

// HF - en desarrollo / implementando logica para borrar producto
routerProducts.delete('/:id', productsController.destroy); //logica para borrar



module.exports = routerProducts;
