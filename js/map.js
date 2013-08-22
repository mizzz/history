// js/map.js
var setMap = function () {
	var div = document.createElement('div');
	div.id = 'mapContainer';
	div.style.height = '500px'; 
	document.body.appendChild(div);
	
	var mapstraction = new mxn.Mapstraction('mapContainer','googlev3'); // setup; init
	return mapstraction;
};
var createPoint = function(lat, lon) {
	if(!lat){
			throw new ReferenceError('Missing lat');
	}
	if(!lon){
		throw new ReferenceError('Missing lon');
	}
	return new mxn.LatLonPoint(lat, lon);
};
var createPin = function(point){
	if(!point){
		throw new ReferenceError('Missing point')
	}
	return new mxn.Marker(point);
};