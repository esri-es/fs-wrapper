"use strict";

var request     = require('request');

/* http://resources.arcgis.com/en/help/rest/apiref/index.html?featureserver.html */

/* internal methods */

function renderView(req,res,view,data)
{
	var f = req.query.f || 'html';

	if( req.query.callback )
	{
		f = 'jsonp';
	}

	switch(f)
	{
		case 'html':
			res.render(view, data);
			break;
		case 'json':
			res.json(data);
			break;
		case 'jsonp':
			res.jsonp(data);
			break;
		default:
			res.json({error:"format " + f + " not supported"});
	}
}


/* exported methods */

exports.root = function(req,res)
{
	var serviceProperties = 
    { 
        serviceDescription : "Servicio de Features", 
	};
	renderView(req,res,'featureserver.jade',serviceProperties);
};

