let express = require('express');
let routerUsers = express.Router();
let userController = require('../controllers/usersController');
const router = require('./main');


// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const uploadFile1 = require('../middlewares/multerMiddleware');


// Ruta de redireccionamiento a Register
routerUsers.get("/register", guestMiddleware, userController.register);

// Ruta que procesa el Register
routerUsers.post("/register", uploadFile1.single('avatar'), userController.processRegister)

// Ruta de redireccionamiento a LogIn
routerUsers.get("/login", guestMiddleware, userController.login);

// Ruta que procesa el Login
routerUsers.post("/login", userController.processLogin);

// Ruta que muestra perfil del User
routerUsers.get("/profile/", userController.profile);

// Logout
routerUsers.get('/logout/', userController.logout);




module.exports = routerUsers;
