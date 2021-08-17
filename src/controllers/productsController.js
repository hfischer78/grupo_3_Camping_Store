const { create } = require("domain");

const fs = require("fs");
const path = require("path");

//const productsFilePath = path.join(__dirname, "../data/products.json");
//const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


// conexion con la DB
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op, Association } = require("sequelize");
const moment = require('moment');
const {validationResult} = require("express-validator");
const Product = db.Product;
const Size = db.Size;
const Color = db.Color;
const Category = db.Category;
const Category_Product = db.Category_Product;


let controllerProducts = {
    
    index: function (req, res) {
           db.Products.findAll({
                include: [
                {association: 'colors'},
                {association:'sizes'},
                {association:'categories'}
                ]
            })

            .then(products => {
               
               res.render('../views/products/productsList', {products, toThousand})
            })
    },


//// para probar categorias
    
    categoryList: function (req, res) {
        
        db.Products.findAll(
            {
            include: [
            {association: 'colors'},
            {association:'sizes'},
            {association:'categories',where: {id: req.params.id}},
            ],
        }     
        )

        .then(products => {
        
        //res.send(products)
        res.render('../views/products/productsCategory', {products, toThousand})
        })
    },


    detail: function (req, res) {
            db.Products.findByPk(req.params.id,{
                include: [
                {association: 'colors'},
                {association:'sizes'},
                {association:'categories'}
                ]
            })

            .then(productDetail => {
             res.render('../views/products/productDetail', {productDetail, toThousand}) 
                                         
            })
    },


    create: function (req, res) {
         
           db.Sizes.findAll()
                                      
           .then(sizes => {
            
                db.Colors.findAll()
                                    
                .then(colors => {
                    db.Categories.findAll()
                    .then(categories => {

                        res.render("./products/productCreate", {sizes, colors, categories, toThousand });          
                    })    

            })
        })  
        
    },

    // Create -  Method to store
    store: (req, res) => {

        let resultProductsValidation = validationResult(req);
        if (resultProductsValidation.errors.length > 0){
            return res.render("./products/productCreate", { toThousand }, {errors : resultProductsValidation.mapped(), oldData: req.body});
        }
       

        let productToCreate={
           name: req.body.name,
           description: req.body.description,
           price: req.body.price,
           discount: req.body.discount,
           color_id: req.body.color,
           size_id: req.body.size,
           image: req.file != undefined ? req.file.filename : null,
            }
 
         db.Products.create(productToCreate)
        
            // accedemos a la tabla de productos para tomar al id del producto recien creado, para luego ingresarlo a tablas.
            db.Products.findAll(
            {
                order: [
                    ['id', 'DESC'],
                ],
                limit: 1
            })

                .then(AProduct => {
                    // recorremos las categorias del body y las incluimos en un array para luego ingresar los datos a la DV
                     let categorias = req.body.Categorias
                        categorias.forEach (function(id,i) {
                            categoryToCreate = {  
                                product_id: AProduct[0].id,
                                category_id: categorias[i]
                                
                             }     
                              // cargamos los datos en la DB
                             db.Category_Products.create(categoryToCreate)
                             res.redirect("/");
                        }) // cerramos for each
            
                }) // cerramos then.
   
        }, // cerramos método del controlador.
 
     // vista de edición
 
    edit: (req, res) => {
       
        //db.Products.findByPk(req.params.id)

        db.Products.findByPk(req.params.id,{
            include: [
            {association: 'colors'},
            {association:'sizes'},
            {association:'categories'}
            ]
        })


        .then(productToEdit => {
        
            db.Sizes.findAll()
            .then(sizes => {
         
                 db.Colors.findAll()
                .then(colors => {
                   
                    db.Categories.findAll()
                    .then(categories => {

                        res.render('../views/products/productEdit', {productToEdit,sizes,colors, categories, toThousand})
                    })

                })                
            })    
        })    
       
         // desde aca estaba
        // db.Products.findByPk(req.params.id,{
        //     include: [
        //     {association: 'colors'},
        //     {association:'sizes'},
        //     {association:'categories'}
        //     ]
        // })

        // .then(productToEdit => {
        //    //res.send(productDetail)
        //     res.render('../views/products/productEdit', {productToEdit, toThousand})                
        // })

    },

    // actualizacion de productos.
    update: function (req, res) {
        // genero variable de productos, excluyendo el producto a editar.
        // let productToEdit = products.filter(function (producto) {
        //     return producto.id != req.params.id;

        let resultProductsValidation = validationResult(req);
        if (resultProductsValidation.errors.length > 0){
            return res.render('../views/products/productEdit', {productToEdit, toThousand}, {errors : resultProductsValidation.mapped(), oldData: req.body});
        }

        db.Products.update(
            {
                id: req.params.id,
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                discount: req.body.discount,
                //category: req.body.category,
                color_id: req.body.color,
                size_id: req.body.size,
                image: req.file != undefined ? req.file.filename : null,
            },

            {
                where: {id: req.params.id }
            });

            // redirecciono a productos
            res.redirect("/");
        },       


    //eliminacion de producto
    destroy: function (req, res) {

        db.Products.destroy({
            where: {id: req.params.id }
        })

        res.redirect("/");
    },
};

module.exports = controllerProducts;
