const express = require("express");
const session = require("express-session");
const cookies = require("cookie-parser");
const userLoggedMidddleware = require("./middlewares/userLoggedMiddleware");
const path = require('path');
const app = express();
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE



let rutasMain = require('./routes/main.js');
let rutasProducts = require('./routes/products.js');
let rutasUsers = require('./routes/users.js');
let rutasApi = require('./routes/api.js');


app.use(session({
    secret: "Es secreto",
    resave: false ,
    saveUninitialized: false ,
}));
app.use(cookies());
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname,"./views"))
app.use(userLoggedMidddleware)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Configuración recursos estáticos
const publicPath = path.resolve(__dirname,"../public");
app.use(express.static(publicPath));

//Configuración rutas
app.use(methodOverride('_method')); // para usar put and delete
app.use('/', rutasMain);
app.use('/products', rutasProducts);
app.use('/users', rutasUsers);
app.use('/api', rutasApi);


//Configuración del Servidor
app.listen(3000, function () {
console.log("Servidor corriendo en el puerto 3000");
})




