describe("Miso", function () {
	var x = 1, y = 2, z = 3;
	
	function fn1(data) {
		x *= data.a;
		y += data.b;
	}
	
	function fn2(data) {
		x += 3;
		y = data.b;
		z *= data.c;
	}
	
	function fn3(data) {
		x -= data.a;
		y *= data.b;
		z += data.c;
	}
	
	Miso.subscribe("test", fn1);
	Miso.subscribe("test", fn2);
	Miso.subscribe("test", fn3);
	
	describe("#publish('test', { a: 5, b: 2, c: 2 })", function () {
		Miso.publish("test", { a: 5, b: 2, c: 2 });
		
		it("should result in x === 3", function () {
			chai.assert.equal(x, 3);
		});
		
		it("should result in y === 4", function () {
			chai.assert.equal(y, 4);
		});
		
		it("should result in z === 8", function () {
			chai.assert.equal(z, 8);
		});
	});
});