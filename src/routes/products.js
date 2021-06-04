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

// PRODUCT DETAIL //
routerProducts.get("/detail/:id", productsController.detalle); //ok

// CREATE PRODUCT //
routerProducts.get("/create", productsController.create); // vista para crear productos / ok
routerProducts.post('/', uploadFile.single('image'),productsController.store); // logica para crear / ok


//*** EDIT ONE PRODUCT ***/ 
routerProducts.get('/:id/edit', productsController.edit); // vista para editar / ok
routerProducts.put('/:id', uploadFile.single('image'), productsController.update); // logica de actualizar / ok

/*** DELETE ONE PRODUCT***/ 
routerProducts.delete('/:id', productsController.destroy); //logica para borrar / ok



module.exports = routerProducts;
