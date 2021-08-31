const { create } = require("domain");

const fs = require("fs");
const path = require("path");

//const productsFilePath = path.join(__dirname, "../data/products.json");
//const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


// conexion con la DB
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op,Association } = require("sequelize");

const moment = require('moment');
const {validationResult} = require("express-validator");
const { Console } = require("console");
const Product = db.Product;
const Size = db.Size;
const Color = db.Color;
const Category = db.Category;
const Category_Product = db.Category_Product;

// traigo esta base de datos de usuario, para luego habilitar o no ver ciertas cosas
const User = db.User;


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



// busqueda de producto
search: (req, res) => {
 

 db.Products.findAll(
     {
     include: [
     {association: 'colors'},
     {association:'sizes'},
     {association:'categories'}
     ],
     where: {
         name: {[Op.like]: '%' + req.body.search + '%'}
        }
    })

 .then(products => {

    res.render('../views/products/productsCategory', {products, toThousand})

 })

},


//// Categorias
    
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
  
        res.render('../views/products/productsCategory', {products, toThousand})
        })
    },


    // en oferta - descuentos mayores a 20%

    onSale: (req, res) => {
 
        
         db.Products.findAll(
             {
             include: [
             {association: 'colors'},
             {association:'sizes'},
             {association:'categories'}
             ],
             where: {
                 discount: {[Op.gte]: 20}
                }
            })
        
         .then(products => {
        
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
        .then( product => {

                     let categorias = req.body.Categorias
                     if (categorias.length == 1) {
                            categoryToCreate = {
                            product_id: product.id,
                            category_id: categorias
                            }
                    db.Category_Products.create(categoryToCreate)

                     } else {

                        categorias.forEach (function(id,i) {
                            categoryToCreate = {  
                                product_id: product.id,
                                category_id: categorias[i]
                               
                             }  //cierra variable categoryToCreate     
                             db.Category_Products.create(categoryToCreate)
                        }) // cerramos for each     
                        
                    } // cierra el else
                    // cargamos los datos en la DB
                           
                res.redirect("/");        
        })  // cerramos then de product creat
   
        }, // cerramos método del controlador.
 
     // vista de edición
 
    edit: (req, res) => {
       
        
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

                            db.Category_Products.findAll({
                                where: {
                                    product_id: req.params.id 
                                }
                            })
                            .then(categoryProducts => {

                               res.render('../views/products/productEdit', {productToEdit,sizes,colors, categories, categoryProducts, toThousand})
                           

                            })

                    })

                })                
            })    
        })    
       
       

    },

    // actualizacion de productos.
    update: function (req, res) {
       
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
                color_id: req.body.color,
                size_id: req.body.size,
                image: req.file != undefined ? req.file.filename : null,
            },

            {
                where: {id: req.params.id }
            });

            //////////////////////////

            // BORRAR CATEGORIAS ASIGNADAS

            db.Category_Products.destroy(
                 {
                where: {product_id: req.params.id}
              })

             
            // CARGAR NUEVAS CATEGORIAS

            let categorias = req.body.Categorias
            
             if (categorias.length == 1) {
                    categoryToCreate = {
                    product_id: req.params.id,
                    category_id: categorias
                    }
            
                   db.Category_Products.create(categoryToCreate)

             } else {

                categorias.forEach (function(id,i) {
                    categoryToCreate = {  
                        product_id: req.params.id,
                        category_id: categorias[i]
                      
                     }  //cierra variable categoryToCreate     
                     db.Category_Products.create(categoryToCreate)
                }) // cerramos for each     


            /////////////////////////

            // redirecciono a productos
            res.redirect("/");

          //console.log("HOLA",categorias)
        }       
    
    },


    //eliminacion de producto
    destroy: (req, res) => {

        
        db.Category_Products.destroy(
             {
             where: {product_id: req.params.id}
             })

            
         .then(a => {

            db.Products.destroy(
                 {
                 where: {id: req.params.id}
                 })

               res.redirect("/")
         })
    }

}

module.exports = controllerProducts;
