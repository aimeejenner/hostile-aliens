import { AlienShip } from "./alien-ship.js";

const shipsContainer = document.querySelector(".ships");
const fireButton = document.querySelector(".button__fire-button");
let inPlay = false;
let allShipsArr = [];


// Get an array of all ship objects
const getAllShips = () => {
    const motherShip = new AlienShip("Mother", 100, 9, 1, '<img class = "ships__mother" src="/images/mother-ship.png">');
    const defenceShip = new AlienShip("Defence", 80, 10, 5, '<img class = "ships__defence" src="/images/defence-ship.jpg">');
    const attackShip = new AlienShip("Attack", 45, 12, 8, '<img class ="ships__attack" src="/images/attack-ship.png">');
    allShipsArr = motherShip.getShipsArr().concat(defenceShip.getShipsArr(), attackShip.getShipsArr());
    return allShipsArr;
}

// Display all ships on screen
const displayShips = () => {
    shipsContainer.innerHTML = allShipsArr.map(ship => `<div>${ship.shipImage}<br>${ship.totalHitPoints}</div>`).join(" ");
}

// Get initial game settings
const startGame = () => {
    getAllShips();
    displayShips();
    inPlay = true;
    fireButton.innerHTML = "FIRE!";
}

// Select random ship as target
const selectTarget = () => {
    let targetShip = allShipsArr[Math.floor(Math.random()*allShipsArr.length)];
    return targetShip;
}

// Reduce target ship total hit points by pointsLostPerHit amount
// If total hit points <= 0 ship is destroyed (removed from allShipsArr)
const hitTarget = () => {
    let targetShip = selectTarget();
    targetShip.reduceHitPoints();
    if (targetShip.totalHitPoints <= 0) {
        let i = allShipsArr.indexOf(targetShip);
        if (i != -1) {
            allShipsArr.splice(i, 1);
            alert(`${targetShip.shipType} Ship destroyed`);
        }
    }
}

// Game is over if there are no ships left or if the Mother Ship has been destroyed
const gameOver = () => {
    if (allShipsArr === false || !allShipsArr.some(ship => ship.shipType === "Mother")) {
        shipsContainer.innerHTML = "";
        inPlay = false;
        alert("Game Over");
        fireButton.innerHTML = "Restart Game";
    }
}

// Call functions when button is clicked
fireButton.addEventListener("click", (event) => {
    if (inPlay === false) {
        startGame();
    } else {
        hitTarget();
        displayShips();
        gameOver();
    }
})