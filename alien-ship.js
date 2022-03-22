export class AlienShip {
    constructor(shipType, totalHitPoints, pointsLostPerHit, numberOfShips, shipImage) {
        this.shipType = shipType;
        this.totalHitPoints = totalHitPoints;
        this.pointsLostPerHit = pointsLostPerHit;
        this.numberOfShips = numberOfShips;
        this.shipImage = shipImage;
    }

    getShipsArr() {
        let shipsArr = [];
        for (let i = 0; i < this.numberOfShips; i++) {
            shipsArr[i] = new AlienShip(this.shipType, this.totalHitPoints, this.pointsLostPerHit, this.numberOfShips, this.shipImage);
        }
        return shipsArr;
    }

    reduceHitPoints() {
        return this.totalHitPoints -= this.pointsLostPerHit;
    }
}