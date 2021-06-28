let express = require('express');
let routerUsers = express.Router();
let userController = require('../controllers/usersController');
const router = require('./main');

const uploadFile = require('../middlewares/multerMiddleware');



// Ruta de redireccionamiento a LogIn
routerUsers.get("/login", userController.login);

// Ruta de redireccionamiento a Register
routerUsers.get("/register", userController.register);
routerUsers.post("/register", uploadFile.single('avatar'), userController.processRegister)




module.exports = routerUsers;
