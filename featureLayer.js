"use strict";

var request     = require('request'),
	esriRest    = require('./esriRest');

/* http://resources.arcgis.com/en/help/rest/apiref/index.html?fslayer.html */

/* exported methods */

exports.root = function(req,res)
{
	console.log(req.params);

	var serviceName = req.params.serviceName,
		serviceUrl = "http://localhost:3000/arcgis/rest/services/" + serviceName + "/FeatureServer";

	var htmlProperties = 
	{
		serviceUrl: serviceUrl,
		serviceName: serviceName,
		serviceFullName: serviceName,
		layerId: req.params.layerId,
		layerUrl: 'http://localhost:3000/arcgis/rest/services/' + serviceName + '/FeatureServer/0'
	};

	var layerProperties = 
    {
		displayField: 'field',
		layerType: 'Feature Layer'
    };	
	esriRest.renderView(req,res,'featurelayer.jade',layerProperties, htmlProperties);
};

