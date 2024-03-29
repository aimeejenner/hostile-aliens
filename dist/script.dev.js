"use strict";

var _alienShip = require("./alien-ship.js");

var shipsContainer = document.querySelector(".intro");
var fireButton = document.querySelector(".button__fire-button");
shipsContainer.innerHTML = "Click the FIRE button to hit a random alien ship. The game is over when all ships are destroyed.";
var inPlay = false;
var allShipsArr = []; // Get an array of all ship objects

var getAllShips = function getAllShips() {
  var motherShip = new _alienShip.AlienShip("Mother", 100, 9, 1, '<img class = "ships__mother" src="./images/mother-ship.png">');
  var defenceShip = new _alienShip.AlienShip("Defence", 80, 10, 5, '<img class = "ships__defence" src="./images/defence-ship.jpg">');
  var attackShip = new _alienShip.AlienShip("Attack", 45, 12, 8, '<img class ="ships__attack" src="./images/attack-ship.png">');
  allShipsArr = motherShip.getShipsArr().concat(defenceShip.getShipsArr(), attackShip.getShipsArr());
  return allShipsArr;
}; // Display all ships on screen


var displayShips = function displayShips() {
  shipsContainer.innerHTML = allShipsArr.map(function (ship) {
    return "<div>".concat(ship.shipImage, "<br>").concat(ship.totalHitPoints, "</div>");
  }).join(" ");
}; // Get initial game settings


var startGame = function startGame() {
  shipsContainer.className = "ships";
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
  var shipHit = targetShip.shipImage += "HIT!";
  setTimeout(function () {
    targetShip.shipImage = shipHit.replace("HIT!", "");
    displayShips();
  }, 300);
  targetShip.reduceHitPoints();

  if (targetShip.totalHitPoints <= 0) {
    var i = allShipsArr.indexOf(targetShip);

    if (i != -1) {
      targetShip.shipImage = '<img class = "ships__explosion" src="./images/explosion.png">';
      targetShip.totalHitPoints = "";
      setTimeout(function () {
        allShipsArr.splice(i, 1);
        displayShips();
        gameOver();
      }, 500);
    }
  }
}; // Game is over if there are no ships left or if the Mother Ship has been destroyed


var gameOver = function gameOver() {
  if (allShipsArr === false || !allShipsArr.some(function (ship) {
    return ship.shipType === "Mother";
  })) {
    shipsContainer.className = "intro";
    shipsContainer.innerHTML = "GAME OVER";
    inPlay = false;
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