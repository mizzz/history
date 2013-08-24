// test/test-flickr.js
var flickrJson;
describe("Flickr API should provide Vancouver photo data", function() {
		it("should be successfull via AJAX", function(done){
			/*queryFlickr({
				"flickrEndpoint": 'http://api.flickr.com/services/rest/',
				"flickrData":{
				'method': 'flickr.photos.search',
				
				'tags': 'Vancouver',
				'api_key': '2c4664f688ea8460f5ac60f4a7eeefb2',
				'format': 'json'
				},
				"onError": function(){
					debugger;
				},
				"onSuccess": function(data) {
					flickrJson = data;
					done(); // test passes
				}
			});*/
			 queryFlickr({
				"flickrData":{
					'method': 'flickr.photos.search',
					'tags': 'Seabus',
					},
					
					"onError": function(){
						debugger;
					},
					"onSuccess": function(data) {
						flickrJson = data;
						done(); // test passes
				}
			});
		});
		it("should contain enough data to build a JPG path", function(){
			//http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
			expect(flickrJson.photos.photo[0]).to.have.keys('farm','server','id','secret');
		
		});
});