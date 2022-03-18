"use strict";

var _script = require("./script.js");

describe("AlienShip class", function () {
  test("Should return a ship object with the correct key/value pairs", function () {
    var output = new _script.AlienShip("Mother", 100, 9, 1);
    expect(output).toEqual({
      shipType: 'Mother',
      totalHitPoints: 100,
      pointsLostPerHit: 9,
      numberOfShips: 1
    });
  });
  test("Should return an array containing the correct number of ship objects", function () {
    var ship = new _script.AlienShip("Defence", 80, 10, 5);
    var output = ship.getShipsArr();
    expect(Array.isArray(output)).toBe(true);
    expect(output.length).toEqual(5);
  });
});
describe("getAllShips function", function () {
  test("Should return an array containing all of the ship objects", function () {
    var output = (0, _script.getAllShips)();
    expect(Array.isArray(output)).toBe(true);
    expect(output.length).toEqual(14);
  });
});
describe("hitTarget function", function () {
  test("Should reduce total hit points by pointsLostPerHit amount", function () {
    var output = (0, _script.hitTarget)();
  });
  test("Should remove ship from array if totalHitPoints <= 0", function () {
    var output = (0, _script.hitTarget)();
  });
});
describe("gameOver function", function () {
  test("Should end game if all ships are destroyed", function () {
    var output = (0, _script.gameOver)();
  });
  test("Should end game if Mother Ship is destroyed", function () {
    var output = (0, _script.gameOver)();
  });
});