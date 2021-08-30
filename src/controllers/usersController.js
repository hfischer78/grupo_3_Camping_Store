const path = require('path');
// comentado 24/07 const User = require('../models/User.js');
const bcryptjs = require('bcryptjs');


//const productsFilePath = path.join(__dirname, '../data/products.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const db = require('../database/models');
const sequelize = db.sequelize;
const { Op, Association } = require("sequelize");
const moment = require('moment');

const User = db.User;
const {validationResult} = require("express-validator");

let controllerUsers = {

    // vista de formulario de registro
    register: function (req, res) {
        res.render(path.resolve(__dirname,"../views/users/register.ejs"))    
    },

    // proceso de registro
    processRegister: function (req, res) {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0){
            return res.render(path.resolve(__dirname,"../views/users/register.ejs"), {errors : resultValidation.mapped(), oldData: req.body});
        }
        // acceso a la DB para verificar si el mail que se pretende registrar ya esta registrado    
        db.Users.findOne({where: { email: req.body.email} })
        .then(users => {
    
        // variable con el dato del mail para validacion
        userInDb = users
        if(userInDb) {
            return res.render(path.resolve(__dirname,"../views/users/register.ejs"), {
                errors: {
                    email: {
                         msg: 'Este correo electrónico ya está registrado' //no permite registrar usuario con mismo email, falta hacer que se imprima el mensaje (tags en EJS)
                    }
                }
            })
        }

        // variable con datos para crear usuarios. 
        let userToCreate= {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file != undefined ? req.file.filename : null,
        }   
        
        // creacion de usuario
        db.Users.create(userToCreate)

        // redirecciono a login
        res.redirect('./login')

        }); // cierre del then!

     }, // cierre del proceso de registro

     // vista de formulario de login
    login: function (req, res) {
        res.render(path.resolve(__dirname,"../views/users/login.ejs"))
    },

     // proceso de login
    processLogin: function (req, res){

        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0){
            return res.render(path.resolve(__dirname,"../views/users/login.ejs"), {errors : resultValidation.mapped(), oldData: req.body});
        }

        db.Users.findOne({where: { email: req.body.email} })
        .then(users => {
            // variable con el dato del mail para validacion
            userToLogin = users

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
                    password: {
                        msg: 'La password no es la correcta'
                    }
                },
                oldData: req.body
            });
        }
        res.render(path.resolve(__dirname,"../views/users/login.ejs"), {
            errors: {
                email: {
                    msg: 'Este email no esta registrado en nuestra base de datos'
                }
            }
        })
    
       }); // cierre del then!
    
    },

    profile: function (req, res) {
        
        return res.render(path.resolve(__dirname,"../views/users/userProfile.ejs"),{
            user:req.session.userLogged
        });
    },

    detail: function (req, res) {
        db.Users.findByPk(req.params.id)

        .then(userDetail => {
        
      res.render(path.resolve(__dirname,"../views/users/userProfileById.ejs"),{userDetail});
                                     
        })
    },


    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },

}
module.exports = controllerUsers;