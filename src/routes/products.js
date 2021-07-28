const express = require('express');
const routerProducts = express.Router();
const path = require('path')
const multer = require('multer');


//multer
// const storage = multer.diskStorage({ 
// 	  destination: function (req, file, cb) { 
// 	     cb(null, './public/img/products'); 
// 	  }, 
// 	  filename: function (req, file, cb) { 
// 	     cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
// 	})
	
// const uploadFile = multer({ storage });

const uploadFile = require('../middlewares/multerMiddleware');

let productsController = require('../controllers/productsController');

// RUTA DE PRUEBA 
//routerProducts.get("/prueba", productsController.prueba);

// LISTA PRODUCTOS POR CATEGORIAS //
routerProducts.get("/categoria/:id", productsController.categoryList);


// LISTA PRODUCTOS //
routerProducts.get("/", productsController.index);

// CREACION DE PRODUCTOS -
routerProducts.get("/create", productsController.create); // vista para crear productos / ok
routerProducts.post('/', uploadFile("products").single('image'),productsController.store); // logica para crear / ok

//estas borrarlas
// routerProducts.get("/productCreate", productsController.create); // vista para crear
// routerProducts.post("/products", productsController.store); // logica para crear



// PRODUCT DETAIL //
routerProducts.get("/detail/:id", productsController.detail); //ok

//*** EDIT ONE PRODUCT ***/ 
routerProducts.get('/:id/edit', productsController.edit); // vista para editar / ok
routerProducts.put('/:id', uploadFile("products").single('image'), productsController.update); // logica de actualizar / ok

/*** DELETE ONE PRODUCT***/ 
routerProducts.delete('/:id', productsController.destroy); //logica para borrar / ok



module.exports = routerProducts;
