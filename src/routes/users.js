let express = require('express');
let routerUsers = express.Router();
let userController = require('../controllers/usersController');


// Ruta de redireccionamiento a LogIn
routerUsers.get("/login", userController.login);

// Ruta de redireccionamiento a Register
routerUsers.get("/register", userController.register);


module.exports = routerUsers;
