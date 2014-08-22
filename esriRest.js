"use strict";

var //_    = require('underscore'),
	util = require('util');

exports.renderView = function(req,res,view,data,htmlData)
{
	var f = req.query.f || 'html';

	if( req.query.callback )
	{
		f = 'jsonp';
	}

	switch(f)
	{
		case 'html':
			util._extend(data,htmlData);
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

