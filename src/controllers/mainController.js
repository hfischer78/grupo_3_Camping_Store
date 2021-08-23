const fs = require('fs');
const path = require('path');

//const productsFilePath = path.join(__dirname, '../data/products.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


 // conexion con la DB
 const db = require('../database/models');
 const sequelize = db.sequelize;
 const { Op } = require("sequelize");
 const moment = require('moment');

const Product = db.Product;


//////

let controller = {
    home: function (req, res) {


        // esto lo dejo para implementar categorias en el hime mas adealante!
        //res.render(path.resolve(__dirname,"../views/index.ejs"))
        
        //     let visited = products.filter(function(categoria){
		// 	return categoria.category == "visited"
		// })
		
		// 	let inSales = products.filter(function(categoria){
		// 	return categoria.category == "in-sale"
		// })

        db.Products.findAll({
            include: [
            {association: 'colors'},
            {association:'sizes'},
            {association:'categories'}
            ]
        })
         
             .then(products => {
                res.render('../views/index', {products, toThousand})
                //res.send(products)
             })

		//res.render(path.resolve(__dirname,'../views/index'),{products,toThousand})
	},    

    carrito: function (req, res) {
        res.render(path.resolve(__dirname,"../views/productCart.ejs"))
    },

    about: function (req, res) {
        res.render(path.resolve(__dirname,"../views/aboutUs.ejs"))
    }
}


module.exports = controller;