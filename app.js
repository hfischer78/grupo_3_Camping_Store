const express = require("express");
const path = require('path');
const app = express();

let rutasMain = require('./src/routes/main.js');
let rutasProductos = require('./src/routes/products.js');

//Configuración recursos estáticos
const publicPath = path.resolve(__dirname,"./public");
app.use(express.static(publicPath));

//Configuración rutas
app.use('/', rutasMain);
app.use('/products', rutasProductos);

//Configuración del Servidor
app.listen(3000, function () {
console.log("Servidor corriendo en el puerto 3000");
})