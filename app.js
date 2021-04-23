const express = require("express");
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname,"./public");
app.use(express.static(publicPath));


app.get("/home", (renpq, res) => {
    res.sendFile(path.resolve(__dirname,"./views/index.html"))
})

app.get("/login", (renpq, res) => {
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})


app.get("/productCart", (renpq, res) => {
    res.sendFile(path.resolve(__dirname,"./views/productCart.html"))
})

app.get("/productDetail", (renpq, res) => {

    res.sendFile(path.resolve(__dirname,"./views/productDetail.html"))
})

app.get("/register", (renpq, res) => {

    res.sendFile(path.resolve(__dirname,"./views/register.html"))
    
})

app.listen(3000, function () {

console.log("Servidor corriendo en el puerto 3000");

})