"use strict";

function errorHandler(err, req, res, next) 
{
	res.status(500);
	res.render('error', { error: err });
}

function logErrors(err, req, res, next) 
{
	console.error(err.stack);
	next(err);
}



var express         = require("express"),
	app             = express(),
	bodyParser      = require("body-parser"),
	methodOverride  = require("method-override"),
	featureService  = require("./featureService");

app.engine('jade', require('jade').__express);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('', featureService.root);

app.use('/arcgis/rest/services/test1/FeatureServer', router);
app.use(logErrors);
app.use(errorHandler);

app.listen(3000, function()
{
	console.log("Node server running on http://localhost:3000");
});