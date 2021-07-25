// const User = require('../models/User');
//const User = require('../database/models/U/ser');



function userLoggedMiddleware(req, res, next) {


	const db = require('../database/models');
	const sequelize = db.sequelize;
	const { Op, Association } = require("sequelize");
	const moment = require('moment');
	
	const User = db.User;

	//res.locals.isLogged = false;
 	let emailInCookie = req.cookies.userEmail;
 	//let userFromCookie = User.findByField('email', emailInCookie);

	 // INICIO DE COPIADO

db.Users.findOne({where: { email: emailInCookie} })
        .then(users => {
            // variable con el dato del mail para validacion
	
			res.locals.isLogged = false;
			
			let userFromCookie = users
			
		// 	userToLogin = users
       
        //      if(userToLogin){
        //      let correctPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
        //      if(correctPassword){
        //        delete userToLogin.password
        //          req.session.userLogged = userToLogin;
        //          if (req.body.remember_user){
        //              res.cookie("userEmail",req.body.email,{maxAge: (1000*60)})
        //         }
        //        return res.redirect("/users/profile")
        //      }
        //      res.render(path.resolve(__dirname,"../views/users/login.ejs"), {
        //          errors: {
        //              email: {
        //                  msg: 'Credenciales inválidas'
        //              }
        //          }
        //      });
        //  }
        //  res.render(path.resolve(__dirname,"../views/users/login.ejs"), {
        //      errors: {
        //          email: {
        //              msg: 'No estás registrado!'
        //          }
        //      }
        //  })
     
        }); // cierre del then!




	 //// FIN DE COPIADO

 	if (userFromCookie) {
 		req.session.userLogged = userFromCookie;
 	}

 	if (req.session.userLogged) {
 		res.locals.isLogged = true;
 		res.locals.userLogged = req.session.userLogged;
 	}

 	next();
 }

module.exports = userLoggedMiddleware;