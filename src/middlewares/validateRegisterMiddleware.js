const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('first_name').notEmpty().withMessage('Tienes que escribir un Nombre').isLength({ min: 2 }).withMessage('Al menos tiene que tener dos caracteres'),
	body('last_name').notEmpty().withMessage('Tienes que escribir un Apellido').isLength({ min: 2 }).withMessage('Al menos tiene que tener dos caracteres'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña').isLength({ min: 8 }).withMessage('Al menos tiene que tener 8 caracteres'),
	//Despues ver si podemos incluir letra mayuscula, que contenga numeroy un caracter especial. 

	//body('country').notEmpty().withMessage('Tienes que elegir un país'),(para mas adelante agregamos pais)
	body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg',"jpeg", '.png', '.gif'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]