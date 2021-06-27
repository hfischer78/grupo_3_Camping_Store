const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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

		res.render(path.resolve(__dirname,'../views/index'),{products,toThousand})
	},    

    carrito: function (req, res) {
        res.render(path.resolve(__dirname,"../views/productCart.ejs"))
    }
}


module.exports = controller;