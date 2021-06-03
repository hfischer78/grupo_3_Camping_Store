const { create } = require('domain');
const path = require('path');

let controladorProductos = {
    detalle: function (renpq, res) {
        //res.render(path.resolve(__dirname,"../views/productDetail.ejs"))

    res.render("./products/productDetail")

    },

    create: function (renpq, res) {
        //res.render(path.resolve(__dirname,"../views/productDetail.ejs"))
    res.render("./products/productCreate")
    },

    edit: function (renpq, res) {
        //res.render(path.resolve(__dirname,"../views/productDetail.ejs"))
    res.render("./products/productEdit")
    }

}

module.exports = controladorProductos;
