const express = require("express");
const path = require('path');
const app = express();
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE


let rutasMain = require('./routes/main.js');
let rutasProducts = require('./routes/products.js');
let rutasUsers = require('./routes/users.js');

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname,"./views"))

//Configuración recursos estáticos
const publicPath = path.resolve(__dirname,"../public");
app.use(express.static(publicPath));

//Configuración rutas
app.use(methodOverride('_method')); // para usar put and delete
app.use('/', rutasMain);
app.use('/products', rutasProducts);
app.use('/users', rutasUsers);

//Configuración del Servidor
app.listen(3000, function () {
console.log("Servidor corriendo en el puerto 3000");
})


