const { create } = require("domain");
const fs = require("fs");
const path = require("path");

// conexion con la DB
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op, Association } = require("sequelize");
const moment = require('moment');
const {validationResult} = require("express-validator");
const User = db.User;


let apiUsers = {
    
    // listada todos los usuarios
    list: 
        function (req, res) {
            
            let users = db.Users.findAll()
            
            .then(users => {
    
                let usuarios = users.map(function(usuario) {
                     return [
                         {"id": usuario.id,
                         "name": usuario.first_name + " " + usuario.last_name, 
                         "email": usuario.email,
                         "detail": "http://localhost:3000/users/detail/" + usuario.id,
                         }
                         ]
                })
            
               return res.status(200).json({
                    count: users.length,
                    users: usuarios,
                    status: 200
                })
             })
    },

    // detalle de usuario seleccionado
    detail: function (req, res) {
        db.Users.findByPk(req.params.id)

            .then(userInDb => {

               let user = {                       
                "id": userInDb.id,
                "first_name": userInDb.first_name,
                "last_name": userInDb.last_name, 
                "email": userInDb.email,
                "avatar": userInDb.avatar,
                "URL_avatar": "http://localhost:3000/api/users/" + userInDb.id + "/" + userInDb.avatar,
                }
                         
                return res.status(200).json({
                user: user,
                status: 200
                })
            })
    },

    // genera vista de imagen de usuario
    avatar: (req, res) => { 

        avatarUsuario = req.params.avatar

        res.render(path.resolve(__dirname,"../views/users/userAvatar.ejs"),{avatarUsuario});
    },


} /// cierre del controlador

module.exports = apiUsers;
