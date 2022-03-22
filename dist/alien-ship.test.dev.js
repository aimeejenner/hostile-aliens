"use strict";

var _alienShip = require("./alien-ship.js");

describe("AlienShip class", function () {
  test("Should return a ship object", function () {
    var output = new _alienShip.AlienShip("Mother", 100, 9, 1, '<img src="/images/mother-ship.png">');
    expect(output).toEqual({
      shipType: 'Mother',
      totalHitPoints: 100,
      pointsLostPerHit: 9,
      numberOfShips: 1,
      image: '<img src="/images/mother-ship.png">'
    });
  });
  test("Should return the correct key/value pairs", function () {
    var output = new _alienShip.AlienShip("Other Ship", 333, 52, 11, '<img src="/images/mother-ship.png">');
    expect(output).toEqual({
      shipType: 'Other Ship',
      totalHitPoints: 333,
      pointsLostPerHit: 52,
      numberOfShips: 11,
      image: '<img src="/images/mother-ship.png">'
    });
  });
  test("Should return an array", function () {
    var ship = new _alienShip.AlienShip("Defence", 80, 10, 5, '<img src="/images/defence-ship.png">');
    var output = ship.getShipsArr();
    expect(Array.isArray(output)).toBe(true);
  });
  test("Should return the correct number of ship objects", function () {
    var ship = new _alienShip.AlienShip("Attack", 45, 12, 8, '<img src="/images/attack-ship.jpg">');
    var output = ship.getShipsArr();
    expect(output.length).toEqual(8);
  });
  test("Should reduce ship total hit points by pointsLostPerHit amount", function () {
    var ship = new _alienShip.AlienShip("Test Ship", 75, 15, 5, '<img src="/images/mother-ship.png">');
    var output = ship.reduceHitPoints();
    expect(output).toEqual(60);
  });
});