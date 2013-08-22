// map.js
var mapstraction,
point;
describe("A slippy map should be visible", function(){
		it("should contain the setCenterAndZoom method", function() {
			mapstraction = setMap();
			expect(mapstraction).to.be.ok();
			expect(mapstraction.setCenterAndZoom).to.be.ok();
			expect(mapstraction.addMarker).to.be.ok();
	});
	it("should create a point", function() {
		point = createPoint(49.2826982,-123.1153577);
		expect(point.distance).to.be.ok();
	});
	it("should center and zomm over YVR", function() {
		mapstraction.setCenterAndZoom(createPoint(49.2826982,-123.1153577), 15);
		expect(mapstraction.getCenter()).to.have.keys('lat','lon');
	});
	it("should create a pin", function(){
		var pin = createPin(point);
		expect(pin.setInfoBubble).to.be.ok();
		}); 
}); 