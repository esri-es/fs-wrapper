"use strict";

var request     = require('request'),
	esriRest    = require('./esriRest');

/* http://resources.arcgis.com/en/help/rest/apiref/index.html?featureserver.html */

/* exported methods */

exports.root = function(req,res)
{
	var serviceName = req.params.serviceName,		
		serviceUrl = "http://localhost:3000/arcgis/rest/services/" + serviceName + "/FeatureServer";

	var htmlProperties = 
	{
    	serviceUrl: serviceUrl,
    	serviceName: serviceName,
    	serviceFullName: serviceName
	};

	var serviceProperties = 
    { 
		currentVersion: 10.1,
		serviceDescription: "Feature Service",
		hasVersionedData: false,
		supportsDisconnectedEditing: false,
		supportedQueryFormats: false,
		maxRecordCount: 1000,
		capabilities: "Query",
		description: "Feature Service Description",
		copyrightText: "(c) 2014", //Added at 10.1
		spatialReference: {
			wkid: 4326,
			latestWkid: 4326
		},
		initialExtent: {
			xmin: -180,
			xmax:  180,
			ymin:  -90,
			ymax:   90,
		spatialReference: {
			wkid: 4326,
			latestWkid: 4326
			}
		},
		fullExtent: {
			xmin: -180,
			xmax:  180,
			ymin:  -90,
			ymax:   90,
		spatialReference: {
			wkid: 4326,
			latestWkid: 4326
			}
		},
		allowGeometryUpdates: false,
		units: "esriDecimalDegrees",
		documentInfo: {
			Title: "Feature Service",
			Author: "J.A."
		},
		//the feature layers published by this service
		layers: [
		{ id: 0, name: "l0" },
		{ id: 1, name: "l1" }
		],
		//the non-spatial tables published by this service
		tables: [
		],
		enableZDefaults: false
	};
	esriRest.renderView(req,res,'featureserver.jade',serviceProperties,htmlProperties);
};

