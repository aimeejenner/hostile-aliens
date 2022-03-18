export class AlienShip {
    constructor(shipType, totalHitPoints, pointsLostPerHit, numberOfShips) {
        this.shipType = shipType;
        this.totalHitPoints = totalHitPoints;
        this.pointsLostPerHit = pointsLostPerHit;
        this.numberOfShips = numberOfShips;
    }

    getShipsArr() {
        let shipsArr = [];
        for (let i = 0; i < this.numberOfShips; i++) {
            shipsArr[i] = new AlienShip(this.shipType, this.totalHitPoints, this.pointsLostPerHit, this.numberOfShips);
        }
        return shipsArr;

    }
}

// const shipsContainer = document.querySelector(".ships");
// const fireButton = document.querySelector(".fire-button");
let inPlay = false;
let allShipsArr = [];


// Get an array of all ship objects
export const getAllShips = () => {
    const motherShip = new AlienShip("Mother", 100, 9, 1);
    const defenceShip = new AlienShip("Defence", 80, 10, 5);
    const attackShip = new AlienShip("Attack", 45, 12, 8);
    allShipsArr = motherShip.getShipsArr().concat(defenceShip.getShipsArr(), attackShip.getShipsArr());
    return allShipsArr;
}

// Display all ships on screen
const displayShips = () => {
    shipsContainer.innerHTML = allShipsArr.map(ship => `<div>${ship.shipType}<br>${ship.totalHitPoints}</div>`).join(" ");
}

// Get initial game settings
const startGame = () => {
    getAllShips();
    displayShips();
    inPlay = true;
    fireButton.innerHTML = "FIRE!";
}

// Select random ship and reduce total hit points by pointsLostPerHit amount
// If total hit points <= 0 ship is destroyed (removed from allShipsArr)
export const hitTarget = () => {
    let targetShip = allShipsArr[Math.floor(Math.random()*allShipsArr.length)];
    targetShip.totalHitPoints -= targetShip.pointsLostPerHit;
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