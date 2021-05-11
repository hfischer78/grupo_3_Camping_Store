const path = require('path');

let controladorProductos = {
    detalle: function (renpq, res) {
        res.sendFile(path.resolve(__dirname,"../views/productDetail.html"))
    }
}


module.exports= controladorProductos;