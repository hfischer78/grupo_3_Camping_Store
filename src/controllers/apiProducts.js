const { create } = require("domain");
const fs = require("fs");
const path = require("path");

// conexion con la DB
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op, Association } = require("sequelize");
const moment = require('moment');
const {validationResult} = require("express-validator");
const { forEach } = require("../middlewares/productsMiddleware");
const Product = db.Product;
const Size = db.Size;
const Color = db.Color;
const Category = db.Category;
const Category_Product = db.Category_Product;

let apiProducts = {

    // listado de productos
    list: 
        function (req, res) {
            let products = db.Products.findAll(
                {
                include: [
                {association:'categories'},
                ],
                }     
            )

            let categories = db.Categories.findAll()
            let categories_products = db.Category_Products.findAll()

            Promise.all([products,categories,categories_products])
            .then(function([products,categories, categories_products]) {
            
                let countByCategory = []
                categories.forEach(function(id,i){
                filtro = categories[i].id
                   let totales = categories_products.filter(total => {
                     if (total.category_id === filtro){
                         return true
                     } else {
                        
                         return false}
                    });

                      let count = totales.length
                      let category = categories[i].name
                      countByCategory.push({category,count})
                });

                
               
                let producto = products.map(function(producto) {

                    
                    return [
                        {"id": producto.id,
                        "name": producto.name,
                        "description": producto.description,
                        "categorias": products[0].categories,
                        "detail": "http://localhost:3000/products/detail/" + producto.id

                        }
                        ]

                });    

                return res.status(200).json({
                    count: products.length,
                    countByCategory: countByCategory,
                    products: producto,
                    status: 200
                })

       }); // cierra then

    }, // ciera list

    // Detalle de Productos
    detail: function (req, res) {

         db.Products.findByPk(req.params.id,{
             include: [
             {association: 'colors'},
             {association:'sizes'},
             {association:'categories'}
             ]
        })

        .then(productDetail => {

            return res.status(200).json({
              Products: productDetail,
              //URL: productDetail.image,
              "URL_Image": "http://localhost:3000/api/products/" + productDetail.id + "/" + productDetail.image,
              status: 200
            })
                                     
        }) // cierra then
    
    }, // cierra detail

    image: (req, res) => { 

        imagenProducto = req.params.image

        res.render(path.resolve(__dirname,"../views/products/productImage.ejs"),{imagenProducto});
    },

} /// cierre del controlador

module.exports = apiProducts;
