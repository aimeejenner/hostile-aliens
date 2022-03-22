"use strict";

var _alienShip = require("./alien-ship.js");

describe("AlienShip class", function () {
  test("Should return a ship object with the correct key/value pairs", function () {
    var output = new _alienShip.AlienShip("Mother", 100, 9, 1);
    expect(output).toEqual({
      shipType: 'Mother',
      totalHitPoints: 100,
      pointsLostPerHit: 9,
      numberOfShips: 1
    });
  });
  test("Should return an array containing the correct number of ship objects", function () {
    var ship = new _alienShip.AlienShip("Defence", 80, 10, 5);
    var output = ship.getShipsArr();
    expect(Array.isArray(output)).toBe(true);
    expect(output.length).toEqual(5);
  });
  test("Should reduce ship total hit points by pointsLostPerHit amount", function () {
    var ship = new _alienShip.AlienShip("Attack", 45, 12, 8);
    var output = ship.reduceHitPoints();
    expect(output).toEqual(33);
  });
});