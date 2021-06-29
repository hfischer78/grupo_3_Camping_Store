const path = require('path');
const User = require('../models/User.js');
const bcryptjs = require('bcryptjs');


//const productsFilePath = path.join(__dirname, '../data/products.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


let controllerUsers = {
   
    register: function (req, res) {
        res.render(path.resolve(__dirname,"../views/users/register.ejs"))    
    },

    processRegister: function (req, res) {
        let userInDb = User.findField('email', req.body.email);

        if(userInDb) {
            return res.render(path.resolve(__dirname,"../views/users/register.ejs"), {
                errors: {
                    email: {
                        msg: 'Este correo electrónico ya está registrado' //no permite registrar usuario con mismo email, falta hacer que se imprima el mensaje (tags en EJS)
                    }
                }
            })
        }
        
        let userToCreate= {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file != undefined ? req.file.filename : null,
        }   
            User.create(userToCreate)
            res.redirect('/users/login')
    },
   
    login: function (req, res) {
        res.render(path.resolve(__dirname,"../views/users/login.ejs"))
    },

    processLogin: function (req, res){
        let userToLogin = User.findByField('email', req.body.email);
        
        if(userToLogin){
            let correctPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(correctPassword){
              delete userToLogin.password
                req.session.userLogged = userToLogin;
                if (req.body.remember_user){
                    res.cookie("userEmail",req.body.email,{maxAge: (1000*60)})
                }
              return res.redirect("/users/profile")
            }
            res.render(path.resolve(__dirname,"../views/users/login.ejs"), {
                errors: {
                    email: {
                        msg: 'Credenciales inválidas'
                    }
                }
            });
        }
        res.render(path.resolve(__dirname,"../views/users/login.ejs"), {
            errors: {
                email: {
                    msg: 'No estás registrado!'
                }
            }
        })
    },

    profile: function (req, res) {
        
        return res.render(path.resolve(__dirname,"../views/users/userProfile.ejs"),{
            user:req.session.userLogged
        });
    },
    
	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	},
}



module.exports = controllerUsers;