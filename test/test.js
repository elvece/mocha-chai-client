var expect = chai.expect;
// var should = chai.should();

describe("Car tests", function () {

  var car = new Car();

  describe("Constructor", function () {

    it("should have zero fuel", function () {
      expect(car.fuel).to.equal(0);
    });

  });

  describe("Driving tests", function () {

    it("should return an error when attempting to drive without fuel", function () {
      expect(car.drive(100)).to.equal('No fuel in car!');
    });

    it("should set fuel to max when fill is called without argument", function () {
      car.fill();
      expect(car.fuel).to.equal(car.max_fuel);
    });

    it("should set fuel according to driving", function () {
      var initialFuel = car.fuel;
      var milesDriven = 150;
      var expectedFuel = initialFuel - (milesDriven/car.fuel_economy);
      car.drive(milesDriven);
      expect(car.fuel).to.equal(expectedFuel);
    });

    it("should return an error when attempting to drive more than fuel left in car", function () {
      expect(car.drive(3000)).to.equal('Not enough fuel in car!');
    });

  });

});
