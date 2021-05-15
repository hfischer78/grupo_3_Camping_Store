const path = require('path');

let controlador = {
    home: function (renpq, res) {
        res.render(path.resolve(__dirname,"../views/index.ejs"))
    },

    login: function (renpq, res) {
        res.render(path.resolve(__dirname,"../views/users/login.ejs"))
    },

    registro: function (renpq, res) {
        res.render(path.resolve(__dirname,"../views/users/register.ejs"))    
    },

    carrito: function (renpq, res) {
        res.render(path.resolve(__dirname,"../views/productCart.ejs"))
    }
}


module.exports = controlador;