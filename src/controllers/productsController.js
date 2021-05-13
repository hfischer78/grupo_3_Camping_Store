const path = require('path');

let controladorProductos = {
    detalle: function (renpq, res) {
        res.render(path.resolve(__dirname,"../views/productDetail.ejs"))
    }
}

module.exports = controladorProductos;
