let express = require('express');
let routerUsers = express.Router();
let userController = require('../controllers/usersController');
const router = require('./main');


// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const validationsLogin = require('../middlewares/validateLoginMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const multerFunction = require('../middlewares/multerMiddleware');


// Ruta de redireccionamiento a Register
routerUsers.get("/register", guestMiddleware, userController.register);

// Ruta que procesa el Register (inclui el middleware de validateRegister, con le nombre de la constante validations)
routerUsers.post("/register", multerFunction("users").single('avatar'),validations, userController.processRegister) 

// Ruta de redireccionamiento a LogIn
routerUsers.get("/login", guestMiddleware, userController.login);

// Ruta que procesa el Login
routerUsers.post("/login", validationsLogin,userController.processLogin);

// Ruta que muestra perfil del User
routerUsers.get("/profile/", userController.profile);

// Ruta que muestra perfil de user indicado en el ID
routerUsers.get("/detail/:id", userController.detail);

// Logout
routerUsers.get('/logout/', userController.logout);




module.exports = routerUsers;
