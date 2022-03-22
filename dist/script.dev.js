"use strict";

var _alienShip = require("./alien-ship.js");

var shipsContainer = document.querySelector(".ships");
var fireButton = document.querySelector(".button__fire-button");
var inPlay = false;
var allShipsArr = []; // Get an array of all ship objects

var getAllShips = function getAllShips() {
  var motherShip = new _alienShip.AlienShip("Mother", 100, 9, 1);
  var defenceShip = new _alienShip.AlienShip("Defence", 80, 10, 5);
  var attackShip = new _alienShip.AlienShip("Attack", 45, 12, 8);
  allShipsArr = motherShip.getShipsArr().concat(defenceShip.getShipsArr(), attackShip.getShipsArr());
  return allShipsArr;
}; // Display all ships on screen


var displayShips = function displayShips() {
  shipsContainer.innerHTML = allShipsArr.map(function (ship) {
    return "<div>".concat(ship.shipType, "<br>").concat(ship.totalHitPoints, "</div>");
  }).join(" ");
}; // Get initial game settings


var startGame = function startGame() {
  getAllShips();
  displayShips();
  inPlay = true;
  fireButton.innerHTML = "FIRE!";
}; // Select random ship as target


var selectTarget = function selectTarget() {
  var targetShip = allShipsArr[Math.floor(Math.random() * allShipsArr.length)];
  return targetShip;
}; // Reduce target ship total hit points by pointsLostPerHit amount
// If total hit points <= 0 ship is destroyed (removed from allShipsArr)


var hitTarget = function hitTarget() {
  var targetShip = selectTarget();
  targetShip.reduceHitPoints();

  if (targetShip.totalHitPoints <= 0) {
    var i = allShipsArr.indexOf(targetShip);

    if (i != -1) {
      allShipsArr.splice(i, 1);
      alert("".concat(targetShip.shipType, " Ship destroyed"));
    }
  }
}; // Game is over if there are no ships left or if the Mother Ship has been destroyed


var gameOver = function gameOver() {
  if (allShipsArr === false || !allShipsArr.some(function (ship) {
    return ship.shipType === "Mother";
  })) {
    shipsContainer.innerHTML = "";
    inPlay = false;
    alert("Game Over");
    fireButton.innerHTML = "Restart Game";
  }
}; // Call functions when button is clicked


fireButton.addEventListener("click", function (event) {
  if (inPlay === false) {
    startGame();
  } else {
    hitTarget();
    displayShips();
    gameOver();
  }
});