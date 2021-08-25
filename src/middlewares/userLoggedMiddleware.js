const db = require('../database/models');
const sequelize = db.sequelize;
const { Op, Association } = require("sequelize");
const moment = require('moment');

const User = db.User;


async function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	
	let emailInCookie = req.cookies.userEmail;
	let userFromCookie 

	//	let userFromCookie = User.findByField('email', emailInCookie);

// voy a intentar validar con un iff: si esta el cookie userEmail definido entonces busco en la DB, sino sigue el codigo.

	if (emailInCookie) {
		db.Users.findOne({where: { email: emailInCookie} })
		.then(users => {
		// variable con el dato del mail para validacion

await	(userFromCookie = users)


   		}); // cierre del then!
	}

///


	if (userFromCookie) {
		req.session.userLogged = userFromCookie;

		if (req.session.userLogged) {
			res.locals.isLogged = true;
			res.locals.userLogged = req.session.userLogged;
		}
	
		console.log("ACA",req.session)
	}



	


		
	


  
///


	next();
}

module.exports = userLoggedMiddleware;