"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlienShip = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AlienShip =
/*#__PURE__*/
function () {
  function AlienShip(shipType, totalHitPoints, pointsLostPerHit, numberOfShips) {
    _classCallCheck(this, AlienShip);

    this.shipType = shipType;
    this.totalHitPoints = totalHitPoints;
    this.pointsLostPerHit = pointsLostPerHit;
    this.numberOfShips = numberOfShips;
  }

  _createClass(AlienShip, [{
    key: "getShipsArr",
    value: function getShipsArr() {
      var shipsArr = [];

      for (var i = 0; i < this.numberOfShips; i++) {
        shipsArr[i] = new AlienShip(this.shipType, this.totalHitPoints, this.pointsLostPerHit, this.numberOfShips);
      }

      return shipsArr;
    }
  }, {
    key: "reduceHitPoints",
    value: function reduceHitPoints() {
      return this.totalHitPoints -= this.pointsLostPerHit;
    }
  }]);

  return AlienShip;
}();

exports.AlienShip = AlienShip;