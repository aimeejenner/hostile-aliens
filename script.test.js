import { AlienShip, getAllShips, hitTarget, gameOver } from "./script.js";

describe("AlienShip class", () => {
    test("Should return a ship object with the correct key/value pairs", () => {
        const output = new AlienShip("Mother", 100, 9, 1);
        expect(output).toEqual({
            shipType: 'Mother', 
            totalHitPoints: 100, 
            pointsLostPerHit: 9, 
            numberOfShips: 1
        });
    });
    test("Should return an array containing the correct number of ship objects", () => {
        const ship = new AlienShip("Defence", 80, 10, 5);
        const output = ship.getShipsArr();
        expect(Array.isArray(output)).toBe(true);
        expect(output.length).toEqual(5);
    });
})

describe("getAllShips function", () => {
    test("Should return an array containing all of the ship objects", () => {
        const output = getAllShips();
        expect(Array.isArray(output)).toBe(true);
        expect(output.length).toEqual(14);
    });
})

describe("hitTarget function", () => {
    test("Should reduce total hit points by pointsLostPerHit amount", () => {
        const output = hitTarget();
    });
    test("Should remove ship from array if totalHitPoints <= 0", () => {
        const output = hitTarget();
    });
})

describe("gameOver function", () => {
    test("Should end game if all ships are destroyed", () => {
        const output = gameOver();
    });
    test("Should end game if Mother Ship is destroyed", () => {
        const output = gameOver();
    })
})
