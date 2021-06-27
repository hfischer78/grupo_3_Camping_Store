const { create } = require("domain");

const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let controladorProductos = {
    
    index: function (req, res) {
        res.render(path.resolve(__dirname,'../views/products/productsList'), ({products, toThousand}))        

    },

    detalle: function (req, res) {
        let productDetail = products.filter(function (producto) {
            return producto.id == req.params.id;
        });
        productDetail = productDetail[0];

        res.render("./products/productDetail", { productDetail, toThousand });
    },

    create: function (req, res) {
        //res.render(path.resolve(__dirname,"../views/productDetail.ejs"))
        res.render("./products/productCreate", { toThousand });
        
    },

    // Create -  Method to store
    store: (req, res) => {
        //para obtener id.
        let max = 1;
        for (let i = 0; i < products.length; i++) {
            if (max < products[i].id) {
                max = products[i].id;
            }
        }

        let newId = max + 1;

        // actualizar cada uno de los atributos del JSON
        let newProduct = {
            //ejemplosss
            id: newId,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            category: req.body.category,
            color: req.body.color,
            size: req.body.size,
            category_index: req.body.category_index,
            image: req.file != undefined ? req.file.filename : null,
        };

        // actualizo la variable con el nuevo producto
        products.push(newProduct);
        //genero nuevo archivo json con todos los productos
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 4));

        res.redirect("/");
    },

    // vista de edición
    edit: function (req, res) {
        let productToEdit = products.filter(function (producto) {
            return producto.id == req.params.id;
        });

        res.render("./products/productEdit", { productToEdit, toThousand });
    },

    // actualizacion de productos.
    update: function (req, res) {
        // genero variable de productos, excluyendo el producto a editar.
        let productToEdit = products.filter(function (producto) {
            return producto.id != req.params.id;
        });

        // genero variable con los datos del nuevo producto
        let newProduct = {
            id: req.params.id,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            category: req.body.category,
            color: req.body.color,
            size: req.body.size,
            category_index: req.body.category_index,
            image: req.file != undefined ? req.file.filename : null,
        };

        // agrego el producto editado
        productToEdit.push(newProduct);

        //genero nuevo archivo json con todos los productos
        fs.writeFileSync(
            productsFilePath,
            JSON.stringify(productToEdit, null, 4)
        );
        // redirecciono a productos
        res.redirect("/");
    },

    //eliminacion de producto
    destroy: function (req, res) {
        // genero variable de productos, excluyendo el producto a editar.
        let productToEdit = products.filter(function (producto) {
            return producto.id != req.params.id;
        });

        fs.writeFileSync(
            productsFilePath,
            JSON.stringify(productToEdit, null, 4)
        );

        res.redirect("/");
    },
};

module.exports = controladorProductos;
