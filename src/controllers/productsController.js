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

const Product = db.Product;


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
            res.render("./products/productCreate", { toThousand });
        
    },

    // Create -  Method to store
    store: (req, res) => {
       
        db.Products.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            // category: req.body.category,
            color_id: req.body.color,
            size_id: req.body.size,
            image: req.file != undefined ? req.file.filename : null,
        })  

        res.redirect("/");
    },

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
           //res.send(productDetail)
            res.render('../views/products/productEdit', {productToEdit, toThousand})                
        })
    },

    // actualizacion de productos.
    update: function (req, res) {
        // genero variable de productos, excluyendo el producto a editar.
        // let productToEdit = products.filter(function (producto) {
        //     return producto.id != req.params.id;

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
