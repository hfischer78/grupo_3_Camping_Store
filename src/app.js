const express = require("express");
const path = require('path');
const app = express();

let rutasMain = require('./routes/main.js');
let rutasProductos = require('./routes/products.js');

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname,"./views"))

//Configuración recursos estáticos
const publicPath = path.resolve(__dirname,"../public");
app.use(express.static(publicPath));

//Configuración rutas
app.use('/', rutasMain);
app.use('/productos', rutasProductos);

//Configuración del Servidor
app.listen(3000, function () {
console.log("Servidor corriendo en el puerto 3000");
})


