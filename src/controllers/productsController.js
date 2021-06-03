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
    },

    // actualizacion de productos.    
    update: function (req, res) {
        
        res.send("EL PRODUCTO SERA EDITADO")

    },

    //eliminacion de producto
    destroy: function (req, res) {
        res.send("EL PRODUCTO SERA ELIMINADO")
        

    },

}

module.exports = controladorProductos;
