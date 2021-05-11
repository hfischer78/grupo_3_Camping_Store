const path = require('path');

let controlador = {
    home: function (renpq, res) {
        res.sendFile(path.resolve(__dirname,"../views/index.html"))
    },

    login: function (renpq, res) {
        res.sendFile(path.resolve(__dirname,"../views/login.html"))
    },

    registro: function (renpq, res) {
        res.sendFile(path.resolve(__dirname,"../views/register.html"))    
    },

    carrito: function (renpq, res) {
        res.sendFile(path.resolve(__dirname,"../views/productCart.html"))
    }
}


module.exports = controlador;