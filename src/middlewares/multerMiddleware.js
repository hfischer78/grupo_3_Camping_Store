const path = require('path');
const multer = require('multer');

function multerFunction (ruta){
	const storage = multer.diskStorage({
 	destination: (req, file, cb) => {
	cb(null, './public/img/' + ruta);
 	},
	filename: (req, file, cb) => {
	let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
	cb(null, fileName);
 	}
})

return multer({ storage }); 
 }


// const storage = multer.diskStorage({
//  	destination: (req, file, cb) => {
// 	cb(null, './public/img/users');
//  	},
// 	filename: (req, file, cb) => {
// 	let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
// 	cb(null, fileName);
//  	}
// })

//const uploadFile = multer({ storage });

module.exports = multerFunction;

