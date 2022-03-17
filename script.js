class AlienShip {
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