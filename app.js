"use strict";

var express         = require("express"),
	app             = express(),
	bodyParser      = require("body-parser"),
	methodOverride  = require("method-override"),
	featureService  = require("./featureService"),
	featureLayer    = require("./featureLayer");


function logErrors(err, req, res, next) 
{
	console.error("ERROR:", err.stack);
	next(err);
}

function errorHandler(err, req, res, next) 
{
	res.status(500);
	res.render('error', { error: err });
}


app.engine('jade', require('jade').__express);

app.use(express.static(__dirname + "/assets"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/:serviceName/FeatureServer/', featureService.root);
router.get('/:serviceName/FeatureServer/:layerId', featureLayer.root);

app.use('/arcgis/rest/services', router);
app.use(logErrors);
app.use(errorHandler);

app.listen(3000, function()
{
	console.log("Node server running on http://localhost:3000");
});