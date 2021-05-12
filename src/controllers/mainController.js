const path = require('path');

let controlador = {
    home: function (renpq, res) {
        res.render(path.resolve(__dirname,"../views/index.ejs"))
    },

    login: function (renpq, res) {
        res.render(path.resolve(__dirname,"../views/login.ejs"))
    },

    registro: function (renpq, res) {
        res.render(path.resolve(__dirname,"../views/register.ejs"))    
    },

    carrito: function (renpq, res) {
        res.render(path.resolve(__dirname,"../views/productCart.ejs"))
    }
}


module.exports = controlador;