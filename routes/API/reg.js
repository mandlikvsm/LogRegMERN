 mongoose = require('mongoose');


const express = require ('express');

const router = express.Router();

//user model
let userSchema = require ('../models/reg');

//create user

router.route ('/register').post 
(
	(req,res,next) =>
 {
	
	userSchema.create(req.body, (error, data) => {
		if(error) {
			return next(error)
		} else {
			console.log(data)
			res.json(data)
		}
	})
}
);



module.exports = router;