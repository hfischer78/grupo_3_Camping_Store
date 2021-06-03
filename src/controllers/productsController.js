const { create } = require('domain');


const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


let controladorProductos = {
    detalle: function (req, res) {
     		
    let productDetail = products.filter(function(producto){
        return producto.id == req.params.id
    })
    
   
       res.render("./products/productDetail",{productDetail,toThousand})
    },

    create: function (req, res) {
        //res.render(path.resolve(__dirname,"../views/productDetail.ejs"))
    res.render("./products/productCreate")
    },

// Create -  Method to store
    store: (req, res) => {
	//para obtener id.
        let max = 1;
        for (let i=0; i < products.length; i++) {
              if (max < products[i].id){
            max = products[i].id;
               }
        };
        
        let newId = max + 1;

       // actualizar cada uno de los atributos del JSON     
       let newProduct = {
           //ejemplosss
         "id": newId,
        // "name": req.body.name,
        // "price": req.body.price,
        // "discount": req.body.discount,
        // "category": req.body.category,
        // "description": req.body.description,
        // "image": req.file.filename,
                    
      };	
    
    // actualizo la variable con el nuevo producto  
    products.push(newProduct);
    //genero nuevo archivo json con todos los productos
    fs.writeFileSync(productsFilePath,JSON.stringify(products,null,4));	

    res.redirect('/products') 
    

},


    edit: function (req, res) {
        //res.render(path.resolve(__dirname,"../views/productDetail.ejs"))
        //res.render("./products/productEdit")

    let productToEdit = products.filter(function(producto){
        return producto.id == req.params.id
    })

    res.render("./products/productEdit",{productToEdit})


   
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
