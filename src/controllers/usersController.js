const path = require('path');
const User = require('../models/User.js');
const bcryptjs = require('bcryptjs')


//const productsFilePath = path.join(__dirname, '../data/products.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


let controllerUsers = {
    login: function (req, res) {
    res.render(path.resolve(__dirname,"../views/users/login.ejs"))
},
    register: function (req, res) {
    res.render(path.resolve(__dirname,"../views/users/register.ejs"))    
},

processRegister: function (req, res) {
    let userToCreate= {
    ...req.body,
    password: bcryptjs.hashSync(req.body.password, 10),
    avatar: req.file != undefined ? req.file.filename : null,
    
    // console.log(req.body.firstname)
    // res.send(req.body.firstname)
    // //   lastname: req.body.lastname,
    //   email: req.body.email,
    // password: req.body.password
    }
   
    User.create(userToCreate)
    res.send('Se creo todo piola')

}
}


module.exports = controllerUsers;