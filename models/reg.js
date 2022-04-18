const mongoose = require('mongoose');

const RegSchema= mongoose.Schema({
	
fname : {
	type : String,
	required: true
},

lname: {
	type : String,
	required: true
},

gender : {
	type : String,
	required: true
},

email : {
	type : String,
	required: true
},

Password : {
	type : String,
	required: true
}

}, {collection: 'user' });

module.exports = mongoose.model('user',RegSchema);
