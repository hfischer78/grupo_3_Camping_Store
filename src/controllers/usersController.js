const path = require('path');

//const productsFilePath = path.join(__dirname, '../data/products.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


let controllerUsers = {
    login: function (req, res) {
    res.render(path.resolve(__dirname,"../views/users/login.ejs"))
},
    register: function (req, res) {
    res.render(path.resolve(__dirname,"../views/users/register.ejs"))    
}
}

module.exports = controllerUsers;