const express = require('express');
const connectDB = require('./config/db');
const cors = require ('cors');
const bodyParser = require ('body-parser');

// express route
const regRoute = require ('./routes/api/reg');

const app = express ();

connectDB();


app.use(bodyParser.json());
app.use(bodyParser.URLUnencoded({
	extended: true
}));


app.use(cors({ origin: true, credentials : true }));

// PORT
const port = process.env.PORT || 8082;
app.listen(port,() => console.log (`Server running on new port ${port}`));

//404 Error

app.use  ((req,res,next) => {
	next (createError (404));
});

app.use(function(err,req,res,next) {
	console.error(err.message);
	
	if (!err.statusCode) err.statusCode = 500;
	res.status(err.statusCode).send(err.message);
	
});


app.get('/',(req,res) => res.send('change in Package JSON!'));




