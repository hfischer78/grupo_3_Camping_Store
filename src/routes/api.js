const express = require('express');
const routerApi = express.Router();
const path = require('path')

let apiProducts = require('../controllers/apiProducts');
let apiUsers = require('../controllers/apiUsers');


//usuarios

routerApi.get("/users",apiUsers.list)
routerApi.get("/users/:id",apiUsers.detail)
routerApi.get("/users/:id/:avatar",apiUsers.avatar)


// productos
routerApi.get("/products",apiProducts.list)
routerApi.get("/products/categories",apiProducts.listCat)
routerApi.get("/products/:id",apiProducts.detail)
routerApi.get("/products/:idProd/:image",apiProducts.image)

module.exports = routerApi;
