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
    
    list: 
        function (req, res) {
             
            db.Users.findAll()
             .then(users => {


                // let usuarios = user.map(function(usuario) {
                    
                //     return [
                //         {"id": user.id,
                //         "name": user.name,
                //         "email": user.email,
                //         "detail": "http://localhost:3000/products/detail/" + producto.id

                //         }
                //         ]




               return res.status(200).json({
                    count: users.length,
                    users: users,
                    status: 200
                })
             })
    },

    detail: function (req, res) {
        db.Users.findByPk(req.params.id)
            .then(user => {
         
            return res.status(200).json({
                data: user,
                status: 200
            })
                                     
        })
},


} /// cierre del controlador

module.exports = apiUsers;
