// js/flickr.js
var queryFlickr = function(args){
	var flickrEndpoint = 'http://api.flickr.com/services/rest/';
	var flickrData = args.flickrData;
	flickrData.api_key = '2c4664f688ea8460f5ac60f4a7eeefb2';
	flickrData.format = 'json';
	$.ajax({
		"url": flickrEndpoint,
		"data": flickrData,
		"dataType": 'jsonp', // tell jQuery our expected response format JSON with padding
		"jsonpCallback": "jsonFlickrApi", //execute Flickr function that contains the response JSON
		"error": args.onError,
		"success": args.onSuccess
		});
};