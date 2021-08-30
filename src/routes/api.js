const express = require('express');
const routerApi = express.Router();
const path = require('path')

let apiProducts = require('../controllers/apiProducts');
let apiUsers = require('../controllers/apiUsers');


//usuarios

routerApi.get("/users",apiUsers.list)
routerApi.get("/users/:id",apiUsers.detail)


// productos
routerApi.get("/products",apiProducts.list)
routerApi.get("/products/:id",apiProducts.detail)


module.exports = routerApi;
