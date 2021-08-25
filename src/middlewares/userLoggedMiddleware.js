const db = require('../database/models');
const sequelize = db.sequelize;
const { Op, Association } = require("sequelize");
const moment = require('moment');

const User = db.User;


function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	if (req.cookies.userEmail) {
	let emailInCookie = req.cookies.userEmail;
	let userFromCookie;

	//	let userFromCookie = User.findByField('email', emailInCookie);

// voy a intentar validar con un iff: si esta el cookie userEmail definido entonces busco en la DB, sino sigue el codigo.
	
	db.Users.findOne({where: { email: emailInCookie} })
		.then(user => {
				delete user.password
				req.session.userLogged = user; })
		.catch (e => console.log(e))
		}

   	

		if (req.session.userLogged) {
			res.locals.isLogged = true;
			res.locals.userLogged = req.session.userLogged;
		}
	next();
		}
	
	

///


module.exports = userLoggedMiddleware;